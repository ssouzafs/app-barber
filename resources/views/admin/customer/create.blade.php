@extends('admin.master.master')
@section('title', 'Criar Cliente')
@section('content')
    <div class="main_container">
        <div class="main_container_content">
            <header class="d-flex justify-content-between align-items-center">
                <h1 class="icon-user-plus">Criar Cliente</h1>
                <a href="{{ route('admin.customers.index') }}" class="btn btn-sm btn-secondary icon-file-text-o">
                    Ver Listagem
                </a>
            </header>
            <div class="separator"></div>
            <form name="form_store_customer" id="form_store_customer" method="post"
                  action="{{ route('admin.customers.store') }}"
                  autocomplete="Off" class="row g-3">
                @csrf
                <div class="col-md-3">
                    <label for="type_of_person" class="form-label"><span class="text-danger">*</span>
                        Tipo de Pessoa:
                    </label>
                    <select class="form-control" aria-label="Selecione o tipo de pessoa" name="type_of_person"
                            id="type_of_person">
                        <option value="1">Pessoa Física</option>
                        <option value="2">Pessoa Jurídica</option>
                    </select>
                    <small for="type_of_person" id="type_of_person_error" class="text-danger"></small>
                </div>
                <div class="col-md-9">
                    <label for="name" class="form-label"><span class="text-danger">*</span>
                        Cliente ou Razão Social:
                    </label>
                    <input type="text" class="form-control" id="name" name="name" placeholder="Informe o cliente ou razão social">
                    <small for="name" id="name_error" class="text-danger"></small>
                </div>
                <div class="col-md-6 display-toggle">
                    <label for="state_registration" class="form-label"><span class="text-danger">*</span>
                        Inscrição Estadual:
                    </label>
                    <input type="text" class="form-control" id="state_registration" name="state_registration"
                           placeholder="Informe a inscrição estadual">
                    <small for="state_registration" id="state_registration_error" class="text-danger"></small>
                </div>
                <div class="col-md-6 display-toggle">
                    <label for="corporate_name" class="form-label">
                        Nome Fantasia:
                    </label>
                    <input type="text" class="form-control" id="corporate_name" name="corporate_name"
                           placeholder="Informe o nome fantasia">
                    {{--                    <small for="corporate_name" id="corporate_name_error" class="text-danger"></small>--}}
                </div>
                <div class="col-md-6">
                    <label for="cpfOrCnpj" class="form-label"><span class="text-danger">*</span>
                        CPF ou CNPJ:
                    </label>
                    <input type="text" class="form-control" id="cpfOrCnpj" name="cpfOrCnpj"
                           placeholder="Informe o CPF ou CNPJ">
                    <small for="cpfOrCnpj" id="cpfOrCnpj_error" class="text-danger"></small>
                </div>
                <div class="col-md-6">
                    <label for="email" class="form-label"><span class="text-danger">*</span>
                        E-mail:
                    </label>
                    <input type="email" class="form-control" id="email" name="email"
                           placeholder="Informe um e-email válido">
                    <small for="email" id="email_error" class="text-danger"></small>
                </div>
                <div class="col-md-6">
                    <label for="cell" class="form-label"><span class="text-danger">*</span>
                        Celular:
                    </label>
                    <input type="text" class="form-control" id="cell" name="cell"
                           placeholder="(99) 99999-9999">
                    <small for="cell" id="cell_error" class="text-danger"></small>
                </div>
                <div class="col-md-6">
                    <label for="phone" class="form-label">
                        Telefone Residencial:
                    </label>
                    <input type="text" class="form-control" id="phone" name="phone"
                           placeholder="(99) 9999-9999">
                </div>
                <div class="col-md-3">
                    <label for="zipcode" class="form-label"><span class="text-danger">*</span>
                        CEP:
                    </label>
                    <input type="text" class="form-control" id="zipcode" name="zipcode" placeholder="99999-999">
                    <small for="zipcode" id="zipcode_error" class="text-danger"></small>
                </div>
                <div class="col-md-7">
                    <label for="city" class="form-label"><span class="text-danger">*</span>
                        Cidade:
                    </label>
                    <input type="text" class="form-control" id="city" name="city">
                    <small for="city" id="city_error" class="text-danger"></small>
                </div>
                <div class="col-md-2">
                    <label for="state" class="form-label"><span class="text-danger">*</span>
                        UF:
                    </label>
                    <input type="text" class="form-control" id="uf" name="uf">
                    <small for="uf" id="uf_error" class="text-danger"></small>
                </div>

                <div class="col-md-6">
                    <label for="address" class="form-label"><span class="text-danger">*</span>
                        Logradouro:
                    </label>
                    <input type="text" class="form-control" id="address" name="address">
                    <small for="address" id="address_error" class="text-danger"></small>
                </div>
                <div class="col-md-6">
                    <label for="neighborhood" class="form-label"><span class="text-danger">*</span>
                        Bairro:
                    </label>
                    <input type="text" class="form-control" id="neighborhood" name="neighborhood">
                    <small for="neighborhood" id="neighborhood_error" class="text-danger"></small>
                </div>
                <div class="col-md-3">
                    <label for="number" class="form-label"><span class="text-danger">*</span>
                        Número:
                    </label>
                    <input type="text" class="form-control" id="number" name="number">
                    <small for="number" id="number_error" class="text-danger"></small>
                </div>
                <div class="col-md-9">
                    <label for="complement" class="form-label">Complemento:</label>
                    <input type="text" class="form-control" id="complement" name="complement">
                </div>

                <div class="d-flex justify-content-end">
                    <button type="submit" class="btn btn-sm btn-outline-dark btn_store_customer icon-check-square-o">
                        Salvar Cliente
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
                const form = document.querySelector('#form_store_customer');
                const button = $('.btn_store_customer');
                const ajaxNotifier = $(".ajax_response");
                const cpfOrCnpj = document.querySelector('#cpfOrCnpj');
                const displayToggle = $('.display-toggle');

                setMask("mask-cpf", cpfOrCnpj);
                displayToggle.addClass('inactive');

                /**
                 * Insere um máscara no campo
                 * @param mask
                 * @param element
                 */
                function setMask(mask, element) {
                    removeClassMask(element);
                    const sufix = mask.split('-', 2)[1];
                    if (sufix === "cpf") {
                        element.classList.add(mask);
                        $(`.${mask}`).mask('000.000.000-00', {reverse: true});
                    }
                    if (sufix === "cnpj") {
                        element.classList.add(mask);
                        $(`.${mask}`).mask('00.000.000/0000-00', {reverse: true});
                    }
                }

                /**
                 * Remover classes responsaveis por gerar a máscara no campo
                 * @param element
                 */
                function removeClassMask(element) {
                    for (let className of [...element.classList]) {
                        if (className.startsWith('mask-')) {
                            element.classList.remove(className)
                        }
                    }
                }

                $('select[name="type_of_person"]').change(function () {
                    const value = $(this).val();

                    if (value === "1") {
                        setMask("mask-cpf", cpfOrCnpj);

                        displayToggle.addClass('inactive');
                    }

                    if (value === "2") {
                        setMask("mask-cnpj", cpfOrCnpj);
                        displayToggle.removeClass('inactive');
                    }
                    cpfOrCnpj.value = ''
                });

                /**
                 * Formulário de cadastro de customers
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
                    form.querySelector('#type_of_person_error').innerText = '';
                    form.querySelector('#name_error').innerText = '';
                    form.querySelector('#state_registration_error').innerText = '';
                    form.querySelector('#cpfOrCnpj_error').innerText = '';
                    form.querySelector('#email_error').innerText = '';
                    form.querySelector('#cell_error').innerText = '';
                    form.querySelector('#zipcode_error').innerText = '';
                    form.querySelector('#city_error').innerText = '';
                    form.querySelector('#uf_error').innerText = '';
                    form.querySelector('#address_error').innerText = '';
                    form.querySelector('#neighborhood_error').innerText = '';
                    form.querySelector('#number_error').innerText = '';
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
                        button.prop("disabled", false).html("Salvar Cliente");
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
            }
        )
        ;
    </script>
@endsection
