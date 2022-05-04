@extends('admin.master.master')@section('title', 'Criar Produto')
@section('content')
    <div class="main_container">
        <div class="main_container_content">
            <header class="d-flex justify-content-between align-items-center">
                <h1 class="icon-plus-circle">Criar Produto</h1>
                <a href="{{ route('admin.products.index') }}" class="btn btn-sm btn-secondary icon-file-text-o"> Ver
                    Listagem </a>
            </header>
            <div class="separator"></div>
            <form name="form_store_product" id="form_store_product" method="post"
                  action="{{ route('admin.products.store') }}"
                  autocomplete="Off" class="row g-3">
                @csrf
                <div class="col-md-4">
                    <label for="sku" class="form-label"><span class="text-danger">*</span>
                        Cód. SKU:
                    </label>
                    <input type="text" class="form-control" id="sku" name="sku" placeholder="Informe o cód SKU">
                    <small for="sku" id="sku_error" class="text-danger"></small>
                </div>
                <div class="col-md-8">
                    <label for="description" class="form-label"><span class="text-danger">*</span>
                        Descrição:
                    </label>
                    <input type="text" class="form-control" id="description" name="description"
                           placeholder="Informe a descrição do produto">
                    <small for="description" id="description_error" class="text-danger"></small>
                </div>
                <div class="col-md-6 d-flex flex-wrap">
                    <label for="category_id" class="form-label d-block"><span class="text-danger">*</span>
                        Categoria:
                    </label>
                    <select id="category_id" class="form-control" data-live-search="true" name="category_id"
                            data-action="{{ route('admin.products.get.brands') }}" data-live-search-placeholder="Pesquisar ..." data-actions-box="true">
                        <option value="" selected disabled>Selecione uma Categoria</option>
                        @foreach($categories as $category)
                            <option value="{{ $category->id }}">
                                #{{ $category->id }} - {{ $category->description }}
                            </option>
                        @endforeach
                    </select>
                    <small for="category_id" id="category_id_error" class="text-danger"></small>
                </div>
                <div class="col-md-6 d-flex flex-wrap">
                    <label for="brand_id" class="form-label d-block"><span class="text-danger">*</span>
                        Marca:
                    </label>

                    <select id="brand_id" class="form-control" name="brand_id" data-live-search="true" data-live-search-placeholder="Pesquisar ..." data-actions-box="true">
                        <option value="" selected disabled>Selecione uma Marca</option>
                    </select>
                    <small for="brand_id" id="brand_id_error" class="text-danger"></small>
                </div>
                <div class="col-md-6">
                    <label for="purchase_price" class="form-label"><span class="text-danger">*</span>
                        Preço de Compra:
                    </label>
                    <input type="text" class="form-control" id="purchase_price" name="purchase_price"
                           placeholder="Informe o preço de compra">
                    <small for="purchase_price" id="purchase_price_error" class="text-danger"></small>
                </div>
                <div class="col-md-6">
                    <label for="sale_price" class="form-label">
                        Preço de Venda:
                    </label>
                    <input type="text" class="form-control" id="sale_price" name="sale_price"
                           placeholder="Informe o preço de venda">
                </div>
                <div class="col-md-12">
                    <label for="note" class="form-label">
                        Observação:
                    </label>
                    <textarea class="form-control" id="note" name="note" rows="5"
                              placeholder="Aqui você pode informar uma nota ou observação"></textarea>
                </div>
                <div class="d-flex justify-content-end">
                    <button type="submit" class="btn btn-sm btn-outline-dark btn_store_product icon-check-square-o">
                        Salvar Produto
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
            const form = document.querySelector('#form_store_product');
            const button = $('.btn_store_product');
            const ajaxNotifier = $(".ajax_response");

            /**
             * Formulário de cadastro de products
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
                        $('select[name="category_id"]').html($('<option>', {
                            value: '',
                            text: 'Selecione uma marca',
                            selected: true,
                            disabled: true
                        })).focus().selectpicker('refresh');
                        $('#sku').focus();
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

            $('select[name="category_id"]').change(function () {
                const categorySelected = $(this);
                const action = categorySelected.data('action');

                axios.post(action, {id: categorySelected.val()}).then(response => {
                    const selectOfBrand = $('select[name="brand_id"]');

                    selectOfBrand.html('').selectpicker('refresh');
                    if (response.data.brands.length) {
                        selectOfBrand.html($('<option>', {
                            value: '',
                            text: 'Selecione uma marca',
                            selected: true,
                            disabled: true
                        })).focus().selectpicker('refresh');

                        response.data.brands.forEach((brand) => {
                            selectOfBrand.append($('<option>', {
                                value: brand.id,
                                text: `#${brand.id} - ${brand.description}`
                            })).selectpicker('refresh');
                        });
                    }

                }).catch((error) => {
                    // const errorsList = error?.response?.data?.errors
                    //
                    // if (errorsList) {
                    //     ajaxMessage(
                    //         'Atenção! Parece que há campos obrigatórios não informados ou informados de forma incorreta.',
                    //         'error',
                    //         'icon-exclamation-circle'
                    //     );
                    // }
                }).finally(() => {
                });
            });

            /**
             * Limpar alertas de erros de validação dos inputs
             */
            function clearMessageErrors() {
                form.querySelector('#sku_error').innerText = '';
                form.querySelector('#category_id_error').innerText = '';
                form.querySelector('#brand_id_error').innerText = '';
                form.querySelector('#purchase_price_error').innerText = '';
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
                    button.prop("disabled", false).html("Salvar Produto");
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
