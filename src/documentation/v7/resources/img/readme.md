---
prev: ../resources
next: video
---

# Img

Renders an image

## Constructor

``` ts
constructor(
	src: string,
	caption: string = '',
	resizeType: ResizeType = 'fill'
)
```

## Methods

``` ts
// Called to load the resource returning a promise
load(): Promise<void>

// Called when the resource is loaded successfully
onLoad(img: HTMLImageElement, resolve: Function): void

// Called when an error occurs when loading the resource
onError(reject: Function): void
```
