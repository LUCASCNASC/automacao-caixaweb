//validando janela suprimento
export function janelaSuprimento (selector) {

    //título janela
    cy.get('.tab-content')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'Suprimento')

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

//validando e clicando na opção Suprimento
export function clicarSuprimento (selector) {

    //rolar até o elemento
    cy.contains('Suprimento')
        .scrollIntoView()

    //validando mensagem "Suprimento"
    cy.get('#sbm-shorcut-mnu_Suprimento > .dashboard-title')
        .should('exist')
        .and('be.visible')
        .and('contain.text', 'Suprimento')

    //validando imagem 
    cy.get('#sbm-shorcut-mnu_Suprimento')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()
}

//validando página de suprimento - Saldos
export function preencherSuprimentoSaldos (selector) {

    //título Suprimento
    cy.get('#frmSuprimento_GrupoAgrupadorPrincipal_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' Suprimento ')

    //subtítulo Saldos
    cy.get('#frmSuprimento_GrupoSaldos_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' Saldos ')

    //informativo campo "Saldo em dinheiro atual"
    cy.contains('Saldo em dinheiro atual')
        .should('exist')
        .and('be.visible')

    //campo "Saldo em dinheiro atual"
    cy.get('#frmSuprimento_CampoSaldoAtual_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        //.and('not.be.empty')

    //informativo campo "Saldo em dinheiro final"
    cy.contains('Saldo em dinheiro final')
        .should('exist')
        .and('be.visible')

    //campo "Saldo em dinheiro final"
    cy.get('#frmSuprimento_CampoSaldoFinal_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        //.and('not.be.empty')
}

//validando página de suprimento - Entrada de valores
export function preencherSuprimentoEntradaValores (selector) {

    const inserir_observacoes = 'teste campo observação'

    //subtítulo Entrada de valores
    cy.get('#frmSuprimento_GrupoValores_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' Entrada de valores ')

    //informativo campo "Dinheiro"
    cy.contains('Dinheiro')
        .should('exist')
        .and('be.visible')

    //campo "Dinheiro"
    cy.get('#frmSuprimento_CampoDinheiro_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        //.and('not.be.empty')

    //informativo campo "Observações"
    cy.contains('Observações')
        .should('exist')
        .and('be.visible')

    //campo "Observações"
    cy.get('#frmSuprimento_CampoObservacoes_input_cep')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .type(inserir_observacoes)  
}

//validando autenticação Terminal sangria
export function autenticarTerminalSangria (selector) {

    
}