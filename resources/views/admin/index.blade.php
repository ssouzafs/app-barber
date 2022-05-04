<!doctype html>
<html lang="pt_br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="stylesheet" href="{{ mix('adm/assets/css/bootstrap.css') }}">
    <link rel="stylesheet" href="{{ mix('adm/assets/css/reset.css') }}">
    <link rel="stylesheet" href="{{ mix('adm/assets/css/login.css') }}">

    <title>Login</title>
</head>
<body>
<div class="ajax_response"></div>
<div class="container_login">
    <div class="login_content">
        <header class="text-center">
            <h1 class="login_logo"><span>STOCK</span>BARBER</h1>
            <h2>Olá, faça seu login abaixo!</h2>
        </header>
        <form action="{{ route('admin.login.do') }}" autocomplete="off"  method="post" name="login">
            @csrf
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="email" name="email" value="admin@stockbarber.com.br" placeholder="Informe seu email">
                <label for="email" class="icon-user">Email:</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="password" name="password" placeholder="Informe sua senha">
                <label for="password" class="icon-lock">Senha:</label>
            </div>
            <div class="d-grid pt-3">
                <button class="btn btn-dark p-3 btn_login icon-sign-in" type="submit">ENTRAR</button>
            </div>
        </form>
    </div>
</div>

<script src="{{ mix('js/app.js') }}"></script>
<script src="{{ mix('adm/assets/js/jquery.js') }}"></script>
<script src="{{ mix('adm/assets/js/bootstrap.js') }}"></script>
<script src="{{ mix('adm/assets/js/login.js') }}"></script>
</body>
</html>
