# URL Pattern: `/orders`
## GET: `orders/{user_id}` Method to retrieve orders placed by a user, based on a user id
- Request Body: None
- Status code (Success): 200 OK
- Response Body:
```json
[
    {/* user order */},
    {/* user order */},
    {/* user order */},
    {/* user order */}
]
```
- Status Code (Failure): 500 Server Error
---
## POST: Method to create new orders
- Request Body:
```json
[
    {/* user order */},
    {/* user order */},
    {/* user order */},
    {/* user order */}
]
```
- Status Code (Success): 201 CREATED
- Response Body: None
- Stauts Code (Failure): 500 Server Error