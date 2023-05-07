/// <reference types="cypress" />

describe('Context: My First Tests with Cypress', () => {

before('Like @BeforeClass in TestNG', () => {
    // runs once before all test cases in this Describe Block
})
beforeEach('like @BeforeMethod in TestNG', () => {
    // run before each test case
    cy.clearCookies();
})
after('like @AfterClass in TestNG', () => {
    // run once after all tests finished
})
afterEach('like @AfterMethod in TestNG', () => {
    // run after each test case
})
it('Opening a Web Application', () => {
    cy.visit('/registration_form');
    
 
})

})