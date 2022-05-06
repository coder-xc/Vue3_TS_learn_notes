import { createApp } from "vue";
// import App from "./01_render函数的使用/App.vue";
// import App from "./02_jsx的使用/App.vue";
// import App from "./03_自定义指令/App.vue";
import App from "./04_teleport内置组件/App.vue";

import registerDirectives from "./directives";

import pluginsObject from "./plugins/plugins_object";

import pluginsFunction from "./plugins/plugins_function";

const app = createApp(App);

registerDirectives(app);

app.use(pluginsObject);
app.use(pluginsFunction);

// app.directive("focus", {
//   mounted(el, bindings, vnode, preVnode) {
//     console.log("focus mounted");
//     el.focus();
//   }
// });

app.mount("#app");
