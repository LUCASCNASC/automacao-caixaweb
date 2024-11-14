//Importando funções 
import { tituloCaixaPagina } from '../../support/para_todos';
import { validarImagemInicial, campoUsuarioVazio, prencherCampoUsuario, campoSenhaVazio, prencherCampoSenha, clicarBotaoLogin,
         botaoEsqueciMinhaSenha, iconeAposLogar, botaoLoginDesabilitado, usuInexistentePrencher, modalLoginAcessoNegado, senhaInvalidaPreencher } from '../../support/logins/para_logins';


describe('Logins', () => {

    beforeEach(() => {
        cy.visitCaixaWeb('/');
        cy.clearAllSessionStorage()
        tituloCaixaPagina()
    })

    context('Usuário normal', () => {

        it('Login - caminho feliz', () => {

            validarImagemInicial()

            botaoLoginDesabilitado()

            campoUsuarioVazio()

            prencherCampoUsuario()

            botaoLoginDesabilitado()

            campoSenhaVazio()

            prencherCampoSenha()

            //validando botão
            botaoEsqueciMinhaSenha()

            clicarBotaoLogin()

            cy.wait(1000)

            iconeAposLogar()
        })

        it('Login - preencher campo usuário com usuário inexistente e senha válida (não deve entrar)', () => {

            validarImagemInicial()

            botaoLoginDesabilitado()

            campoUsuarioVazio()

            usuInexistentePrencher()

            botaoLoginDesabilitado()

            campoSenhaVazio()

            prencherCampoSenha()

            //validando botão
            botaoEsqueciMinhaSenha()

            clicarBotaoLogin()

            modalLoginAcessoNegado()
        })

        it('Login - preencher campo usuário com usuário válido e senha inválida (não deve entrar)', () => {

            validarImagemInicial()

            botaoLoginDesabilitado()

            campoUsuarioVazio()

            prencherCampoUsuario()

            botaoLoginDesabilitado()

            campoSenhaVazio()

            senhaInvalidaPreencher()

            //validando botão
            botaoEsqueciMinhaSenha()

            clicarBotaoLogin()

            modalLoginAcessoNegado()
        })

        it('Login - preencher campo usuário com usuário válido e deixar senha em branco (não deve entrar)', () => {

            validarImagemInicial()

            botaoLoginDesabilitado()

            campoUsuarioVazio()

            prencherCampoUsuario()

            botaoLoginDesabilitado()

            campoSenhaVazio()

            //validando botão
            botaoEsqueciMinhaSenha()

            botaoLoginDesabilitado()
        })

        it('Login - preencher campo senha com senha válida e deixar usuário em branco (não deve entrar)', () => {

            validarImagemInicial()

            botaoLoginDesabilitado()

            campoUsuarioVazio()

            botaoLoginDesabilitado()

            campoSenhaVazio()

            prencherCampoSenha()

            //validando botão
            botaoEsqueciMinhaSenha()

            botaoLoginDesabilitado()
        })

        it('Login - não preencher campos Usuário e Senha (não deve entrar)', () => {

            validarImagemInicial()

            botaoLoginDesabilitado()

            campoUsuarioVazio()

            botaoLoginDesabilitado()

            campoSenhaVazio()

            //validando botão
            botaoEsqueciMinhaSenha()

            botaoLoginDesabilitado()
        })
    })
})