<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Person;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws ValidationException
     */
    public function store(Request $request)
    {
        logger('🚀 REGISTER START');

        try {

            // logger('📩 REQUEST DATA', $request->all());

            $request->validate([
                'name' => ['required', 'string', 'max:250'],
                'first_name' => ['required', 'string', 'max:250'],
                'email' => ['required', 'string', 'email', 'max:250', 'unique:users'],
                'password' => ['required', 'confirmed', Rules\Password::defaults()],
            ]);

            // logger('✅ VALIDATION OK');

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            // logger('👤 USER CREATED', [
            //     'user_id' => $user->id,
            //     'email' => $user->email
            // ]);

            try {

                $person = Person::create([
                    'user_id' => $user->id,
                    'name' => $request->name,
                    'first_name' => $request->first_name,
                ]);

                // event(new Registered($user));

                // logger('🧍 PERSON CREATED', [
                //     'person_id' => $person->id ?? null,
                //     'user_id' => $user->id
                // ]);

            } catch (\Exception $e) {

                logger('❌ PERSON ERROR');
                logger($e->getMessage());
                logger($e->getTraceAsString());
            }

            // $token = $user->createToken('api-token')->plainTextToken;

            // logger('🔐 TOKEN GENERATED');

            event(new Registered($user));

            return response()->json([
                'message' => 'Inscription réussie. Veuillez vérifier votre adresse e-mail.',
                'user' => $user,
                'person' => $user->person,
            ]);

        } catch (\Exception $e) {

            logger('💥 REGISTER FAILED');
            logger($e->getMessage());
            logger($e->getTraceAsString());

            return response()->json([
                'error' => 'Register failed',
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
