<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class itemResource extends JsonResource
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
            'itemName' => $this->itemName,
            'itemDescription' => $this->itemDescription,
            'itemPrice' => $this->itemPrice,
            'dimensions' => $this->dimensions,
            'colors' => $this->colors,
            'OverAllrating' => $this->OverAllrating
        ];
    }
}