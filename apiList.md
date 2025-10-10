# devConnect APIs

## authRouter

- POST /signup
- POST /login
- POST /logout    

## profileRouter

- GET /profile/views
- PATCH /profile/edit
- PATCH /profile/password


## connectionRequestRouter

Status: ignored, interested, accepted, rejected
- POST /request/send/:status/:toUserId 
- POST /request/review/:status/:requestId

## userRouter

- GET /user/requests/received
- GET /user/connections
- GET /user/feed

