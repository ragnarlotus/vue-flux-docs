---
next: false
---

# FluxWrapper

## Description

A wrapper component for special needs like in some transitions. Sets CSS style `overflow` as `hidden` by default.

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

## Slots

| Name | Description |
|------|-------------|
| | This component has a default slot to place anything you need within |
