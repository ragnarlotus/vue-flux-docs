---
---

# FluxImage

WIP

<!-- 

## Description

The FluxImage component represents the lowest component of library and displays an image, part of it or a color.

## Attributes

### color

Sets the background color.

The values can be any valid CSS color.

- **Type:** `String`
- **Required:** `false`

### image

The URL of the image to be displayed.

- **Type:** `String`
- **Required:** `false`

### size

This size is the width and height in pixels that the component will have.

If receives an image, the image will be scaled and positioned to cover this size.

- **Type:** `Object`
- **Required:** `false`
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

### offset

It's an adjustment of the image position in pixels based on the top and left.

In case you do not set one of them, will default to `0`.

- **Type:** `Object`
- **Required:** `false`
- **Schema:**

``` js
{
   top: Number,
   left: Number,
}
```

### css

Object with CSS styles in camel case to apply to component.

- **Type:** `Object`
- **Required:** `false`

## Methods

### setCss(css)

Set CSS styles to the image.

- css
  - Description: an object with the CSS attributes in **camel case** and values.
  - Type: `Object`

### transform(css)

Sets the CSS styles to be transformed to within a transition.

- css
  - Description: an object with the CSS attributes in **camel case** and values.
  - Type: `Object`

### show()

Show the image, setting `visibility` to `visible`.

### hide()

Hide the image, setting `visibility` to `hidden`.
 -->