/// <reference types="cypress" />

describe('Context: Find or Get Elementrs by using different locators', () => {

    
    beforeEach('like @BeforeMethod in TestNG', () => {
        // run before each test case
        cy.clearCookies();
        cy.visit('/login');
    })
   
    it('Check different stratagies', () => {
        // By CSS locator
        cy.get("input[name='username']").type("CydeoStudent"); // every statement creates an object to be interacted and next command 
        //makes operation to the object created at the previous statement
        cy.get("[type='text']").clear(); // to clear what was typed

        cy.get("input").each((item, index, list) => {
            //assert the length of the list is 2
            expect(list).to.have.length(2);
            expect(item).to.have.attr("type");
        })

        // by attribute name:
        cy.get('[type]');

        // by className:
        cy.get('.btn.btn-primary');

        // by id:
        cy.get('#wooden_spoon');
        
        // by text extra afford:
        cy.get('button').should('contain', 'Login').click();
    })
    
    })