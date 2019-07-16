---
---

## Description

Component to make an image grid.

## Attributes

### rows

### cols

### size

This size is the width and height the cube will have.

If passed as numbers the unit will be pixels, but if passed as string you must append the unit like in CSS.

- **Type:** `Object`
- **Required:** `true`
- **Schema:**
``` js
let size = {
   width: Number | String,
   height: Number | String,
};
```

### depth


### image


### images

Object with images in case you want the grid to be composed of cubes.

- **Type:** `Object`
- **Required:** `false`
- **Schema:**
``` js
let images = {
   front: image,
   back: image,
   top: image,
   bottom: image,
   left: image,
   right: image,
};
```

The `image` value can be one of the following:

* A simple string of the URL

``` js
let image = String;
```

* An object having the URL and image original size in pixels

``` js
let image = {
   url: String,
   size: {
      width: Number,
      height: Number,
   },
};
```

### color

This attibute sets the background color in case there is no image set or image does not fill the side.

If the color is a string, the color will be applied to the image or to all images if composed of cubes.

The values can be any valid CSS color value.

- **Type:** `String | Object`
- **Required:** `false`
- **Schema:**
``` js
// Applied to the image or to all side images
let color = 'rgba(50, 100, 150, 0.5)';

// Applied color by side
let color = {
   front: '#012345',
   back: '#6789ab',
   top: '#cdef01',
   bottom: '#234567',
   left: '#89abcd',
   right: '#ef0123',
};
```

### css

### tileCss



| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| slider | Object | true | The VueFlux component responsible of this cube |
| rows | Number | true | The number of rows |
| cols | Number | true | The number of cols |
| index | Object | true | An object containing the indexes of images to apply to the tile cubes |
| tileCss | Object | false | Initial tile CSS style |

Example:
``` html
<flux-grid :slider="slider" :num-rows="5" :num-cols="5" :index="2"></flux-grid>
```

## Methods

| Method | Parameters | Description |
|--------|------------|-------------|
| setCss | css | Object with the style to be applied to grid container |
| transform | func | Runs a transform function for each tile, receiving as parameter the cube and number |
