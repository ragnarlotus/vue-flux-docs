---
---

## Spinner

To use custom spinner you can do it using spinner slot like this:

``` html
<vue-flux :options="fluxOptions" :images="fluxImages" :transitions="fluxTransitions" ref="slider">
   <custom-spinner slot="spinner"></custom-spinner>
</vue-flux>
```

``` javascript
import CustomSpinner from 'CustomSpinner.vue';

export default {
   components: {
      CustomSpinner,
   },
}
```

## Caption

To use custom caption you can do it using caption slot like this:

``` html
<vue-flux :options="fluxOptions" :images="fluxImages" :transitions="fluxTransitions" ref="slider">
   <custom-caption v-if="mounted" slot="caption" :slider="$refs.slider"></custom-caption>
</vue-flux>
```

``` javascript
import CustomCaption from 'CustomCaption.vue';

export default {
   components: {
      CustomCaption,
   },

   data: () => ({
      mounted: false,
   }),

   mounted() {
      this.mounted = true;
   },
}
```

## Pagination

To use custom pagination you can do it using pagination slot like this:

``` html
<vue-flux :options="fluxOptions" :images="fluxImages" :transitions="fluxTransitions" ref="slider">
   <custom-pagination v-if="mounted" slot="pagination" :slider="$refs.slider"></custom-pagination>
</vue-flux>
```

``` javascript
import CustomPagination from 'CustomPagination.vue';

export default {
   components: {
      CustomPagination,
   },

   data: () => ({
      mounted: false,
   }),

   mounted() {
      this.mounted = true;
   },
}
```

## Controls

To use custom controls you can do it like this:

``` html
<vue-flux :options="fluxOptions" :images="fluxImages" :transitions="fluxTransitions" ref="slider">
   <custom-controls v-if="mounted" slot="controls" :slider="$refs.slider"></custom-controls>
</vue-flux>
```

``` javascript
import CustomControls from 'CustomControls.vue';

export default {
   components: {
      CustomControls,
   },

   data: () => ({
      mounted: false,
   }),

   mounted() {
      this.mounted = true;
   },
}
```

## Index

To use custom index you can do it like this:

``` html
<vue-flux :options="fluxOptions" :images="fluxImages" :transitions="fluxTransitions" ref="slider">
   <custom-index v-if="mounted" slot="index" :slider="$refs.slider"></custom-index>
</vue-flux>
```

``` javascript
import CustomIndex from 'CustomIndex.vue';

export default {
   components: {
      CustomIndex,
   },

   data: () => ({
      mounted: false,
   }),

   mounted() {
      this.mounted = true;
   },
}
```
