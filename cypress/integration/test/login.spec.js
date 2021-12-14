/// <reference types="cypress" />

describe('Test Konga Login', ()=>{
    it('Launch the site', ()=>{
        cy.openSite()
    })
    it('Click the Sign in Icon', ()=>{
        cy.fixture('elementMapper').then((em)=>{
        cy.clickAnElement(em.signInIcon)
        })
    })
    it('Insert Credentials', ()=>{
        cy.fixture('elementMapper').then((em)=>{
        cy.typeAText(em.emailField, em.emailText)
        cy.typeAText(em.passwordField, em.passwordText)
        })
    })
    it('Click Sign In Button', ()=>{
        cy.fixture('elementMapper').then((em)=>{
        cy.clickAnElement(em.loginBtn)
        })
    })
})