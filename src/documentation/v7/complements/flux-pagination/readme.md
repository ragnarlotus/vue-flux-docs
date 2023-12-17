---
---

# FluxPagination

## Description

The included component to display a pagination of the resources, good when it does not contain too many.

## Props

``` ts
interface Props {
	player: Player;
}
```

### player

The player controller. You can get it from [VueFlux](../components/vue-flux#props-and-methods)

#### Example of usage

``` ts
import { ref, shallowReactive } from 'vue';
import {
	VueFlux,
	FluxPagination,
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
	<template #pagination="paginationProps">
		<FluxPagination v-bind="paginationProps" />
	</template>
</VueFlux>
```

#### Example of pagination outside VueFlux custom template

``` ts
import { ref, shallowReactive, onMounted } from 'vue';
import {
	VueFlux,
	FluxPagination,
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

<FluxPagination v-if="player" :player="player">
	<template v-slot="pageProps">
		<span
			:title="pageProps.title"
			:class="pageProps.cssClass"
			@click="player.show(pageProps.index)"
		>
			{{ pageProps.index }}
		</span>
	</template>
</FluxPagination>
```

## Templating

You can customize how the pagination items are displayed. That is because this component has a default slot, so you can pass a custom component or template code.

This slot will receive an object having the following schema:

``` ts
interface pageProps = {
	index: number;
	rsc: Resource;
	title: string;
	cssClass: string;
}
```
