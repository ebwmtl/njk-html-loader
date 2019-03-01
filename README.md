[![npm version](https://badge.fury.io/js/njk-html-loader.svg)](https://www.npmjs.com/package/njk-html-loader)

- [x] Passing an array to the root
- [x] Add example
- [ ] Customizing syntax for nunjucks tags
- [ ] Add a custom filters
- [ ] Refactoring

# Njk HTML loader for webpack

## Installation

`npm install njk-html-loader`

## Usage

In your sources:

``` javascript
const html = require('./file.njk')
// => returns file.njk content as html compiled string
```

In your webpack.config.js  file:

## Using it with html-loader

`njk-html-loader` encode to content to a string variable to avoid it and pass the string content to the loader chain please use the following configuration:

### Base config

```javascript
module.exports = {
  // your config settings ...
  module: {
    rules: [{
      test: /\.njk$/,
      use: [
        {
          loader: 'html-loader',
        },
        {
          loader: 'njk-html-loader',
        },
      ],
    }],
  },
};
```

### Options

#### root
   Parameter to set the root template directory (String or Array): 
   
   ```javascript
   module.exports = {
     // your config settings ...
     module: {
       rules: [{
         test: /\.njk$/,
         use: [
           {
             loader: 'html-loader',
           },
           {
             loader: 'njk-html-loader',
             options: {
               root: 'path/to/njk files',
             },
           },
         ],
       }],
     },
   };
   ```
   
 #### data
 Object data to use for all templates in the loader (Object): 
 
 ```javascript
 module.exports = {
   // your config settings ...
   module: {
     rules: [{
       test: /\.njk$/,
       use: [
         {
           loader: 'html-loader',
         },
         {
           loader: 'njk-html-loader',
           options: {
             data: {
               a: 'a',
               b: 'b',
             },
           },
         },
       ],
     }],
   },
 };
 ```
 
 ```html
<div>
	<div>{{ a }}</div>
	<div>{{ b }}</div>
</div> 
 ```
