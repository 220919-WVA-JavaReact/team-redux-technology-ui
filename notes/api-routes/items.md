# URL Pattern: `/items`
## GET: `items/{id}`: Method to retrieve an item by it's id
- Request Body: None
- Status code (Success): 200 OK
- Response Body:
```json
{
    "item_id": "{server-response}",
    "name": "{server-response}",
    "image": "{server-response}",
    "price": "{server-response}",
    "material": "{server-response}",
}
```
- Status Code (Failure): 500 Server Error
---
## GET: `items/single/{name}`: Method to retrieve an item by it's name
- Request Body: None
- Status code (Success): 200 OK
- Response Body:
```json
{
    "item_id": "{server-response}",
    "name": "{server-response}",
    "image": "{server-response}",
    "price": "{server-response}",
    "material": "{server-response}",
}
```
- Status Code (Failure): 500 Server Error
---
## GET: `items/random/{count}`: Method to retrieve a list of random items by a specified count
- Request Body: None
- Status code (Success): 200 OK
- Response Body:
```json
// assuming {count} == 4
[
    {/* random item */},
    {/* random item */},
    {/* random item */},
    {/* random item */}
]
```
- Status Code (Failure): 500 Server Error
---
## POST: Method to update an item's price
- Request Body:
```json
{
    "item_id": {/*current_item_id*/},
    "name": {/*current_name*/},
    "image": {/*current_image*/},
    "price": "{updated_price}",
    "material": {/*current_material*/},
}
```
- Status Code (Success): 200 OK
- Response Body
```json
{
    "item_id": {/*current_item_id*/},
    "name": {/*current_name*/},
    "image": {/*current_image*/},
    "price": "{updated_price}",
    "material": {/*current_material*/},
}
```
- Status Code (Failure): 500 Server Error