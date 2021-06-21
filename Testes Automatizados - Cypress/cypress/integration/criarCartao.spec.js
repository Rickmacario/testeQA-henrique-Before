
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

            cy.get('header h2').shoudl('contain', 'Templates mais populares');

            //O usuario devera clicar no quadro a se criar um Cartão

            cy.get('board-tile-details is-badged').click()

            //O usuario deve ter um lista criada, Clicar abaixo dela em "+ Adicionar um Cartão"

            cy.get('js-add-a-card').click

            //Adciionar o titulo do cartão no campo " Insira um titulo para este cartao... "

            cy.get('list-card-composer-textarea js-card-title').type('Cartao Before')

            //Clicar no botao " Adicionar Cartao "

            cy.get('nch-button nch-button--primary confirm mod-compact js-add-card').click()

            //O cartao devera ser criado com o nome selecionado

            cy.get('list-card-title js-card-name').should('contain.text', 'Cartao Before')
         
    });
});