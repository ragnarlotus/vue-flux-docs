---
---

## Schema

Transitions use a mixin to perform basic and shared logics, like properties.

#### Attributes

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| size | Object | false | An object with properties width and height in pixels |
| from | String, Object | true | Origin image to start transition with |
| to | String, Object | false | Final image to end transition with |
| options | Object | false | Transition options to apply over predefined in transition |

The attributes `from` and `to` can reference a simple image URL as `String` or an `Object` with the following structure:

``` js
[from | to] : {
   src: URL(String),
   size: {
      width: 800,
      height: 600,
   },
}
```

#### Properties




## Structure

Must have a totalDuration attribute to know how long the transition lasts.

You can initialize data and values on component created() method.

On mounted() method will run the transition.

You can also set the destroyed() method to be run when transition ends.

## Example 1 - Waterfall

``` html
<flux-grid :slider="slider" :rows="rows" :cols="cols" :index="index" ref="grid"></flux-grid>
```

``` javascript
import FluxGrid from 'vue-flux';

export default {
   name: 'transitionWaterfall',

   components: {
      FluxGrid
   },

   data: () => ({
      currentImage: undefined,
      nextImage: undefined,
      index: {},
      rows: 1,
      cols: 0,
      tileDuration: 600,
      totalDuration: 0,
      easing: 'ease-in',
      tileDelay: 80,
   }),

   props: {
      slider: Object
   },

   computed: {
      grid: function() {
         return this.$refs.grid;
      }
   },

   created() {
      this.currentImage = this.slider.currentImage();
      this.nextImage = this.slider.nextImage();

      let divider = this.slider.size.width / 10;

      this.slider.setTransitionOptions(this, {
         numCols: Math.floor(this.slider.size.width / divider)
      });

      this.totalDuration = this.tileDelay * this.cols + this.tileDuration;

      this.index = {
         front: this.slider.currentImage.index
      };
   },

   mounted() {
      this.currentImage.hide();

      this.grid.setCss({
         overflow: 'hidden'
      });

      this.grid.transform((tile, i) => {
         tile.transform({
            transition: 'all '+ this.tileDuration +'ms '+ this.easing +' '+ this.getDelay(i) +'ms',
            opacity: '0.1',
            transform: 'translateY('+ this.slider.size.height +'px)'
         });
      });
   },

   methods: {
      getDelay(i) {
         let delay = i;

         if (this.direction === 'left')
            delay = this.cols - i - 1;

         return delay * this.tileDelay;
      }
   }
};
```

## Example 2 - Wave

``` html
<flux-grid :slider="slider" :rows="rows" :cols="cols" :index="index" ref="grid"></flux-grid>
```

``` javascript
import FluxGrid from 'vue-flux';

export default {
   name: 'transitionWave',

   components: {
      FluxGrid
   },

   data: () => ({
      currentImage: undefined,
      nextImage: undefined,
      index: {},
      rows: 1,
      cols: 0,
      tileDuration: 800,
      totalDuration: 0,
      easing: 'ease-out',
      tileDelay: 150,
      sideColor: '#333'
   }),

   props: {
      slider: Object
   },

   computed: {
      grid: function() {
         return this.$refs.grid;
      }
   },

   created() {
      this.currentImage = this.slider.currentImage();
      this.nextImage = this.slider.nextImage();

      let divider = this.slider.size.width / 8;

      this.slider.setTransitionOptions(this, {
         cols: Math.floor(this.slider.size.width / divider)
      });

      this.totalDuration = this.tileDelay * this.cols + this.tileDuration;

      this.index = {
         front: this.currentImage.index,
         top: this.nextImage.index,
         bottom: this.nextImage.index,
         left: this.sideColor,
         right: this.sideColor
      };
   },

   mounted() {
      this.currentImage.hide();
      this.nextImage.hide();

      this.grid.setCss({
         perspective: '1200px'
      });

      this.grid.transform((tile, i) => {
         tile.setCss({
            transition: 'all '+ this.tileDuration +'ms '+ this.easing +' '+ this.getDelay(i) +'ms'
         });

         tile.turn(this.direction === 'right'? 'bottom' : 'top');
      });
   },

   destroyed() {
      this.nextImage.show();
   },

   methods: {
      getDelay(i) {
         let delay = i;

         if (this.direction === 'left')
            delay = this.cols - i - 1;

         return delay * this.tileDelay;
      }
   }
};
```
