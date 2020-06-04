<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class itemReview extends Model
{
    protected $table = 'item_review';
    protected $primaryKey = 'itemReviewId';
    public $timestamps = false;

}
