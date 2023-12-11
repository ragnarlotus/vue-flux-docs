---
---

# FluxParallax

## Description

Creates a parallax effect given an image. It can recreate 3 types, `relative`, `visible` and `fixed`.

::: tip

Do not forget to set the height with CSS if has no content, otherwise you probably will not see anything.

:::

[Demo](http://ragnarlotus.github.io/vue-flux-docs/demos/components/flux-parallax.html)

## Attributes

``` ts
interface FluxParallaxProps {
	rsc: Resource;
	holder?: any = window;
	type?: 'visible' | 'relative' | 'fixed' = 'relative';
	offset?: string = '100%';
}
```

### `rsc`

The resource to be displayed.

### `holder`

Represents the object that should be watched for scrolling.

::: tip

This parameter has no effect when the effect type set to `fixed`

:::

### `type`

Depending on the type the effect will differ.

| Type | Description |
|------|-------------|
| `relative` | This type is the default and moves the image with the defined offset when scrolling until reaches the edge |
| `visible` | This works pretty like the relative except because the image will not start moving until the whole image is visible |
| `fixed` | Makes the parallax element like a window through you can view the defined image, and you see the part of the image where the parallax position |

### `offset`

Is the amount of image hidden that will be displayed when scrolling.

If set in percentage the amount of pixels will be calculated in reference of height. So if the height is `300px`, and the offset is set to `100%` then the image will displace for `300px`.

::: tip

This parameter has no effect when the effect type set to `fixed`

:::

## Methods

``` ts
// Recalculates the sizes.
resize(): void
```

## Slots

| Name | Description |
|------|-------------|
| | The content showed inside the parallax component |
