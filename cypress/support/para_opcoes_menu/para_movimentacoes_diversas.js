//validando e clicando na opção Movimentações diversas
export function clicarMovimentacoesDiversas (selector) {

    //rolar até o elemento
    cy.contains('Movimentações diversas')
        .scrollIntoView()
        .wait(200)

    //validando mensagem "Recebimento de títulos"
    cy.get('#sbm-shorcut-mnu_MovimentacoesDiversas > .dashboard-title')
        .should('exist')
        //.and('be.visible')
        .and('contain.text', 'Movimentações diversas')

    //validando imagem 
    cy.get('#sbm-shorcut-mnu_MovimentacoesDiversas')
        .should('exist')
        //.and('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//validando janela Movimentações diversas
export function janelaMovimentacoesDiversas (selector) {

    //título janela
    cy.get('.tab-content')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'Movimentações diversas')

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