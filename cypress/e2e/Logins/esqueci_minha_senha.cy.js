//Importando funções 
import { tituloCaixaPagina } from '../../support/para_todos';
import { validarImagemInicial, clicarEsqueciMinhaSenha, campoEmailVazio, prencherCampoEmail, botaoRecuperarSenha, botaoVoltarSenha } from '../../support/logins/para_logins';

describe('Logins', () => {

    beforeEach(() => {
        cy.visitCaixaWeb('/')
        cy.clearAllSessionStorage()
        tituloCaixaPagina()
    })

    context('Usuário normal', () => {

        it('Login - caminho feliz', () => {

            validarImagemInicial()
            clicarEsqueciMinhaSenha()

            validarImagemInicial() //MODAL ESQUECI MINHA SENHA
            campoEmailVazio()
            prencherCampoEmail()
            botaoRecuperarSenha()
            botaoVoltarSenha()
        })
    })
})