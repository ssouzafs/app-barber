@extends('admin.master.master')@section('title', 'Criar Marca')
@section('content')
    <div class="main_container">
        <div class="main_container_content">
            <header class="d-flex justify-content-between align-items-center">
                <h1 class="icon-plus-circle">Criar Marca</h1>
                <a href="{{ route('admin.brands.index') }}" class="btn btn-sm btn-secondary icon-file-text-o">
                    Ver Listagem
                </a>
            </header>
            <div class="separator"></div>
            <form name="form_store_brand" class="row g-3" id="form_store_brand" method="post" action="{{ route('admin.brands.store') }}" autocomplete="Off">
                @csrf
                <div class="col-md-6 flex-wrap">
                    <label for="description" class="form-label"> <span class="text-danger">* </span>
                        Descrição:
                    </label>
                    <input type="text" class="form-control" id="description" name="description" placeholder="Informe a descrição da marca">
                    <small for="description" id="description_error" class="text-danger"></small>
                </div>
                <div class="col-md-6 flex-column">
                    <label for="category_id" class="form-label d-block"><span class="text-danger">*</span>
                        Categoria:
                    </label>

                    <select id="category_id" class="form-control" data-live-search="true" name="category_id" data-live-search-placeholder="Pesquisar ..." data-actions-box="true">
                        <option value="" selected disabled>Selecione uma Categoria</option>
                        @foreach($categories as $category)
                            <option value="{{ $category->id }}">
                               #{{ $category->id }} - {{ $category->description }}
                            </option>
                        @endforeach
                    </select>
                    <small for="category_id" id="category_id_error" class="text-danger"></small>
                </div>
                <div class="col-md-12 text-end">
                    <button type="submit" class="btn btn-sm btn-outline-dark btn_store_brand icon-check-square-o">
                        Salvar Marca
                    </button>
                </div>
            </form>

        </div>
    </div>
@endsection
@section('js')
    <script>
        $(() => {

            /** Setup de CSRF */
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });

            // Variaveis globais
            const form = document.querySelector('#form_store_brand');
            const button = $('.btn_store_brand');
            const ajaxNotifier = $(".ajax_response");

            /**
             * Formulário de cadastro de brands
             */
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                const formData = new FormData(form);
                const url = form.getAttribute('action');
                startLoad('open')

                axios.post(url, formData).then(response => {
                    if (response.data.success.type === 'success') {
                        ajaxMessage(
                            response.data.success.message,
                            response.data.success.type,
                            response.data.success.icon
                        );
                        clearMessageErrors();
                        form.reset();
                        $('select[name="category_id"]').val('').change().selectpicker('refresh');
                        $('#description').focus();
                    }

                }).catch((error) => {
                    const errorsList = error?.response?.data?.errors
                    clearMessageErrors();

                    if (errorsList) {
                        for (const [fieldName, fieldErrors] of Object.entries(errorsList)) {
                            form.querySelector(`#${fieldName}_error`).innerText = '* ' + fieldErrors?.join('\n * ');
                            // form.querySelector(`#${fieldName}`).classList.add('is-invalid');
                        }
                        ajaxMessage(
                            'Atenção! Parece que há campos obrigatórios não informados ou informados de forma incorreta.',
                            'error',
                            'icon-exclamation-circle'
                        );
                    }
                }).finally(() => {
                    startLoad('close');
                });
            });

            /**
             * Limpar alertas de erros de validação dos inputs
             */
            function clearMessageErrors() {
                // form.querySelector('#description').classList.remove('is-invalid');
                form.querySelector('#description_error').innerText = '';

                // form.querySelector('#category_id').classList.remove('is-invalid');
                form.querySelector('#category_id_error').innerText = '';
            }

            /**
             * Carregar load quando enviar a requisição
             * @param action
             */
            function startLoad(action) {
                if (action === "open") {
                    const view = `
                        <span class='spinner-grow spinner-grow-sm' role='status' aria-hidden='true'></span> Aguarde ...
                    `;
                    button.prop("disabled", true).html(view);
                }

                if (action === "close") {
                    button.prop("disabled", false).html("Salvar Marca");
                }
            }

            /**
             * Notificador de mensagem dinâmica de successo no cadastro
             */
            function ajaxMessage(text, type, icon = '', time = 6) {
                const ajaxMessage = $(`<div class='message ${type} ${icon}'>${text}</div>`);
                ajaxMessage.append("<div class='message_time'></div>");

                ajaxMessage.find(".message_time").animate({"width": "100%"}, time * 1000, function () {
                    $(this).parents(".message").fadeOut(200);
                });

                ajaxNotifier.effect("bounce");
                ajaxNotifier.html(ajaxMessage);
            }
        });
    </script>
@endsection
