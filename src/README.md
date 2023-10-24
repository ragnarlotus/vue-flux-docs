---
---

<ClientOnly>
   <DemoHome />
</ClientOnly>

## Clarifications

In this documentation you can find tag `attibutes` and component `properties and methods`. I have done this differentiation to indicate which are input parameters and component own parameters. This is basically based because in HTML they are mostly called attributes, meanwhile in javascript they are called properties and I needed to difference them, so **pay attention when I reference to <u>attibutes</u> and <u>properties and methods</u>**.

#### Attributes

This refers to attributes the component tag receives.

```html
<VueFlux
   :options="vfOptions"
   :rscs="vfResources"
   :transitions="vfTransitions"
/>
```

#### Properties and methods

This refers to exposed component properties and methods.

```js
defineExpose({
   show: player.show,
   play: player.play,
   stop: player.stop,
});
```
