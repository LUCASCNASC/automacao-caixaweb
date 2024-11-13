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

//validando e clicando no ícone do menu lateral, além de validar Buscar no menu
export function clicarIconeMenuLateral (selector) {

    //validando e clicando no menu lateral
    cy.get('.mat-icon.material-icons.mat-icon-no-color')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //clicando no menu
    cy.contains('mat-icon', 'menu')
        .click({force:true})

    cy.wait(200)

    //validando ícone lupa
    cy.get('#menu-generate-caixa_menu_data_search > .mat-list-item-content > .mat-icon')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //validando informativo dentro do campo "Buscar no menu..."
    cy.contains('p.mat-line', 'Buscar no menu...')
        .should('exist')
        .and('be.visible')

    //validando campo "Buscar no menu"
    cy.get('#menu-generate-caixa_menu_data_search > .mat-list-item-content > .mat-list-text > .mat-line')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.value', '')
}