<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class itemReviewResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
           'Name' => $this->Name,
           'Surname' => $this->Surname,
           'comment' => $this->comment,
           'postTime' => $this->postTime,
           'rating' => $this->rating,
        ];
    }
}
