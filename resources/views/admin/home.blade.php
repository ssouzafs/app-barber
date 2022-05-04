@extends('admin.master.master')
@section('title', 'Home')
@section('content')
    <div class="main_container">
        <div class="dashboard_content">
            <section class="dashboard_cards">
                <article>
                    <h2 class="icon-users">Clientes</h2>
                    <hr>
                    <p class="icon-check-circle-o mb-2">Ativos: <span>2</span></p>
                    <p class="icon-file-o">Total: <span>4</span></p>
                </article>

                <article>
                    <h2 class="icon-calendar-plus-o">Cortes Agendados</h2>
                    <hr>
                    <p class="icon-check-square-o mb-2">Realizados: <span>10</span></p>
                    <p class="icon-exclamation-circle">Pendentes: <span>5</span></p>
                </article>

                <article>
                    <h2 class="icon-usd">Vendas</h2>
                    <hr>
                    <p class="icon-calendar-o mb-2">Hoje: <span>3</span></p>
                    <p class="icon-calendar-check-o">Este Mês: <span>10</span></p>
                </article>
                <article>
                    <h2 class="icon-usd">Vendas</h2>
                    <hr>
                    <p class="icon-calendar-o mb-2">Hoje: <span>3</span></p>
                    <p class="icon-calendar-check-o">Este Mês: <span>10</span></p>
                </article>
            </section>
        </div>
    </div>
@endsection
