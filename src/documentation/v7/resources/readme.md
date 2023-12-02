---
prev: ssr-with-nuxt
next: resources/image
---

# Resources

This are the resources that the slider supports.

Each resource has 2 component properties, one is used during the transitions, and the other to display. This is done this way because for some resources like videos, can't make transitions, so they use an image for the transition and when it ends it switches the image to the video to be displayed.

| Name | Description |
|------|-------------|
| [Img](img) | Displays an image |
| [Video](video) | Displays a video |
| [Component](component) | Displays vue component |

All this resources inherit the abstract class `Resource`.

## Resource

### Constructor

``` js
constructor(
	src: string,
	caption: string,
	resizeType: ResizeType = 'fill',
	display: DisplayParameter,
	transition: TransitionParameter,
	errorMessage: string
)
```

### Properties

#### src: string

The src url of the resource

#### loader: Promise\<void\> | null

Once called to load contains the promise in charge of loading it

#### errorMessage: string

If there where an error loading this will contain the error message

#### status: ResourceStatus

Contains the status of the resource, being one of `notLoaded`, `loading`, `loaded` or `error`

#### realSize: Size

Natural size of the resource

#### displaySize: Size

Size of the display

#### caption: string

The caption that represents the resource

#### resizeType: ResizeType

The type of desired resize, being `fill` or `fit`

#### display: DisplayParameter

The display component is the one that will be shown when not in transition

#### transition: TransitionParameter

The component used during the transition

#### fillProps: Object

The computed properties for resize filling the display

#### fitProps: Object

The computed properties for resize fitting the display

### Methods

#### isLoading(): boolean

Returns if the resource is being loaded

#### isLoaded(): boolean

Returns if the resource is already loaded

#### isError(): boolean

Returns if the resource has finished loading with an error

#### getFillProps(displaySize: Size): Object

Returns the size and position of the given display size to filling it.

#### getFitProps(displaySize: Size): Object

Returns the size and position of the given display size to fit it.

#### getResizeProps(size: Size, offset?: Position): Object

Returns the size and position resizing to given size and optionally an offset.
