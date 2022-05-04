@extends('admin.master.master')@section('title', 'Criar Admin')
@section('content')
    <div class="main_container">
        <div class="main_container_content">
            <header class="d-flex justify-content-between align-items-center">
                <h1 class="icon-user-plus">Criar Administrador</h1>
                <a href="{{ route('admin.admins.index') }}" class="btn btn-sm btn-secondary icon-file-text-o"> Ver
                    Listagem </a>
            </header>
            <div class="separator"></div>
            <form name="form_store_admin" id="form_store_admin" method="post" action="{{ route('admin.admins.store') }}"
                  autocomplete="Off" class="row g-3">
                @csrf
                <div class="col-md-12">
                    <label for="name" class="form-label"><span class="text-danger">*</span>
                        Nome Completo:
                    </label>
                    <input type="text" class="form-control" id="name" name="name" placeholder="Informe o nome completo">
                    <small for="name" id="name_error" class="text-danger"></small>
                </div>
                <div class="col-md-12">
                    <label for="email" class="form-label"><span class="text-danger">*</span>
                        E-mail:
                    </label>
                    <input type="email" class="form-control" id="email" name="email"
                           placeholder="Informe um e-email válido">
                    <small for="email" id="email_error" class="text-danger"></small>
                </div>
                <div class="col-md-6">
                    <label for="password" class="form-label"><span class="text-danger">*</span>
                        Senha:
                    </label>
                    <input type="password" class="form-control" id="password" name="password"
                           placeholder="Mínimo 4 caractéres">
                    <small for="password" id="password_error" class="text-danger"></small>
                </div>
                <div class="col-md-6">
                    <label for="confirm_password" class="form-label"><span class="text-danger">*</span>
                        Confirme Senha:
                    </label>
                    <input type="password" class="form-control" id="password_confirmation" name="password_confirmation"
                           placeholder="Mínimo 4 caractéres">
                    <small for="password_confirmation" id="password_confirmation_error" class="text-danger"></small>
                </div>
                <div class="d-flex justify-content-end">
                    <button type="submit" class="btn btn-sm btn-outline-dark btn_store_admin icon-check-square-o">
                        Salvar Administrador
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
            const form = document.querySelector('#form_store_admin');
            const button = $('.btn_store_admin');
            const ajaxNotifier = $(".ajax_response");

            /**
             * Formulário de cadastro de admins
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
                        $('#name').focus();
                    }

                }).catch((error) => {
                    const errorsList = error?.response?.data?.errors
                    clearMessageErrors();

                    if (errorsList) {
                        for (const [fieldName, fieldErrors] of Object.entries(errorsList)) {
                            form.querySelector(`#${fieldName}_error`).innerText = '* ' + fieldErrors?.join('\n * ');
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
                form.querySelector('#name_error').innerText = '';
                form.querySelector('#email_error').innerText = '';
                form.querySelector('#password_error').innerText = '';
                form.querySelector('#password_confirmation_error').innerText = '';
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
