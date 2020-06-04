

@component('mail::header')
@endcomponent

@component('mail::message')
# Potrditev računa!

Ob registraciji morate potrdidi e-naslov.

E-naslov: {{ $email }}

@component('mail::button', ['url' => "http://127.0.0.1:8000/confirmation?email=".$email."&authentication=true", 'color' => 'success'])
Potrdi
@endcomponent

@endcomponent

@component('mail::footer')
test
@endcomponent
