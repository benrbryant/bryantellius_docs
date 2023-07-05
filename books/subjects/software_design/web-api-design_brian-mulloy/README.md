# Web API Design

By Brian Mulloy

[Source (PDF)](https://pages.apigee.com/rs/apigee/images/api-design-ebook-2012-03.pdf)

## Notes

### Introduction

Goal of an api: _What are we trying to achieve with an API?_

The primary design of "pragmatic REST" is to maximize developer productivity and success.

### Nouns are good, verbs are bad

Keep your base URL simple and intuitive

Only use two base URLs per resource

Keep verbs out of your base URL

Use HTTP verbs POST, GET, PUT, DELETE

### Plural nouns and concrete names

Use plural nouns rather than singular nouns

Use concrete names rather than abstract names (e.g. `/blogs, /videos, /articles` rather than just `/items`)

Stick to a maximum of 24 resources

### Simplify associations - sweep complexity under the '?'

Keep URL resource associations to 3 deep or less (e.g. `/provider/patient/labs`)

Use query parameters to add state/attribute intricacies to a base level resource

### Handling Errors

Use appropriate HTTP status codes

At the very least, what may happen is

- the request succeeded, or
- the request failed due to the client-side, or
- the request failed due to the server-side

Which can be handled with

- 200 ok
- 201 created
- 304 not modified
- 400 bad request
- 401 unauthorized
- 404 not found
- 403 forbidden
- 500 server error

Be verbose and use plain language when returning status descriptions during your error handling.

### Tips for versioning

Also release an api with a version

Use `v` at the highest scope in the url to dictate the version (e.g. `/v1/provider`)

Maintain at least 1 back version

Depending on your api design and logic for handling responses, consider putting the version in the header

### Pagination and partial response

Partial response returns only the amount of information needed by the developer.

You could use a query parameter to accept return fields per resource (e.g. `/profile?fields=name,dob,avatar`)

Pagination limits the size of the response when dealing with large data sets.

Use query parameters `limit` and `offset` to manage the amount of returned data from a resource

### What about responses that don't involve resources?

Some responses return a payload that doesn't involve getting resources from a database

Use verbs instead of nouns in these cases

### Supporting multiple formats

If requested formats can vary, use static resources with the format (e.g. `/labs/010190.json`) in the base url

### What about attribute names?

Use JSON as default for payloads

Use camel-case convention for property/attribute names

### Tips for search

For unscoped searches, use a non-resource endpoint (verb convention) with a `q` query parameter

For scoped searches, use the appropriate resource endpoint (e.g. `/profiles?q=lastname`) with a `q` query parameter

### Consolidate API requests in one subdomain

Host your api on a single subdomain (e.g. `api.cool.io`)

### Tips for handling exceptional behavior

If the app is not able to intercept the error response before the environment flashes the error to the user, consider using `suppress_error_responses` as a query parameter to let developers choose to suppress (or return as 200 ok) error responses with the actual error in the returned payload

### Authentication

Use OAuth >=2.0 as appropriate

### Chatty APIs

With so many requests coming in for simple apps, use partial response syntax and limited use of _composite responses_ to decrease api traffic for app UIs

### Compliment with an SDK

Consider creating code libraries or SDK (_software development kits_) to complement your API and allow quicker adoption, simple integration, decreased inefficient API use, and an overall good developer resource.

### The API facade pattern

1. Create an ideal API design (urls, query params, response payloads, etc)
2. Create mocked data stubs in the API facade to test before implementation
3. Mediate/implement between the facade and the systems
