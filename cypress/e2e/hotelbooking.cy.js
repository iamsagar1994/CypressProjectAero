import { loginPages } from "../Pages/loginPage";
import { hotelbookings } from "../Pages/hotelBookingPage";
describe('Hotel Booking', () => {
let hoteldata;

before(()=>{
    cy.fixture('hoteldata').then((data)=>{
        hoteldata=data
    })
    cy.clearCookies();
})
    it('Login to Application and verify login is successful', () => {
        loginPages.visitWebPage();
        cy.wait(10000)
        loginPages.closeSignUp();
    })
    it('Search For Hotels', () => {
        hotelbookings.SelectHotelTab();
        hotelbookings.SelectHotel(hoteldata.hotelName)
        hotelbookings.startHotelSearch(hoteldata.FromBookingDate,hoteldata.ToBookingDate);
    })
    it('Verify Hotel Search Landing page',()=>{
        hotelbookings.VerifyHotelSearchPage(hoteldata.SearchPage)
    })
    it('Sort Hotels',()=>{
        hotelbookings.sortHotelsBy(hoteldata.SortBy)
    })
    it('Find Cheapest Hotel and navigate',()=>{
        hotelbookings.findcheapesthotel()
    })
})