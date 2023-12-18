---
prev: transitions
---

# Custom transitions

## Configuration

The basic configuration of a transition consists in the following variables;

``` ts
interface TransitionConf {
	totalDuration?: number;
	easing: string;
	direction?: Direction;
}
```

### totalDuration

Represents the transition duration in ms.

### easing

The animation easing for the transition. You can take a look at [easings.net](https://easings.net/) for a visual examples.

Its value can be any accepted by [transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)

### direction

Some transitions can have a different effect depending if you go to a later or previous resource.

## Props

``` ts
interface TransitionProps {
	size: Size;
	from: Resource;
	to?: Resource;
	options?: any;
	maskStyle: CSSProperties;
	displayComponent: any;
}
```

### size

This size is the width and height of the slider.

### from

The origin resource which is currently being displayed.

### to

The destination resource to be displayed.

### options

Is an object with attributes and values that will be assigned to the transition parameters.

### mask

Is the Object CSS that wraps the transitions. This way you can control whether hide overflow, change perspective, or any other relevant style.

### displayComponent

Refers to the component resource that is being displayed at the moment. Sometimes you may want to `hide()` it for your transition.

After the transition is finished, it will be shown automatically, since it is the component that renders the resource for displaying when no transition is running.

## Composable

Transitions use the composable `useTransition` to perform basic and shared logic, like overwriting the default configuration with the options received from `props`.

``` ts
function useTransition(conf: TransitionConf, options?: object): void
```

## Methods

``` ts
// All transitions must have this method, and is the one that will run the transition.
onPlay(): void
```

## Exposed elements

::: danger

Don't miss the this section to make your transition work

:::

You must [expose](https://vuejs.org/api/sfc-script-setup.html#defineexpose) the following data and method.

``` ts
totalDuration?: number;
onPlay(): void
```

## Using them

To use a custom transition, we need to import it and include it in the transitions array, that is all :wink:

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

const rscs = shallowReactive([
   new Img('URL1' 'img 1'),
   new Img('URL2' 'img 2'),
   new Img('URL3' 'img 3'),
]);

const transitions = shallowReactive([Book, Zip, CustomTransition1, CustomTransition2);
```

``` html
<VueFlux
   :rscs="rscs"
   :transitions="transitions">
</VueFlux>
```

::: tip

You can see the [transitions source code](https://github.com/ragnarlotus/vue-flux/tree/main/src/transitions) to get more ideas or examples.

:::
