---
---

## Description

Component composed by up to 6 [FluxImage](flux-image) that forms a cube.

**Sides**:
- front: `String`
- back: `String`
- top: `String`
- bottom: `String`
- left: `String`
- right: `String`

## Attributes

### size

This size is the width and height the cube will have.

- **Type:** `Object`
- **Required:** `true`
- **Schema:**
``` js
let size = {
   width: Number | String,
   height: Number | String,
};
```

### images

Object with images per side.

Check the [FluxImage image](flux-image#image) for the parameter schema.

- **Type:** `Object`
- **Required:** `false`
- **Schema:**
``` js
let images = {
   front: frontImage,
   back: backImage,
   top: topImage,
   bottom: bottomImage,
   left: leftImage,
   right: rightImage,
};
```

### color

This attibute sets the background color in case there is no image set or image does not fill the side.

If the color is a string, the color will be applied to all sides.

Check the [FluxImage color](flux-image#color) for the parameter format.

- **Type:** `String | Object`
- **Required:** `false`
- **Schema:**
``` js
// Applied to all sides
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

### depth

Size in pixels for cube depth.

If not defined the depth will be determined by the width and height defined in [size](#size).

- **Type:** `Number`
- **Required:** `false`
- **Schema:**
``` js
let depth = 800;
```

### css

Object with cube CSS styles.

- **Type:** `Object`
- **Required:** `false`
- **Schema:**
``` js
let css = {
   box-shadow: 5px 10px #888,
};
```

### sidesCss

Object with CSS styles per side.

- **Type:** `Object`
- **Required:** `false`
- **Schema:**
``` js
let sideCss = {
   ...,
   front: {
      ...,
   },
   right: {
      ...,
   },
   ...,
};
```

### offset

Its and adjustment of the image in pixels.

Check the [FluxImage offset](flux-image#offset) for the parameter details.

- **Type:** `Number | String | Object`
- **Required:** `false`
- **Schema:**
``` js
let offset = {
   ...,
   front: '50',
   right: '-50',
   ...,
};
```

## Methods

### getSide(side: `String`)

Gets the image by side.

- **Arguments:**
   - side: `'front' | 'back' | 'top' | 'bottom' | 'left' | 'right'`

- **Returns:** the [FluxImage](flux-image) dispalying requested side.

### setCss(css: `Object`)

Set a CSS rules to the cube.

- **Arguments:** 
   - css: `{...}`

### transform(css: `Object`)

Sets the CSS style to be transformed to within a transition.

- **Arguments:** 
   - css: `{...}`

### turn(side: `String`)

Turns the cube to specified side (top, back, bottom, left, right) with to side (left or right).

- **Arguments:**
   - side: `'front' | 'back' | 'top' | 'bottom' | 'left' | 'right'`

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
