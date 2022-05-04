@extends('admin.master.master')
@section('title', 'Detalhes de Categoria')
@section('content')
    <div class="main_container">
        <div class="main_container_content">
            <header class="d-flex justify-content-between align-items-center">
                <h1 class="icon-file-text-o">Detalhes da Categoria #{{ $category->id ?? ''}}</h1>
                <a href="{{ route('admin.categories.index') }}"
                   class="detail no-underline" title="Ir para Listagem">
                    Ir para Lista
                </a>
            </header>
            <div class="separator"></div>
            @if ($category)
                <form class="row g-3" id="page_single">
                    <div class="col-md-12">
                        <label for="description" class="form-label">Descrição:</label>
                        <input type="text" class="form-control" id="description" value="{{ $category->description }}">
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <label for="created_ap" class="form-label">Data de Cadastro:</label>
                        <input type="text" class="form-control" id="created_ap"
                               value="{{ $category->created_at->format('d/m/Y H:i') }}">
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <label for="created_by" class="form-label">Cadastrado Por:</label>
                        <input type="text" class="form-control" id="created_by"
                               value="{{ get_created_by($category->created_by) }}">
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <label for="updated_at" class="form-label">Última atualização:</label>
                        <input type="text" class="form-control" id="updated_at"
                               value="{{ $category->updated_at->format('d/m/Y H:i') }}">
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 mb-3">
                        <label for="updated_by" class="form-label">Atualizado Por:</label>
                        <input type="text" class="form-control" id="updated_by"
                               value="{{ !empty($category->updated_by) ? get_updated_by($category->updated_by) : get_created_by($category->created_by) }}">
                    </div>
                    <div class="col-12 text-end">
                        <a href="{{ route('admin.categories.edit', ['category' => $category->id]) }}"
                           class="btn btn-sm btn-outline-secondary icon-long-arrow-left">
                            Voltar para Edição
                        </a>
                    </div>
                </form>
            @else
                <div class="row">
                    <div class="col-12 mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                            <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                                <path
                                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                            </symbol>
                        </svg>
                        <div class="alert alert-primary d-flex align-items-center" role="alert">
                            <svg class="bi flex-shrink-0 me-2" width="30" height="30" role="img" aria-label="Info:">
                                <use xlink:href="#info-fill"/>
                            </svg>
                            <div>
                                Ooops !!! Parece que não há nada para mostrar por aqui ...
                            </div>
                        </div>
                    </div>
                </div>
            @endif

        </div>
    </div>
@endsection
