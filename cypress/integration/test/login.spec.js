/// <reference types="cypress" />

describe('Test Konga Login', ()=>{
    before(()=>{
        //run before everything else
        cy.fixture('elementMapper').then((em)=>{
            cy.openSite()
            cy.clickAnElement(em.signInIcon)
            cy.typeAText(em.emailField, em.emailText)
            cy.typeAText(em.passwordField, em.passwordText)
            cy.clickAnElement(em.loginBtn)
        })
    })
   
    
    it('Search for phone', ()=>{
        cy.fixture('elementMapper').then((em)=>{
        cy.clickAnElement(em.searchField)
        cy.typeAText(em.searchField, em.searchText)
        cy.clickAnElement(em.searchIcon)
        })
    })
    it('Select the 4th Item', ()=>{
        cy.fixture('elementMapper').then((em)=>{
        cy.clickAnElement(em.phoneItem)
        cy.clickAnElement(em.buyBtn)
        })
    })
    it('Increment the Item and proceed to checkout', ()=>{
        cy.fixture('elementMapper').then((em)=>{
       // cy.clickAnElement(em.incrementBtn)
       //cy.clickAnElement(em.incrementBtn)
        cy.clickAnElement(em.contToCheckout)
        
        })
    })
    it('Place Order', ()=>{
        cy.fixture('elementMapper').then((em)=>{
        cy.clickAnElement(em.payOnDelievry)
        cy.clickAnElement(em.placeOrderBtn)
        })
    })
})