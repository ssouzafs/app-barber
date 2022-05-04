$(() => {

    /** Setup para csrf token */
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    // Efeito na logo
    $('.login_logo').effect('bounce');

    // Variaveis globais
    const form = $('form[name="login"]');
    const ajaxNotifier = $(".ajax_response");
    const button = $('.btn_login');

    form.submit(event => {

        event.preventDefault();
        const url = form.attr('action');
        const email = form.find('input[name="email"]').val();
        const password = form.find('input[name="password"]').val();

        startLoad('open')

        axios.post(url, {
            email: email,
            password: password,
        }).then(response => {
            if (response.data.fail) {
                ajaxMessage(
                    response.data.fail.message,
                    response.data.fail.type,
                    response.data.fail.icon
                );

            }
            if (response.data.redirect) {
                window.location.href = response.data.redirect;
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
            startLoad('close');
        });
    });

    /**
     * Carregar load quando enviar a requisição
     * @param action
     */
    function startLoad(action) {
        if (action === "open") {
            const view = `
                <span class='spinner-grow spinner-grow-sm' role='status' aria-hidden='true'></span> Verificando Autenticação ...
            `;
            button.prop("disabled", true).html(view);
        }

        if (action === "close") {
            button.prop("disabled", false).html("ENTRAR");
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

    // Esconder notficador
    ajaxNotifier.on("click", ".message", function (e) {
        $(".message").effect("bounce").fadeOut(1);
    });
});

