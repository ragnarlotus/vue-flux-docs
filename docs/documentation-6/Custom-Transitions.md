---
---

## Structure

Must receive the slider.

Must have a totalDuration attribute to know how long the transition lasts.

You can initialize data and values on component created() method.

On mounted() method will run the transition.

You can also set the destroyed() method to be run when transition ends.

## Example 1 - Waterfall

``` html
<flux-grid :slider="slider" :num-rows="numRows" :num-cols="numCols" :index="index" ref="grid"></flux-grid>
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
      numRows: 1,
      numCols: 0,
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

      this.totalDuration = this.tileDelay * this.numCols + this.tileDuration;

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
            delay = this.numCols - i - 1;

         return delay * this.tileDelay;
      }
   }
};
```

## Example 2 - Wave

``` html
<flux-grid :slider="slider" :num-rows="numRows" :num-cols="numCols" :index="index" ref="grid"></flux-grid>
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
      numRows: 1,
      numCols: 0,
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
         numCols: Math.floor(this.slider.size.width / divider)
      });

      this.totalDuration = this.tileDelay * this.numCols + this.tileDuration;

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
            delay = this.numCols - i - 1;

         return delay * this.tileDelay;
      }
   }
};
```
