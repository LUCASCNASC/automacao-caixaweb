//Função para validar título da página (criada por conta da variação entre Sabium Mobile e SBX Mobile)
export function tituloPaginaPedidoWeb(selector, expectedText) {
    cy.title()
        .should('eq', 'Sabium Mobile') //Validando título da página
}