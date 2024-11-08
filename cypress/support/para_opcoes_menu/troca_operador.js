//validando e clicando na opção Troca de operador
export function clicarTrocaOperador (selector) {

    //rolar até o elemento
    cy.contains('Troca de operador')
        .scrollIntoView()

    //validando mensagem "Troca de operador"
    cy.get('#sbm-shorcut-mnu_TrocaDeOperador > .dashboard-title')
        .should('exist')
        .and('be.visible')
        .and('contain.text', 'Troca de operador')

    //validando imagem 
    cy.get('#sbm-shorcut-mnu_TrocaDeOperador')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()
}

//validando janela Troca de operador
export function janelaTrocaOperador(selector) {

    //título janela
    cy.get('.tab-content')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'Troca de operador')

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