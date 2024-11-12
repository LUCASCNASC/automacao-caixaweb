//validando e clicando na opção Gestor
export function clicarOpcaoParametrosNegocio (selector) {

    //validando opção Parâmetros de negócio
    cy.get('#menu-generate-caixa_menu_data_item_businessParameter_label')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain', 'Parâmetros de negócio')
        .click({force:true})
}

//validando opção Parâmetros de negócio - Configuração de parâmetros
export function clicarParametroConfigParametros (selector) {

    //validando e clicando no botão Configuração de parâmetros
    cy.get('#menu-generate-caixa_menu_data_item_business_parameter_parameter_configuration_label')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain', 'Configuração de parâmetros')
        .click()
}

//validando janela Configuração de parâmetros
export function janelaParametroConfigParametros (selector) {

    //título janela
    cy.get('.tab-content')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'Configuração de parâmetros')

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

//validando opção Parâmetros de negócio - Configuração de valores
export function clicarParametroConfigValores (selector) {

    //validando e clicando no botão Configuração de parâmetros
    cy.get('#menu-generate-caixa_menu_data_item_business_parameter_value_configuration_label')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain', 'Configuração de valores')
        .click()
}

//validando janela Configuração de valores
export function janelaParametroConfigValores (selector) {

    //título janela
    cy.get('.tab-content')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'Configuração de valores')

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