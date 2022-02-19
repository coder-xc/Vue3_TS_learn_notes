import { createApp } from "vue";
import axios from "axios";

import { sum } from "js/math";
const { priceFormat } = require("js/format");

import App from "@/vue/App.vue";

import "./js/element";

if(module.hot) {
    module.hot.accept("./js/element.js", () => {
        console.log("element模块发生更新了");
    })
}

console.log(sum(20, 30));
console.log(priceFormat());

const app = createApp(App)
app.mount("#app");
