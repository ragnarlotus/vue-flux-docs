import{_ as n,o as t,c as s,f as i,d as e,e as o}from"./app-50w0ji3D.js";const c={},r=e("h1",{id:"fluxcube",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fluxcube","aria-hidden":"true"},"#"),o(" FluxCube")],-1),a=e("p",null,"WIP",-1);function d(h,l){return t(),s("div",null,[r,a,i(` 

## Description

Component composed by up to 6 resources that forms a cube.

## Attributes

### colors

Sets the background color to defined sides.

The values can be any valid CSS color.

- **Type:** \`Object\`
- **Required:** \`false\`
- **Schema:**

\`\`\` js
{
   front: string,
   back: string,
   top: string,
   bottom: string,
   left: string,
   right: string,
}
\`\`\`

### rscs

The object having the image URLs of defined sides.

- **Type:** \`Object\`
- **Required:** \`false\`
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

### depth

Size in pixels for cube depth.

- **Type:** \`number\`
- **Required:** \`false\`
- **Default:** \`0\`

### css

Object with CSS styles in camel case to apply to component.

- **Type:** \`Object\`
- **Required:** \`false\`

## Methods

### setCss(css: CSSProperties)

Set CSS styles to the cube.

- css
  - Description: an object with the CSS attributes in **camel case** and values.
  - Type: \`Object\`

### transform(css: CSSProperties)

Sets the CSS styles to be transformed to within a transition.

- css
  - Description: an object with the CSS attributes in **camel case** and values.
  - Type: \`Object\`

### show()

Show the cube, setting \`visibility\` to \`visible\`.

### hide()

Hide the cube, setting \`visibility\` to \`hidden\`.

### turn(side: Turn)

Turns the cube to specified side (front, back, top, bottom, left, right).

- side
  - Type: \`string\`
  - Values: \`'front' | back' | 'top' | 'bottom' | 'left' | 'right'\`
 `)])}const b=n(c,[["render",d],["__file","index.html.vue"]]);export{b as default};
