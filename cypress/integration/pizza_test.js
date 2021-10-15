describe('Pizza App', () =>{
    beforeEach(()=>{
        cy.visit('localhost:3000/pizza')
    })

    const app=()=>cy.get('div[class=App]')
    const nameInput=()=>cy.get('input[name=name]')
    const specialTextInput=()=>cy.get('input[name=specialText]')
    const pepperoniInput=()=>cy.get('input[name=pepperoni]')
    const sausageInput=()=>cy.get('input[name=sausage]')
    const canadianBaconInput=()=>cy.get('input[name=canadianBacon]')
    const onionsInput=()=>cy.get('input[name=onions]')
    const submitButton=()=>cy.get('input[type=submit]')
   

    it('The proper elements exist:', () =>{
        nameInput().should('exist');
        app().should('exist');
        specialTextInput().should('exist');
        pepperoniInput().should('exist');
        sausageInput().should('exist');
        canadianBaconInput().should('exist');
        onionsInput().should('exist');
        submitButton().should('exist');
        
    })

    describe("Text inputs are functioning correctly",()=>{

        it('Can type a name in name input', () => {
            nameInput()
                .should('have.value', '')
                .type('Alex')
                .should('have.value', 'Alex')
        })

        it('Can type special instructions in special text input', () => {
            specialTextInput()
                .should('have.value', '')
                .type('I want extra sauce on half of the pizza')
                .should('have.value', 'I want extra sauce on half of the pizza')
        })
    })
    describe("Submit button works",()=>{

        it('Button submits after required fields',()=>{
            nameInput().type('Alex');
            submitButton().should('not.be.disabled');
            submitButton().click();
            nameInput().should('have.value', '')
        })
    })
})