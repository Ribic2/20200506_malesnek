<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class eachOrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return[
            'item' => itemResource::collection($this->item),
            'quantity'=>$this->Quantity
        ];
    }
}
