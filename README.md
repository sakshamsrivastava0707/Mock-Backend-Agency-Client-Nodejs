# Mock-Backend-Agency-Client-Nodejs


#Project consist of 3 API's
1. To add Client And Agency together : 
    POST : https://ill-erin-oyster-yoke.cyclic.app/api/v1/agency/agency-client
    BODY: {
    "agency":{
        "name" : "TEST4",
        "address1" : "bangalore",
        "state": "karnataka",
        "city":"bangalore",
        "phoneNumber":"9052324"
    },
    "client" : {
        "name" : "client x",
        "email" : "clientXXXrd@gmail.com",
        "phoneNumber": "432434234234",
        "totalBill":"566"
    }
}
comments : As of now as per the requirement, There were no validation mentioned, still have basic validation check for uniqueness of the emailId
Future Improvements : We can have Joi validators on the controller level for Prod.

2. API to update Client Details
    PUT: https://ill-erin-oyster-yoke.cyclic.app/api/v1/client/63c69f67d1cee533bf968c7f
    here client id is the param parameter( this can be tested when fetching the get API)
    body: { 
        "name" : "ClientY",
        "email" : "ClientY@gmail.com",
        "phoneNumber": "9053101213",
        "totalBill":"566"
        
        }

    comments: Make sure Email Id is unique.
    Future Improvements : According to business logic we maybe phoneNumber is not allowed to be edited, so we can put checks.

    3. Get Top clients from eachAgencies having highest bill.
   GET:  https://ill-erin-oyster-yoke.cyclic.app/api/v1/agency/agency-client

   comments: Have explicitly used Aggregation pipeline of MongoDB.
            The reason being because of the complexity of the query.
            There are other approaches as well where we can have data manipulation on the service layer.
            But for the complex heavy computation like this,have implemented using pipeline.
            Can be further discussed.
    Improvements : 1. Pagination and caching can be included to decrease the load and response time.

    Other TODO features: 
            1. Have kept placeHolder for the Middleware where authentication and authorization can be done.
            2. We can have Open API docs for the frontend team.
            