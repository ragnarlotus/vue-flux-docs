
<ClientOnly>
   <demos-slider-1 />
</ClientOnly>

## Clarification

In this documentation you can find tag `attibutes` and component `properties`. I have done this differentiation to indicate which are input parameters and component own parameters. This is basically based because in HTML they are mostly called attributes, meanwhile in javascript they are called properties and I needed to difference them, so **pay attention when I reference to <u>attibutes</u> and <u>properties</u>**.

#### Attributes

This refers to attributes the component tag receives (aka input props).

#### Properties

This refers to component properties that can read (aka output props).

#### Methods

This refers to component methods.

#### Events

This refers to the events that will be triggered from the component. Keep in mind that vue `$emit` only emits from child to parent and has to be recived in the parent tag.

Check the following `VueFlux` component example.

``` html
<vue-flux
   :images="vfImages"
   :transitions="vfTransitions"
   @play="runPlayEvent()"
   @stop="runStopEvent()"
   @transition-start="runTransitionStart()"
   @transition-end="runTransitionEnd()">
</vue-flux>
```

``` js
export default {
   ...
   data: () => ({
      vfImages: [ 'URL1', 'URL2', 'URL3' ],
      vfTransitions: [ 'fade', 'cube', 'book', 'wave' ],
   }),

   methods() {
      runPlayEvent() {
         console.log('Slider has started playing');
      },

      runStopEvent() {
         console.log('Slider has stopped playing');
      },

      runTransitionStart() {
         console.log('Transition started');
      },

      runTransitionEnd() {
         console.log('Transition finished');
      },
   },
   ...
}
```

#### References

This will be the components or tags referenced in the component, able to be reached throught `$refs` vue property of the component.
