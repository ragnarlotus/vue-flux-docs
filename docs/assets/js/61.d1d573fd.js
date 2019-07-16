(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{263:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"fluximage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fluximage","aria-hidden":"true"}},[t._v("#")]),t._v(" FluxImage")]),t._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("The FluxImage component represents the last part of the slider and displays an image, part of it or a color.")]),t._v(" "),s("p",[t._v("It renders what have to be displayed calculating its size and position automatically.")]),t._v(" "),s("h2",{attrs:{id:"attributes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#attributes","aria-hidden":"true"}},[t._v("#")]),t._v(" Attributes")]),t._v(" "),s("h3",{attrs:{id:"size"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#size","aria-hidden":"true"}},[t._v("#")]),t._v(" size")]),t._v(" "),s("p",[t._v("This size is the width and height the image "),s("strong",[t._v("view")]),t._v(" will have.")]),t._v(" "),s("p",[t._v("If passed as number the unit will be pixel, but if passed as string you must append the unit like in CSS.")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("code",[t._v("Object")])]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" "),s("code",[t._v("false")])]),t._v(" "),s("li",[s("strong",[t._v("Schema:")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Number "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Number "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("If not defined, the size will be automatically detected from the parent element.")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("This size represents the frame / window / view size and must not be confused with image original size nor image final size after resized to fit this size.")])]),t._v(" "),s("h3",{attrs:{id:"image"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#image","aria-hidden":"true"}},[t._v("#")]),t._v(" image")]),t._v(" "),s("p",[t._v("This attribute will define the image to be displayed.")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("code",[t._v("String | Object")])]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" "),s("code",[t._v("false")])])]),t._v(" "),s("p",[t._v("The value can be one of the following:")]),t._v(" "),s("ul",[s("li",[t._v("A simple string of the URL.")]),t._v(" "),s("li",[t._v("An object having the URL and image original size in pixels like the following.")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" image "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"color"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#color","aria-hidden":"true"}},[t._v("#")]),t._v(" color")]),t._v(" "),s("p",[t._v("This attibute sets the background color in case there is no image set or image does not fill the size.")]),t._v(" "),s("p",[t._v("The values can be any valid CSS color.")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("code",[t._v("String")])]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" "),s("code",[t._v("false")])]),t._v(" "),s("li",[s("strong",[t._v("Schema:")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" color "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"offset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#offset","aria-hidden":"true"}},[t._v("#")]),t._v(" offset")]),t._v(" "),s("p",[t._v("Its and adjustment of the image in pixels based on the top and left position.")]),t._v(" "),s("p",[t._v("If the offset is passed as single value, the offset will be applied to "),s("code",[t._v("top")]),t._v(" and "),s("code",[t._v("left")]),t._v(".")]),t._v(" "),s("p",[t._v("If the offset is passed as object, you can specify the offsets "),s("code",[t._v("top")]),t._v(" and "),s("code",[t._v("left")]),t._v(" individually. In case you do not set one of them will default to "),s("code",[t._v("0")]),t._v(".")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("code",[t._v("Number | 'auto' | Object")])]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" "),s("code",[t._v("false")])]),t._v(" "),s("li",[s("strong",[t._v("Single Schema:")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" offset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Number "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'auto'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[s("strong",[t._v("Object Schema:")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" offset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Number "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'auto'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Number "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'auto'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("If value is "),s("code",[t._v("Number")]),t._v(", the image will be adjusted for that value in pixels.")]),t._v(" "),s("p",[t._v("If value is "),s("code",[t._v("'auto'")]),t._v(", the value will be determined from the "),s("code",[t._v("top")]),t._v(" and "),s("code",[t._v("left")]),t._v(" CSS styles.")]),t._v(" "),s("h3",{attrs:{id:"css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css","aria-hidden":"true"}},[t._v("#")]),t._v(" css")]),t._v(" "),s("p",[t._v("Object with cube CSS styles in camel case.")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("code",[t._v("Object")])]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" "),s("code",[t._v("false")])])]),t._v(" "),s("h2",{attrs:{id:"methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),s("h3",{attrs:{id:"setcss-css-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setcss-css-object","aria-hidden":"true"}},[t._v("#")]),t._v(" setCss(css: "),s("code",[t._v("Object")]),t._v(")")]),t._v(" "),s("p",[t._v("Set CSS styles to the image.")]),t._v(" "),s("h4",{attrs:{id:"css-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-2","aria-hidden":"true"}},[t._v("#")]),t._v(" css")]),t._v(" "),s("p",[t._v("An object with the CSS attributes in "),s("strong",[t._v("camel case")]),t._v(" and values.")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("code",[t._v("Object")])])]),t._v(" "),s("h3",{attrs:{id:"transform-css-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transform-css-object","aria-hidden":"true"}},[t._v("#")]),t._v(" transform(css: "),s("code",[t._v("Object")]),t._v(")")]),t._v(" "),s("p",[t._v("Sets the CSS styles to be transformed to within a transition.")]),t._v(" "),s("h4",{attrs:{id:"css-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-3","aria-hidden":"true"}},[t._v("#")]),t._v(" css")]),t._v(" "),s("p",[t._v("An object with the CSS attributes in "),s("strong",[t._v("camel case")]),t._v(" and values.")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("code",[t._v("Object")])])]),t._v(" "),s("h3",{attrs:{id:"show"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show","aria-hidden":"true"}},[t._v("#")]),t._v(" show()")]),t._v(" "),s("p",[t._v("Hides the image setting "),s("code",[t._v("visibility")]),t._v("to "),s("code",[t._v("visible")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"hide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hide","aria-hidden":"true"}},[t._v("#")]),t._v(" hide()")]),t._v(" "),s("p",[t._v("Hides the image setting "),s("code",[t._v("visibility")]),t._v("to "),s("code",[t._v("hidden")]),t._v(".")])])},[],!1,null,null,null);e.default=r.exports}}]);