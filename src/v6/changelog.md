---
---

# Changelog

## 6.0.0
This new version comes with a lot of improvements, in code, functionality and performance.

Bugs fixed:
* Parallax type fixed is fixed for android, IOS not working due to bug, expecting to fix it in next release
* Image glitch caused by latest node lifecycle and browser rendering engines

New features:
- **Performance increased**
- **Components can be used indepently out of slider, becoming an image tools library**
- **Created FluxPreloader component to handle images reacitivy loading and spinner**
- **Created FluxTransition component so a transition can be run anywhere in the application**
- **Added lazyLoad and lazyLoadAfter options**
- **Added events**
- **Improved reactivity**
- **Captions are now themable**
- **Pagination items are now themable**
- SSR full support and friendly
- Added an option to skip transitions
- Added images base path option
- Added controllers for display, timers, transitions, images and touches
- Added `throw` when error detected
- Changed controls' icons from png string to svg
- Simplified a lot the way the transitions are defined and added some automatic methods
- Transition options have a more logical schema
- Improved documentation
- Update syntax to vue 2.6 version
- Some transitions have been adjusted and look better
- Add previous direction to some transitions
- Camera transition looks like real lens now
- Previous direction of warp transition looks like kaleidoscope
- Transition helpers have been addded
- Complements are more responsive to sizes

Other changes:
- Option `fullscreen` has been renamed to `allowFullscreen`
- Options `width` and `height` have been removed
- Mobile gestures do not kidnap the event now and slide up gesture has been removed
