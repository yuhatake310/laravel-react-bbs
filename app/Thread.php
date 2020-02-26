<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Thread extends Model
{
    protected $fillable = [
        'board_id',
        'name',
    ];

    public function messages()
    {
        return $this->hasMany('App\Message');
    }
}
