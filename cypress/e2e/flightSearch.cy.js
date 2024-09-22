import {flightSearchPage} from '../Pages/flightSearchPage';
import {loginPages} from '../Pages/loginPage'
import { loginpagelocators } from '../locators/loginPagelocators';
describe('Flightsearch',()=>{

    it('Login to Application and verify login is successful', ()=>{
        loginPages.visitWebPage();
        cy.wait(10000)
        loginPages.closeSignUp();
        loginPages.verifyText(loginpagelocators.pageTitle,'Flights');
    })
    it('select one way trip and search for flights', ()=>{
        flightSearchPage.selectTrip('Oneway')
        flightSearchPage.enterSource('Bengaluru')
        flightSearchPage.selectTrip('Oneway')
        flightSearchPage.enterDestination('New York-LaGuardia Apt, United States')
        // flightSearch.enterDestination('London')

    })
})