---
---

# FluxParallax

## Description

Creates a parallax effect given an image. It can recreate 3 types, relative, visible and fixed.

::: tip

Do not forget to set the height with CSS if has no content, otherwise you probably will not see anything.

:::

## Attributes

### src

The image URL to be displayed.

- **Type:** `String`
- **Required:** `true`

### holder

Represents the object that should be watched for scrolling.

- **Type:** `String`
- **Required:** `false`
- **Default:** `window`

::: tip

This parameter has no effect when the effect type set to `fixed`

:::

### type

Depending on the type the effect will differ.

- **Type:** `String`
- **Required:** `false`
- **Default:** `relative`

#### relative

This type is the default and moves the image with the defined offset when scrolling until reaches the edge.

#### visible

This works pretty like the relative except because the image will not start moving until the whole image is visible.

#### fixed

Makes the parallax element like a window through you can view the defined image, and you see the part of the image where the parallax position.

### offset

Is the amount of image hidden that will be displayed when scrolling.

If set in percentage the amount of pixels will be calculated in reference of height. So if the height is `300px`, and the offset is set to `100%` then the image will displace for `300px`.

- **Type:** `Number | String`
- **Required:** `false`
- **Default:** `100%`

::: tip

This parameter has no effect when the effect type set to `fixed`

:::

## Methods

### resize()

Recalculates the sizes.

### setCss(css)

Set CSS styles to the parallax.

- css
   - Description: an object with the CSS attributes in **camel case** and values.
   - Type: `Object`
