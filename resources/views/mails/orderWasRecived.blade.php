
@component('mail::header')
@endcomponent

@component('mail::message')
# Potrditev paketa!

Zivjo {{ $UserId }}!

Vaše naročilo je bilo sprejeto in bo hmalu poslano naprej.
Ko paket pošljemo boste dobili sporočilo na vaš e-naslov:
# {{ $email }}

Lp, Uniq Cards

@endcomponent

@component('mail::footer')
test
@endcomponent
