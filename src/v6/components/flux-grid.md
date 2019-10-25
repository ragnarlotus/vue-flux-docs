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

### color

Sets the background color.

The values can be any valid CSS color.

- **Type:** `String`
- **Required:** `false`

### colors

Sets the background color to defined sides in case grid is made of cubes.

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

### image

The URL of the image to be displayed.

Use this attribute if you want the grid be made of images.

- **Type:** `String`
- **Required:** `false`

::: warning

If you use this attribute but the `images` is also defined, `images` will have preference and this will have no effect.

:::

### images

The object having the image URLs of defined sides.

Use this attribute if you want the grid to be made of cubes.

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

### view-size

When received, the component will overwrite the `size` attribute, but maintain the image scaled and position values.

- **Type:** `Object`
- **Required:** `false`
- **Schema:**
``` js
{
   width: Number,
   height: Number,
}
```

### depth

Size in pixels for cubes' depth in case the grid is made of cubes

If not defined the depth will be the width set in [size](#size).

- **Type:** `Number`
- **Required:** `false`

### css

Object with CSS styles in camel case to apply to component.

- **Type:** `Object`
- **Required:** `false`

### tile-css

Object with CSS styles in camel case to be applied to all tiles.

- **Type:** `Object`
- **Required:** `false`

## Methods

### setCss(css)

Set CSS styles to the grid.

- css
   - Description: an object with the CSS attributes in **camel case** and values.
   - Type: `Object`

### transform(function)

Runs a function transform to each tile.

- function
   - Description: function to be run per tile.
   - Type: `Function`
   - Parameters: the function receives `component` and `index` as parameters.
   - Example:
``` js
grid.transform((tile, i) => {
   tile.transform({
      transition: `all 300ms ease ${i * 100}`,
      opacity: 0,
   });
});
```

### show()

Show the grid, setting `visibility` to `visible`.

### hide()

Hide the grid, setting `visibility` to `hidden`.
