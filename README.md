# Employee Mock Service for Schedule Bot

This Service Mock expose an API that allows for the following function: 

- searchEmployeeById(id): This give back the complete Employee Object
- searchEmployeeLikeById(id, searchparameters): This give a employee back that as similar as possible to the other customer
  - id: either the an existing employee id or undefined for a general search
  - searchparameters: an javascript object with parameters to overwrite in id. The order of the paramters specifies the priority.
   

The Employee Object contains: 
```json
{
  "_id":        1234344556,
  "surname":    "Max",
  "name":       "Mustermann",
  "email":      "sample@dennisseidel.de",
  "expertise":  ["Schaden", "Kranken", "Sach"],
  "address":    {
    "city":   "Reutlingen",
    "street": "Berliner Ring 80"
  },
  // could be replaced with a link to a calender system
  "non-availablility": [{
    "2017-10-30": [
      {
        "start": 2017-10-30 T 10:00 UTC,
        "end": 2017-10-30 T 11:00 UTC,
        "content": "important meeting title"
      },
      {
        "start": 2017-10-30 T 11:00 UTC,
        "end": 2017-10-30 T 12:00 UTC,
        "content": "important meeting title"
      },
    ]
  },
  {
    "start": 2017-10-30 T 10:00 UTC,
    "end": 2017-10-30 T 11:00 UTC
  }]
}
```