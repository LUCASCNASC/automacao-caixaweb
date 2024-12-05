//Função para escolher cliente CPF - consumidor final=SIM
export function clienteCPFConsumidorFinalSim (selector) {

    //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
    cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
        .wait(500)
        .type('57108612003 {downArrow}')

    cy.wait(200)

    //clicar na lupa de pesquisa de clientes
    cy.get('.md-block > .ng-binding')
        .should('exist')
        .and('be.visible')
        .click()

    cy.wait(1500)

    //após a pesquisa encontrar o cliente, vamos selecionar ele
    cy.get('.md-3-line > div.md-button > .md-no-style')
        .should('exist')
        .and('be.visible')
        .click()
}

//Função para escolher cliente CNPJ - consumidor final=NÃO
export function clienteCNPJConsumidorFinalNao (selector) {

    //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
    cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
        .wait(500)
        .type('89172421000103 {downArrow}')

    cy.wait(200)

    //clicar na lupa de pesquisa de clientes
    cy.get('.md-block > .ng-binding')
        .should('exist')
        .and('be.visible')
        .click()

    cy.wait(1500)

    //após a pesquisa encontrar o cliente, vamos selecionar ele
    cy.get('.md-3-line > div.md-button > .md-no-style')
        .should('exist')
        .and('be.visible')
        .click()
}

//Função para colocar consumidor final = NÃO
export function consumidorFinalNAO (selector) {

    //consumidor final - tirar
    cy.get('.flex-100 > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}