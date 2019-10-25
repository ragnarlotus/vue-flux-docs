---
---

# FluxCube

## Description

Component composed by up to 6 [FluxImage](flux-image) that forms a cube.

## Attributes

### color

Sets the background color to all sides.

The values can be any valid CSS color.

- **Type:** `String`
- **Required:** `false`

### colors

Sets the background color to defined sides.

The values can be any valid CSS color.

- **Type:** `Object`
- **Required:** `false`
- **Schema:**
``` js
{
   front: String,
   back: String,
   top: String,
   bottom: String,
   left: String,
   right: String,
}
```

### images

The object having the image URLs of defined sides.

- **Type:** `Object`
- **Required:** `true`
- **Schema:**
``` js
{
   front: String,
   back: String,
   top: String,
   bottom: String,
   left: String,
   right: String,
}
```

### size

This size is the width and height in pixels that the component will have.

The images received will be scaled and positioned to cover this size.

- **Type:** `Object`
- **Required:** `true`
- **Schema:**
``` js
{
   width: Number,
   height: Number,
}
```

### depth

Size in pixels for cube depth.

If not defined the depth will be the width set in [size](#size).

- **Type:** `Number`
- **Required:** `false`

### css

Object with CSS styles in camel case to apply to component.

- **Type:** `Object`
- **Required:** `false`

### sides-css

Object with CSS styles in camel case to apply per side.

- **Type:** `Object`
- **Required:** `false`
- **Schema:**
``` js
{
   front: Object,
   back: Object,
   top: Object,
   bottom: Object,
   left: Object,
   right: Object,
}
```

## Methods

### getSide(side)

Gets the image by side.

- side
   - Type: `String`
   - Values: `'back' | 'top' | 'bottom' | 'left' | 'right'`
   - Returns: the [FluxImage](flux-image) side component.

### setCss(css)

Set CSS styles to the cube.

- css
   - Description: an object with the CSS attributes in **camel case** and values.
   - Type: `Object`

### transform(css)

Sets the CSS styles to be transformed to within a transition.

- css
   - Description: an object with the CSS attributes in **camel case** and values.
   - Type: `Object`

### show()

Show the cube, setting `visibility` to `visible`.

### hide()

Hide the cube, setting `visibility` to `hidden`.

### turn(side)

Turns the cube to specified side (front, back, top, bottom, left, right).

- side
   - Type: `String`
   - Values: `'front' | back' | 'top' | 'bottom' | 'left' | 'right'`

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
