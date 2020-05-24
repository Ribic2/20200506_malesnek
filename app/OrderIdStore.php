<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderIdStore extends Model
{
    protected $table = 'orderIds';
    protected $primaryKey = 'OrderId';
    protected $keyType = 'string';

    public function Orders(){
        return $this->hasMany(Order::class, 'orderId', 'OrderId');
    }

    public function user(){
        return $this->belongsTo(OrderIdStore::class, 'user_id', 'user_id');
    }
}
