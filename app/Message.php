<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = [
        'user_id',
        'board_id',
        'thread_id',
        'content',
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
