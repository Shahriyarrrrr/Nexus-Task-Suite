# Nexus Task Suite — API Spec

## Base URL
`http://localhost:5000`

## Authentication
### POST /auth/register
Request JSON
{
  "name": "Full Name",
  "email": "user@example.com",
  "password": "password",
  "role": "user"
}
Response
{
  "token": "...",
  "user": { "id":1, "name":"...", "email":"...", "role":"user" }
}

### POST /auth/login
Request JSON
{
  "email":"user@example.com",
  "password":"password"
}
Response
{
  "token":"...",
  "user":{ "id":1, "email":"...", "role":"user" }
}

### POST /auth/refresh
Request JSON
{ "token": "oldJwt" }
Response
{ "token":"newJwt", "user":{...} }

Bearer token required for protected routes.

## Users
### GET /users
Headers: Authorization: Bearer <token>
Response: [ { id, name, email, role, created_at }, ... ]

### GET /users/:id
Response: { id, name, email, role, created_at }

### PUT /users/:id
Request JSON: { "name":"New", "role":"admin" }
Response: { "status":"updated" }

### DELETE /users/:id
Response: { "status":"deleted" }

## Tasks
### GET /tasks
Response: [ { id, user_id, title, description, status, created_at }, ... ]

### POST /tasks
Request JSON: { "title":"Title", "description":"...", "status":"todo" }
Response: { "status":"created" }

### PUT /tasks/:id
Request JSON: { "title":"", "description":"", "status":"progress" }
Response: { "status":"updated" }

### DELETE /tasks/:id
Response: { "status":"deleted" }

## Calendar
### GET /calendar
Returns tasks for calendar display

### POST /calendar
Request JSON: { "title":"", "description":"", "status":"todo" }

### DELETE /calendar/:id

## Media
### GET /media
Returns list of media rows for authenticated user

### POST /media
Content-Type: multipart/form-data
Fields:
file: binary file
type: image|audio|video
Response: { "status":"uploaded", "file": { path, filename } }

### DELETE /media/:id

## Payments
### POST /payments/subscribe
Creates Stripe checkout session or stub response

### POST /payments/purchase
Creates Stripe checkout session for one-time purchase

### POST /payments/webhook
Stripe webhook endpoint

## Errors
Responses use HTTP status codes with a JSON body:
{ "error": "message" }
