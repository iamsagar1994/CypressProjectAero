import {flightSearchPage} from '../Pages/flightSearchPage';
import {loginPages} from '../Pages/loginPage'
import { loginpagelocators } from '../locators/loginPagelocators';
describe('Flightsearch',()=>{
let flightdata
    before(()=>{
        cy.fixture('flightdata').then((data)=>{
            flightdata = data
        })
    })
    it('Login to Application and verify login is successful', ()=>{
        loginPages.visitWebPage();
        cy.wait(10000)
        loginPages.closeSignUp();
        loginPages.verifyText(loginpagelocators.pageTitle,'Flights');
    })
    it('select one way trip and search for flights', ()=>{
        flightSearchPage.selectTrip(flightdata.TripType)
        flightSearchPage.enterSource(flightdata.Source)
        flightSearchPage.selectTrip(flightdata.TripType)
        flightSearchPage.enterDestination(flightdata.Destination)
    })
})