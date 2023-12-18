---
---

# FluxIndex

## Description

The included component to display an index of all images so it is a good resource when the slider contains many images.

You can place it inside the vue-flux component or outside and give it any style you want, meaning horizontal, vertical, with arrows, with scroll, etc. The default style is only applied if located inside and can be easily overwritten.

It will display a button when no transition is active nor mouse over.

The index will auto hide after choosing an image.

The current image will have class `current`.

Placing the mouse over will display the caption if defined.

## Props

``` ts
interface Props {
	mouseOver?: boolean | Ref<boolean>;
	displaySize: Size;
	player: Player;
}
```

### mouseOver

A reactive parameter to indicate when the mouse is over so it should be displayed.

If this parameter is not passed, it will be displayed constantly.

### displaySize

Slider component size from which the thumbs size will be calculated.

### player

The player controller. You can get it from [VueFlux](../components/vue-flux#props-and-methods)

#### Example of usage

``` ts
import { ref, shallowReactive } from 'vue';
import {
	VueFlux,
	FluxIndex,
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
	<template #index="indexProps">
		<FluxIndex v-bind="indexProps" />
	</template>
</VueFlux>
```

#### Example of index outside VueFlux

``` ts
import { ref, shallowReactive, onMounted } from 'vue';
import {
   VueFlux,
   FluxIndex,
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

const player = ref(null);

onMounted(() => {
	player.value = $vueFlux.value.getPlayer();
});
```

``` html
<VueFlux
	ref="$vueFlux"
	:options="options"
	:rscs="rscs"
	:transitions="transitions"
/>

<FluxIndex v-if="player" :displaySize="$vueFlux.size" :player="player" />
```
