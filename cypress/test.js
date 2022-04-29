describe('Pizza Shop', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza');
    })

    //grabbing elements
    const nameInput = () => cy.get('input[name=name]');
    const testCheckBoxOne = () => cy.get('input[name=olive]');
    const testCheckBoxTwo = () => cy.get('input[name=onion]');
    const testCheckBoxThree = () => cy.get('input[name=garlic]');
    const testCheckBoxFour = () => cy.get('input[name=mushroom]');
    const submitButton = () => cy.get('button');

    it('sanity check', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({});
    })

    //checking for elements
    it('Checking the elements', () => {
        nameInput().should('exist');
        testCheckBoxOne().should('exist')
        testCheckBoxTwo().should('exist')
        testCheckBoxThree().should('exist')
        testCheckBoxFour().should('exist')
        submitButton().should('exist');
        //cy.contains(/submit/i).should('exist');

    })

    describe('Taking the form for a spin', () => {

        it('add text to name box', () => {
            nameInput()
                .type('John Doe')
                .should('have.value', 'John Doe')       
        })

        it('checking the Toppings checkbox', () => {
            testCheckBoxOne().check()
            testCheckBoxOne().should('be.checked');
            testCheckBoxTwo().check();
            testCheckBoxTwo().should('be.checked')
        })

        it('submit the form', () => {
            submitButton().click();
        })
       

    })

})