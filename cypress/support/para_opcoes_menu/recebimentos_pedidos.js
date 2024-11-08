//validando e clicando na opção Recebimento de pedidos
export function clicarRecebimentoPedidos (selector) {

    //rolar até o elemento
    cy.contains('Recebimento de pedidos')
        .scrollIntoView()
        .wait(200)

    //validando mensagem "Recebimento de pedidos"
    cy.get('#sbm-shorcut-mnu_RecebimentoPedidos > .dashboard-title')
        .should('exist')
        .and('be.visible')
        .and('contain.text', 'Recebimento de pedidos')

    //validando imagem 
    cy.get('#sbm-shorcut-mnu_RecebimentoPedidos')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()
}

//validando janela Recebimento de pedidos
export function janelaRecebimentoPedidos (selector) {

    //título janela
    cy.get('.tab-content')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'Recebimento de pedidos')

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

//layout 