function enviarMensagem(event) {
    const formulario = document.getElementById("contato-whatsapp")
    const mensagemCompleta = document.getElementById("mensagem-completa")

    if (!formulario || !mensagemCompleta) {
        return false
    }

    if (!formulario.checkValidity()) {
        if (event) {
            event.preventDefault()
        }

        formulario.reportValidity()
        return false
    }

    const nome = document.getElementById("nome")
    const email = document.getElementById("email")
    const categoria = document.getElementById("categoria")
    const mensagem = document.getElementById("mensagem")

    mensagemCompleta.value =
        `Meu nome é ${nome.value}.
        Meu e-mail é ${email.value}.
        Estou entrando em contato pois preciso de ${categoria.value}.
        Mais informacões:
        ${mensagem.value}`

    return true
}

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("contato-whatsapp")

    if (formulario) {
        formulario.addEventListener("submit", enviarMensagem)
    }
})
