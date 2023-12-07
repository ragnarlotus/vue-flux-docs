import{_ as n,o as t,c as i,f as s,d as e,e as r}from"./app-732a0dff.js";const o={},a=e("h1",{id:"fluxgrid",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fluxgrid","aria-hidden":"true"},"#"),r(" FluxGrid")],-1),c=e("p",null,"WIP",-1);function l(u,d){return t(),i("div",null,[a,c,s(` 

## Description

Component to make grid of resource or cube.

## Attributes

### rows

The number of rows the grid will be made of.

- **Type:** \`number\`
- **Required:** \`false\`
- **Default:** \`1\`

### cols

The number of cols the grid will be made of.

- **Type:** \`number\`
- **Required:** \`false\`
- **Default:** \`1\`

### color

Sets the background color.

The values can be any valid CSS color.

- **Type:** \`string\`
- **Required:** \`false\`

### colors

Sets the background color to defined sides in case grid is made of cubes.

The values can be any valid CSS color.

- **Type:** \`Object\`
- **Required:** \`false\`
- **Schema:**

\`\`\` js
{
   front: String,
   back: String,
   top: String,
   bottom: String,
   left: String,
   right: String,
}
\`\`\`

### rsc

The resource to be displayed.

Use this attribute if you want the grid be made of images.

- **Type:** \`Resource\`
- **Required:** \`false\`

::: warning

If you use this attribute but the \`rscs\` is also defined, \`rscs\` will have preference and this will have no effect.

:::

### rscs

The object having the resources of defined sides.

Use this attribute if you want the grid to be made of cubes.

- **Type:** \`Object\`
- **Required:** \`true\`
- **Schema:**

\`\`\` js
{
   front: Resource,
   back: Resource,
   top: Resource,
   bottom: Resource,
   left: Resource,
   right: Resource,
}
\`\`\`

### size

This size is the width and height in pixels that the component will have.

The images received will be scaled and positioned to cover this size.

- **Type:** \`Size\`
- **Required:** \`true\`

### view-size

When received, the component will overwrite the \`size\` attribute, but maintain the image scaled and position values.

- **Type:** \`Size\`
- **Required:** \`false\`

### depth

Size in pixels for cubes' depth in case the grid is made of cubes

- **Type:** \`number\`
- **Required:** \`false\`
- **Default:** \`0\`

### css

Object with CSS styles in camel case to apply to component.

- **Type:** \`Object\`
- **Required:** \`false\`

### tile-css

Object with CSS styles in camel case to be applied to all tiles.

- **Type:** \`Object\`
- **Required:** \`false\`

## Methods

### setCss(css: CSSProperties): void

Set CSS styles to the grid.

- css
  - Description: an object with the CSS attributes in **camel case** and values.
  - Type: \`Object\`

### transform(cb: Function): void

Runs a function transform to each tile.

- function
  - Description: function to be run per tile.
  - Type: \`Function\`
  - Parameters: the function receives \`component\` and \`index\` as parameters.
  - Example:

\`\`\` js
grid.transform((tile, i) => {
   tile.transform({
      transition: \`all 300ms ease \${i * 100}\`,
      opacity: 0,
   });
});
\`\`\`

### show(): void

Show the grid, setting \`visibility\` to \`visible\`.

### hide(): void

Hide the grid, setting \`visibility\` to \`hidden\`.

### getRowNumber(tileNumber: number, numCols: number): number

Returns the row number

### getColNumber(tileNumber: number, numCols: number): number

Returns the column number
 `)])}const b=n(o,[["render",l],["__file","index.html.vue"]]);export{b as default};
