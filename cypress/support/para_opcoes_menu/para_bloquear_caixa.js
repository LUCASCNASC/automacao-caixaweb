//validando e clicando na opção Bloquear caixa
export function clicarBloquearCaixa (selector) {

    //rolar até o elemento
    cy.contains('Bloquear caixa')
        .scrollIntoView()

    //validando mensagem "Bloquear caixa"
    cy.get('#sbm-shorcut-mnu_Desbloquear > .dashboard-title')
        .should('exist')
        .and('be.visible')
        .and('contain.text', 'Bloquear caixa')

    //validando imagem 
    cy.get('#sbm-shorcut-mnu_Desbloquear')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()
}

//validando janela Bloquear caixa -- precisa fazer ainda 
export function janelaBloquearCaixa (selector) {

    //título janela
    cy.get('.tab-content')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'Bloquear caixa')

    //ícone estrela 
    cy.get('sbm-favorite-user-interface > .mat-focus-indicator > .mat-button-wrapper > .mat-icon')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //botão X
    cy.contains('mat-icon', 'close')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
}

//validando modal TELA DE BLOQUEIO
export function modalTelaBloqueio (selector) {

    //título modal 
    cy.get('#frmDesbloquear_ModalBloqueio_modal_dynamic_header_label')
        .should('exist')
        .and('be.visible')
        .and('contain.text', 'TELA DE BLOQUEIO')

    //botão X modal
    cy.get('.modal-dialog__close-button > .material-icons')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //mensagem Caixa aberto
    cy.get('#frmLogin_status_sbm-label-identifier')
        .should('exist')
        .and('be.visible')
        .and('contain.text', 'Caixa aberto')

    //mensagem Bloquear caixa
    cy.get('#frmLogin_Titulo_sbm-label-identifier')
        .should('exist')
        .and('be.visible')
        .and('contain.text', 'Bloquear caixa')

    //botão Bloquear - sem clicar
    cy.get('#frmLogin_BtnDesbloquear_material_button > .mat-button-wrapper')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', ' Bloquear ')
        
    //validando cor do botão Bloquear - sem clicar
    cy.get('#frmLogin_BtnDesbloquear_material_button')
        .should('have.css', 'background-color', 'rgb(76, 175, 80)')

}

//clicando no botão Bloquear - na tela de bloquear caixa
export function confirmarBloqueioCaixa (selector) {

    //clicando no botão Bloquear
    cy.get('#frmLogin_BtnDesbloquear_material_button') 
        .click()
}