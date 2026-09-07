<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Person;

class PersonController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Person::with('user')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'first_name' => 'required',
        ]);

        $person = Person::create([
            'user_id' => auth()->id(),
            'name' => $request->name,
            'first_name' => $request->first_name,
        ]);

        return response()->json($person, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Person::with('user')->findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $person = Person::findOrFail($id);

        $request->validate([
            'name' => ['sometimes', 'string', 'max:250'],
            'first_name' => ['sometimes', 'string', 'max:250'],
        ]);

        $person->update([
            'name' => $request->name ?? $person->name,
            'first_name' => $request->first_name ?? $person->first_name,
        ]);

        return response()->json([
            'message' => 'Person updated successfully',
            'data' => $person
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $person = Person::findOrFail($id);
        $person->delete();

        return response()->json([
            'message' => 'Person deleted'
        ]);
    }
}
