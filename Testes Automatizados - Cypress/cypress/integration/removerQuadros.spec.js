
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

            //O usuario devera clicar no quadro a ser removido

            cy.get('board-tile-details is-badged').click()
           
            //No quadro a ser removido, clicar na opção " Mostrar Menu"

            cy.get('board-header-btn-text').click()

            //Clicar em "Mais" dentro da opçao mostrar menu

            cy.get('board-menu-navigation-item-link js-open-more').click

            //Clicar em "Fechar Quadro..."
            
            cy.get('board-menu-navigation-item-link js-close-board').click

            //Clicar em "Fechar" no pop up que aparecer abaixo de "Fechar Quadro..."

            cy.get('js-confirm full nch-button nch-button--danger').click

            //Deverá aparecer uma mensagem com o nome do quadro e "Quadro Before está fechado."

            cy.get('header h1').shoudl('contain', 'Quadro Before está fechado.');


    });
});