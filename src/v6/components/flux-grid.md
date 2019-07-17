---
---

# FluxGrid

## Description

Component to make grid of image or cube.

## Attributes

### rows

The number of rows the grid will be made of.

- **Type:** `Number`
- **Required:** `false`
- **Default:** `1`

### cols

The number of cols the grid will be made of.

- **Type:** `Number`
- **Required:** `false`
- **Default:** `1`

### size

This size is the width and height the cube will have.

If passed as number the unit will be pixel, but if passed as string you must append the unit like in CSS.

- **Type:** `Object`
- **Required:** `false`
- **Schema:**
``` js
let size = {
   width: Number | String,
   height: Number | String,
};
```

If not defined, the size will be automatically detected from the parent element.

### depth

Size in pixels for cube depth.

If not defined the depth will be the width set in [size](#size).

- **Type:** `Number`
- **Required:** `false`

### image

This attribute will define the image to be divided into cells.

- **Type:** `String | Object`
- **Required:** `false`

The value can be one of the following:
* A simple string of the URL.
* An object having the URL and image original size in pixels like the following.

``` js
let image = {
   url: String,
   size: {
      width: Number,
      height: Number,
   },
};
```

::: warning

If you use this attribute but the `images` is also defined, the `images` will have preference and this will have no effect.

:::

### images

This attribute will define each cell as a cube, so you can define the images that will be displayed per side.

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

If the color is passed as single value, will be applied to all images or all sides of cubes.

If the color is passed as object, you can specify the colors individually per side in case using cubes.

The values can be any valid CSS color.

- **Type:** `String | Object`
- **Required:** `false`
- **String Schema:**
``` js
let color = String;
```
- **Object Schema:**
``` js
let color = {
   front: String,
   back: String,
   top: String,
   bottom: String,
   left: String,
   right: String,
};
```

### css

Object with cube CSS styles in camel case.

- **Type:** `Object`
- **Required:** `false`

### tileCss

Object with CSS styles in camel case so be applied to all tiles.

- **Type:** `Object`
- **Required:** `false`

## Methods

### setCss(css: `Object`)

Sets CSS styles to the cube.

#### css

An object with the CSS attributes in **camel case** and values.

* **Type:** `Object`

### transform(function: `Function(FluxImage | FluxCube, Number)`)

A function to be run per tile receiving the tile element and the number of tile.
