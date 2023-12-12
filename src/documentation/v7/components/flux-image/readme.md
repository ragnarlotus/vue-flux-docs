---
---

# FluxImage

## Description

The FluxImage component represents the lowest component of library and displays an image, part of it or a color.

[Demo](http://ragnarlotus.github.io/vue-flux-docs/demos/components/flux-image.html)

## Attributes

``` ts
interface FluxImageProps {
	size: Size;
	viewSize?: Size;
	color?: string;
	rsc?: Resource;
	offset:? Position;
	css?: CSSProperties;
}
```

### `size`

This size is the width and height in pixels that the component will have.

### `view-size`

When received, the component will overwrite the `size` attribute, but maintain the resource scaled and position values.

### `color`

Sets the background color.

The values can be any valid CSS color.

### `rsc`

The resource to be displayed.

### `offset`

It's an adjustment of the image position in pixels based on the top and left.

In case you do not set one of them, will default to `0`.

### `css`

Object with CSS styles in camel case to apply to component.

## Methods

``` ts
// Set CSS styles to the cube
setCss(css: CSSProperties): void

// Sets the CSS styles to be transformed to within a transition
transform(css: CSSProperties): void

// Show the cube, setting `visibility` to `visible`
show(): void

// Hide the cube, setting `visibility` to `hidden`
hide(): void
```
