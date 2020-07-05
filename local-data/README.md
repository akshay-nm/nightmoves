# local-data

This is nodejs server which serves data via an API.
This API is used in `local` that is a server-side react app. `local` facilitates stream layouts and overlay management features.

## API Documentation

The API is based on two NeDB collections. `shows` collection contains all the data required about the shows the user creates. Shows can contain `screens` that are basically a list of configured components. `components` collection contains defaults for components which can be used in a screen.

- CRUD shows
- CRUD components

### Shows

#### CREATE

Request Parameters | values
--- | --- 
method | POST
header | 'Content-Type':'application/json'
query | none
body | { showName: string } 
param | none

###### Reponse

Status code | Body | Reason
--- | --- | ---

#### READ

Request Parameters | values
--- | --- 
method | GET
header | 'Content-Type':'application/json'
query | none
body | { showName: string } 
param | none

###### Reponse

Status code | Body | Reason
--- | --- | ---

#### UPDATE

Request Parameters | values
--- | --- 
method | PUT
header | 'Content-Type':'application/json'
query | none
body | { showName: string } 
param | none

###### Reponse

Status code | Body | Reason
--- | --- | ---

#### DELETE

Request Parameters | values
--- | --- 
method | DELETE
header | 'Content-Type':'application/json'
query | none
body | { showName: string } 
param | none

### Components

#### CREATE

Request Parameters | values
--- | --- 
method | POST
header | 'Content-Type':'application/json'
query | none
body | { showName: string } 
param | none

###### Reponse

Status code | Body | Reason
--- | --- | ---

#### READ

Request Parameters | values
--- | --- 
method | GET
header | 'Content-Type':'application/json'
query | none
body | { showName: string } 
param | none

###### Reponse

Status code | Body | Reason
--- | --- | ---

#### UPDATE

Request Parameters | values
--- | --- 
method | PUT
header | 'Content-Type':'application/json'
query | none
body | { showName: string } 
param | none

###### Reponse

Status code | Body | Reason
--- | --- | ---

#### DELETE

Request Parameters | values
--- | --- 
method | DELETE
header | 'Content-Type':'application/json'
query | none
body | { showName: string } 
param | none

###### Reponse

Status code | Body | Reason
--- | --- | ---
