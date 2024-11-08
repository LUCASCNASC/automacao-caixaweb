//Função para validar título da página (criada por conta da variação entre Sabium Mobile e SBX Mobile)
export function titulopagina(selector, expectedText) {
    cy.title()
        .should('eq', 'Sabium Lançador Web') //Validando título da página
}

//validando ícone de carregamento
export function iconeCarregamento (selector) {

    //validando ícone de carregamento
    cy.get('.spinner')
        .should('exist')
        //.and('be.visible')
}

//validando e clicando imagem e texto "CAIXA"
export function clicarCaixa (selector) {

    //validando "CAIXA", dentro da imagem
    cy.get('.title')
        .should('exist')
        .and('be.visible')
        .and('contain.text', 'Caixa')

    //validando imagem caixa
    cy.get('#app-block-caixa')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()
}