---
---

# FluxImage

## Description

The FluxImage component represents the last part of the slider and displays an image, part of it or a color.

It renders what have to be displayed calculating its size and position automatically.

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

### color

This attibute sets the background color in case there is no image set or image does not fill the size.

The values can be any valid CSS color.

- **Type:** `String`
- **Required:** `false`

### offset

Its and adjustment of the image in pixels based on the top and left position.

If the offset is passed as single value, the offset will be applied to `top` and `left`.

If the offset is passed as object, you can specify the offsets `top` and `left` individually. In case you do not set one of them will default to `0`.

- **Type:** `Number | 'auto' | Object`
- **Required:** `false`
- **Single Schema:**
``` js
Number | 'auto';
```
- **Object Schema:**
``` js
{
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

## Methods

### setCss(css: `Object`)

Set CSS styles to the image.

#### css

An object with the CSS attributes in **camel case** and values.

* **Type:** `Object`

### transform(css: `Object`)

Sets the CSS styles to be transformed to within a transition.

#### css

An object with the CSS attributes in **camel case** and values.

* **Type:** `Object`

### show()

Hides the image setting `visibility`to `visible`.

### hide()

Hides the image setting `visibility`to `hidden`.
