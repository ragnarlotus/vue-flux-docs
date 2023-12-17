---
---

# FluxControls

## Description

The included component to display controls with the buttons previous, next, play and pause.

## Props

``` ts
interface Props {
	mouseOver?: boolean | Ref<boolean>;
	player: Player;
}
```

### mouseOver

A reactive parameter to indicate when the mouse is over so it should be displayed.

If this parameter is not passed, controls will be displayed constantly.

### player

The player controller. You can get it from [VueFlux](../components/vue-flux#props-and-methods)

#### Example of usage

``` ts
import { ref, shallowReactive } from 'vue';
import {
	VueFlux,
	FluxControls,
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
	<template #controls="controlsProps">
		<FluxControls v-bind="controlsProps" />
	</template>
</VueFlux>
```

#### Example of controls outside VueFlux

``` js
import { ref, shallowReactive, onMounted } from 'vue';
import {
	VueFlux,
	FluxControls,
	Img,
	Book,
	Zip,
} from 'vue-flux';
import 'vue-flux/style.css';

const $vueFlux = ref();

const options = shallowReactive({
	autoplay: true,
});

const rscs = shallowReactive([
	new Img('URL1' 'img 1'),
	new Img('URL2' 'img 2'),
	new Img('URL3' 'img 3'),
]);

const transitions = shallowReactive([Book, Zip]);

const mounted = ref(false);

onMounted(() => {
	mounted.value = true;
});
```

``` html
<div>
	<VueFlux
		ref="$vueFlux"
		:options="options"
		:rscs="rscs"
		:transitions="transitions"
	/>

	<FluxControls
		v-if="mounted"
		:player="$vueFlux.getPlayer()"
	/>
</div>
```
