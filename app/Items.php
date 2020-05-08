<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Items extends Model
{
    protected $table = 'items';
    protected $primaryKey = 'itemId';
    protected $perPage = 10;

    public function Review(){
        return $this->hasMany('App\itemReview', 'itemId');
    }
}