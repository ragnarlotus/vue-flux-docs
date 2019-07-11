---
---

This sections describes how to use custom components or custom structure, but if what you want is to change a bit the design or the colors, you only need to overwirte the CSS styles.

## Spinner

Spinner is located inside the [FluxPreloader](components/complements/flux-preloader) complement, so to use custom spinner you will have to use the spinner slot of the [FluxPreloader](components/complements/flux-preloader) component.

#### Custom component

``` html
<vue-flux
   :images="vfImages"
   :transitions="vfTransitions"
   ref="slider">

   <template v-slot:preloader>
      <flux-preloader>
         <template v-slot:spinner>
            <custom-spinner></custom-spinner>
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

## Caption

To use custom caption you can do it using caption slot of [VueFlux](components/vue-flux) component. Check [FluxCaption](components/complements/flux-caption) documentation for further information about `captionProp` element.

#### Custom component

``` html
<vue-flux
   :images="vfImages"
   :transitions="vfTransitions"
   :captions="vfCaptions"
   ref="slider">

   <template v-slot:caption>
      <flux-caption v-slot="captionProps">
         <custom-caption caption="captionProps"></custom-caption>
      </flux-caption>
   </template>
</vue-flux>
```

#### Custom structure

``` html
<vue-flux
   :images="vfImages"
   :transitions="vfTransitions"
   :captions="vfCaptions"
   ref="slider">

   <template v-slot:caption>
      <flux-caption v-slot="captionProps">
         <a href="captionProps.url" class="flux-caption">{{ captionProps.text }}</a>
      </flux-caption>
   </template>
</vue-flux>
```

## Pagination

To use custom pagination you can do it using pagination slot of [VueFlux](components/vue-flux) component. Check [FluxPagination](components/complements/flux-pagination) documentation for further information about `itemProp` element.

#### Custom component

``` html
<vue-flux
   :images="vfImages"
   :transitions="vfTransitions"
   ref="slider">

   <template v-slot:pagination>
      <flux-pagination v-slot="itemProps">
         <custom-pagination item="itemProps"></custom-pagination>
      </flux-pagination>
   </template>
</vue-flux>
```

#### Custom structure

This is an example with [Font Awesome](https://fontawesome.com/) icons.

``` html
<vue-flux
   :images="vfImages"
   :transitions="vfTransitions"
   ref="slider">

   <template v-slot:pagination>
      <flux-pagination v-slot="itemProps">
         <i class="fas"
            :class="itemProps.active? 'fa-check-square' : 'fa-square'"
            @click="itemProps.onClick(itemProps.index)">
         </i>
      </flux-pagination>
   </template>
</vue-flux>
```


## Controls

To use custom controls you can do it using controls slot of [VueFlux](components/vue-flux) component. Check [FluxControls](components/complements/flux-controls) documentation for further information.

``` html
<vue-flux
   :images="vfImages"
   :transitions="vfTransitions"
   ref="slider">

   <template v-slot:controls>
      <custom-controls></custom-controls>
   </template>
</vue-flux>
```

## Index

To use custom index you can do it using index slot of [VueFlux](components/vue-flux) component. Check [FluxIndex](components/complements/flux-index) documentation for further information.

``` html
<vue-flux
   :images="vfImages"
   :transitions="vfTransitions"
   ref="slider">

   <template v-slot:index>
      <custom-index></custom-index>
   </template>
</vue-flux>
```
