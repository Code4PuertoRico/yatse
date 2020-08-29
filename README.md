# YATSE

Yet Another Text Search Engine is a template repository to help create static sites with Lunr.js search.

## What you should know

[The original repo](https://github.com/jpadilla/telegram-gate), from where this repo comes from, has a number of components that you should be aware of.

1. It's built using [Next.js](https://nextjs.org/), which is a [React.js](https://reactjs.org) framework.
2. It uses [Tailwind.css](https://tailwindcss.com/), which is a CSS framework.
3. Its search is powered by [Lunr.js](https://lunrjs.com/), this is a search engine similar in functionality to Solr but in the browser.
4. There's a [config.js](config.js). Please use this for global configurations, such as where you are storing your images.

## Adding your text data

Place you text data in the `static` folder. This file should be in a JSON format with the following structure:

```json
[
    {
        "page": 1,
        "text": "",
        "image": ""
    }
]
```

### Schema

1. __page:__ The actual page where the data is found. This should be an incremental number. This will also be used as the reference id for the Lunr index.
2. __text:__ The text you want to index. This is the value to be tokenized by Lunr.
3. __image:__ If you are extrapolating the text from an image you can use this to serve the image.

For an example you can take a look at: [https://github.com/jpadilla/telegram-gate/blob/master/static/chat.json](https://github.com/jpadilla/telegram-gate/blob/master/static/chat.json)

### So where are the images

Anywhere you want!

The images location URL/URI can be configured in the [config.js](config.js) file in the root of this project. Just remember that this is just the base of the location. The actual name of the file should be included in the [data.json](./static/data.json) file.

Ex. [config.js](config.js)

```javascript
modules.export = {
    imageLocation: "https://d355efj0j563i.cloudfront.net/images/"
}
```

## How to use this template

This repo is not meant to be used itself, but as a template for your own projects. To create your own repo with this please use the `Use this Template` button.

As a reminder change the [static/share.png](./static/share.png) to an image that would represent your project.

## How to create your Lunr index

To create your index you need follow two steps:

1. Place your `data.json` file in the static folder with the data you want to index.
2. Execute `$ npm run create-indexes`

This will create a Lunr index in the static folder next to your data file. This index has to be referenced in your project. By default the `create-lunr-index` script will name the index `index.json`. This default name is referenced/loaded in [page/index.js](./pages/index.js).

## Routing and page generation

Routing is defined in the `next.config.js` file. By default the `static/data.json` is loaded to find out how many pages/documents are in the file. This then creates a route per page.

## Running your project

The following are the main NPM scripts you are probably going to use. For more please take a look at [package.json](package.json).

### Developer Server

To run a development server execute `$ npm run dev`

### Building your project

To build your project execute `$ npm run build`

### Running Next.js

To run a Next.js server execute `$ npm start`

## Contributing

Thanks for wanting to contribute to this project. Please take a looks at our [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) and our [CONTRIBUTING.md](CONTRIBUTING.md).
