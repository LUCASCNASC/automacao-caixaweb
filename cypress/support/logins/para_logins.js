//validar imagem da tela inicial de login
export function validarImagemInicial (selector) {

    //validando imagem da tela inicial de login
    cy.get('img')
        .should('exist')
        .and('be.visible')
}

//validar campo usuário antes de preencher
export function campoUsuarioVazio (selector) {

    //validando texto informativo dentro do campo Usuário
    cy.get('#usuario')
        .should('have.attr', 'placeholder', 'Usuário');

    //validando campo usuário antes de preencher
    cy.get('#usuario')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.value', '')
}

//validar campo Senha antes de preencher
export function campoSenhaVazio (selector) {

    //validando texto informativo dentro do campo Senha
    cy.get('#senha')
        .should('have.attr', 'placeholder', 'Senha');

    //validando campo Senha antes de preencher
    cy.get('#senha')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.value', '')
}

//preencher campo Usuário com usuário válido
export function prencherCampoUsuario (selector) {

    const nome_usuario = 'lucas.camargo'

    //validando campo usuário antes de preencher
    cy.get('#usuario')
        .type(nome_usuario)
        .should('have.value', nome_usuario)
}

//preencher campo Senha com senha válido
export function prencherCampoSenha (selector) {

    const senha_usuario = '@Lcn1998'

    //validando campo usuário antes de preencher
    cy.get('#senha')
        .type(senha_usuario)
        .should('have.value', senha_usuario)
}

//preencher campo Usuário com usuário INEXISTENTE
export function usuInexistentePrencher (selector) {

    const nome_usuario_inexistente = 'usuinexistente'

    //validando campo usuário antes de preencher
    cy.get('#usuario')
        .type(nome_usuario_inexistente)
        .should('have.value', nome_usuario_inexistente)
}

//preencher campo Senha com senha INVÁLIDA
export function senhaInvalidaPreencher (selector) {

    const senha_invalida = 'senhasenha'

    //validando campo usuário antes de preencher
    cy.get('#senha')
        .type(senha_invalida)
        .should('have.value', senha_invalida)
}

//apenas validando botão Esqueci minha senha
export function botaoEsqueciMinhaSenha (selector) {

    cy.get('.message')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', ' Esqueci minha senha ')
}

//clicar no botão LOGIN
export function clicarBotaoLogin (selector) {

    //botão LOGIN
    cy.get('#btn-login')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', ' Login ')
        .click()
}

//validando ícone após logar no sistema, validando que realmente logou
export function iconeAposLogar (selector) {

    //validando ícone após logar no sistema
    cy.get('.sbm-logotipo-topo')
        .should('exist') //Validando se realmente fez o login
        .and('be.visible')
}

//validar se botão login está desabilitado - usar antes de prencher os dois campos corretamente
export function botaoLoginDesabilitado (selector) {

    //botão LOGIN
    cy.get('#btn-login')
        .should('exist')
        .and('be.visible')
        .and('be.disabled')
        .and('have.text', ' Login ')
}

//validando modal de Acesso negado - após tentar logar com usuário inexistente
export function modalLoginAcessoNegado (selector) {

    //validando ícone de acesso negado
    cy.get('.swal2-x-mark')
        .should('exist')
        .and('be.visible')

    //validando título do modal "Acesso negado!"
    cy.get('#swal2-title')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Acesso negado!')

    //validando mensagem "Usuário/senha está incorreto, verifique e tente novamente."
    cy.get('#swal2-html-container')
        .should('exist')
        .and('be.visible')
        .and('contain.text', 'Usuário/senha está incorreto, verifique e tente novamente.')

    //validando botão Não
    cy.get('.swal2-cancel')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'Não')

    //validando botão Ok
    cy.get('.swal2-confirm')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'Ok')
}

//clicar e validar botão Esqueci minha senha
export function clicarEsqueciMinhaSenha (selector) {

    cy.get('.message')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', ' Esqueci minha senha ')
        .click()
}

// Modal Esqueci minha senha
export function campoEmailVazio (selector) {

    //validando texto informativo dentro do campo E-mail
    cy.get('#email')
        .should('have.attr', 'placeholder', 'E-mail');

    //validando campo Senha antes de preencher
    cy.get('#email')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.value', '')
}

//preencher campo e-mail com e-mail válido
export function prencherCampoEmail (selector) {

    const email_recuperar_senha = 'lucas.sabium@gmail.com'

    //validando campo email antes de preencher
    cy.get('#email')
        .type(email_recuperar_senha)
        .should('have.value', email_recuperar_senha)
}

//Validar botão RECUPERAR - recuepração de senha
export function botaoRecuperarSenha (selector) {

    cy.get('#btn-reset')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', ' Recuperar ')
}

//Validar botão VOLTAR - recuepração de senha
export function botaoVoltarSenha (selector) {

    cy.get('#btn-reset-back')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', ' Voltar ')
}
