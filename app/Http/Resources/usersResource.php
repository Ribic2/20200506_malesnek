<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class usersResource extends ResourceCollection
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
            'userId' => $this->user_id,
            'Telephone' => $this->Telephone,
            'Country' => $this->Country,
            'Region' => $this->Region,
            'houseNumberAndStreet' => $this->houseNumberAndStreet,
            'Postcode' => $this->Postcode,
            'Email' => $this->Email,
            'isAuth' => $this->isAuth,
            'isEmployee' => $this->isEmployee,
            'name' => $this->name,
            'Surname' => $this->surname
        ];
    }
}
