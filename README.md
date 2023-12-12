# OTPless-js-auth

> Deployed Website - [Click Here](https://otpless-js.pages.dev/)

## Implementing [OTPless-auth](https://otpless.com/)

## How to use OTPless-auth?

> This Project uses OTPless-SDK with HTML+CSS+JS Technology.

> Official Documentation for desired platform can be found [here](https://otpless.com/platforms).

### To use OTPless-auth in plain JavaScript

- Add div tag

```HTML
<!-- Any Container Element should be fine, I am using main here just for semantic purpose  -->
<div id="otpless-auth"></div>
```

- Add script tag

```HTML
<script type="text/javascript" src="https://otpless.com/auth.js" cid="PSNMYE48LDJMC5SN2I4UTOD9S9QP4L4P"></script>
```

- Add the following function in your script

```js
/**
 * @param {Object} otplessUser - Received User object from OTPless
 * @returns {void}
*/
function otpless(otplessUser) {
    console.log(otplessUser)
    // Do something with otplessUser
    // save it in browser storage or database or send it to server.
    // ...
    // Add your success callback here, if you want to do something on successful authentication
    // ...
}
```

>**Note:**
>> ***OTPless*** authentication **SDK** seamlessly combines both ***sign-in*** and ***sign-up*** functionalities. In cases where the user is already registered, the system generates a new *Auth-Token* with each sign-in request. This *Auth-Token*, accompanied by the user object, is then sent as a response. Alternatively, for unregistered users, the system creates a new User Account using publicly available data (such as name and email) from the chosen Auth-Provider (e.g., Gmail or WhatsApp). A new *Auth-Token* is then generated and sent as a response, along with the user object.

#### Warning

- DO NOT USE HTTP
- OTPless-auth needs secure connection to work. Use HTTPS.
Using insecure connection may lead to unexpected behavior. (e.g. Blank Container for the Auth Form)

#### Solution:

- Remove `cid` attribute from script tag
- Either use some online IDE that provides secure connection(e.g. [W3Schools-Spaces](https://spaces.w3schools.com/space/))
- or use dummy data for development stage,and add OTPless-auth to your project in pre-production/test stage in a secured environment.
- or simply Containerize your development environment with Nginx+self-signed SSL certificates.

#### TLDR: Use HTTPS or skip `cid` attribute in script tag
