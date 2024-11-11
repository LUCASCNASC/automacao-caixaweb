//validando e clicando na opção Fechamento do caixa
export function clicarFechamentoCaixa (selector) {

    //rolar até o elemento
    cy.contains('Fechamento do caixa')
        .scrollIntoView()
        .wait(200)

    //validando mensagem "Fechamento do caixa"
    cy.get('#sbm-shorcut-mnu_FecharCaixa > .dashboard-title')
        .should('exist')
        //.and('be.visible')
        .and('contain.text', 'Fechamento do caixa')

    //validando imagem 
    cy.get('#sbm-shorcut-mnu_FecharCaixa')
        .should('exist')
        //.and('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//validando janela Fechamento do caixa
export function janelaFechamentoCaixa (selector) {

    //título janela
    cy.get('.tab-content')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'Fechamento do caixa')

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