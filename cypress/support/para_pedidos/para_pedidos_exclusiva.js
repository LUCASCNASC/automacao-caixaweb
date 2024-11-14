//produto normal com saldo, para exclusiva
export function primeiroPrdNormalExclusiva (selector) {

    const produto_exclusiva = '1896'

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_exclusiva)
        .wait(100)
        .should('have.value', produto_exclusiva)
}

//produto kit normal sem saldo, para exclusiva e sem saldo a receber
export function kitSemSaldoAgendamento (selector) {

    const kit_semsaldo = '1900'

    //Limpando campo com o produto anterior
    cy.get('#searchText')
        .clear()
        .wait(100)
        .should('have.value', '')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(kit_semsaldo)
        .wait(100)
        .should('have.value', kit_semsaldo)
}

//produto kit com 6 volumes e com saldo, para exclusiva e sem saldo a receber
export function kitVolumes (selector) {

    const kit_volumes = '1903'

    //Limpando campo com o produto anterior
    cy.get('#searchText')
        .clear()
        .wait(100)
        .should('have.value', '')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(kit_volumes)
        .wait(100)
        .should('have.value', kit_volumes)
}

//produto normal com saldo a receber, para exclusiva
export function produtoSaldoReceber (selector) {

    const produto_saldoreceber = '1905'

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_saldoreceber)
        .wait(100)
        .should('have.value', produto_saldoreceber)
}

//produto normal com saldo a receber e outra parte solicitar compra, para exclusiva
export function prdSaldoReceberDuasLinhas (selector) {

    const produto_saldoreceber_duaslinhas = '1906'

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_saldoreceber_duaslinhas)
        .wait(100)
        .should('have.value', produto_saldoreceber_duaslinhas)
}

//aumentar quantidade a ser vendida, 5 unidades
export function aumentarQuantVendaCinco (selector) {

    //botão para aumentar quantidade
    cy.get('[ng-click="addItem()"]')
        .click()
        .click()
        .click()
        .click()
        .click()
}

//aumentar quantidade a ser vendida, 10 unidades
export function aumentarQuantVendaDez (selector) {

    //botão para aumentar quantidade
    cy.get('[ng-click="addItem()"]')
        .click()
        .click()
        .click()
        .click()
        .click()
        .click()
        .click()
        .click()
        .click()
        .click()
}

//Validando produto com saldo indisponível
export function saldoRemotoAReceber (selector) {

    //Validando "Saldo disponivel"
    cy.get('.label')
        .and('have.text','Saldo disponivel')
        .invoke('css', 'background-color') // Obtém a cor do elemento
        .should('equal', 'rgb(240, 173, 78)')
}

//Para escolher processo de venda 9869 para exclusiva
export function processoVendaExclusiva (selector) {

    //clicar para aparecer as opções de processo
    cy.get('#select_value_label_4 > .md-select-icon')
        .click()

    //rolar para o meio das opções de processo
    cy.get('#select_listbox_12')
        .scrollTo('center')

    //selecionar processo de venda "9869"
    cy.get('#select_option_64 > .md-text')
        .scrollIntoView()
        .wait(200)
        .click({force:true})
}