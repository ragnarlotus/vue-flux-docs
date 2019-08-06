---
---

# FluxTransition

## Description

Component to display a transition between two images.

## Attributes

### size

This size is the width and height the transition will have.

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

### transition

Transition name to be played. Can be a `String` with the name of one of the 20 included transitions, an `Object` with options, or an `Object` with custom transition.

- **Type:** `String | Object`
- **Required:** `true`
- **Included transition schema:**
``` js
String;
```

- **Custom transition schema:**
``` js
{
   name: String,
   component: Object<VueComponent>,
};
```

::: warning

If the included transition is not found, or custom transition `component` attribute not defined, an error will be `thrown`.

:::

::: tip

Check [included transitions](../transitions/) or [custom transitions](../custom-transitions) for more details.

:::

### from

This attribute will define transition starting image.

- **Type:** `String | Object`
- **Required:** `true`

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

### to

This attribute will define transition ending image.

- **Type:** `String | Object`
- **Required:** `true`

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

### options

The transition options to overwrite the transition parameters.

- **Type:** `Object`
- **Required:** `false`

The available options depend on transition, so check the [transition](../transitions/) to know which ones can be modified.

For custom transitions, will apply the same.

## Methods

### getDuration()

* **Returns:** the Number in *ms* the transition will last.
