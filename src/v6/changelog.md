---
---

# Changelog

## 6.0.0
This new version comes with a lot of improvements, in code, functionality and performance.

Bugs fixed:
* Parallax holder fixed (in progress)
* Support for parallax type stataic in mobile (in progress)
* Spinner will remain at 0% when there is only one source

New features:
* **Size reduced**
* **Performance increased**
* **Components can be used indepently out of slider, becoming an image tools library**
* **Created FluxPreloader component to handle lazy loading and spinner**
* **Created FluxTransition component so a transition can be run anywhere in the application**
* **Implemented a transition when sources change**
* **Added events**
* **Improved reactivity**
* **Captions are now themable**
* **Pagination items are now themable**
* Added an option to skip transitions
* Added images base path option
* Added lazyLoad and lazyLoadAfter options
* Added controllers for display, timers, transitions, images and touches
* Added `throw` when error detected
* Changed controls' icons from png string to svg (in progress)
* Simplified a lot the way the transitions are defined
* Transition options have a more logical schema
* Improved documentation
* Update syntax to vue 2.6 version
* Some transitions have been adjusted and look better
* Removed `toggleAutoplay` method
* Adapted to vue 2.6 syntax

Other changes:
* Option `fullscreen` has been renamed to `allowFullscreen`
* Options `width`and `height` have been removed
* Removed `direction` from transitions. I felt like not many people carying about, but if requested enough I will implement them again.
