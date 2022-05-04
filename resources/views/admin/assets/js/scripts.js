$(() => {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    /** Setup para formulário de pagina single */
    $("#page_single :input").prop("disabled", true);

    /** bootstrap-select setup*/
    $('select').selectpicker();

    // MASK
    const cellMaskBehavior = function (val) {
            return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
        },
        cellOptions = {
            onKeyPress: function (val, e, field, options) {
                field.mask(cellMaskBehavior.apply({}, arguments), options);
            }
        };


    $('.mask-cell').mask(cellMaskBehavior, cellOptions);
    $('.mask-phone').mask('(00) 0000-0000');
    $(".mask-date").mask('00/00/0000');
    $(".mask-datetime").mask('00/00/0000 00:00');
    $(".mask-month").mask('00/0000', {reverse: true});
    $(".mask-zipcode").mask('00000-000', {reverse: true});
    $(".mask-money").mask('R$ 000.000.000.000.000,00', {reverse: true, placeholder: "R$ 0,00"});
    $(".mask-numeric").mask('000.000.000.000.000,00', {reverse: true, placeholder: "0,00"});


    let action;
    let content;
    const ajaxNotifier = $(".ajax_response");
    const modal = new bootstrap.Modal(document.getElementById('modal_delete'))

    /** Evento de click que após carregar a DOM, abre a modal com conteúdo já inserido  */
    $(document).on('click', '.ajax_delete', function (e) {
        e.preventDefault();

        const button = $(this);
        content = button.data('content');
        action = button.data('action');
        modal.show();
        $('.show-content').text(content);
    });

    /** Evento de Click de confirmação de exclusão de registro  presente na modal */
    $(document).on('click', '.btn_confirmed', function (event) {
        event.preventDefault();

        axios.delete(action).then(response => {
            // Sucesso na exclusão
            if (response.data.success) {
                ajaxMessage(
                    response.data.success.message,
                    response.data.success.type,
                    response.data.success.icon
                );
                ManagerTable.refreshTable();
            }

            if (response.data.alert) {
                ajaxMessage(
                    response.data.alert.message,
                    response.data.alert.type,
                    response.data.alert.icon
                );
            }

        }).catch((error) => {
            const statusError = error.response?.status;
            if (statusError) {
                ajaxMessage(
                    `[ ERRO: ${statusError} ] - Houve um erro ao tentar excluir o registro.
                    Reinicie o sistema e tente novamente!`,
                    'error-server',
                    'icon-exclamation'
                )
            }
        }).finally(() => {
            modal.hide();
        });
    });

    /**
     * Notificador
     */
    function ajaxMessage(text, type, icon, time = 6) {
        const ajaxMessage = $(`<div class='message ${type} ${icon}'>${text}</div>`);
        ajaxMessage.append("<div class='message_time'></div>");

        ajaxMessage.find(".message_time").animate({"width": "100%"}, time * 1000, function () {
            $(this).parents(".message").fadeOut(200);
        });

        ajaxNotifier.effect("bounce");
        ajaxNotifier.html(ajaxMessage);
    }
});
