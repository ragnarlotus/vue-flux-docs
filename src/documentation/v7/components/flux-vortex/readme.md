---
---

# FluxVortex

## Description

Resource component made of concentric circles.

[Demo](http://ragnarlotus.github.io/vue-flux-docs/demos/components/flux-vortex.html)

## Props

``` ts
interface FluxVortexProps {
	size: Size;
	viewSize?: Size;
	color?: string;
	rsc: Resource;
	offset?: Position;
	css?: CSSProperties;
	circles?: number = 1;
	tileCss?: CSSProperties;
}
```

### `size`

This size is the width and height in pixels that the component will have.

### `view-size`

When received, the component will overwrite the `size` attribute, but maintain the resource scaled and position values.

### `color`

Sets the background color when represented by one side or to all sides.

The values can be any valid CSS color.

### `rsc`

The resource to be displayed.

### `offset`

It's an adjustment of the image position in pixels based on the top and left.

### `css`

Object with CSS styles in camel case to apply to component.

### `circles`

The number of circles the vortex will be made of.

### `tile-css`

Object with CSS styles in camel case to be applied to all tiles.

## Methods

``` ts
// Set CSS styles to the grid
setCss(css: CSSProperties): void

// Runs a function transform to each tile
transform(cb: Function(tile: any, index: number)): void

$vortex.transform((tile: any, index: number) => {
   tile.transform({
      transition: `all 300ms ease ${i * 100}`,
      opacity: 0,
   });
});

// Show the cube, setting `visibility` to `visible`
show(): void

// Hide the cube, setting `visibility` to `hidden`
hide(): void
```
