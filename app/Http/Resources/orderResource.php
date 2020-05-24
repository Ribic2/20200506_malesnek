<?php

namespace App\Http\Resources;

use App\User;
use Illuminate\Http\Resources\Json\JsonResource;
use Laravel\Passport\Bridge\UserRepository;
use League\OAuth2\Server\Entities\UserEntityInterface;

class orderResource extends JsonResource
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
            "OrderId" => $this->OrderId,
            "Items"=>eachOrderResource::collection($this->Orders),
            "Created_at" => $this->ordered_time,
            "DeliveryStatus" => $this->deliveryStatus,
            "User"=>User::where('user_id', $this->user_id,)->select('Name', 'Surname', 'Telephone', 'email', 'Country', 'Region', 'houseNumberAndStreet', 'Postcode')->get()
        ];
    }
}
