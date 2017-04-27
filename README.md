## Creating ReSTful API Platform using NodeJS 

#### 使用NodeJS开发micro service/REST API平台. 

The steps are as follows:
1. Navigate to the `medical_AI_Node_REST_API` directory from the command line and run `node server`.

2. 

#### http://101.37.36.41:3020/api/patients  POST
######   {
    "name" : "SITUTESTC, Jack",
    "DOB" : "11/02/1997",
    "age" : 20,
    "gender" : "M",
    "zipcode" : "62859",
    "phoneNumber": "(746) 465-1648",
    "preferredLanguage": "English",
    "smokingStatus": "Smoker"
######    }

#### http://101.37.36.41:3020/api/patients  GET
######   [
######   {
    "_id": "58f86f131ccadb3d00613ff0",
    "name": "DATUTEST, ABBY",
    "DOB": "12/13/1975",
    "age": 38,
    "gender": "Female",
    "zipcode": "45399",
    "__v": 0,
    "phoneNumber": "(746) 465-1648",
    "preferredLanguage": "English",
    "smokingStatus": "Smoker"
######   },
######   {
    "_id": "58f9745cb4e8ac2137474fd6",
    "name": "DATUTESTC, Marry",
    "DOB": "09/08/1978",
    "age": 35,
    "gender": "Female",
    "zipcode": "14959",
    "__v": 0,
    "phoneNumber": "(746) 465-1648",
    "preferredLanguage": "English",
    "smokingStatus": "Smoker"
######   },
######   {
    "_id": "58f97476b4e8ac2137474fd7",
    "name": "DATUTESTB, BETH",
    "DOB": "04/26/1977",
    "age": 37,
    "gender": "Female",
    "zipcode": "10519",
    "__v": 0,
    "phoneNumber": "(746) 465-1648",
    "preferredLanguage": "English",
    "smokingStatus": "Non-smoker"
######   },
######   {
    "_id": "58f9749eb4e8ac2137474fd8",
    "name": "AATUTESTC, Mike",
    "DOB": "23/08/1998",
    "age": 19,
    "gender": "Male",
    "zipcode": "24859",
    "__v": 0,
    "phoneNumber": "(746) 465-1648",
    "preferredLanguage": "English",
    "smokingStatus": "Non-smoker"
######   },
######   {
    "_id": "58fdb53c473cd952b1402794",
    "name": "SITUTESTC, Jack",
    "DOB": "11/02/1997",
    "age": 20,
    "gender": "Male",
    "zipcode": "62769",
    "__v": 0,
    "phoneNumber": "(746) 465-1648",
    "preferredLanguage": "English",
    "smokingStatus": "Smoker"
######   },
######   {
    "_id": "59015a880199cb171eb384fb",
    "name": "Marry Grant",
    "DOB": "1987-08-16",
    "age": 27,
    "gender": "Female",
    "zipcode": "245006",
    "phoneNumber": "15648778956",
    "preferredLanguage": "English",
    "smokingStatus": "Non-smoker",
    "__v": 0
######   },
######   {
    "_id": "59015b2a0199cb171eb384fc",
    "name": "OIYETESTC, Miller",
    "DOB": "1996-06-30",
    "age": 21,
    "gender": "Male",
    "zipcode": "24859",
    "phoneNumber": "(746) 465-1648",
    "preferredLanguage": "English",
    "smokingStatus": "Smoker",
    "__v": 0
######   },
######   {
    "_id": "59015b6b0199cb171eb384fd",
    "name": "AATUCVTYW, Berg",
    "DOB": "1996-03-22",
    "age": 21,
    "gender": "Male",
    "phoneNumber": "(746) 465-1648",
    "smokingStatus": "Non-smoker",
    "zipcode": "14859",
    "preferredLanguage": "English",
    "__v": 0
######   },
######   {
    "_id": "59015f170199cb171eb384fe",
    "name": "POJERLSTC, Addison",
    "age": 19,
    "gender": "Male",
    "DOB": "1998-12-11",
    "zipcode": "24751",
    "phoneNumber": "(746) 465-1648",
    "preferredLanguage": "English",
    "smokingStatus": "Smoker",
    "__v": 0
######   },
######   {
    "_id": "59015f9a0199cb171eb384ff",
    "name": "AASDYENC, Tess",
    "DOB": "1995-12-04",
    "age": 22,
    "gender": "Male",
    "zipcode": "29519",
    "phoneNumber": "(746) 465-1648",
    "preferredLanguage": "English",
    "smokingStatus": "Non-smoker",
    "__v": 0
######   },
######   {
    "_id": "590160170199cb171eb38500",
    "name": "AAERNVSTC, Ula",
    "DOB": "1998-02-13",
    "age": 19,
    "gender": "Female",
    "zipcode": "24081",
    "phoneNumber": "(746) 465-1648",
    "preferredLanguage": "English",
    "smokingStatus": "Smoker",
    "__v": 0
######   },
######   {
    "_id": "590160440199cb171eb38501",
    "name": "AAOUTNBTC, Alexia",
    "DOB": "2017-04-17",
    "age": 22,
    "gender": "Female",
    "zipcode": "60359",
    "phoneNumber": "(746) 465-1648",
    "preferredLanguage": "English",
    "smokingStatus": "Non-smoker",
    "__v": 0
######   },
######   {
    "_id": "590160740199cb171eb38502",
    "name": "AAOLHEBTC, Venus",
    "DOB": "1998-01-04",
    "zipcode": "24859",
    "age": 19,
    "gender": "Female",
    "phoneNumber": "(746) 465-1648",
    "preferredLanguage": "English",
    "smokingStatus": "Smoker",
    "__v": 0
######   }
######   ]


#### http://101.37.36.41:3020/api/diagnostics?name=MarryGrant  GET
######   [
######   {
    "_id": "5901633f443e2d194e41d433",
    "name": "Marry Grant",
    "diagnosticPeriod": "12/03/2013 - 12/06/2013",
    "encounterType": "Inpatient",
    "visitReason": "Fever and chills",
    "physician": "Alyssa Havemann",
    "weight": "135lbs",
    "height": "5ft 7in",
    "BMI": 23,
    "temperature": "98.5 F",
    "bloodPressure": "120/78",
    "pulse": 80,
    "respiratoryRate": 12,
    "__v": 0,
    "modified": "2017-04-27T03:19:27.202Z",
    "created": "2017-04-27T03:19:27.202Z"
######   }
######   ]