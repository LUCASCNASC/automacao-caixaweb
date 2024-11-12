//validando e clicando na opção Gestor
export function clicarOpcaoMenuGestor (selector) {

    //validando opção Gestor
    cy.get('#menu-generate-caixa_menu_data_item_menuGestor_label')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain', 'Gestor')
        .click({force:true})
}

//validando opção gestor - Operador de caixa
export function clicarGestorOperadorCaixa (selector) {

    //validando e clicando no botão Operador de caixa
    cy.get('#menu-generate-caixa_menu_data_item_mnu_OperadorCaixa_label')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain', 'Operador de caixa')
        .click()
}

//validando janela Operador de caixa
export function janelaGestorOperadorCaixa (selector) {

    //título janela
    cy.get('.tab-content')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'Operador de caixa')

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

//validando opção gestor - Motivos de diferença
export function clicarGestorMotivosDiferenca (selector) {

    //validando e clicando no botão Motivos de diferença
    cy.get('#menu-generate-caixa_menu_data_item_mnu_MotivoDiferenca_E_label')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain', 'Motivos de diferença')
        .click()
}

//validando janela Motivos de diferença
export function janelaGestorMotivosDiferenca (selector) {

    //título janela
    cy.get('.tab-content')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'Motivos de diferença')

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

//validando opção gestor - Tipos de movimento
export function clicarGestorTiposMovimento (selector) {

    //validando e clicando no botão Tipos de movimento
    cy.get('#menu-generate-caixa_menu_data_item_mnu_TipoMovimentoHistorico_E_label')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain', 'Tipos de movimento')
        .click()
}

//validando janela Tipos de movimento
export function janelaGestorTiposMovimento (selector) {

    //título janela
    cy.get('.tab-content')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'Tipos de movimento')

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

//validando opção gestor - Concentradores TEF
export function clicarGestorConcentradoresTEF (selector) {

    //validando e clicando no botão Concentradores TEF
    cy.get('#menu-generate-caixa_menu_data_item_mnu_ConcentradorTef_E_label')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain', 'Concentradores TEF')
        .click()
}

//validando janela Concentradores TEF
export function janelaGestorConcentradoresTEF (selector) {

    //título janela
    cy.get('.tab-content')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'Concentradores TEF')

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

//validando opção gestor - Terminais de caixa
export function clicarGestorTerminaisCaixa (selector) {

    //validando e clicando no botão Terminais de caixa
    cy.get('#menu-generate-caixa_menu_data_item_mnu_TerminalCaixa_E_label')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain', 'Terminais de caixa')
        .click()
}

//validando janela Terminais de caixa
export function janelaGestorTerminaisCaixa (selector) {

    //título janela
    cy.get('.tab-content')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'Terminais de caixa')

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

//validando opção gestor - Entrada/Saída conta caixa
export function clicarGestorEntradaSaidaCaixa (selector) {

    //validando e clicando no botão Terminais de caixa
    cy.get('#menu-generate-caixa_menu_data_item_mnu_EntradaSaidaCCaixa_label')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain', 'Entrada/Saída conta caixa')
        .click()
}

//validando janela Entrada/Saída conta caixa
export function janelaGestorEntradaSaidaCaixa (selector) {

    //título janela
    cy.get('.tab-content')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'Entrada/Saída conta caixa')

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

//validando opção gestor - Monitoramento dos caixas
export function clicarGestorMonitoramentoCaixas (selector) {

    //validando e clicando no botão Terminais de caixa
    cy.get('#menu-generate-caixa_menu_data_item_mnu_Monitoramento_label')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain', 'Monitoramento dos caixas')
        .click()
}

//validando janela Monitoramento dos caixas
export function janelaGestorMonitoramentoCaixas(selector) {

    //título janela
    cy.get('.tab-content')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'Monitoramento dos caixas')

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