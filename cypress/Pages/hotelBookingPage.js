import { hotelbookinglocators } from "../locators/hotelBookingLocators";

class hotelbooking {

    SelectHotelTab() {
        cy.get(hotelbookinglocators.hotelTab).eq(1).click();
    }
    SelectHotel(value) {
        cy.get(hotelbookinglocators.whereTo).eq(0).click();
        cy.get(hotelbookinglocators.hotelsearchbox).clear().type(value);
        cy.searchListandclick(hotelbookinglocators.hotelList, value)
    }
    selectBookingDate(fromdate,todate) {
        cy.get(hotelbookinglocators.hotelbookingdatetab).eq(1).click()
        cy.fromdatePicker(hotelbookinglocators.hotelbookingfromdatepicker, fromdate)
        cy.todatePicker(hotelbookinglocators.hotelbookingtodatepicker, todate)
    }
    startHotelSearch() {
        cy.get(hotelbookinglocators.startSearch).click();
    }
    VerifyHotelSearchPage(value) {
        cy.get(hotelbookinglocators.hotelSortOptions).eq(0).should('have.text', value)
    }
    sortHotelsBy(value) {
        cy.wait(5000)

        if (value.includes('Most Popular')) {
            cy.get(hotelbookinglocators.hotelSortOptions).eq(0).click()
        }
        else if (value.includes('Price - Low to High')) {
            cy.get(hotelbookinglocators.hotelSortOptions).eq(1).click()
        }
        else if (value.includes('Price - High to Low')) {
            cy.get(hotelbookinglocators.hotelSortOptions).eq(2).click()
        }
        else if (value.includes('Goibibo Reviews - Highest First')) {
            cy.get(hotelbookinglocators.hotelSortOptions).eq(3).click()
        }
    }
    findcheapesthotel(){
        const prices = [];
        cy.get('.HotelCardV2styles__OfferPrice-sc-6przws-18.cSoWUu').each((val,indexedDB,arr)=>{
           cy.wrap(val).invoke('text').then((priceText)=>{
            const price = parseFloat(priceText.replace(/[^0-9.]/g, '')); 
            prices.push({ indexedDB, price, element: val });
           })
        }).then(()=>{
            const leastPriceHotel = prices.reduce((min, current) => current.price < min.price ? current : min);
            cy.log(`Least price found: $${leastPriceHotel.price}`);
            cy.wrap(leastPriceHotel.element).click()
        })
 
        
    }
}

export const hotelbookings = new hotelbooking()