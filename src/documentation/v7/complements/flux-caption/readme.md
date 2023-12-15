---
prev: false
---

# FluxCaption

## Description

The included component to display resource captions.

## Props

``` ts
interface Props {
	currentResource: null | ResourceIndex;
	currentTransition: null | TransitionIndex;
}
```

### currentResource

Is the full (because it has all the details) current resource index having the following schema:

``` ts
interface ResourceIndex {
	index: number;
	rsc: Resource;
	options: {
		delay?: number;
		stop?: boolean;
	};
}
```

You can get it through the controller `Player` from [VueFlux](../components/vue-flux#methods)

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

const vfOptions = shallowReactive({
   autoplay: true,
});

const vfRscs = shallowReactive([
   new Img('URL1' 'img 1'),
   new Img('URL2' 'img 2'),
   new Img('URL3' 'img 3'),
]);

const vfTransitions = shallowReactive([Book, Zip]);
```

``` html
<VueFlux
   :options="vfOptions"
   :rscs="vfRscs"
   :transitions="vfTransitions"
>
   <template #caption="captionProps">
      <FluxCaption v-bind="captionProps" />
   </template>
</VueFlux>
```

#### Example of caption outside vue-flux

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
const playerController = ref(null)

const vfOptions = shallowReactive({
   autoplay: true,
});

const vfRscs = shallowReactive([
   new Img('URL1' 'img 1'),
   new Img('URL2' 'img 2'),
   new Img('URL3' 'img 3'),
]);

const vfTransitions = shallowReactive([Book, Zip]);

onMounted(() => {
	playerController.value = $vueFlux.getPlayer();
});
```

``` html
<VueFlux
   :options="vfOptions"
   :rscs="vfRscs"
   :transitions="vfTransitions"
	ref="$vueFlux"
>
</VueFlux>

<FluxCaption
	v-if="playerController"
	:currentResource="playerController..value.resource.current"
	:currentTransition="playerController.value.transition.current"
/>
```

## Templating

You can customize how the captions are displayed. That is because this component has a default slot, so you can pass a custom component or template code.

You can see it in the [demo](../../../../demos/complements/flux-caption.md)
