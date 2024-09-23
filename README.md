# CypressProjectAero 
Cypress Test Automation framework for testing Airways ticket booking, Hotel Booking, Train booking 
#Solution
Created Locator Pages for capturing all locators specific to webpage an exported as constants
Created Page objects to creates different mentods for actions on webpage and exported as constants
Added three  spec files consists of three test cases Search for Flights and find the cheapest hotel and user provided search data and Train tickets booking which will search for a specific date and time and list all available trains
Used Cypress fixtures to add data parameterisation for Citinames, Date , Hotel names
#Prerequisites: Node should be installed NPM package manager should be available

Installation

Open Cypress folder and open Terminal/CMD
run command npm install(this should install all dependencies) use npm audit fix --force in case any vunlerabilities
Steps to Run test cases

1. run command **npm run RunAllTests** always run from cypress folder like "**C:\Automation\CypressAirwaysBooking\CypressProjectAero\cypress npm run RunAllTests**" (Above command will launch all tests present in e2e folder and will launch in Edge browser with headed mode)

2. run command "npx cypress open" this will launch the cypress test runner from where different tests can be selected individually

![image](https://github.com/user-attachments/assets/2e4d3a57-d991-4a38-8e66-e1b74a653ee2)


