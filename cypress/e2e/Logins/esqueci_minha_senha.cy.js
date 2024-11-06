//Importando funções 
import { titulopagina } from '../../support/para_todos';
import { validarImagemInicial, clicarEsqueciMinhaSenha, campoEmailVazio, prencherCampoEmail, botaoRecuperarSenha, botaoVoltarSenha } from '../../support/logins/para_logins';


describe('Logins', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
    })

    context('Usuário normal', () => {

        it('Login - caminho feliz', () => {

            titulopagina()

            validarImagemInicial()

            clicarEsqueciMinhaSenha()

            //MODAL ESQUECI MINHA SENHA

            validarImagemInicial()

            campoEmailVazio()

            prencherCampoEmail()

            botaoRecuperarSenha()

            botaoVoltarSenha()


        })
    })
})