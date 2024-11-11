//validando e clicando no caixa fechado
export function clicarCaixaFechado (selector) {

    //validando mensagem "Fechamento obrigatório do caixa"
    cy.get('.dashboard-title')
        .should('exist')
        .and('be.visible')
        .and('contain.text', 'Fechamento obrigatório do caixa')

    //validando imagem 
    cy.get('#sbm-shorcut-mnu_FecharCaixa')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()
}

//validando e clicando no caixa aberto
export function clicarAbrirCaixa (selector) {

    //validando mensagem "Abertura do caixa"
    cy.get('#sbm-shorcut-mnu_AbrirCaixa > .dashboard-title')
        .scrollIntoView()
        .wait(200)
        .should('exist')
        .and('be.visible')
        .and('contain.text', 'Abertura do caixa')

    //validando imagem 
    cy.get('#sbm-shorcut-mnu_AbrirCaixa')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()
}

//validando modal APURAÇÃO DO SISTEMA
export function modalApuracaoSistema (selector) {

    //título do modal
    cy.get('#frmFecharCaixa_ModalApuracaoSistema_modal_dynamic_header_label')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' Apuração do Sistema ')

    //botão expandir
    cy.get('.modal-dialog__expand-button > .material-icons')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //botão X
    cy.get('.modal-dialog__close-button > .material-icons')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //botão Cancelar
    cy.get('#frmApuracaoSistema_BtnCancelar_material_button > .mat-button-wrapper')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain.text', 'Cancelar')

    //validando cor do botão Cancelar
    cy.get('#frmApuracaoSistema_BtnCancelar_material_button')
        .should('have.css', 'background-color', 'rgb(207, 59, 59)')

    //botão Finalizar
    cy.get('#frmApuracaoSistema_BtnFinalizar_material_button > .mat-button-wrapper')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain.text', 'Finalizar')
        
    //validando cor do botão Finalizar
    cy.get('#frmApuracaoSistema_BtnFinalizar_material_button')
        .should('have.css', 'background-color', 'rgb(76, 175, 80)')
}

