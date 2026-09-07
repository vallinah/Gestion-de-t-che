<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Api\PersonController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\VerifyEmailController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [RegisteredUserController::class, 'store']);

Route::post('/login', [AuthenticatedSessionController::class, 'store']);

// Route::middleware('auth:sanctum')->get('/me', function (Request $request) {
//     return $request->user()->load('person');
// });

Route::middleware('auth:sanctum')->get('/me', function (Request $request) {
    return [
        'user' => $request->user(),
        'token' => $request->bearerToken()
    ];
});

Route::middleware('auth:sanctum')->post(
    '/logout',
    [AuthenticatedSessionController::class, 'destroy']
);

Route::post(
    '/email/resend-verification',
    [VerifyEmailController::class, 'resend']
);

Route::get('/me-test', function () {
    return response()->json(['ok' => true]);
});

Route::post('/forgot-password', [PasswordResetLinkController::class, 'store']);
Route::post('/reset-password', [NewPasswordController::class, 'store']);

Route::get('/email/verify/{id}/{hash}', [VerifyEmailController::class, '__invoke'])
    ->middleware(['signed', 'throttle:6,1'])
    ->name('verification.verify.api');

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/persons', [PersonController::class, 'index']);
    Route::post('/persons', [PersonController::class, 'store']);
    Route::get('/persons/{id}', [PersonController::class, 'show']);
    Route::put('/persons/{id}', [PersonController::class, 'update']);
    Route::delete('/persons/{id}', [PersonController::class, 'destroy']);
});