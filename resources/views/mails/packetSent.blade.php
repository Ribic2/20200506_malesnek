@component('mail::header')
@endcomponent

@component('mail::message')
# Potrditev paketa!

Zivjo {{ $name }}!

Vaš paket je bil odposlan. Pričakujte ga v nekaj dnevih.

Lp, Uniq Cards

@endcomponent

@component('mail::footer')
test
@endcomponent
