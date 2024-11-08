//Importando funções 
import { titulopagina } from '../../support/para_todos';
import { validarImagemInicial, campoUsuarioVazio, prencherCampoUsuario, campoSenhaVazio, prencherCampoSenha, clicarBotaoLogin,
         botaoEsqueciMinhaSenha, iconeAposLogar, botaoLoginDesabilitado, acessoNegadoOutraConexao} from '../../support/logins/para_logins';


describe('Logins', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
    })

    context('Usuário normal', () => {

        it('Login - caminho feliz', () => {

            titulopagina()

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
            
            acessoNegadoOutraConexao()
        })
    })
})