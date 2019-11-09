---
---

<ClientOnly>
   <demos-home />
</ClientOnly>

## Clarifications

In this documentation you can find tag `attibutes` and component `properties`. I have done this differentiation to indicate which are input parameters and component own parameters. This is basically based because in HTML they are mostly called attributes, meanwhile in javascript they are called properties and I needed to difference them, so **pay attention when I reference to <u>attibutes</u> and <u>properties</u>**.

#### Attributes

This refers to attributes the component tag receives.

``` html
<vue-flux
   :options="vfOptions"
   :images="vfImages"
   :transitions="vfTransitions"
   :captions="vfCaptions">
</vue-flux>
```

#### Properties

This refers to data and computed properties.

``` js
export default {
   ...
   data: () => ({
      ...
   }),

   computed: {
      ...
   },
   ...
}
```
