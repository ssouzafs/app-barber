@extends('admin.master.master')
@section('title', 'Listagem de Marcas')
@section('content')
    <div class="main_container">
        <div class="main_container_content">
            <header class="d-flex justify-content-between align-items-center">
                <h1 class="icon-file-text">Lista de Marcas</h1>
                <a href="{{ route('admin.brands.create') }}" class="btn btn-sm btn-secondary icon-plus-circle">
                    Criar Marca
                </a>
            </header>
            <div class="separator"></div>

            <table id="datatable" class="table table-hover" style="width: 100%;">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Marca</th>
                    <th>Data de Cadastro</th>
                    <th>Última Atualização</th>
                    <th class="text-end">Açoes</th>
                </tr>
                </thead>
            </table>
        </div>
    </div>
@endsection
@section('js')
    <script src="{{ asset('adm/assets/js/datatables/js/custom-datatables.js') }}"></script>
    <script>
        // Setup de parametrização do datatable
        $(document).ready( () => {
            ManagerTable.setName("#datatable");
            ManagerTable.setColumns([
                'id',
                'description',
                'created_at',
                'updated_at'
            ]);
            ManagerTable.setButton();
            ManagerTable.setRoute("{{ route('admin.brands.data.load') }}");
            ManagerTable.render();
        });
    </script>
@endsection