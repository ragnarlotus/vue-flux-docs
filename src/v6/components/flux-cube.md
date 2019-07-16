---
---

# FluxCube

## Description

Component composed by up to 6 [FluxImage](flux-image) that forms a cube.

## Attributes

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

### images

Object with images per side.

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

* A simple string of the URL.

``` js
let image = String;
```

* An object having the URL and image original size in pixels.

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

If the color is passed as single value, the color will be applied to all sides.

If the color is passed as object, you can specify the colors individually per side.

The values can be any valid CSS color.

- **Type:** `String | Object`
- **Required:** `false`
- **Single Schema:**
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

### depth

Size in pixels for cube depth.

If not defined the depth will be the width set in [size](#size).

- **Type:** `Number`
- **Required:** `false`

### offset

Its and adjustment of the image in pixels based on the top and left position.

If the offset is passed as single value, the offset will be applied to `top` and `left`.

If the offset is passed as object, you can specify the offsets `top` and `left` individually. In case you do not set one of them will default to `0`.

- **Type:** `Number | 'auto' | Object`
- **Required:** `false`
- **Single Schema:**
``` js
let offset = Number | 'auto';
```
- **Object Schema:**
``` js
let offset = {
   top: Number | 'auto',
   left: Number | 'auto',
};
```

If value is `Number`, the image will be adjusted for that value in pixels.

If value is `'auto'`, the value will be determined from the `top` and `left` CSS styles.

### css

Object with cube CSS styles in camel case.

- **Type:** `Object`
- **Required:** `false`

### sidesCss

Object with CSS styles in camel case per side.

- **Type:** `Object`
- **Required:** `false`
- **Schema:**
``` js
let sideCss = {
   front: Object,
   back: Object,
   top: Object,
   bottom: Object,
   left: Object,
   right: Object,
};
```

## Methods

### getSide(side: `String`)

Gets the image by side.

#### side

* **Type:** `'front' | 'back' | 'top' | 'bottom' | 'left' | 'right'`
* **Returns:** the [FluxImage](flux-image) dispalying requested side.

### setCss(css: `Object`)

Set CSS styles to the cube.

#### css

An object with the CSS attributes in **camel case** and values.

* **Type:** `Object`

### transform(css: `Object`)

Sets the CSS styles to be transformed to within a transition.

#### css

An object with the CSS attributes in **camel case** and values.

* **Type:** `Object`

### turn(side: `String`)

Turns the cube to specified side (top, back, bottom, left, right).

#### side

* **Type:** `String`
* **Values:** `'back' | 'top' | 'bottom' | 'left' | 'right'`

### turnTop()

Turns the cube to top.

### turnBack()

Turns the cube to back side.

### turnBottom()

Turns the cube to bottom.

### turnLeft()

Turns the cube to left.

### turnRight()

Turns the cube to right.
