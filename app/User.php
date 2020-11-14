<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticated;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;
use Laravel\Passport\HasApiTokens;

class User extends Authenticated
{
    use Notifiable, HasApiTokens, HasRoles;

    protected $fillable = ['name', 'surname', 'email', 'password', 'Telephone', 'isNewCustomer', 'isAuth', 'isGuest'];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function order(){
        return $this->hasOne(OrderIdStore::class);
    }

    /**
    * Override the mail body for reset password notification mail.
    */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new \App\Notifications\MailResetPasswordNotification($token));
    }


}
