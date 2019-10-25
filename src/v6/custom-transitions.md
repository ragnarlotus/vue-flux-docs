---
prev: transitions/
---

# Custom transitions

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

- **Type:** `String | Object`

The value can be one of the following:
* A simple string of the URL.
* An object having the URL and image original size in pixels like the following.

``` js
{
   url: String,
   size: {
      width: Number,
      height: Number,
   },
}
```

### to

The destination image to be displayed.

- **Type:** `String | Object`

The value can be one of the following:
* A simple string of the URL.
* An object having the URL and image original size in pixels like the following.

``` js
{
   url: String,
   size: {
      width: Number,
      height: Number,
   },
}
```

### options

Is an object with attributes and values that will be assigned to the transition data.

- **Type:** `Object`

### mask

Is the mask CSS that wraps the transitions. This way you can control whether hide overflow, perspective, or any other relevant style.

- **Type:** `Object`

::: tip

Remeber that all the properties of this object are and must be canel case.

:::

### current

Refers to the image that is being displayed.

- **Type:** `FluxImage`

## Hooks

### created

You can initialize data, modify mask or any other preparative task on component in the `created` hook.

### mounted

The transition will run on `mounted` hook.

### beforeDestroy

You can also use the `beforeDestroy` hook to run anything you need when transition ends.

## Using it

To know how to add your custom transition to the slider read the [VueFlux custom transitions section](/v6/components/vue-flux#custom-transitions).

## Example 1 - Waterfall

``` html
<flux-grid
   :rows="rows"
   :cols="cols"
   :size="size"
   :image="from"
   ref="grid">
</flux-grid>
```

``` js
import {
   BaseTransition,
   FluxGrid,
} from 'vue-flux';

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

   mounted() {
      this.$refs.grid.transform((tile, i) => {
         tile.transform({
            transition: `all ${this.tileDuration}ms ${this.easing} ${this.getDelay(i)}ms`,
            opacity: '0.1',
            transform: `translateY(${this.size.height}px)`,
         });
      });
   },

   methods: {
      getDelay(i) {
         return i * this.tileDelay;
      },
   },
}
```

## Example 2 - Wave

``` html
<flux-grid
   :rows="rows"
   :cols="cols"
   :size="size"
   :images="images"
   :color="color"
   :depth="size.height"
   :css="gridCss"
   ref="grid">
</flux-grid>
```

``` js
import {
   BaseTransition,
   FluxGrid,
} from 'vue-flux';

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
      perspective: '1200px',
      easing: 'cubic-bezier(0.3, -0.3, 0.735, 0.285)',
      tileDelay: 110,
      sideColor: '#333',
      images: {},
      color: {},
   }),

   computed: {
      gridCss() {
         return {
            perspective: this.perspective,
         };
      }
   },

   created() {
      this.totalDuration = this.tileDelay * this.cols + this.tileDuration;

      this.images = {
         front: this.from,
         top: this.to,
      };

      this.color = {
         left: this.sideColor,
         right: this.sideColor,
      };
   },

   mounted() {
      this.mask.overflow = 'visible';

      this.current.hide();

      this.$refs.grid.transform((tile, i) => {
         tile.setCss({
            transition: `all ${this.tileDuration}ms ${this.easing} ${this.getDelay(i)}ms`,
         });

         tile.turnBottom();
      });
   },

   beforeDestroy() {
      this.current.show();
   },

   methods: {
      getDelay(i) {
         return i * this.tileDelay;
      },
   },
}
```

::: tip

You can see the [transitions source code](https://github.com/deulos/vue-flux/tree/dev/src/transitions) to get more ideas or examples.

:::
