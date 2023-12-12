---
prev: false
---

# VueFlux

## Description

This is the main component of the slider and will be the frame that displays the resources.

[Demo](http://ragnarlotus.github.io/vue-flux-docs/demos/components/vue-flux.html)

## Size

The slider size is defined the following way:

1. If defined by CSS that will be the size
2. If no width defined, will be parent's width
3. If no height defined, will calculate the height using a 16:9 ratio

::: danger

If you want to define a size, avoid using `width` and `height` directly in the style attribute, as those values will be applied always, even in full screen, not letting the slider resize itself. So better use a class for `.vue-flux` component or set the `style` attribute in the parent.

:::

## Attributes

All the attributes are reactive, so if you change their value at any moment, the slider will be updated automatically.

``` ts
interface VueFluxProps {
	options?: VueFluxOptions;
	rscs: (Resource | ResourceWithOptions)[];
	transitions: (Component | TransitionWithOptions)[];
}
```

### `options`

An object containing the slider options.

This are the available options.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| allowFullscreen | boolean | false | Allows the slider to be displayed in full screen |
| allowToSkipTransition | boolean | true | If enabled you will be able to skip the running transition, otherwise you need to wait to interact again |
| aspectRatio | string | 16:9 | Aspect ratio to set the slider by `width:height` ratio |
| autohideTime | number | 2500 | The time in *ms* that the controls and index buttons remain visible. If set to `0` they will never disappear |
| autoplay | boolean | false | Autoplay images when preload finished |
| bindKeys | boolean | false | Binds the arrow keys of keyboard to show next or previous |
| delay | number | 5000 | The time in *ms* that an image will be displayed before changing to next |
| enableGestures | boolean | false | Define if in touchable screens should use gestures instead of showing control and index buttons |
| infinite | boolean | true | The slider will start over when reaches the last image, otherwise will stop |
| lazyLoad | boolean | true | Enables or disables lazy loading of images. If disabled, transitions will not begin until all images have been loaded |
| lazyLoadAfter | number | 3 | Indicates how many images have to be loaded before starting to load the rest in background |

This is the default options schema:

``` ts
{
	allowFullscreen: false,
	allowToSkipTransition: true,
	aspectRatio: '16:9',
	autohideTime: 2500,
	autoplay: false,
	bindKeys: false,
	delay: 5000,
	enableGestures: false,
	infinite: true,
	lazyLoad: true,
	lazyLoadAfter: 5,
}
```

### `rscs`

The array containing the [resources](../resources) to be displayed.

::: tip

If resource can not be loaded will be omitted displaying a console warning message.

:::

#### Resource options

In order to modify the parameters of resources, you need to do it using an object with the following schema:

``` ts
interface ResourceWithOptions {
	resource: Resource;
	options: {
		delay?: number;
		stop?: boolean;
	};
}
```

### `transitions`

This is an array that will own the transition components.

The transitions will be run in the order defined and then will begin again from the first.

#### Included transitions

In this version there are 20 transitions included.

::: tip

Check [transitions](../transitions) to see the list.

:::

#### Custom transitions

To use a custom transition, we need to import it and include it in the transitions array

Example:

``` ts
import { shallowReactive } from 'vue';
import {
   VueFlux,
   Img,
   Book,
   Zip,
} from 'vue-flux';
import 'vue-flux/style.css';

import CustomTransition1 from 'CustomTransition1.vue';
import CustomTransition2 from 'CustomTransition2.vue';

const vfRscs = shallowReactive([
   new Img('URL1' 'img 1'),
   new Img('URL2' 'img 2'),
   new Img('URL3' 'img 3'),
]);

const vfTransitions = shallowReactive([Book, Zip, CustomTransition1, CustomTransition2);
```

``` html
<VueFlux
   :rscs="vfRscs"
   :transitions="vfTransitions">
</VueFlux>
```

::: tip

Check [custom transitions](../custom-transitions) to know more about how to create custom transitions.

:::

#### Transition options

In order to modify the parameters of transitions, you need to do it using an object with the following schema:

``` ts
interface TransitionWithOptions {
   component: Component;
   options: Object;
}
```

To know which options the included transitions have, go to the transition documentation.

Following is an example of customizing an included transition and a custom transition.

``` ts
import { shallowReactive } from 'vue';
import {
   VueFlux,
   Img,
   Blinds2D ,
} from 'vue-flux';
import 'vue-flux/style.css';
import CustomTransition from 'CustomTransition.vue';

const vfRscs = shallowReactive([
   new Img('URL1' 'img 1'),
   new Img('URL2' 'img 2'),
   new Img('URL3' 'img 3'),
]);

const vfTransitions = [{
   component: Blinds2D,
   options: {
      tileDuration: 1000,
      easing: 'ease-in-out',
   },
}, {
   component: CustomTransition,
   options: {
      rows: 4,
      cols: 10,
      totalDuration: 3000,
   },
}];
```

``` html
<VueFlux
   :rscs="vfRscs"
   :transitions="vfTransitions">
</VueFlux>
```

## Methods

``` ts
// Displays the resource specified by number (or 'next' or 'prev') and using the specified transition.
async show(
	resourceIndex: number | Direction = Directions.next,
	transitionIndex: number | Direction = Directions.next
): void

// Starts displaying the resources by the interval specified with [delay](#options) option.
play(resourceIndex: number | Direction = Directions.next, delay?: number): void

// Stops playing images and remains in the current.
async stop(cancelTransition: boolean = false): void
```

## Slots

| Name | Component | Description |
|------|-----------|-------------|
| preloader | [FluxPreloader](../complements/flux-preloader) | Defined to hold the preloading functionality |
| caption | [FluxCaption](../complements/flux-caption) | Used to display the resources captions |
| controls | [FluxControls](../complements/flux-controls) | Used to display the slider controls |
| index | [FluxIndex](../complements/flux-index) | Used to display a resources index |
| pagination | [FluxPagination](../complements/flux-pagination) | Used to display the a resources pagination |

## Emits

| Name | Parameters | Description |
|------|------------|-------------|
| `created` | | fired when the slider component is created |
| `mounted` | | fired when the slider component is mounted |
| `unmounted` | | fired when the slider component is destroyed |
| `play` | `resourceIndex: number \| Direction, delay?: number` | fired when auto playing resources |
| `stop` | | fired when stopped to auto play resources |
| `show` | `resource: PlayerResource, transition: PlayerTransition` | fired when requested to show an image |
| `options-updated` | | fired when the options have been updated |
| `transitions-updated` | | fired when transitions updated |
| `resources-preload-start` | | fired when started to preload images |
| `resources-preload-end` | | fired when finished to preload images |
| `resources-lazyload-start` | | fired when start to lazy loading images |
| `resources-lazyload-end` | | fired when finished to lay loading images |
| `fullscreen-enter` | | fired when entered in full screen mode |
| `fullscreen-exit` | | fired when exit from full screen |
| `transition-start` | `resource: PlayerResource, transition: PlayerTransition` | fired when transition begin |
| `transition-cancel` | `resource: PlayerResource, transition: PlayerTransition` | fired when transition is running and is being cancelled |
| `transition-end` | `resource: PlayerResource, transition: PlayerTransition` | fired when transition finish |
