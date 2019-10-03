# ecommerce-gtm

### Google Tag Manager Module for Enhanced Ecommerce

This is a Javascript module that implement Google Tag Manager for enahanced ecommerce. It is designed to use [GTM](https://developers.google.com/tag-manager/enhanced-ecommerce) snippet.

You can easily use custom dataLayer and additional events. You can use this library in any javascript framework for example:

- react
- angular
- vue etc..

## Installation

[npm](https://www.npmjs.com/):

```bash
npm install ecommerce-gtm --save
```

## Usage

Initializing GTM Module:

```js
import GTagManager from 'ecommerce-gtm'

# With default dataLayer
GTagManager.initialize({ id: "GTM-000000" });

# with custom data layer
GTagManager.initialize({ id: "GTM-000000", layer: "dataLayer2" });

```

## Enhanced Ecommerce

### Event example:

```js
import GTagManager from 'ecommerce-gtm'

# With default dataLayer
GTagManager.initialize({ id: "GTM-000000" });

# Attach ecommerce to an event
GTagManager.event("test", {
    'currencyCode': 'EUR',
    'impressions': [
     {
       'name': 'Triblend Android T-Shirt',
       'id': '12345',
       'price': '15.25',
       'brand': 'Google',
       'category': 'Apparel',
       'variant': 'Gray',
       'list': 'Search Results',
       'position': 1
     }]
  })
```

### Ecommerce only example:

If you do not want to attach ecommerce obj to event try this:

```js
import GTagManager from 'ecommerce-gtm'

# With default dataLayer
GTagManager.initialize({ id: "GTM-000000" });

# Attach ecommerce to an event
GTagManager.ecommerce({
    'currencyCode': 'EUR',
    'impressions': [
     {
       'name': 'Triblend Android T-Shirt',
       'id': '12345',
       'price': '15.25',
       'brand': 'Google',
       'category': 'Apparel',
       'variant': 'Gray',
       'list': 'Search Results',
       'position': 1
     }]
  })
```

### Note:

- Disabling javascript in the browser can prevent the correct operation of this library.
