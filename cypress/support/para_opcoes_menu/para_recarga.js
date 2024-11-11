//validando e clicando na opção Recarga
export function clicarRecarga (selector) {

    //rolar até o elemento
    cy.contains('Recarga')
        .scrollIntoView()
        .wait(200)

    //validando mensagem "Recarga"
    cy.get('#sbm-shorcut-mnu_RecargaRapida > .dashboard-title')
        .should('exist')
        //.and('be.visible')
        .and('contain.text', 'Recarga')

    //validando imagem 
    cy.get('#sbm-shorcut-mnu_RecargaRapida')
        .should('exist')
        //.and('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//validando janela Recarga
export function janelaRecarga (selector) {

    //título janela
    cy.get('.tab-content')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'Recarga')

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

