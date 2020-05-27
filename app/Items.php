<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Items extends Model
{
    protected $table = 'items';
    protected $primaryKey = 'itemId';
    protected $perPage = 10;
    public $timestamps = false;

    //Reviews relationship
    public function Review(){
        return $this->hasMany('App\itemReview', 'itemId');
    }



}
