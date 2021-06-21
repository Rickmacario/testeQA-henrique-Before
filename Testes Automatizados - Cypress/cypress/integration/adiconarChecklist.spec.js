describe('Trello', () => {
    beforeEach(() => cy.visit('https://trello.com/'));

    //Acessar o site https://trello.com/

    it('Realizar Login', () => {

        //Clicar no botao de "Fazer login" ao lado direito da pagina

        cy.get('.btn-link').click()

        //Validar que a frase "Fazer Login no Trello" esteja presente acima dos campos de credenciais 

        cy.contains('Fazer Login no Trello').should('contain.text', 'Fazer Login no Trello')

        //Degitar meu email

        cy.get('#user').type('zly43968@zwoho.com')

        //Aguardar nova tela

        cy.wait(2000)

        //Validar que esta na tela nova atrav�s da frase "Fazer login com a Atlassian" e clicar

        cy.get('#login').should('contain.value', 'Fazer login com a Atlassian').click()

        //Colocar a senha       

        cy.get('#password').type('teste123')

        //Clicar em entrar

        cy.get('#login-submit > .css-1vqao0l > .css-t5emrf > span').click()

        //Usuário deverá estár devidamente logado a partir deste ponto
        //Há problemas conhecidos com o login entre a ferramenta cyress e a plataforma Trello
        //Validar que a frase "Templates mais populares" seja exibido na tela 

        cy.get('header h2').should('contain', 'Templates mais populares');

        //O usuario devera clicar no quadro a se adicionar Checklists aos cartoes

        cy.get('board-tile-details is-badged').click()

        //Clicar no cartao a se adicionar uma checklist

        cy.get('list-card-title js-card-name').click()

        //Clicar na opção ' Checklist ' ao lado direito nas opções mostradas

        cy.get('button-link js-add-checklist-menu').click()

        //Adciionar o titulo da ckecklist desejado, um menu deve ser aberto, 
        //abaixo de "Titulo" no campo 'Checklist' adicionar o titulo desejado a checklist

        cy.get('id-checklist').click().type('ChecklistBefore')

        //Clicar no botão " Adicionar"

        cy.get('nch-button nch-button--primary wide confirm js-add-checklist').click()

        //A Checklist será adicionada ao corpo do cartão

        cy.get('header h3').shoudl('contain.text', 'ChecklistBefore');

    });
});