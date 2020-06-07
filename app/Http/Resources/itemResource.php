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
            'itemId' => $this->itemId,
            'itemName' => $this->itemName,
            'itemDescription' => $this->itemDescription,
            'itemPrice' => $this->when($this->isOnSale == 1, $this->discountItemPrice, $this->itemPrice),
            'dimensions' => $this->dimensions,
            'colors' => $this->colors,
            'Quantity' => $this->availableQuantity,
            'OverAllrating' => $this->OverAllrating,
            'dir' => $this->itemImgDir,
            'primaryImg' => $this->itemImg,
            'isOnSale' => $this->isOnSale,
            'Discount' => $this->discount,
        ];
    }
}
