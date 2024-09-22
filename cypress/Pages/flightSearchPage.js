import { flightSearchLocators } from '../locators/flightSearchLocators';
class flightSearch {
    selectTrip(tripType) {
        if (tripType == 'Oneway'){
            cy.get(flightSearchLocators.triptypeselection).eq(0).click();
        }
        else if(tripType == 'Round-Trip'){
            cy.get(flightSearchLocators.triptypeselection).eq(1).click();
        }
       else
       {
        cy.get(flightSearchLocators.triptypeselection).eq(2 ).click();
       }
    }   
    enterSource(source){
        cy.get(flightSearchLocators.from).eq(0).type(source)
        cy.searchListandclick(flightSearchLocators.citylist,source)
    }
    enterDestination(destination){
        cy.get(flightSearchLocators.from).eq(1).type(destination)
        cy.searchListandclick(flightSearchLocators.citylist,destination)
    }
}

export const flightSearchPage = new flightSearch()

