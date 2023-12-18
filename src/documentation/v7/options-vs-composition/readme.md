# Options VS Composition API

## TL;DR

If you are using `Composition` API like in the examples there is nothing special that you need to do, you can just copy and paste, done!

If otherwise you are using `Options` API for creating your components you need to do the following.

Use [markRaw](https://vuejs.org/api/reactivity-advanced.html#markraw) when you store the data with props for the component.

Example:

``` ts
data() {
   return {
      rsc: markRaw(new Img(`/images/01.jpg`, 'img 01')),
   };
},
```

## Explanation

When using `Options` API, whatever you return in `data` is transformed into javascript `proxy` to track its reactivity, and when the component receive the props as proxy everything stops working as expected because for example `this` is meant in other scope.

Using [markRaw](https://vuejs.org/api/reactivity-advanced.html#markraw) will tell vue to keep it as it is and don't turn it into a proxy. This is really nice because instead of turning a whole object reactive, I was able to tell vue specifically what things should be reactive, so it is a great advance in performance.
