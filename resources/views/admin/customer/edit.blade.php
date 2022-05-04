@extends('admin.master.master')@section('title', 'Editar Administrador')
@section('content')
    <div class="main_container">
        <div class="main_container_content">
            <header class="d-flex justify-content-between align-items-center">
                <h1 class="icon-pencil-square">Editar Administrador #{{ $admin->id }}</h1>
                <a href="{{ route('admin.admins.index') }}" class="detail no-underline" title="Ir para Listagem">
                    Voltar para Lista
                </a>
            </header>
            <div class="separator"></div>
            <form name="form_update_admin" id="form_update_admin" method="post" action="{{ route('admin.admins.update', ['admin' => $admin->id]) }}" autocomplete="Off" class="row g-3">
                @csrf
                @method('PUT')
                <div class="col-md-12">
                    <label for="name" class="form-label"><span class="text-danger">*</span>
                        Nome Completo:
                    </label>
                    <input type="text" class="form-control" id="name" name="name" placeholder="informe o nome completo" value="{{ $admin->name }}">
                    <small for="name" id="name_error" class="text-danger"></small>
                </div>
                <div class="col-md-12">
                    <label for="email" class="form-label"><span class="text-danger">*</span>
                        E-mail:
                    </label>
                    <input type="email" class="form-control" id="email" name="email" placeholder="informe um e-email válido" value="{{ $admin->email }}">
                    <small for="email" id="email_error" class="text-danger"></small>
                </div>
                <div class="col-md-6">
                    <label for="password" class="form-label">Senha:</label>
                    <input type="password" class="form-control" id="password" name="password" placeholder="Mínimo 4 caractéres"
                           title="Se informar a senha a mesma passará a ser sua senha atual.">
                    <small for="password" id="password_error" class="text-danger"></small>
                </div>
                <div class="col-md-6">
                    <label for="confirm_password" class="form-label">Confirmar Senha:</label>
                    <input type="password" class="form-control" id="password_confirmation" name="password_confirmation" placeholder="Mínimo 4 caractéres">
                    <small for="password_confirmation" id="password_confirmation_error" class="text-danger"></small>
                </div>

                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="active" name="active" {{ $admin->isActive() ? 'checked' : '' }}>
                        <label class="form-check-label" for="active">
                            Ativo
                        </label>
                    </div>
                    <div class="d-flex justify-content-between mt-3">
                        <span class="text-primary icon-exclamation-circle px-1 small">Aviso! Senha só deve ser informada caso deseje trocá-la !</span>
                        <div class="mx-2">
                            <a href="{{ route('admin.admins.show', ['admin' => $admin->id]) }}" class="btn btn-sm btn-outline-secondary icon-exclamation-circle m-lg-1 mb-2" title="Mais detalhes deste Administrador">
                                Ver Detalhes
                            </a>
                            <button type="submit" class="btn btn-sm btn-info btn_update_admin icon-check-square-o">
                                Salvar Administrador
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection
@section('js')
    <script>
        $(() => {
            // Variaveis globais
            const formUpdate = document.querySelector('#form_update_admin');
            const button = $('.btn_update_admin');
            const ajaxNotifier = $(".ajax_response");

            /**
             * Formulário de edição de administradores
             */
            formUpdate.addEventListener('submit', (event) => {
                event.preventDefault();
                const data = new FormData(formUpdate);
                const url = formUpdate.getAttribute('action');
                startLoad('open')

                axios.post(url, data).then(response => {
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
                formUpdate.querySelector('#name_error').innerText = '';

                formUpdate.querySelector('#email_error').innerText = '';

                formUpdate.querySelector('#password_error').innerText = '';

                formUpdate.querySelector('#password_confirmation_error').innerText = '';
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
                    button.prop("disabled", false).html("Salvar Administrador");
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
