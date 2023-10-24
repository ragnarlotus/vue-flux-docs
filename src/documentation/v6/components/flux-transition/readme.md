---
---

# FluxTransition

## Description

Component to display a transition between two images.

## Attributes

### size

This size is the width and height in pixels that the component will have.

The transition images will be scaled and positioned to cover this size.

- **Type:** `Object`
- **Required:** `true`
- **Schema:**

``` js
{
   width: Number,
   height: Number,
}
```

### transition

Can be a `String` with the name of one of the 20 included transitions, an `Object` with included transition name and options, or an `Object` of custom transition with name, options and component.

- **Type:** `String | Object`
- **Required:** `true`
- **Object schema:**

``` js
{
   name: String,
   component: Component,
}
```

::: warning

If the included transition is not found, or custom transition `component` attribute not defined, an error will be `thrown`.

:::

::: tip

Check [included transitions](../transitions/) or [custom transitions](../custom-transitions) for more details.

:::

### from

This attribute will define transition starting image.

- **Type:** `String`
- **Required:** `true`

### to

This attribute will define transition ending image.

- **Type:** `String`
- **Required:** `true`

### options

The transition options to overwrite the transition parameters.

- **Type:** `Object`
- **Required:** `false`

The available options depend on transition, so check the [transition](../transitions/) to know which ones can be modified.

For custom transitions, will apply the same.

## Methods

### start()

This method will call the method `played`of the transition component, starting the transition.

### getDuration()

- Returns: the number in *ms* the transition will last.

## Events

- `ready`: will be fired when the transition is ready to play because the components are rendered.
- `start`: will let know when transition has started.
- `end`: fired when transition ended.
