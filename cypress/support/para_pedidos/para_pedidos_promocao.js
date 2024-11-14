//Escolher primeiro produto com promoção partida - 1868 0 0
export function produtoPromoPartida (selector) {

    const produto_promocao_partida = '1868'

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_promocao_partida)
        .wait(100)
        .should('have.value', produto_promocao_partida)
}

//Escolher primeiro produto com promoção a prazo com entrada - 1866 0 0
export function produtoPromoPrazoEntrada (selector) {

    const produto_promocao_prazo_entrada = '1866'

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_promocao_prazo_entrada)
        .wait(100)
        .should('have.value', produto_promocao_prazo_entrada)
}

//Escolher primeiro produto com promoção a prazo parcelado - 1867 0 0
export function produtoPromoPrazoParcelado (selector) {

    const produto_promocao_prazo_parcelado = '1867'

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_promocao_prazo_parcelado)
        .wait(100)
        .should('have.value', produto_promocao_prazo_parcelado)
}

//Pedido com promoção a prazo/parcelas (promoção 159): produto 1891 0 0 com garantia (isenta de juros)
export function prd1PrazoParcela (selector) {

    const produto_codigo = '1891'

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_codigo)
        .wait(100)
        .should('have.value', produto_codigo)
}

//Pedido com promoção a prazo/entrada + parcelas (promoção 158): produto 1895 0 0 com garantia (isenta de juros)
export function prd2PrazoParcela (selector) {

    const produto_codigo = '1895'

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_codigo)
        .wait(100)
        .should('have.value', produto_codigo)
}

//Pedido com promoção a prazo/parcelas (promoção 160): produto 1893 0 0 com prestamista (isento de juros)
export function prd3PrazoParcela (selector) {

    const produto_codigo = '1893'

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_codigo)
        .wait(100)
        .should('have.value', produto_codigo)
}

//Pedido com promoção a prazo/parcelas (promoção 161): produto 1893 0 0 com garantia (isenta de juros) e prestamista (com juros)
export function prd4PrazoParcela (selector) {

    const produto_codigo = '1894'

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_codigo)
        .wait(100)
        .should('have.value', produto_codigo)
}

//validando e adicionando serviço prestamista
export function adicionarPrestamista (selector) {

    //validando botão de serviço
    cy.get('.btn-remove-item-list > :nth-child(2) > .md-raised')
        .click({force:true})

    //selecionar seguro prestamista
    cy.get('#checkbox-145-0 > .md-container')
        .click({force:true})

    //botão OK
    cy.get('md-dialog-actions.layout-row > .md-primary')
        .click({force:true})
}

//validando e clicando para usar promoção
export function clicarUsarPromocao (selector) {

    //clicar na promoção
    cy.get('.md-3-line > div.md-button > .md-no-style')
        .click({force:true})
}

//validando e escolhendo forma de pagamento da promoção
export function selecionarFormaPagPromo (selector) {

    //Escolher uma forma de pagamento, no card de "Formas de pagamento"
    cy.get('button[aria-label="3860 - T.A. A Receber Futuro   Futuro"]')
        .click()
}