@component('mail::message')
# Potrditev paketa!

Zivjo {{ $UserId }}!

Vaše naročilo je bilo sprejeto.
Ko paket pošljemo boste dobili sporočilo na vaš e-naslov:
# {{ $email }}

Lp, Uniq Cards

@endcomponent

@yield('mail::footer')

