<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\User;

class orderConfirmed extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */

    public $orders;
    public $quantity;
    public $fullPrice;
    public $userId;

    public function __construct($orders, $quantity, $fullPrice, $userId)
    {
        $this->orders = $orders;
        $this->quantity = $quantity;
        $this->fullPrice = $fullPrice;
        $this->userId = $userId;
    }
    public function getUserData($id){

        $user = User::select('Name')->where('user_id', $id)->get();
        return $user[0]->Name;
    }
    public function getEmail($id){
        $email = User::select('email')->where('user_id', $id)->get();
        return $email[0]->email;
    }
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('mail@example.com', 'Mailtrap')
            ->subject('Naročilo je bilo prejeto.')
            ->markdown('mails.orderWasRecived')
            ->with([
                'Order' => $this->orders,
                'quantity' => $this->quantity,
                'FullPrice' => $this->fullPrice,
                'UserId' => $this->getUserData($this->userId),
                'email' => $this->getEmail($this->userId)
        ]);
    }
}
