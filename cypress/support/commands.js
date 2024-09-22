// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('verifyText', (locator, value) => {
    cy.get(locator).should('have.text', value)
})

Cypress.Commands.add('searchListandclick', (locator, value) => {
    let breakloopflag = 1
    cy.get(locator).each(($el, index, $list) => {
        if (breakloopflag == 0) {
            return false
        }
        if ($el.text().includes(value)) {
            breakloopflag = 0;
            cy.get(locator).eq(index).click({ force: true }).then(function () {

                return false
            })
        }

    })
})

Cypress.Commands.add('fromdatePicker', (locator, date) => {
    const dateobject = new Date(date);
    const targetdate = dateobject.getDate();
    const targetmonth = dateobject.getMonth();
    const targetyear = dateobject.getFullYear();
    function getCurrentMonthandYear() {
        return cy.get(locator).eq(0).invoke('text').then((value) => {
            const [cuurentMonth, currentYear] = value.split(' ');
            return {

                currentMonth: new Date(Date.parse(`${cuurentMonth} 1, 2024`)).getMonth(),
                currentYear: parseInt(currentYear)
            }
        })
    }
    function navigatetoTargetMonthandYear() {
        getCurrentMonthandYear().then(({ currentMonth, currentYear }) => {
            if (currentYear < targetyear || currentMonth < targetmonth) {
                cy.get('.ArrowRightIcon-sc-t9vcrx-0.eStYCV').click({ force: true });
                navigatetoTargetMonthandYear()
            }
            else if (currentYear > targetyear || currentMonth > targetmonth) {
                cy.get('.ArrowLeftIcon-sc-1m17nn5-0.lgNZUr').click();
                navigatetoTargetMonthandYear()
            }
        })
    }
    navigatetoTargetMonthandYear();
    cy.get('.date_is_selectable_true').each((datepicked, iterate, list) => {
        cy.log(datepicked.text());
        cy.log(targetdate);
        if (datepicked.text().includes(targetdate)) {
            cy.get('.date_is_selectable_true').eq(iterate).click({ force: true }).then(function () {
                return false
            })
            return false
        }
    })
})


//To date picker

Cypress.Commands.add('todatePicker', (locator, date) => {
    const dateobject = new Date(date);
    const targetdate = dateobject.getDate();
    const targetmonth = dateobject.getMonth();
    const targetyear = dateobject.getFullYear();
    function getCurrentMonthandYear() {
        return cy.get(locator).eq(0).invoke('text').then((value) => {
            const [cuurentMonth, currentYear] = value.split(' ');
            return {

                currentMonth: new Date(Date.parse(`${cuurentMonth} 1, 2024`)).getMonth(),
                currentYear: parseInt(currentYear)
            }
        })
    }
    function navigatetoTargetMonthandYear2() {
        getCurrentMonthandYear().then(({ currentMonth, currentYear }) => {
            if (currentYear < targetyear || currentMonth < targetmonth) {
                cy.get('.ArrowRightIcon-sc-t9vcrx-0.eStYCV').click({ force: true });
                navigatetoTargetMonthandYear2()
            }
            else if (currentYear > targetyear || currentMonth > targetmonth) {
                cy.get('.ArrowLeftIcon-sc-1m17nn5-0.lgNZUr').click();
                navigatetoTargetMonthandYear2()
            }
        })
    }
    navigatetoTargetMonthandYear2();
    cy.get('.date_is_selectable_true').each((datepicked, iterate, list) => {
        cy.log(datepicked.text());
        cy.log(targetdate);
        if (datepicked.text().includes(targetdate)) {
            cy.get('.dcalendar-newstyles__CalenderMonthContainer-sc-1i003by-2.jYCUOo:nth-child(2)>div:nth-child(2)>div>ul:nth-child(2)>li').eq(iterate).click({ force: true }).then(function () {
                return false
            })
            return false
        }
    })
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })