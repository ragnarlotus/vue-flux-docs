---
---

<ClientOnly>
   <demos-home />
</ClientOnly>

## Documentation status

[Version 5](/v5/) of slider documentation is completed as it is imported from the wiki.

[Version 6](/v6/) is about 60% completed:
- Main pages
- Transitions
- Components: VueFlux and FluxCube

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

#### Methods

This refers to component methods.

``` js
export default {
   ...
   methods() {
      ...
   },
   ...
}
```

#### Events

This refers to the events that will be triggered from the component. Keep in mind that vue `$emit` only emits from child to parent and has to be recived in the parent tag.

Check the following `VueFlux` component example.

``` html
<vue-flux
   ...
   @play="runPlayEvent()"
   @stop="runStopEvent()"
   @transition-start="runTransitionStart()"
   @transition-end="runTransitionEnd()">
</vue-flux>
```

#### References

This will be the components or tags referenced in the component, able to be reached throught `$refs` vue property of the component.

``` html
<vue-flux
   ...
   ref="slider">
</vue-flux>
```
