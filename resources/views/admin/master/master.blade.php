<!doctype html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="stylesheet" href="{{ mix('adm/assets/css/bootstrap.css') }}">
    <link rel="stylesheet" href="{{ mix('adm/assets/css/reset.css') }}">
    <link rel="stylesheet" href="{{ mix('adm/assets/css/libs.css') }}">
    <link rel="stylesheet" href="{{ mix('adm/assets/css/app.css') }}">

    <title>
        Stock Barber - @yield('title')
    </title>
</head>
<body>
<div class="ajax_response"></div>
<header class="main_header">
    <div class="header_content">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-4 d-flex flex-wrap">
            <div class="logo mb-3 mb-lg-0">
                <a class="navbar-brand py-5" href="#"><span>STOCK</span>BARBER</a>
            </div>
            <button class="navbar-toggler mt-0" id="nav_toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto  mb-lg-0 ms-auto d-flex gap-1 gap-lg-4">
                    <li class="nav-item">
                        <a class="nav-link icon-tachometer" aria-current="page" href="{{ route('admin.home') }}">Dashboard</a>
                    </li>
                    <li class="nav-item dropdown ">
                        <a class="nav-link dropdown-toggle icon-usd icon-notext" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Movimentos </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <a class="dropdown-item entry" href="#">
                                    <img src="{{ asset('adm/assets/images/expense.svg') }}" alt="Entradas" width="18px">
                                    ENTRADAS
                                </a>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>

                            <li>
                                <a class="dropdown-item icon-search" href="#">Últimas Entradas</a>
                            </li>
                            <li>
                                <a class="dropdown-item icon-cart-plus" href="#">Criar nova</a>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li>
                                <a class="dropdown-item entry" href="#">
                                    <img src="{{ asset('adm/assets/images/income.svg') }}" alt="Vendas" width="18px">
                                    VENDAS
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Últimas Vendas</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Criar nova</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle icon-shopping-cart" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Produtos </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <a class="dropdown-item icon-filter" href="{{ route('admin.products.index') }}">Filtrar
                                    Produtos</a>
                            </li>
                            <li>
                                <a class="dropdown-item icon-plus-circle" href="{{ route('admin.products.create') }}">Criar
                                    Novo</a>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li>
                                <a class="dropdown-item entry icon-bars" href="{{ route('admin.brands.index') }}">
                                    MARCAS </a>
                            </li>

                            <li>
                                <a class="dropdown-item icon-search" href="{{ route('admin.brands.index') }}">Ver
                                    Marcas</a>
                            </li>
                            <li>
                                <a class="dropdown-item icon-plus-circle" href="{{ route('admin.brands.create') }}">Criar
                                    nova</a>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li>
                                <a class="dropdown-item entry icon-bars" href="{{ route('admin.categories.index') }}">
                                    CATEGORIAS </a>
                            </li>
                            <li>
                                <a class="dropdown-item icon-search" href="{{ route('admin.categories.index') }}">Ver
                                    Categorias</a>
                            </li>
                            <li>
                                <a class="dropdown-item icon-plus-circle" href="{{ route('admin.categories.create') }}">Criar
                                    nova</a>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li>
                                <a class="dropdown-item text-danger icon-arrow-circle-sail down" href="#">Listar Baixo
                                    Estoque</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle icon-users" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Pessoas </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <a class="dropdown-item icon-filter" href="#">CLIENTES</a>
                            </li>
                            <li>
                                <a class="dropdown-item icon-user-plus" href="{{ route('admin.customers.create') }}">Criar novo</a>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li>
                                <a class="dropdown-item icon-filter" href="#">FONECEDORES</a>
                            </li>
                            <li>
                                <a class="dropdown-item icon-user-plus" href="">Criar novo</a>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle icon-user" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Equipe </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <a class="dropdown-item icon-filter" href="{{ route('admin.admins.index') }}"> Filtrar
                                    Administradores</a>
                            </li>
                            <li>
                                <a class="dropdown-item icon-user-plus" href="{{ route('admin.admins.create') }}">Criar
                                    novo</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="menu_item_exit m-lg-3 p-0">
                    <li class="nav-item dropdown align-items-center">
                        <a class="nav-link dropdown-toggle text-white px-0 icon-user" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {{ Auth::guard('admin')->user()->firstName() }}
                        </a>
                        <ul class="dropdown-menu w-25" aria-labelledby="navbarDropdown">
                            <li>
                                <a class="dropdown-item" href="{{ route('admin.logout') }}">Sair</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</header>
@yield('content')

<!-- Modal -->
<div class="modal fade" id="modal_delete" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title text-secondary icon-trash" id="exampleModalLabel">
                    Confirmação de Operação</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Deseja realmente excluir o registro de ID:
                <span class="show-content text-danger"></span>?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">
                    Cancelar
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm btn_confirmed">
                    Sim, Excluir!
                </button>
            </div>
        </div>
    </div>
</div>

<script src="{{ mix('js/app.js') }}"></script>
<script src="{{ mix('adm/assets/js/jquery.js') }}"></script>
<script src="{{ mix('adm/assets/js/bootstrap.js') }}"></script>
<script src="{{ mix('adm/assets/js/bootstrap-select.js') }}"></script>
<script src="{{ mix('adm/assets/js/libs.js') }}"></script>
<script src="{{ mix('adm/assets/js/scripts.js') }}"></script>

@hasSection('js')
    @yield('js')
@endif
</body>
</html>
