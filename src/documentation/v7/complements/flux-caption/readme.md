---
prev: false
---

# FluxCaption

## Description

The included component to display resource captions.

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
   FluxCaption,
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
   <template #caption="captionProps">
      <FluxCaption v-bind="captionProps" />
   </template>
</VueFlux>
```

#### Example of caption outside VueFlux

``` ts
import { ref, shallowReactive, onMounted } from 'vue';
import {
   VueFlux,
   FluxCaption,
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

<FluxCaption
	v-if="player"
	:player="player"
/>
```

## Templating

You can customize how the captions are displayed. That is because this component has a default slot, so you can pass a custom component or template code.

You can see it in the [demo](../../../../demos/complements/flux-caption.md)
