# URL Pattern: `/auth`
## PUT: Login method
- Request Body:
```json
{
    "username": "{user-input}",
    "password": "{user-input}"
}
```
- Status Code (Success): 200 OK
- Response Body:
```json
{
    "user-id": "{server-response}",
    "username": "{server-response}",
    "first": "{server-response}",
    "last": "{server-response}"
}
```
- Status Code (Failure): 404 Not Found