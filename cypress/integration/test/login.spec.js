/// <reference types="cypress" />

describe('Test Konga Login', ()=>{
    it('Launch the site', ()=>{
        cy.visit('/')
    })
    it('Click the Sign in Icon', ()=>{
        cy.fixture('elementMapper').then((em)=>{
        cy.get(em.signInIcon).should('be.visible').click()
        })
    })
    it('Insert Credentials', ()=>{
        cy.fixture('elementMapper').then((em)=>{
        cy.get(em.emailField).should('be.visible').type(em.emailText)
        cy.get(em.passwordField).should('be.visible').type(em.passwordText)
        })
    })
    it('Click Sign In Button', ()=>{
        cy.fixture('elementMapper').then((em)=>{
        cy.get(em.loginBtn).should('be.visible').click()
        })
    })
})