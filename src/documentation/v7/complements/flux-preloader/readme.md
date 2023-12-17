---
next: false
---

# FluxPreloader

## Description

The included component in charge of showing the spinner the resource loading progress.

## Props

``` ts
interface Props {
	loader: Ref<null | ResourceLoader>;
}
```

### loader

Is the resource loader.

#### Example of usage

``` ts
import { ref, shallowReactive } from 'vue';
import {
	VueFlux,
	FluxPreloader,
	Img,
	Book,
	Zip,
} from 'vue-flux';
import 'vue-flux/style.css';

const options = shallowReactive({
	autoplay: true,
});

const rscs = shallowReactive([
	new Img('URL1' 'img 1'),
	new Img('URL2' 'img 2'),
	new Img('URL3' 'img 3'),
]);

const transitions = shallowReactive([Book, Zip]);
```

``` html
<VueFlux
	:options="options"
	:rscs="rscs"
	:transitions="transitions"
>
	<template #preloader="preloaderProps">
		<FluxPreloader v-bind="preloaderProps" />
	</template>
</VueFlux>
```

## Templating

You can customize the spinner element using the slot.

The slot will receive an object having the following schema:

``` ts
interface preloaderProps = {
	loader: ResourceLoader;
	preloading: number;
	lazyloading: number;
	pct: number;
}
```

You can see a template example in the [demo](../../../../demos/complements/flux-preloader.md)
