## Creating ReSTful API Platform using NodeJS 

#### 使用NodeJS开发micro service/REST API平台. 

Open your browser and point to http://localhost:3000

#### http://localhost:3000/api/patients  POST
######   {
######   "name" : "SITUTESTC, Jack",
######   "DOB" : "11/02/1997",
######   "age" : 20,
######   "gender" : "M",
######   "zipcode" : "62859"
######    }

#### http://localhost:3000/api/patients  GET
######   [
######   {
    "_id": "58f86f131ccadb3d00613ff0",
    "name": "DATUTEST, ABBY",
    "DOB": "12/13/1975",
    "age": 38,
    "gender": "F",
    "zipcode": "45399",
    "__v": 0
######   },
######   {
    "_id": "58f9745cb4e8ac2137474fd6",
    "name": "DATUTESTC, Marry",
    "DOB": "09/08/1978",
    "age": 35,
    "gender": "F",
    "zipcode": "14959",
    "__v": 0
######   },
######   {
    "_id": "58f97476b4e8ac2137474fd7",
    "name": "DATUTESTB, BETH",
    "DOB": "04/26/1977",
    "age": 37,
    "gender": "F",
    "zipcode": "10519",
    "__v": 0
######   },
######   {
    "_id": "58f9749eb4e8ac2137474fd8",
    "name": "AATUTESTC, Mike",
    "DOB": "23/08/1998",
    "age": 19,
    "gender": "M",
    "zipcode": "24859",
    "__v": 0
######   },
######   {
    "_id": "58fdb53c473cd952b1402794",
    "name": "SITUTESTC, Jack",
    "DOB": "11/02/1997",
    "age": 20,
    "gender": "M",
    "zipcode": "62859",
    "__v": 0
######   }
######   ]

#### http://localhost:3000/api/patients?name='Marry Grant'  GET
######   [
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
######   }
######   ]


#### http://localhost:3000/api/diagnostics?name='Marry Grant'  GET
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