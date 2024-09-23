import { loginPages } from "../Pages/loginPage";
import { trainbookings } from "../Pages/trainBooking";
describe('Train Booking', () => {
let trainBookingData;

before(()=>{

    cy.fixture('trainBookingData').then((data)=>{
        trainBookingData = data
    })
})
    it('Login to Application and verify login is successful', () => {
        loginPages.visitWebPage();
        cy.wait(10000)
        loginPages.closeSignUp();
    })
    it('Search For Trains', () => {
        trainbookings.SelectTrainTab();
        cy.wait(4000)
        trainbookings.Selectfromandtocities(trainBookingData.DepartureCity,trainBookingData.ArrivalCity)
        trainbookings.selectBookingDate(trainBookingData.DepartureDate,trainBookingData.DepartureDate)
        trainbookings.startTrainSearch()
    })
    it('Verify Train Search Landing page',()=>{
        trainbookings.VerifyTrainSearchPage(trainBookingData.LandingPageVerify)
    })
    it('Log list of available trains',(()=>{
        trainbookings.logListOfTrainsAvailable()
    }))
})