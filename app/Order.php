<?php

namespace App;

use App\Items;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = "orders";
    public $timestamps = false;
    protected $primaryKey = "idOrders";


    public function item(){
        return $this->hasMany(Items::class, 'itemId', 'itemId');
    }

}
