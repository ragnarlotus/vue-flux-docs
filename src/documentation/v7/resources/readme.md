---
prev: ssr-with-nuxt
next: resources/img
---

# Resources

This are the resources that the slider supports.

Each resource has two component properties, one is used during the transitions, and the other to display. This is done this way because for some resources like videos, can't make transitions, so they use an image for the transition and when it ends it switches the image to the video to be displayed.

| Name | Description |
|------|-------------|
| [Img](resources/img) | Displays an image |
| [Video](resources/video) | Displays a video |
| [Component](resources/component) | Displays vue component |

All this resources inherit the abstract class `Resource`.

## Resource

### Constructor

``` ts
constructor(
	src: string,
	caption: string,
	resizeType: ResizeType = ResizeTypes.fill,
	backgroundColor: null | string = null,
	display: DisplayParameter,
	transition: TransitionParameter,
	errorMessage: string
)
```

### Properties

``` ts
// The src url of the resource
src: string;

// Once called to load contains the promise in charge of loading it
loader: Promise<void> | null = null;

// If there where an error loading this will contain the error message
errorMessage: string;

// Contains the status of the resource, being one of `notLoaded`, `loading`, `loaded` or `error`
status: Ref<Statuses> = ref(Statuses.notLoaded);

// Natural size of the resource
realSize: Size = new Size();

// Size of the display
displaySize: Size = new Size();

// The caption that represents the resource
caption: string = '';

// The type of desired resize, being `fill` or `fit`
resizeType: ResizeType;

// Color that will fill the remaining space to cover the desired size in case the resize type is `fit`
backgroundColor: null | string = null;

// The display component is the one that will be shown when not in transition
display: DisplayParameter;

// The component used during the transition
transition: TransitionParameter;

// The computed properties adapted for the size of display
resizeProps: computed<{
	top?: number;
	left?: number;
	width?: number;
	height?: number;
}>
```

### Methods

``` ts
// Returns if the resource is being loaded
isLoading(): boolean

// Returns if the resource is already loaded
isLoaded(): boolean

// Returns if the resource has finished loading with an error
isError(): boolean

// Returns the size and position of the given display size
calcResizeProps(displaySize: Size): Object

// Returns the size and position resizing to given size and optionally an offset.
getResizeProps(size: Size, offset?: Position): Object
```
