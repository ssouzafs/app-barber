@extends('admin.master.master')
@section('title', 'Editar Categoria')
@section('content')
    <div class="main_container">
        <div class="main_container_content">
            <header class="d-flex justify-content-between align-items-center">
                <h1 class="icon-pencil-square">Editar Categoria</h1>
                <a href="{{ route('admin.categories.index') }}"
                   class="detail no-underline" title="Ir para Listagem">
                    Voltar para Lista
                </a>
            </header>
            <div class="separator"></div>
            <form name="form_update_category" id="form_update_category" method="post"
                  action="{{ route('admin.categories.update', ['category' => $category->id]) }}" autocomplete="Off">
                @csrf
                @method('PUT')
                <div class="mb-3">
                    <label for="description" class="form-label"> <span class="text-danger">* </span>
                        Descrição:
                    </label>
                    <input type="text" class="form-control" id="description" name="description" value="{{ $category->description }}"
                           placeholder="Informe o nome da categoria">
                    <small for="description" id="description_error" class="text-danger"></small>
                </div>
                <div class="d-flex justify-content-end gap-3">
                    <a href="{{ route('admin.categories.show', ['category' => $category->id]) }}"
                       class="btn btn-sm btn-outline-secondary icon-exclamation-circle" title="Mais detalhes desta Categoria">
                        Ver Detalhes
                    </a>

                    <button type="submit" class="btn btn-sm btn-info icon-pencil-square-o">
                        Salvar Categoria
                    </button>
                </div>
            </form>
        </div>
    </div>
@endsection
@section('js')
    <script>
        $(() => {
            // Variaveis globais
            const formUpdate = document.querySelector('#form_update_category');
            const button = $('.btn_update_category');
            const ajaxNotifier = $(".ajax_response");

            /**
             * Formulário de cadastro de categories
             */
            formUpdate.addEventListener('submit', (event) => {
                event.preventDefault();
                const formData = new FormData(formUpdate);
                const url = formUpdate.getAttribute('action');
                startLoad('open')

                axios.post(url, formData).then(response => {
                    if (response.data.success.type === 'success') {
                        ajaxMessage(
                            response.data.success.message,
                            response.data.success.type,
                            response.data.success.icon
                        );
                        clearMessageErrors();
                    }

                }).catch((error) => {
                    const errorsList = error?.response?.data?.errors
                    clearMessageErrors();

                    if (errorsList) {
                        for (const [fieldName, fieldErrors] of Object.entries(errorsList)) {
                            formUpdate.querySelector(`#${fieldName}_error`).innerText = '* ' + fieldErrors?.join('\n * ');
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
                formUpdate.querySelector('#description_error').innerText = '';
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
                    button.prop("disabled", false).html("Salvar Categoria");
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
