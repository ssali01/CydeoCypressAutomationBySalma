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
it.skip('Opening a Web Application', () => {
    cy.visit('/registration_form');
})
xit('Test 2', () => {
    expect(false).to.equal(false);
})
it('Test 3', () => {
    expect(false).not.to.equal(true);
})
it('Test 4', () => {
    expect(5).to.equal(5);
})
it('Test 5', () => {
    expect(true).to.equal('5'==5);
})
})