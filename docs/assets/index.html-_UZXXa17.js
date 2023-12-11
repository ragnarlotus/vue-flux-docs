import{_ as n,o as t,c as i,f as s,d as e,e as a}from"./app-8ofisRWT.js";const c={},o=e("h1",{id:"fluxvortex",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fluxvortex","aria-hidden":"true"},"#"),a(" FluxVortex")],-1),r=e("p",null,"WIP",-1);function l(h,d){return t(),i("div",null,[o,r,s(` 

## Description

Image component made of concentric circles.

## Attributes

### circles

The number of circles the vortex will be made of.

- **Type:** \`Number\`
- **Required:** \`false\`
- **Default:** \`1\`

### image

The URL of the image to be displayed.

- **Type:** \`String\`
- **Required:** \`true\`

### size

This size is the width and height in pixels that the component will have.

The image will be scaled and positioned to cover this size.

- **Type:** \`Object\`
- **Required:** \`true\`
- **Schema:**

\`\`\` js
{
   width: Number,
   height: Number,
}
\`\`\`

### css

Object with CSS styles in camel case to apply to component.

- **Type:** \`Object\`
- **Required:** \`false\`

### tile-css

Object with CSS styles in camel case to be applied to all tiles.

- **Type:** \`Object\`
- **Required:** \`false\`

## Methods

### setCss(css)

Set CSS styles to the image.

- css
  - Description: an object with the CSS attributes in **camel case** and values.
  - Type: \`Object\`

### transform(css)

Sets the CSS styles to be transformed to within a transition.

- css
  - Description: an object with the CSS attributes in **camel case** and values.
  - Type: \`Object\`

### show()

Show the image, setting \`visibility\` to \`visible\`.

### hide()

Hide the image, setting \`visibility\` to \`hidden\`.
 `)])}const u=n(c,[["render",l],["__file","index.html.vue"]]);export{u as default};
