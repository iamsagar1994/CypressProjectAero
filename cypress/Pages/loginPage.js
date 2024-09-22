import { loginpagelocators } from '../locators/loginPagelocators'

class loginPage {

    visitWebPage() {
        cy.visit('/')
    }
    closeSignUp() {
        cy.get(loginpagelocators.signuppopup).click()
    }
    verifyText(locator,actualvalue){
        cy.verifyText(locator,actualvalue)
    }
}


export const loginPages = new loginPage()                                                      