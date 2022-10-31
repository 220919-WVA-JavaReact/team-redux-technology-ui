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

---

## POST: Register Method
- Request Body:
```json
{
    "username": "{user-input}",
    "password": "{user-input}",
    "first": "{user-input}",
    "last": "{user-input}"
}
```
- Status Code (Success): 201 CREATED
- Response Body:
```json
{
    "user-id": "{server-response}",
    "username": "{server-response}",
    "first": "{server-response}",
    "last": "{server-response}"
}
```
- Status Code (Failure): 409 CONFLICT