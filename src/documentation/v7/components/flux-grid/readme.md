---
---

# FluxGrid

## Description

Component to make grid of resource or cube.

[Demo](http://ragnarlotus.github.io/vue-flux-docs/demos/components/flux-grid.html)

## Props

``` ts
interface FluxGridProps {
	size: Size;
	viewSize?: Size;
	color?: string;
	colors?: SidesColors = ({});
	rsc?: Resource;
	rscs?: SidesResources = ({});
	rows?: number = 1;
	cols?: number = 1;
	css?: CSSProperties;
	depth?: number = 0;
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

### `colors`

Sets the background color to defined sides. This color will override the one defined in `color` parameter.

### `rsc`

Sets the resource when represented by one side or to all the sides.

### `rscs`

The object having the resources of defined sides. This resources will override the one defined in `rsc` parameter

### `rows`

The number of rows the grid will be made of.

### `cols`

The number of cols the grid will be made of.

### `css`

Object with CSS styles in camel case to apply to component.

### `depth`

Size in pixels for cube depth.

### `tile-css`

Object with CSS styles in camel case to be applied to all tiles.

## Methods

``` ts
// Set CSS styles to the grid
setCss(css: CSSProperties): void

// Runs a function transform to each tile
transform(cb: Function(tile: any, index: number)): void

$grid.transform((tile: any, index: number) => {
   tile.transform({
      transition: `all 300ms ease ${i * 100}`,
      opacity: 0,
   });
});

// Show the cube, setting `visibility` to `visible`
show(): void

// Hide the cube, setting `visibility` to `hidden`
hide(): void

// Returns the row number
getRowNumber(tileNumber: number, numCols: number): number

// Returns the column number
getColNumber(tileNumber: number, numCols: number): number
```
