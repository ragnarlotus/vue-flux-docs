---
---

# FluxThumb

## Description

Component to display a miniature of an image.

## Attributes

### size

This size is the width and height the image **view** will have.

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

::: tip

This size represents the frame / window / view size and must not be confused with image original size nor image final size after resized to fit this size.

:::

### image

This attribute will define the image to be displayed.

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

### caption

The caption will be displayed as a small text when moused placed over.

- **Type:** `String | Object`
- **Required:** `false`
- **String schema:**
``` js
let caption = String;
```

If the caption is an object it must have the `text` property with the caption in plain text.

- **Object Schema:**
``` js
{
   ...,
   text: String,
   ...,
};
```
