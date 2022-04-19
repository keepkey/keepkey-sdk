# Pairing with the KeepKey Desktop application

### What you can do by pairing your application

The KeepKey Desktop application runs a RESTful API server on `http://localhost:1646`, pairing with the KeepKey Desktop application gives you to access many secured routes on this API that enable functionality like: 

- Getting user's public keys
- Getting user's asset balances
- Signing transactions

### How to pair with the KeepKey Desktop application

You must perform a HTTP request to the `/pair` endpoint with the following JSON data in the request body:

```json
{
    "serviceName": "string", // The name of your application
    "serviceImageUrl": "string" // An image url that represents your application 
}
```

additionally the request headers also need to contain the `AUTHORIZATION` header whose value will be treated as an unique API key for your application

### Authorizing your requests

Any requests to secured API endpoints require authorization, this can be done by supplying the `AUTHORIZATION` header containing the same value that was used while pairing