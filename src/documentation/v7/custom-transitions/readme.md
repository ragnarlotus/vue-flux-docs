---
prev: transitions/
---

# Custom transitions

WIP
<!-- 
Transitions use the mixin `BaseTransition` to perform basic and shared logic.

## Data

### totalDuration

Represents the transition duration in ms.

- **Type:** `Number`
- **Required:** `true`

::: warning

You must specify this in data to let the slider know when transition ends.

:::

::: tip

If the duration depends on transition options, you can set its value in the `created` hook, but don't forget to initialize it.

:::

## Properties

### size

This size is the width and height of the slider.

- **Type:** `Object`
- **Schema:**

``` js
{
   width: Number,
   height: Number,
}
```

### from

The origin image which is currently being displayed.

- **Type:** `String`
- **Required:** `true`

### to

The destination image to be displayed.

- **Type:** `String`

### options

Is an object with attributes and values that will be assigned to the transition data.

- **Type:** `Object`

### mask

Is the mask CSS that wraps the transitions. This way you can control whether hide overflow, perspective, or any other relevant style.

- **Type:** `Object`

::: tip

Remember that all the properties of this object are and must be canel case.

:::

### current

Refers to the image that is being displayed.

- **Type:** `FluxImage`

## Hooks

### created

You can initialize data, modify mask or any other preparative task on component in the `created` hook.

### mounted

The transition will run on `mounted` hook.

### played

Run when transition is called to play

### beforeDestroy

You can also use the `beforeDestroy` hook to run anything you need when transition ends.

## Methods

The `BaseTransition` mixin implements a couple of method helpers for the case the transition has different effect the going to prev or next.

### setupPrev()

If defined, this method will be run after the component have been created and the direction is `prev`.

### setupNext()

If defined, this method will be run after the component have been created and the direction is `next`.

### playPrev()

If defined, this method will be run after the component have been played and the direction is `prev`.

### playNext()

If defined, this method will be run after the component have been played and the direction is `next`.

### getDelay(data)

This method will call the defined methods `getDelayPrev` or `getDelayNext` depending on the direction.

Those methods will receive the same data parameter that you pass.

This is just a handy shortcut to get delay. If case the effect doesn't change by direction you can just define you method `getDelay` overwriting the mixin method.

## Using it

To know how to add your custom transition to the slider read the [VueFlux custom transitions section](/v6/components/vue-flux#custom-transitions).

## Example 1 - Waterfall

``` html
<flux-grid
   ref="grid"
   :rows="rows"
   :cols="cols"
   :size="size"
   :image="from"
/>
```

``` js
import BaseTransition from '@/mixins/BaseTransition.js';
import FluxGrid from '@/components/FluxGrid.vue';

export default {
   name: 'TransitionWaterfall',

   components: {
      FluxGrid,
   },

   mixins: [
      BaseTransition,
   ],

   data: () => ({
      rows: 1,
      cols: 10,
      tileDuration: 600,
      totalDuration: 0,
      easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      tileDelay: 90,
   }),

   created() {
      this.totalDuration = this.tileDelay * this.cols + this.tileDuration;
   },

   played() {
      this.$refs.grid.transform((tile, i) => {
         tile.transform({
            transition: `all ${this.tileDuration}ms ${this.easing} ${this.getDelay(i)}ms`,
            opacity: '0.1',
            transform: `translateY(100%)`,
         });
      });
   },

   methods: {
      getDelayPrev(i) {
         return (this.cols - i - 1) * this.tileDelay;
      },

      getDelayNext(i) {
         return i * this.tileDelay;
      },
   },
};
```

## Example 2 - Wave

``` html
<flux-grid
   ref="grid"
   :rows="rows"
   :cols="cols"
   :size="size"
   :images="images"
   :colors="colors"
   :depth="size.height"
   :css="gridCss"
/>
```

``` js
import BaseTransition from '@/mixins/BaseTransition.js';
import FluxGrid from '@/components/FluxGrid.vue';

export default {
   name: 'TransitionWave',

   components: {
      FluxGrid,
   },

   mixins: [
      BaseTransition,
   ],

   data: () => ({
      rows: 1,
      cols: 8,
      tileDuration: 900,
      totalDuration: 0,
      easing: 'cubic-bezier(0.3, -0.3, 0.735, 0.285)',
      tileDelay: 110,
      sideColor: '#333',
      gridCss: {
         overflow: 'visible',
         perspective: '1200px',
      },
      images: {},
      colors: {},
   }),

   created() {
      this.mask.overflow = 'visible';

      this.totalDuration = this.tileDelay * this.cols + this.tileDuration;

      this.images = {
         front: this.from,
         top: this.to,
      };
   },

   played() {
      if (this.current)
         this.current.hide();

      this.colors = {
         left: this.sideColor,
         right: this.sideColor,
      };

      this.$refs.grid.transform((tile, i) => {
         tile.setCss({
            transition: `all ${this.tileDuration}ms ${this.easing} ${this.getDelay(i)}ms`,
         });

         tile.turnBottom();
      });
   },

   beforeDestroy() {
      if (this.current)
         this.current.show();
   },

   methods: {
      getDelayPrev(i) {
         return (this.cols - i - 1) * this.tileDelay;
      },

      getDelayNext(i) {
         return i * this.tileDelay;
      },
   },
};
```

::: tip

You can see the [transitions source code](https://github.com/ragnarlotus/vue-flux/tree/dev/src/transitions) to get more ideas or examples.

:::
 -->