//validando parte APURAÇÃO DO SISTEMA, do modal APURAÇÃO DO SISTEMA
export function apuracaoSistemaModalApuracaoSistema (selector) {

    //validando subtítulo APURAÇÃO DO SISTEMA
    cy.get('#frmApuracaoSistema_GrupoApuracao_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' APURAÇÃO DO SISTEMA ')

    //validando informativo do campo Dinheiro
    cy.get('mat-label')
        .should('exist')
        .and('be.visible')
        .should('contain.text', 'Dinheiro')

    //validando campo Dinheiro
    cy.get('#frmApuracaoSistema_Dinheiro_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //validando informativo do campo Cheque
    cy.get('mat-label')
        .should('exist')
        .and('be.visible')
        .should('contain.text', 'Cheque')

    //validando campo Cheque
    cy.get('#frmApuracaoSistema_Cheque_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //validando informativo do campo Cartão
    cy.get('mat-label')
        .should('exist')
        .and('be.visible')
        .should('contain.text', 'Cartão')

    //validando campo Cartão
    cy.get('#frmApuracaoSistema_Cartao_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //validando informativo do campo Crediário / Boleto / Pix-cobrança
    cy.get('mat-label')
        .should('exist')
        .and('be.visible')
        .should('contain.text', 'Crediário / Boleto / Pix-cobrança')

    //validando campo Crediário / Boleto / Pix-cobrança
    cy.get('#frmApuracaoSistema_Crediario_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //validando informativo do campo Carteira digital (PIX)
    cy.get('mat-label')
        .should('exist')
        .and('be.visible')
        .should('contain.text', 'Carteira digital (PIX)')

    //validando campo Carteira digital (PIX)
    cy.get('#frmApuracaoSistema_CarteiraDigital_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
}

//validando parte CONTAGEM MANUAL, do modal APURAÇÃO DO SISTEMA
export function contagemManualModalApuracaoSistema (selector) {

    //validando subtítulo CONTAGEM MANUAL
    cy.get('#frmApuracaoSistema_GrupoContagem_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' CONTAGEM MANUAL ')

    //validando informativo do campo Dinheiro #ApuracaoSistema.ContagemDinheiroAbertura
    cy.contains('mat-label', 'Dinheiro')
        .should('exist')
        .and('be.visible')

    //validando campo Dinheiro
    cy.get('#frmApuracaoSistema_ContagemDinheiro_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //validando informativo do campo Cheque
    cy.contains('mat-label', 'Cheque')
        .should('exist')
        .and('be.visible')

    //validando campo Cheque
    cy.get('#frmApuracaoSistema_ContagemCheque_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //validando informativo do campo Cartão
    cy.contains('mat-label', 'Cartão')
        .should('exist')
        .and('be.visible')

    //validando campo Cartão
    cy.get('#frmApuracaoSistema_ContagemCartao_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //validando informativo do campo Crediário / Boleto / Pix-cobrança
    cy.contains('mat-label', 'Crediário / Boleto / Pix-cobrança')
        .should('exist')
        .and('be.visible')

    //validando campo Crediário / Boleto / Pix-cobrança
    cy.get('#frmApuracaoSistema_ContagemCrediario_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //validando informativo do campo Carteira digital (PIX)
    cy.contains('mat-label', 'Carteira digital (PIX)')
        .should('exist')
        .and('be.visible')

    //validando campo Carteira digital (PIX)
    cy.get('#frmApuracaoSistema_ContagemCarteiraDigital_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //validando informativo do  campo Dinheiro para próxima abertura (gaveta)
    cy.contains('mat-label', ' Dinheiro para próxima abertura (gaveta) ')
        .should('exist')
        //.and('be.visible')

    //validando campo Dinheiro para próxima abertura (gaveta)
    cy.get('#frmApuracaoSistema_ContagemDinheiroAbertura_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //botão Concluir
    cy.get('#frmApuracaoSistema_btnConcluirContagem_material_button > .mat-button-wrapper')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain.text', 'Concluir')
        
    //validando cor do botão Concluir
    cy.get('#frmApuracaoSistema_btnConcluirContagem_material_button')
        .should('have.css', 'background-color', 'rgb(76, 175, 80)')

}

//botao do campo dinheiro (modal CONTADOR AUXILIAR), do modal APURAÇÃO DO SISTEMA
export function botaoCampoDinheiroApuracaoSistema (selector) {

    //clicando no botão do campo dinheiro - CONTADOR AUXILIAL
    cy.get('#frmApuracaoSistema_BtnContador_material_button > .mat-button-wrapper > .mat-icon')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()

    //título do modal CONTADOR AUXILIAR
    cy.get('#frmApuracaoSistema_ModalContadorAuxiliar_modal_dynamic_header_label')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' Contador Auxiliar ')

    //botão expandir nodal CONTADOR AUXILIAR
    cy.get('#frmApuracaoSistema_ModalContadorAuxiliar_modal_dynamic_header_close_button > .modal-dialog__expand-button > .material-icons')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //botão X modal CONTADOR AUXILIAR
    cy.get('#frmApuracaoSistema_ModalContadorAuxiliar_modal_dynamic_header_close_button > .modal-dialog__close-button > .material-icons')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //coluna QUANTIDADE DE CÉDULAS - modal CONTADOR AUXILIAR
    cy.get('#frmContadorAuxiliar_GrupoQuantidadeCedulas_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' QUANTIDADE DE CÉDULAS ')

    //informativo campo 2,00 - coluna QUANTIDADE DE CÉDULAS
    cy.get('mat-label.mat-form-field__mat-label--enabled')
        .contains('2,00')
        .should('exist')
    
    //campo 2,00 - coluna QUANTIDADE DE CÉDULAS
    cy.get('#frmContadorAuxiliar_CedulasDois_input_number')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        
    //campo 2,00 ao lado do campo - coluna QUANTIDADE DE CÉDULAS
    cy.get('#frmContadorAuxiliar_CedulasTotalDois_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //informativo campo 5,00 - coluna QUANTIDADE DE CÉDULAS
    cy.get('mat-label.mat-form-field__mat-label--enabled')
        .contains('5,00')
        .should('exist')
    
    //campo 5,00 - coluna QUANTIDADE DE CÉDULAS
    cy.get('#frmContadorAuxiliar_CedulasCinco_input_number')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        
    //campo 5,00 ao lado do campo - coluna QUANTIDADE DE CÉDULAS
    cy.get('#frmContadorAuxiliar_CedulasTotalCinco_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //informativo campo 10,00 - coluna QUANTIDADE DE CÉDULAS
    cy.get('mat-label.mat-form-field__mat-label--enabled')
        .contains('10,00')
        .should('exist')
    
    //campo 10,00 - coluna QUANTIDADE DE CÉDULAS
    cy.get('#frmContadorAuxiliar_CedulasDez_input_number')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        
    //campo 10,00 ao lado do campo - coluna QUANTIDADE DE CÉDULAS
    cy.get('#frmContadorAuxiliar_CedulasTotalDez_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //informativo campo 20,00 - coluna QUANTIDADE DE CÉDULAS
    cy.get('mat-label.mat-form-field__mat-label--enabled')
        .contains('20,00')
        .should('exist')
    
    //campo 20,00 - coluna QUANTIDADE DE CÉDULAS
    cy.get('#frmContadorAuxiliar_CedulasVinte_input_number')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        
    //campo 20,00 ao lado do campo - coluna QUANTIDADE DE CÉDULAS
    cy.get('#frmContadorAuxiliar_CedulasTotalVinte_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //informativo campo 50,00 - coluna QUANTIDADE DE CÉDULAS
    cy.get('mat-label.mat-form-field__mat-label--enabled')
        .contains('50,00')
        .should('exist')
    
    //campo 50,00 - coluna QUANTIDADE DE CÉDULAS
    cy.get('#frmContadorAuxiliar_CedulasCinquenta_input_number')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        
    //campo 50,00 ao lado do campo - coluna QUANTIDADE DE CÉDULAS
    cy.get('#frmContadorAuxiliar_CedulasTotalCinquenta_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //informativo campo 100,00 - coluna QUANTIDADE DE CÉDULAS
    cy.get('mat-label.mat-form-field__mat-label--enabled')
        .contains('100,00')
        .should('exist')
    
    //campo 100,00 - coluna QUANTIDADE DE CÉDULAS
    cy.get('#frmContadorAuxiliar_CedulasCem_input_number')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        
    //campo 100,00 ao lado do campo - coluna QUANTIDADE DE CÉDULAS
    cy.get('#frmContadorAuxiliar_CedulasTotalCem_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //informativo campo 200,00 - coluna QUANTIDADE DE CÉDULAS
    cy.get('mat-label.mat-form-field__mat-label--enabled')
        .contains('200,00')
        .should('exist')
    
    //campo 200,00 - coluna QUANTIDADE DE CÉDULAS
    cy.get('#frmContadorAuxiliar_CedulasDuzentos_input_number')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        
    //campo 200,00 ao lado do campo - coluna QUANTIDADE DE CÉDULAS
    cy.get('#frmContadorAuxiliar_CedulasTotalDuzentos_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Texto Total em células - coluna QUANTIDADE DE CÉDULAS
    cy.get('#frmContadorAuxiliar_CedulasTotal_sbm-label-identifier')
        .should('exist')
        .and('be.visible')
        .and('contain', 'Total em cédulas:')

    //coluna QUANTIDADE DE MOEDAS - modal CONTADOR AUXILIAR
    cy.get('#frmContadorAuxiliar_GrupoQuantidadeMoedas_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' QUANTIDADE DE MOEDAS ')

    //informativo campo 0,01 - coluna QUANTIDADE DE MOEDAS
    cy.get('mat-label.mat-form-field__mat-label--enabled')
        .contains('0,01')
        .should('exist')
    
    //campo 0,01 - coluna QUANTIDADE DE MOEDAS
    cy.get('#frmContadorAuxiliar_MoedasUm_input_number')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        
    //campo 0,01 ao lado do campo - coluna QUANTIDADE DE MOEDAS
    cy.get('#frmContadorAuxiliar_MoedasTotalUm_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //informativo campo 0,05 - coluna QUANTIDADE DE MOEDAS
    cy.get('mat-label.mat-form-field__mat-label--enabled')
        .contains('0,05')
        .should('exist')
    
    //campo 0,05 - coluna QUANTIDADE DE MOEDAS
    cy.get('#frmContadorAuxiliar_MoedasCinco_input_number')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        
    //campo 0,05 ao lado do campo - coluna QUANTIDADE DE MOEDAS
    cy.get('#frmContadorAuxiliar_MoedasTotalCinco_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //informativo campo 0,10 - coluna QUANTIDADE DE MOEDAS
    cy.get('mat-label.mat-form-field__mat-label--enabled')
        .contains('0,10')
        .should('exist')
    
    //campo 0,10 - coluna QUANTIDADE DE MOEDAS
    cy.get('#frmContadorAuxiliar_MoedasDez_input_number')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        
    //campo 0,10 ao lado do campo - coluna QUANTIDADE DE MOEDAS
    cy.get('#frmContadorAuxiliar_MoedasTotalDez_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //informativo campo 0,25 - coluna QUANTIDADE DE MOEDAS
    cy.get('mat-label.mat-form-field__mat-label--enabled')
        .contains('0,25')
        .should('exist')
    
    //campo 0,25 - coluna QUANTIDADE DE MOEDAS
    cy.get('#frmContadorAuxiliar_MoedasVinteCinco_input_number')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        
    //campo 0,25 ao lado do campo - coluna QUANTIDADE DE MOEDAS
    cy.get('#frmContadorAuxiliar_MoedasTotalVinteCinco_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //informativo campo 0,50 - coluna QUANTIDADE DE MOEDAS
    cy.get('mat-label.mat-form-field__mat-label--enabled')
        .contains('0,50')
        .should('exist')
    
    //campo 0,50 - coluna QUANTIDADE DE MOEDAS
    cy.get('#frmContadorAuxiliar_MoedasCinquenta_input_number')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        
    //campo 0,50 ao lado do campo - coluna QUANTIDADE DE MOEDAS
    cy.get('#frmContadorAuxiliar_MoedasTotalCinquenta_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //informativo campo 1,00 - coluna QUANTIDADE DE MOEDAS
    cy.get('mat-label.mat-form-field__mat-label--enabled')
        .contains('1,00')
        .should('exist')
    
    //campo 1,00 - coluna QUANTIDADE DE MOEDAS
    cy.get('#frmContadorAuxiliar_MoedasUmReal_input_number')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        
    //campo 1,00 ao lado do campo - coluna QUANTIDADE DE MOEDAS
    cy.get('#frmContadorAuxiliar_MoedasTotalUmReal_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Texto Total em moedas - coluna QUANTIDADE DE MOEDAS
    cy.get('#frmContadorAuxiliar_MoedasTotal_sbm-label-identifier')
        .should('exist')
        .and('be.visible')
        .and('contain', 'Total em moedas:')

    //modal CONTADOR AUXILIAR - mensagem Total
    cy.get('#frmContadorAuxiliar_Total_sbm-label-identifier')
        .should('exist')
        .and('be.visible')
        .and('contain.text', 'Total:')

    //botão OK
    cy.get('#frmContadorAuxiliar_BtnOK_material_button > .mat-button-wrapper')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain.text', 'OK')
        
    //validando cor do botão OK
    cy.get('#frmContadorAuxiliar_BtnOK_material_button')
        .should('have.css', 'background-color', 'rgb(76, 175, 80)')
        .wait(500)
        .click()

}

//botao do campo cheque (modal CONTADOR AUXILIAR CARTÃO), do modal APURAÇÃO DO SISTEMA
export function botaoCampoCartaoApuracaoSistema (selector) {

    //clicando no botão do campo cartão - CONTADOR AUXILIAR CARTÃO
    cy.get('#frmApuracaoSistema_BtnContadorCartao_material_button > .mat-button-wrapper > .mat-icon')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()

    //título do modal CONTADOR AUXILIAR CARTÃO
    cy.get('#frmApuracaoSistema_ModalContadorAuxiliarCartao_modal_dynamic_header_label')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' Contador auxiliar cartão ')

    //botão expandir modal CONTADOR AUXILIAR CARTÃO
    cy.get('#frmApuracaoSistema_ModalContadorAuxiliarCartao_modal_dynamic_header_close_button > .modal-dialog__expand-button > .material-icons')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //botão X modal CONTADOR AUXILIAR CARTÃO
    cy.get('#frmApuracaoSistema_ModalContadorAuxiliarCartao_modal_dynamic_header_close_button > .modal-dialog__close-button > .material-icons')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //subtítulo APURAÇÃO DO SISTEMA - modal CONTADOR AUXILIAR CARTÃO
    cy.get('#frm_ApuracaoSistemaCartao_grupoApuracaoSistema_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' APURAÇÃO DO SISTEMA ')

    //TEF - coluna APURAÇÃO DO SISTEMA - modal CONTADOR AUXILIAR CARTÃO
    cy.get('#frm_ApuracaoSistemaCartao_rotuloSistemaTef_sbm-label-identifier')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' TEF ')

    //campo TEF - coluna APURAÇÃO DO SISTEMA - modal CONTADOR AUXILIAR CARTÃO
    cy.get('#frm_ApuracaoSistemaCartao_moedaTefSistema_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //POS - coluna APURAÇÃO DO SISTEMA - modal CONTADOR AUXILIAR CARTÃO
    cy.get('#frm_ApuracaoSistemaCartao_rotuloSistemaPos_sbm-label-identifier')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' POS ')

    //campo POS - coluna APURAÇÃO DO SISTEMA - modal CONTADOR AUXILIAR CARTÃO
    cy.get('#frm_ApuracaoSistemaCartao_moedaPosSistema_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Total - coluna APURAÇÃO DO SISTEMA - modal CONTADOR AUXILIAR CARTÃO
    cy.get('#frm_ApuracaoSistemaCartao_rotuloTotalSistema_sbm-label-identifier')
        .should('exist')
        .and('be.visible')
        .and('contain.text', 'Total:')

    //////////////////

    //subtítulo CONTAGEM MANUAL - modal CONTADOR AUXILIAR CARTÃO
    cy.get('#frm_ApuracaoSistemaCartao_grupoContagemManual_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' CONTAGEM MANUAL ')

    //TEF - coluna CONTAGEM MANUAL - modal CONTADOR AUXILIAR CARTÃO
    cy.get('#frm_ApuracaoSistemaCartao_rotuloContagemTef_sbm-label-identifier')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' TEF ')

    //campo TEF - coluna CONTAGEM MANUAL - modal CONTADOR AUXILIAR CARTÃO
    cy.get('#frm_ApuracaoSistemaCartao_moedaTefContagem_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //POS - coluna CONTAGEM MANUAL - modal CONTADOR AUXILIAR CARTÃO
    cy.get('#frm_ApuracaoSistemaCartao_rotuloContagemPos_sbm-label-identifier')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' POS ')

    //campo POS - coluna CONTAGEM MANUAL - modal CONTADOR AUXILIAR CARTÃO
    cy.get('#frm_ApuracaoSistemaCartao_moedaPosContagem_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Total - coluna CONTAGEM MANUAL - modal CONTADOR AUXILIAR CARTÃO
    cy.get('#frm_ApuracaoSistemaCartao_rotuloTotalContagem_sbm-label-identifier')
        .should('exist')
        .and('be.visible')
        .and('contain.text', 'Total:')

    //botão OK
    cy.get('#frm_ApuracaoSistemaCartao_botaoOk_material_button > .mat-button-wrapper')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain.text', 'Ok')
        
    //validando cor do botão OK
    cy.get('#frm_ApuracaoSistemaCartao_botaoOk_material_button')
        .should('have.css', 'background-color', 'rgb(76, 175, 80)')
        .wait(500)
        .click()
}

//botao do campo cheque (modal CONTADOR AUXILIAR CREDIÁRIO), do modal APURAÇÃO DO SISTEMA
export function botaoCampoCrediarioApuracaoSistema (selector) {

    //clicando no botão do campo crediário - CONTADOR AUXILIAR CREDIÁRIO
    cy.get('#frmApuracaoSistema_BtnContagemCrediario_material_button > .mat-button-wrapper > .mat-icon')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()

    //título do modal CONTADOR AUXILIAR CREDIÁRIO
    cy.get('#frmApuracaoSistema_ModalContadorAuxiliarCrediario_modal_dynamic_header_label')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' Contador auxiliar crediário ')

    //botão expandir modal CONTADOR AUXILIAR CREDIÁRIO
    cy.get('#frmApuracaoSistema_ModalContadorAuxiliarCrediario_modal_dynamic_header_close_button > .modal-dialog__expand-button > .material-icons')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //botão X modal CONTADOR AUXILIAR CREDIÁRIO
    cy.get('#frmApuracaoSistema_ModalContadorAuxiliarCrediario_modal_dynamic_header_close_button > .modal-dialog__close-button > .material-icons')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //subtítulo APURAÇÃO DO SISTEMA - modal CONTADOR AUXILIAR CREDIÁRIO
    cy.get('#frm_ApuracaoSistemaCrediario_grupoApuracaoSistema_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' APURAÇÃO DO SISTEMA ')

    //Crediário - coluna APURAÇÃO DO SISTEMA - modal CONTADOR AUXILIAR CREDIÁRIO
    cy.get('#frm_ApuracaoSistemaCrediario_rotuloSistemaCrediario_sbm-label-identifier')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' Crediário ')

    //campo Crediário - coluna APURAÇÃO DO SISTEMA - modal CONTADOR AUXILIAR CREDIÁRIO
    cy.get('#frm_ApuracaoSistemaCrediario_moedaCrediarioSistema_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Boleto - coluna APURAÇÃO DO SISTEMA - modal CONTADOR AUXILIAR CREDIÁRIO
    cy.get('#frm_ApuracaoSistemaCrediario_rotuloSistemaBoleto_sbm-label-identifier')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' Boleto ')

    //campo Boleto - coluna APURAÇÃO DO SISTEMA - modal CONTADOR AUXILIAR CREDIÁRIO
    cy.get('#frm_ApuracaoSistemaCrediario_moedaBoletoSistema_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Pix - cobrança - coluna APURAÇÃO DO SISTEMA - modal CONTADOR AUXILIAR CREDIÁRIO
    cy.get('#frm_ApuracaoSistemaCrediario_rotuloSistemaPixCobranca_sbm-label-identifier')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' Pix - cobrança ')

    //campo Pix - cobrança - coluna APURAÇÃO DO SISTEMA - modal CONTADOR AUXILIAR CREDIÁRIO
    cy.get('#frm_ApuracaoSistemaCrediario_moedaPixCobrancaSistema_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Total - coluna APURAÇÃO DO SISTEMA - modal CONTADOR AUXILIAR CREDIÁRIO
    cy.get('#frm_ApuracaoSistemaCrediario_rotuloTotalSistema_sbm-label-identifier')
        .should('exist')
        .and('be.visible')
        .and('contain.text', 'Total:')

    //subtítulo CONTAGEM MANUAL - modal CONTADOR AUXILIAR CREDIÁRIO
    cy.get('#frm_ApuracaoSistemaCrediario_grupoContagemManual_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' CONTAGEM MANUAL ')

    //Crediário - coluna CONTAGEM MANUAL - modal CONTADOR AUXILIAR CREDIÁRIO
    cy.get('#frm_ApuracaoSistemaCrediario_rotuloContagemCrediario_sbm-label-identifier')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' Crediário ')

    //campo Crediário - coluna CONTAGEM MANUAL - modal CONTADOR AUXILIAR CREDIÁRIO
    cy.get('#frm_ApuracaoSistemaCrediario_moedaCrediarioContagem_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Boleto - coluna CONTAGEM MANUAL - modal CONTADOR AUXILIAR CREDIÁRIO
    cy.get('#frm_ApuracaoSistemaCrediario_rotuloContagemBoleto_sbm-label-identifier')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' Boleto ')

    //campo Boleto - coluna CONTAGEM MANUAL - modal CONTADOR AUXILIAR CREDIÁRIO
    cy.get('#frm_ApuracaoSistemaCrediario_moedaBoletoContagem_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Pix - cobrança - coluna CONTAGEM MANUAL - modal CONTADOR AUXILIAR CREDIÁRIO
    cy.get('#frm_ApuracaoSistemaCrediario_rotuloContagemPixCobranca_sbm-label-identifier')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' Pix - cobrança ')

    //campo Pix - cobrança - coluna CONTAGEM MANUAL - modal CONTADOR AUXILIAR CREDIÁRIO
    cy.get('#frm_ApuracaoSistemaCrediario_moedaPixCobrancaContagem_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Total - coluna CONTAGEM MANUAL - modal CONTADOR AUXILIAR CREDIÁRIO
    cy.get('#frm_ApuracaoSistemaCrediario_rotuloTotalContagem_sbm-label-identifier')
        .should('exist')
        .and('be.visible')
        .and('contain.text', 'Total:')

    //botão OK
    cy.get('#frm_ApuracaoSistemaCrediario_botaoOk_material_button > .mat-button-wrapper')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain.text', 'OK')
        
    //validando cor do botão OK
    cy.get('#frm_ApuracaoSistemaCrediario_botaoOk_material_button')
        .should('have.css', 'background-color', 'rgb(76, 175, 80)')
        .wait(500)
        .click()
}

//botao do campo carteira (modal CONTADOR AUXILIAR CARTEIRA DIGITAL (PIX)), do modal APURAÇÃO DO SISTEMA
export function botaoCampoPixApuracaoSistema (selector) {

    //clicando no botão do campo carteira - CONTADOR AUXILIAR CARTEIRA DIGITAL (PIX)
    cy.get('#frmApuracaoSistema_BtnContagemCarteiraDigital_material_button > .mat-button-wrapper > .mat-icon')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()

    //título do modal CONTADOR AUXILIAR CARTEIRA DIGITAL (PIX)
    cy.get('#frmApuracaoSistema_ModalContadorAuxiliarCarteiraDigital_modal_dynamic_header_label')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' Contador auxiliar carteira digital (PIX) ')

    //botão expandir modal CONTADOR AUXILIAR CARTEIRA DIGITAL (PIX)
    cy.get('#frmApuracaoSistema_ModalContadorAuxiliarCarteiraDigital_modal_dynamic_header_close_button > .modal-dialog__expand-button > .material-icons')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //botão X modal CONTADOR AUXILIAR CARTEIRA DIGITAL (PIX)
    cy.get('#frmApuracaoSistema_ModalContadorAuxiliarCarteiraDigital_modal_dynamic_header_close_button > .modal-dialog__expand-button > .material-icons')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //subtítulo APURAÇÃO DO SISTEMA - modal CONTADOR AUXILIAR CARTEIRA DIGITAL (PIX)
    cy.get('#frm_ApuracaoSistemaCarteiraDigital_grupoApuracaoSistema_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' APURAÇÃO DO SISTEMA ')

    //TEF - coluna APURAÇÃO DO SISTEMA - modal CONTADOR AUXILIAR CARTEIRA DIGITAL (PIX)
    cy.get('#frm_ApuracaoSistemaCarteiraDigital_rotuloPix_sbm-label-identifier')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' TEF ')

    //campo TEF - coluna APURAÇÃO DO SISTEMA - modal CONTADOR AUXILIAR CARTEIRA DIGITAL (PIX)
    cy.get('#frm_ApuracaoSistemaCarteiraDigital_moedaPix_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //POS - coluna APURAÇÃO DO SISTEMA - modal CONTADOR AUXILIAR CARTEIRA DIGITAL (PIX)
    cy.get('#frm_ApuracaoSistemaCarteiraDigital_rotuloPixPos_sbm-label-identifier')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' POS ')

    //campo POS - coluna APURAÇÃO DO SISTEMA - modal CONTADOR AUXILIAR CARTEIRA DIGITAL (PIX)
    cy.get('#frm_ApuracaoSistemaCarteiraDigital_moedaPixPos_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Total - coluna APURAÇÃO DO SISTEMA - modal CONTADOR AUXILIAR CARTEIRA DIGITAL (PIX)
    cy.get('#frm_ApuracaoSistemaCarteiraDigital_rotuloTotalSistema_sbm-label-identifier')
        .should('exist')
        .and('be.visible')
        .and('contain.text', 'Total:')

    //////////////////

    //subtítulo CONTAGEM MANUAL - modal CONTADOR AUXILIAR CARTEIRA DIGITAL (PIX)
    cy.get('#frm_ApuracaoSistemaCarteiraDigital_grupoContagemManual_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' CONTAGEM MANUAL ')

    //TEF - coluna CONTAGEM MANUAL - modal CONTADOR AUXILIAR CARTEIRA DIGITAL (PIX)
    cy.get('#frm_ApuracaoSistemaCarteiraDigital_rotuloPixContagem_sbm-label-identifier')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' TEF ')

    //campo TEF - coluna CONTAGEM MANUAL - modal CONTADOR AUXILIAR CARTEIRA DIGITAL (PIX)
    cy.get('#frm_ApuracaoSistemaCarteiraDigital_moedaPixContagem_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //POS - coluna CONTAGEM MANUAL - modal CONTADOR AUXILIAR CARTEIRA DIGITAL (PIX)
    cy.get('#frm_ApuracaoSistemaCarteiraDigital_rotuloPixPosContagem_sbm-label-identifier')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' POS ')

    //campo POS - coluna CONTAGEM MANUAL - modal CONTADOR AUXILIAR CARTEIRA DIGITAL (PIX)
    cy.get('#frm_ApuracaoSistemaCarteiraDigital_moedaPixPosContagem_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Total - coluna CONTAGEM MANUAL - modal CONTADOR AUXILIAR CARTEIRA DIGITAL (PIX)
    cy.get('#frm_ApuracaoSistemaCarteiraDigital_rotuloTotalContagem_sbm-label-identifier')
        .should('exist')
        .and('be.visible')
        .and('contain.text', 'Total:')

    //botão OK
    cy.get('#frm_ApuracaoSistemaCarteiraDigital_botaoOk_material_button > .mat-button-wrapper')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain.text', 'Ok')
        
    //validando cor do botão OK
    cy.get('#frm_ApuracaoSistemaCarteiraDigital_botaoOk_material_button')
        .should('have.css', 'background-color', 'rgb(76, 175, 80)')
        .wait(500)
        .click()
}

//botão concluir sem passar informações sobre a APURAÇÃO DO SISTEMA
export function clicarConcluirApuracao (selector) {

    //botão Concluir
    cy.get('#frmApuracaoSistema_btnConcluirContagem_material_button > .mat-button-wrapper')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', ' Concluir ')
        
    //validando cor do botão Concluir
    cy.get('#frmApuracaoSistema_btnConcluirContagem_material_button')
        .should('have.css', 'background-color', 'rgb(76, 175, 80)')
        .wait(500)
        .click()
}

//escolhendo Motivo da diferença e colocar observação no campo para abrir o caixa 
export function escolherFaltaMotivoDiferenca (selector) {

    const observacao_campo = 'teste campo observação'

    //validando texto "Motivo da diferença"
    cy.contains('Motivo da diferença')
        .should('exist')

    //clicando para aparecerem os motivos
    cy.get('#frmApuracaoSistema_Motivo_dropdown')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()

    //escolher opção FALTA
    cy.contains('FALTA')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()

    //valicando campo de observação no Motivo da diferença
    cy.get('#frmApuracaoSistema_Observacoes_input_cep')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.value', '')
        .type(observacao_campo)
        .wait(200)
        .and('have.value', observacao_campo)
}

//clicando no botão Autenticar o responsável
export function clicarAutenticarResponsavel (selector) {

    //botão Autenticar o responsável
    cy.get('#frmApuracaoSistema_BtnLoginGestor_material_button > .mat-button-wrapper')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', ' Autenticar o responsável ')
        
    //validando cor do botão Autenticar o responsável
    cy.get('#frmApuracaoSistema_BtnLoginGestor_material_button')
        .click()
}

//autenticando responvável - modal LOGIN DO RESPONSÁVEL
export function autenticarResponsavelAbrirCaixa (selector) {

    const usuario_responsavel = 'lucas.camargo'
    const senha_responsavel = '@Lcn1998'

    //título do modal
    cy.get('#frmApuracaoSistema_ModalLoginGestor_modal_dynamic_header_label')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' Login do Responsável ')

    //botão X do modal
    cy.get('#frmApuracaoSistema_ModalLoginGestor_modal_dynamic_header_close_button > .modal-dialog__close-button > .material-icons')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //subtítulo do modal
    cy.get('#frmLogin_Titulo_sbm-label-identifier')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' Responsável ')

    //campo usuário - informativo
    cy.contains('Usuário')
        .should('exist')
        .and('be.visible')

    //campo usuário
    cy.get('#frmLogin_Usuario > section > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .type(usuario_responsavel)

    //campo senha - informativo
    cy.contains('Senha')
        .should('exist')
        //.and('be.visible')

    //campo senha
    cy.get('#frmLogin_Senha_input_password')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .type(senha_responsavel)

    //ícone olhos para ver a senha
    cy.get('#frmLogin_Senha_input_password_button_show_toggle')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //botão Validar
    cy.get('#frmLogin_BtnDesbloquear_material_button > .mat-button-wrapper')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', ' Validar ')
        
    //validando cor do botão Validar
    cy.get('#frmLogin_BtnDesbloquear_material_button')
        .should('have.css', 'background-color', 'rgb(76, 175, 80)')
        .wait(500)
        .click()

}

//botão Finalizar para abrir o caixa
export function clicarBotaoFinalizarAbertura (selector) {

    //ícone botão Finalizar
    cy.get('#frmApuracaoSistema_BtnFinalizar_material_button > .mat-button-wrapper > .mat-icon')
        .should('exist')
        .and('be.visible')

    //botão Finalizar
    cy.get('#frmApuracaoSistema_BtnFinalizar_material_button > .mat-button-wrapper')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain.text', ' Finalizar ')
        
    //validando cor do botão Finalizar
    cy.get('#frmApuracaoSistema_BtnFinalizar_material_button')
        .should('have.css', 'background-color', 'rgb(76, 175, 80)')
        .wait(500)
        .click()
}

//mensagem de aviso após autenticar responsável "Impressão realizada com sucesso!"
export function messImpressaoSucesso (selector) {

    //card 
    cy.get('.sbm-user-notifier-dialog > :nth-child(1)')
        .should('exist')
        .and('be.visible')

    //mensagem
    cy.get(':nth-child(1) > .mat-card-content')
        .should('exist')
        .and('be.visible')
        .and('contain', 'Impressão realizada com sucesso!')
}

//mensagem de aviso após autenticar responsável "O caixa foi fechado com sucesso!"
export function messCaixaFechadoSucesso (selector) {

    //card 
    cy.get('.sbm-user-notifier-dialog > :nth-child(2)')
        .should('exist')
        .and('be.visible')

    //mensagem
    cy.get(':nth-child(2) > .mat-card-content')
        .should('exist')
        .and('be.visible')
        .and('contain', 'O caixa foi aberto com sucesso!')
}

//Abrir caixa passando Valor e Observações
export function valorAbrirCaixa (selector) {

    const valor_abrir_caixa = '1000'
    const observacao_valor = 'teste campo observação'

    //título Abrir caixa
    cy.get('#frmAbrirCaixa_Titulo_sbm-label-identifier')
        .should('exist')
        .and('be.visible')
        .and('contain.text', 'Abrir caixa')

    //informativo campo Valor
    cy.contains('Valor')
        .should('exist')
        .and('be.visible')

    //campo Valor
    cy.get('#frmAbrirCaixa_Valor_input_money')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .type(valor_abrir_caixa)
        .should('have.value', valor_abrir_caixa)

    //informativo campo Observações
    cy.contains('Observações')
        .should('exist')
        .and('be.visible')

    //campo Observações
    cy.get('#frmAbrirCaixa_Observacoes_input_cep')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .type(observacao_valor)
        .should('have.value', observacao_valor)

    //ícone botão Confirmar
    cy.get('#frmAbrirCaixa_BtnConfirmar_material_button > .mat-button-wrapper > .mat-icon')
        .should('exist')
        .and('be.visible')

    //botão Confirmar
    cy.get('#frmAbrirCaixa_BtnConfirmar_material_button > .mat-button-wrapper')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain.text', ' Confirmar ')
        
    //validando cor do botão Confirmar
    cy.get('#frmAbrirCaixa_BtnConfirmar_material_button')
        .should('have.css', 'background-color', 'rgb(76, 175, 80)')
        .wait(500)
        .click()


}

//validando e clicando no caixa fechado - Fechamento obrigatório do caixa
export function abrirFechamentoObrigatoriaCaixa (selector) {

    //validando mensagem "Fechamento obrigatório do caixa"
    cy.get('#sbm-shorcut-mnu_FecharCaixa > .dashboard-title')
        .scrollIntoView()
        .wait(200)
        .should('exist')
        .and('be.visible')
        .and('contain.text', 'Fechamento obrigatório do caixa')

    //validando imagem 
    cy.get('#sbm-shorcut-mnu_FecharCaixa')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()
}