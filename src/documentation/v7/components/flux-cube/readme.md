---
---

# FluxCube

## Description

Component composed by up to 6 resources that forms a cube.

[Demo](http://ragnarlotus.github.io/vue-flux-docs/demos/components/flux-cube.html)

## Attributes

``` ts
interface FluxCubeProps {
	size: Size;
	viewSize?: Size = new Size();
	color?: string;
	colors?: SidesColors = ({});
	rsc?: Resource;
	rscs?: SidesResources = ({});
	offset:? Position;
	offsets?: SidesOffsets = ({});
	css?: CSSProperties;
	depth?: number = 0;
	origin?: string;
}
```

### `size`

This size is the width and height in pixels that the component will have taking as reference the the front.

### `view-size`

When received, the component will overwrite the `size` attribute, but maintain the resource scaled and position values.

### `color`

Sets the background color to all sides.

The values can be any valid CSS color.

### `colors`

Sets the background color to defined sides. This color will override the one defined in `color` parameter.

### `rsc`

Sets the resource to all the sides.

### `rscs`

The object having the resources of defined sides. This resources will override the one defined in `rsc` parameter

``` ts
interface SidesResources {
	[Sides.front]?: Resource;
	[Sides.back]?: Resource;
	[Sides.left]?: Resource;
	[Sides.right]?: Resource;
	[Sides.top]?: Resource;
	[Sides.bottom]?: Resource;
}
```

### `offset`

Sets the position to all sides.

### `offsets`

The positions of defined sides. This position will override the one defined in `offset` parameter.

``` ts
interface SidesOffsets {
	[Sides.front]?: Position;
	[Sides.back]?: Position;
	[Sides.left]?: Position;
	[Sides.right]?: Position;
	[Sides.top]?: Position;
	[Sides.bottom]?: Position;
}
```

### `css`

Object with CSS styles in camel case to apply to component.

### `depth`

Size in pixels for cube depth.

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

// Turns the cube to specified side (front, back, backr, backl, top, bottom, left, right)
turn(side: Turn): void
```
