import { trainbookinglocators } from "../locators/trainBooking";

class trainbooking {

    SelectTrainTab() {
        cy.get(trainbookinglocators.trainTab).eq(2).click();
    }
    Selectfromandtocities(fromvalue, tovalue) {
        cy.get(trainbookinglocators.typeOfService).eq(0).click();
        cy.get(trainbookinglocators.from).eq(0).click()
        cy.get(trainbookinglocators.commontextarea).eq(0).type(fromvalue, { force: true });
        cy.wait(2000)
        cy.searchListandclick(trainbookinglocators.trainList, fromvalue)
        cy.get(trainbookinglocators.typeOfService).eq(0).click();
        cy.get(trainbookinglocators.to).eq(1).click();
        cy.get(trainbookinglocators.commontextarea).eq(0).type(tovalue, { force: true });
        cy.wait(2000)
        cy.searchListandclick(trainbookinglocators.trainList, tovalue)
    }
    selectBookingDate(fromdate, todate) {
        cy.get(trainbookinglocators.trainbookingdatetab).eq(2).click()
        cy.fromdatePicker(trainbookinglocators.trainbookingfromdatepicker, fromdate, trainbookinglocators.arrowRight, trainbookinglocators.arrowleft,trainbookinglocators.dateselector,trainbookinglocators.dateselector)
        // cy.todatePicker(trainbookinglocators.trainbookingtodatepicker, todate, trainbookinglocators.arrowRight, trainbookinglocators.arrowleft)
    }
    startTrainSearch() {
        cy.get(trainbookinglocators.startSearch).click();
    }
    VerifyTrainSearchPage(value) {
        cy.get(trainbookinglocators.trainfromstation).should('contain.text', value)
    }
    logListOfTrainsAvailable(){
        cy.get(trainbookinglocators.listOfTrains).each((val,index,list)=>{

            let text = val.text();

            cy.log(text)
        })
    }
}

export const trainbookings = new trainbooking()