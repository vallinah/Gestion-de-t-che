<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    protected $table = 'person';
    protected $fillable = [
        'user_id',
        'name',
        'first_name',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
