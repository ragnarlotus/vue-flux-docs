---
prev: ../resources
next: video
---

# Img

Renders an image

## Constructor

``` js
constructor(
	src: string,
	caption: string = '',
	resizeType: ResizeType = 'fill'
)
```

## Methods

### load(): Promise\<void\>

Called to load the resource returning a promise

### onLoad(img: HTMLImageElement, resolve: Function): void

Called when the resource is loaded successfully

### onError(reject: Function): void

Called when an error occurs when loading the resource
