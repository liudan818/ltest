@extends('layouts.default')
@section('title','home页面')
@section('content')
<div class="jumbotron">
  <h1>Hello!!!home页面</h1>
  <a class = "btn btn-lg btn-success" href = "{{route('signup')}}" role = "button">现在注册</a>
  </div>
@stop
