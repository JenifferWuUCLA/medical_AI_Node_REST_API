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
##### }

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
  },
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
    "_id": "58fdb4e84a7a2e52674cf052",
    "name": "SITUTESTC, Jack",
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