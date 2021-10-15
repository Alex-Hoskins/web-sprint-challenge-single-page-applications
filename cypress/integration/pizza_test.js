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

    // describe("Checkbox inputs are functioning correctly",()=>{

    //     it('Can check the box in terms input', () => {
    //         termsInput()
    //             .check()  
    //             .should('be.checked')
    //             .uncheck()
    //             .should('not.be.checked');
    //     })
    // })
    describe("Submit button works",()=>{

        it('Button submits after required fields',()=>{
            nameInput().type('Alex');
            submitButton().should('not.be.disabled');
            submitButton().click();
            nameInput().should('have.value', '')
        })
    })
    

    // describe("Error messages populate after validation",()=>{

    //     it('Error populates if name field is too short', () => {
    //         nameInput().type('Al');
    //         cy.contains('Name must be 3 or more characters long!');
    //     })
    //     it('Error populates if password field is too short', () => {
    //         passwordInput().type('1234567');
    //         cy.contains('Password must be 8 or more characters long!');
    //     })
    //     it('Error populates if their is not an appropriate email', () => {
    //         emailInput().type('alex@alex');
    //         cy.contains('Must be a valid email address!');
    //     })
    //     it('Error populates if terms field is unchecked', () => {
    //         termsInput().uncheck();
    //         cy.contains('Please read the terms of service and check the box when you are done!');
    //     })
       
    // })
})