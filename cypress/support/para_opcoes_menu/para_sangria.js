//validando e clicando na opção Sangria
export function clicarSangria (selector) {

    //rolar até o elemento
    cy.contains('Sangria')
        .scrollIntoView()

    //validando mensagem "Sangria"
    cy.get('#sbm-shorcut-mnu_Sangria > .dashboard-title')
        .should('exist')
        .and('be.visible')
        .and('contain.text', 'Sangria')

    //validando imagem 
    cy.get('#sbm-shorcut-mnu_Sangria')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()
}

//validando janela Sangria
export function janelaSangria (selector) {

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

//validando página de sangria - Saldos
export function preencherSangriaSaldos (selector) {

    //título Sangria
    cy.get('#frmSangria_GrupoAgrupadorPrincipal_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' Sangria ')

    //subtítulo Saldos
    cy.get('#frmSangria_GrupoSaldos_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' Saldos ')

    //informativo campo "Saldo em dinheiro atual"
    cy.contains('Saldo em dinheiro')
        .should('exist')
        .and('be.visible')

    //campo "Saldo em dinheiro atual"
    cy.get('#frmSangria_CampoSaldoDinheiro_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        //.and('not.be.empty')

    //informativo campo "Saldo em cheque"
    cy.contains('Saldo em cheque')
        .should('exist')
        .and('be.visible')

    //campo "Saldo em dinheiro final"
    cy.get('#frmSangria_CampoSaldoCheque_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        //.and('not.be.empty')
}

//validando página de sangria - Retirada de valores
export function preencherSangriaRetiradaValores (selector) {

    const inserir_observacoes = 'teste campo observação'

    //subtítulo Entrada de valores
    cy.get('#frmSangria_GrupoValores_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' Retirada de valores ')

    //informativo campo "Dinheiro"
    cy.contains('Dinheiro')
        .should('exist')
        .and('be.visible')

    //campo "Dinheiro"
    cy.get('#frmSangria_CampoValorSaidaDinheiro_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        //.and('not.be.empty')

    //informativo campo "Cheque"
    cy.contains('Cheque')
        .should('exist')
        .and('be.visible')

    //campo "Cheque"
    cy.get('#frmSangria_CampoValorSaidaCheque_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        //.and('not.be.empty')

    //informativo campo "Observações"
    cy.contains('Observações')
        .should('exist')
        .and('be.visible')

    //campo "Observações"
    cy.get('#frmSangria_CampoObservacoes_input_cep')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .type(inserir_observacoes)  

    //informativo campo "Histórico de conta corrente"
    cy.contains('Histórico de conta corrente')
        .should('exist')
        .and('be.visible')

    //campo "Histórico de conta corrente"
    cy.get('input.mat-input-element.mat-form-field-autofill-control')
        .should('exist')
        .and('be.visible')
}

//validando autenticação Terminal suprimento
export function autenticarTerminalSuprimento (selector) {

    
}