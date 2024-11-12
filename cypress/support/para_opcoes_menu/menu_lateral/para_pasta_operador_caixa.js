//validando e clicando na opção Gestor
export function clicarOpcaoOperadorCaixa (selector) {

    //validando opção Gestor
    cy.get('#menu-generate-caixa_menu_data_item_menuOperador_label')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain', 'Operador de Caixa')
        .click({force:true})
}

//validando opção gestor - Bloquear caixa
export function clicarOperadorBloquearCaixa (selector) {

    //validando e clicando no botão Operador de caixa
    cy.get('#menu-generate-caixa_menu_data_item_mnu_Desbloquear_label')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain', 'Bloquear caixa')
        .click()
}

//validando janela Bloquear caixa
export function janelaOperadorBloquearCaixa (selector) {

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

//validando opção gestor - Sangria
export function clicarOperadorSangria (selector) {

    //validando e clicando no botão Sangria
    cy.get('#menu-generate-caixa_menu_data_item_mnu_Sangria_label')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain', 'Sangria')
        .click()
}

//validando janela Sangria
export function janelaOperadorSangria (selector) {

    //título janela
    cy.get('.tab-content')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'Sangria')

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

//validando opção gestor - Troca de operador
export function clicarOperadorTrocaOperador (selector) {

    //validando e clicando no botão Sangria
    cy.get('#menu-generate-caixa_menu_data_item_mnu_TrocaDeOperador_label')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain', 'Troca de operador')
        .click()
}

//validando janela Troca de operador
export function janelaOperadorTrocaOperador (selector) {

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

//validando opção gestor - Recebimento de pedidos
export function clicarOperadorRecebimentoPedido (selector) {

    //validando e clicando no botão Sangria
    cy.get('#menu-generate-caixa_menu_data_item_mnu_RecebimentoPedidos_label')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain', 'Recebimento de pedidos')
        .click()
}

//validando janela Recebimento de pedidos
export function janelaOperadorRecebimentoPedido (selector) {

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

//validando opção gestor - Recebimento de títulos
export function clicarOperadorRecebimentoTitulos (selector) {

    //validando e clicando no botão Recebimento de títulos
    cy.get('#menu-generate-caixa_menu_data_item_mnu_RecebimentoTitulos_label')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain', 'Recebimento de títulos')
        .click()
}

//validando janela Recebimento de títulos
export function janelaOperadorRecebimentoTitulos (selector) {

    //título janela
    cy.get('.tab-content')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'Recebimento de títulos')

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

//validando opção gestor - Movimentações diversas
export function clicarOperadorMovimentacoesDiversas (selector) {

    //validando e clicando no botão Recebimento de títulos
    cy.get('#menu-generate-caixa_menu_data_item_mnu_MovimentacoesDiversas_label')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain', 'Movimentações diversas')
        .click()
}

//validando janela Movimentações diversas
export function janelaOperadorMovimentacoesDiversas (selector) {

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

//validando opção gestor - Recarga
export function clicarOperadorRecarga (selector) {

    //validando e clicando no botão Recarga
    cy.get('#menu-generate-caixa_menu_data_item_mnu_RecargaRapida_label')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain', 'Recarga')
        .click()
}

//validando janela Recarga
export function janelaOperadorRecarga (selector) {

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

//validando opção gestor - Fechamento do caixa
export function clicarOperadorFechamentoCaixa (selector) {

    //validando e clicando no botão Fechamento do caixa
    cy.get('#menu-generate-caixa_menu_data_item_mnu_RecargaRapida_label')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain', 'Fechamento do caixa')
        .click()
}

//validando janela Fechamento do caixa
export function janelaOperadorFechamentoCaixa (selector) {

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

//validando opção gestor - Movimentos
export function clicarOperadorMovimentos (selector) {

    //validando e clicando no botão Movimentos
    cy.get('#menu-generate-caixa_menu_data_item_mnu_Movimentos_label')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain', 'Movimentos')
        .click()
}

//validando janela Movimentos
export function janelaOperadorMovimentos (selector) {

    //título janela
    cy.get('.tab-content')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'Movimentos')

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