//validar e clicar botão % (desconto)
export function clicarBotaoDesconto (selector) {

    //validando botão
    cy.get('[ng-click="abrirModalDescontoProduto($index)"]')
        .scrollIntoView()
        .wait(200)

    //validando ícone do botão
    cy.get('[ng-click="abrirModalDescontoProduto($index)"] > .ng-scope')
        .scrollIntoView()
        .wait(200)
        .click({force:true})
}

//aplicar desconto Sub(-) com R$
export function aplicarDescontoR$ (selector) {

    const valor_desconto_R$ = '1000'

    //clicar no botão R$    
    cy.contains('button', 'R$')
        .click({force:true})

    //preencher campo com valor do desconto
    cy.get('#txtReajusteReal_0')
        .type(valor_desconto_R$)

    //clicar no botão APLICAR
    cy.get('button[ng-click="aplicarSubSobre()"]')
        .click({force:true})
}

//aplicar desconto Sub(-) com %
export function aplicarDescontoPorcentagem (selector) {

    const valor_desconto_porcentagem = '2'

    //clicar no botão %    
    cy.contains('button', '%')
        .click({force:true})

    //preencher campo com valor do desconto
    cy.get('#txtReajustePorc_0')
        .type(valor_desconto_porcentagem)

    //clicar no botão APLICAR
    cy.get('button[ng-click="aplicarSubSobre()"]')
        .click({force:true})
}

//aplicar desconto Sub(-) com VALOR FIXO
export function aplicarDescontoValorFixo (selector) {

    const valor_desconto_valorFixo = '130000'

    //clicar no botão VALOR FIXO    
    cy.contains('button', 'VALOR FIXO')
        .click({force:true})

    //preencher campo com valor do desconto
    cy.get('#txtReajusteFixo_0')
        .clear()
        .wait(100)
        .type(valor_desconto_valorFixo)

    //clicar no botão APLICAR
    cy.get('button[ng-click="aplicarSubSobre()"]')
        .click({force:true})
}

//Desconto juros - arrastar forma de pagamento escolhida para aparecer desconto - AJUSTAR
export function arrastarFormaPagamento (selector) {
    
    cy.get('.md-whiteframe-2dp')
        .trigger('mousedown', { which: 1 })
        .trigger('mousemove', { clientX: 100, clientY: 0 }) // Ajuste clientX para a posição desejada
        .trigger('mouseup');
}

//Clicar no botão R$
export function clicarAlterarValor (selector) {

    //Validar ícone dentro do botão
    cy.get('.btn-remove-item-list > :nth-child(1) > .md-raised > .ng-scope')
        .click({force:true})
}

//alterar valor para baixo
export function alterarValorParaBaixo (selector) {

    //campo Valor da parcela
    cy.get('[ng-model="formaPgtoValor"]')
        .clear()
        .wait(200)
        .type('137800')

    //campo Subtotal
    cy.get('[ng-model="formaPgtoSubtotal"]')
        .clear()
        .wait(200)
        .type('137800')

    //clicar no botão APLICAR
    cy.get('button[ng-click="aplicarAlterarValor()"]')
        .click({force: true})
}

//alterar valor para cima
export function alterarValorParaCima (selector) {

    //campo Valor da parcela
    cy.get('[ng-model="formaPgtoValor"]')
        .clear()
        .wait(200)
        .type('137900')

    //campo Subtotal
    cy.get('[ng-model="formaPgtoSubtotal"]')
        .clear()
        .wait(200)
        .type('137900')

    //clicar no botão APLICAR
    cy.get('button[ng-click="aplicarAlterarValor()"]')
        .click({force: true})
}