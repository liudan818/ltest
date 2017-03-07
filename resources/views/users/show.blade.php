@extends('layouts.default')
@section('title', $user->name)
@section('content')
<div class="jumbotron">
 <h1>{{ $user->name }} - {{ $user->email }}</h>
</div>
@stop
