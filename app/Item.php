<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $perPage = 10;

    //Reviews relationship
    public function Review(){
        return $this->hasMany('App\itemReview', 'itemId');
    }



}
