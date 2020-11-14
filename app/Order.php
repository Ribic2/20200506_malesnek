<?php

namespace App;

use App\Item;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public function item(){
        return $this->hasMany(Item::class, 'itemId', 'itemId');
    }

}
