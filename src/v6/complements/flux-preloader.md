---
next: false
---

# FluxPreloader

::: warning

I am using here the latest 2.6 vue syntax for slots, but if your Vue version is older check [Named-Slots](https://vuejs.org/v2/guide/components-slots.html#Named-Slots) to see how slots are used in previous versions.

:::

## Description

The included component in charge of showing the spinner and run transition when the images array change.

## Attributes

### slider

Is the VueFlux instance component from which to read the captions.

If you place this complement as a direct child in the VueFlux component you don't need to pass this attribute.

- **Type:** `VueFlux`
- **Required:** `false`

### spinner

Define if you want to display the spinner.

- **Type:** `Boolean`
- **Required:** `false`
- **Default:** `true`

### transition

Is the transition name that you want to run when the images array change.

If no transition defined, the transition run will be the next of the transitions array.

- **Type:** `String`
- **Required:** `false`

## Properties

### vf

The `VueFlux` instance component.

- **Type:** `VueFlux`

### captions

The array of captions passed originally to the VueFlux component.

- **Type:** `Array`

## Templating

You can customize the spinner element using the slot.

You can get the progress through the `Images` controller, like `vf.Images.progress` where `vf` is the slider instance component.

The progress will be returned always as percentage. But you can access other Images controller variables like the following:
* loaded: `Number`
* progress: `Number`
* preloading: `Boolean`
* lazyloading: `Boolean`

Feel free to take a look at the [Images controller](https://github.com/deulos/vue-flux/blob/dev/src/controllers/Images.js).

#### Custom component

``` html
<vue-flux
   :images="vfImages"
   :transitions="vfTransitions"
   ref="slider">

   <template v-slot:preloader>
      <flux-preloader>
         <template v-slot:spinner>
            <custom-spinner />
         </template>
      </flux-preloader>
   </template>
</vue-flux>
```

#### Custom structure

This is an example with [Font Awesome](https://fontawesome.com/) spinner.

``` html
<vue-flux
   :images="vfImages"
   :transitions="vfTransitions"
   ref="slider">

   <template v-slot:preloader>
      <flux-preloader>
         <template v-slot:spinner>
            <div class="fa-3x">
               <i class="fas fa-spinner fa-spin"></i>
            </div>
         </template>
      </flux-preloader>
   </template>
</vue-flux>
```
