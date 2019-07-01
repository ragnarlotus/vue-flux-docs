## 5.1.9
Fixed options property reactivity.

## 5.1.8
Fixed touch issue not working in Iphone Safari and RaspBerry Pi touch screen.  
Reduced autohideTime to 1500 by default.

## 5.1.7
Thumbs are now "mediaqueried" so their size will depend on screen size.  
Fixed blocks2 transition when reverse direction.  
Improved UX by changing mouseover to mousemove and adding the same behavior on tap with a timer.  
Added `autohideTime` option, check VueFlux component for more info.

## 5.1.6
Fixed full screen option

## 5.1.5
Fixed error displayed in console when destroying the component.

## 5.1.4
Now when an image could not be loaded the slider will omit it displaying a console warning.

## 5.1.3
Updated height calculation when set to auto.  
More info can be found in [VueFlux](https://github.com/deulos/vue-flux/wiki/VueFlux) under **Size** section.

## 5.1.0
Added an option to enable gestures (disabled by default).  
Icons are now resized depending on the screen.

## 5.0.3
As I was not convinced about the async solution I reworked the flux components a bit so now they don't need to receive the slider as reference **if they are inside the vue-flux component** and they will run perfectly.

If the components are placed out of vue-flux the slider will have to be referenced and add `v-if` condition that turns true when the component containing the slider is mounted. This way the slider will be passed as ref properly.

## 5.0.2
Due to an issue found about slider reference not being properly taken from flux components, the declaration of FluxCaption, FluxControls, FluxIndex and FluxPagination must be included async. You just have to do it this way:

``` javascript
   import { VueFlux, Transitions, FluxCaption, FluxControls, FluxIndex, FluxPagination } from 'vue-flux';

   ...
   components: {
      VueFlux,
      FluxCaption: () => import('vue-flux').then(() => FluxCaption),
      FluxControls: () => import('vue-flux').then(() => FluxControls),
      FluxIndex: () => import('vue-flux').then(() => FluxIndex),
      FluxPagination: () => import('vue-flux').then(() => FluxPagination)
   },
```

## 5.0.0
Because of the reactivity I had to do several changes due to virtual dom behaviour. Please test it well before updating to this version in production.

New features:  
* The attributes passed to vue-flux component options, images and transitions are now reactive.
* The computed properties currentImage and nextImage are now methods.
* Added infinite option to tell the slider to start over when reaches last image.
* Transitions round2 and explode have by default odd number of columns so they look more "zen".
