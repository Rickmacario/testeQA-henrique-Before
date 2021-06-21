
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

             //Há problemas conhecidos com o login entre a ferramenta cyress e a plataforma Trello
               

        });
});