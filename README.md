[![Azure DevOps builds](https://img.shields.io/azure-devops/build/4lch4/cb2a20cf-cf1b-44d7-af19-a48ba81c477a/9?style=for-the-badge)](https://dev.azure.com/4lch4/Trejo)
[![Codacy grade](https://img.shields.io/codacy/grade/bbb6283ae13948d291092abbb600f5d5?style=for-the-badge)](https://app.codacy.com/manual/4lch4/Trejo)
[![dependencies Status](https://img.shields.io/david/4lch4/Trejo.svg?style=for-the-badge)](https://david-dm.org/4lch4/Trejo)
[![dependencies Status](https://img.shields.io/david/dev/4lch4/Trejo.svg?style=for-the-badge)](https://david-dm.org/4lch4/Trejo)

[![ForTheBadge](https://forthebadge.com/images/badges/fuck-it-ship-it.svg)](https://forthebadge.com)
![npm bundle size](https://img.shields.io/bundlephobia/min/@4lch4/trejo?style=for-the-badge)
[![Standard-Js](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=for-the-badge)](https://standardjs.com/)

# Trejo

Trejo is a NodeJS module for interacting with the [Trello REST API][0], written in TypeScript. It was originally written so I could automate some of the tasks I find myself performing regularly in Trello. For example, adding a card at 17:00 every Wednesday - Friday with a list of daily tasks to complete while at the office that night.

Because of this, the library may have holes in some areas, such as a missing endpoint or two. I've done my best to ensure that any "endpoint groups" (such as Boards.js, Cards.js, etc.) that do exist have a method for every endpoint available. If you find one that happens to be missing, please feel free to [create an issue][2] or [submit a PR][1] with a fix.

## Query Parameters

As you may or may not know, the Trello API has a neat feature called Nested Resources. What this will let you do for example, is if you're hitting the `/cards/:id` endpoint, you can provide a `labels` parameter with the value `all` to retrieve the labels assigned to the card as well. It'd look something like so: `/cards/:id?labels=all`

Trejo handles this by accepting a `queryParams` parameter for *nearly* every method found in the library. Specify the values in an object and pass it as this parameter in order to retrieve Nested Resources. The above endpoint for example, would have it's method call look something like so:

```javascript
const config = require('./config.js')
const Trejo = require('@4lch4/trejo')
const trejo = new Trejo({
  apiKey: config.apiKey,
  apiToken: config.apiToken
})

const cardWLabels = await trejo.cards().getCard(42, { labels: 'all' })
```

[0]: https://developers.trello.com/reference 
[1]: https://github.com/4lch4/Trejo/pull/new/master
[2]: https://github.com/4lch4/Trejo/issues/new
