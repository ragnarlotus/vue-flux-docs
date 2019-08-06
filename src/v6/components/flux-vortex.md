---
---

# FluxVortex

## Description

Image component made of concentric circles.

## Attributes

### circles

The number of circles the vortex will be made of.

- **Type:** `Number`
- **Required:** `false`
- **Default:** `1`

### size

This size is the width and height the vortex will have.

If passed as number the unit will be pixel, but if passed as string you must append the unit like in CSS.

- **Type:** `Object`
- **Required:** `false`
- **Schema:**
``` js
{
   width: Number | String,
   height: Number | String,
};
```

If not defined, the size will be automatically detected from the parent element.

### image

This attribute will define the image to be divided into cells.

- **Type:** `String | Object`
- **Required:** `false`

The value can be one of the following:
* A simple string of the URL.
* An object having the URL and image original size in pixels like the following.

``` js
{
   url: String,
   size: {
      width: Number,
      height: Number,
   },
};
```

### color

This attibute sets the background color in case there is no image set or image does not fill the size.

The values can be any valid CSS color.

- **Type:** `String`
- **Required:** `false`

### css

Object with CSS styles in camel case.

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

### transform(function: `Function(FluxImage, Number)`)

A function to be run per tile receiving the tile element and the number of tile.
