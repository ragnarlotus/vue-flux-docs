---
---

# FluxTransition

## Description

Component to display a transition animation between two resources.

[Demo](http://ragnarlotus.github.io/vue-flux-docs/demos/components/flux-transition.html)

## Attributes

``` ts
interface FluxTransitionProps {
	size: Size;
	transition: Object;
	from: Resource;
	to: Resource;
	displayComponent?: null | any;
	options?: Object;
}
```

### `size`

This size is the width and height in pixels that the component will have.

### `transition`

The component that performs the animation.

::: tip

Check [included transitions](../transitions/) or [custom transitions](../custom-transitions) for more details.

:::

### `from`

This attribute will define transition starting resource.

### `to`

This attribute will define transition ending resource.

### `options`

The transition options to overwrite the transition parameters.

The available options depend on transition, so check the [transitions](../transitions/) to know which ones can be modified.

For custom transitions, will apply the same.

## Methods

``` ts
// This method will call the method `onPlay`of the transition component, starting the transition.
async start(): void

// the number in *ms* the transition will last.
duration: number
```

## Events

| Name | Parameters | Description |
|------|------------|-------------|
| `ready` | `transition: Object, from: Resource, to: Resource, options: Object, duration: number` | Will be fired when the transition is ready to play because the components are rendered |
| `start` | `transition: Object, from: Resource, to: Resource, options: Object, duration: number` | Will let know when transition has started |
| `end` | `transition: Object, from: Resource, to: Resource, options: Object, duration: number` | Fired when transition ended |
