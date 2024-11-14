//Escolher primeiro produto normal - 1860 0 0
export function produtoNormalPrimeiro (selector) {

    const primeiro_produto_normal = '1860'

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(primeiro_produto_normal)
        .wait(100)
        .should('have.value', primeiro_produto_normal)
}

//Escolher segundo produto normal - 1870 0 0
export function produtoNormalSegundo (selector) {

    const segundo_produto_normal = '1870'

    //Limpando campo com o produto anterior
    cy.get('#searchText')
        .clear()
        .wait(100)
        .should('have.value', '')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(segundo_produto_normal)
        .wait(100)
        .should('have.value', segundo_produto_normal)
}

//Escolher primeiro produto normal - 1862 0 0
export function produtoKitPrimeiro (selector) {

    const primeiro_kit_normal = '1862'

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(primeiro_kit_normal)
        .wait(100)
        .should('have.value', primeiro_kit_normal)
}

//Escolher primeiro produto normal - 1869 0 0
export function produtoSemSaldo (selector) {

    const produto_sem_saldo = '1869'

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_sem_saldo)
        .wait(100)
        .should('have.value', produto_sem_saldo)
}

//Escolher primeiro produto normal - 1880 0 0
export function produtoCDPrimeiro (selector) {

    const primeiro_produto_CD = '1880'

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(primeiro_produto_CD)
        .wait(100)
        .should('have.value', primeiro_produto_CD)
}

//Escolher segundo produto normal - 1881 0 0
export function produtoCDSegundo (selector) {

    const segundo_produto_CD = '1881'

    //Limpando campo com o produto anterior
    cy.get('#searchText')
        .clear()
        .wait(100)
        .should('have.value', '')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(segundo_produto_CD)
        .wait(100)
        .should('have.value', segundo_produto_CD)
}

//Escolher produto remoto com saldo em seu CD (filial 1)
export function produtoRemotoComCD (selector) {

    const remoto_saldo_CD = '1883'

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(remoto_saldo_CD)
        .wait(100)
        .should('have.value', remoto_saldo_CD)
}

//Escolher produto remoto com saldo em seu CD (filial 1)
export function produtoRemotoSemCD (selector) {

    const remoto__sem_saldo_CD = '1882'

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(remoto__sem_saldo_CD)
        .wait(100)
        .should('have.value', remoto__sem_saldo_CD)
}