<template>
  <div>
    <h2>{{ counter }}</h2>
    <h2>{{ doubleCounter }}</h2>

    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <h2>{{ data }}</h2>
    <button @click="changeData">修改data</button>

    <p class="content"></p>

    <div class="scroll">
      <div>scrollX: {{ scrollX }}</div>
      <div>scrollY: {{ scrollY }}</div>
    </div>
    <div class="mouse">
      <div>mouseX: {{ mouseX }}</div>
      <div>mouseY: {{ mouseY }}</div>
    </div>
  </div>
</template>

<script>
import {
  useCounter,
  useLocalStorage,
  useMousePosition,
  useScrollPosition,
  useTitle
} from "./hooks";
export default {
  setup() {
    const { counter, doubleCounter, increment, decrement } = useCounter();
    const titleRef = useTitle("xc");
    setTimeout(() => {
      titleRef.value = "kobe";
    }, 3000);
    // 滚动位置
    const { scrollX, scrollY } = useScrollPosition();
    // 鼠标位置
    const { mouseX, mouseY } = useMousePosition();
    // localStorage
    const data = useLocalStorage("info", { name: "xc", age: 18 });
    const changeData = () => {
      data.value = "哈哈哈";
    };
    return {
      counter,
      doubleCounter,
      increment,
      decrement,
      scrollX,
      scrollY,
      mouseX,
      mouseY,
      data,
      changeData
    };
  }
};
</script>

<style scoped>
.content {
  width: 3000px;
  height: 5000px;
}
.scroll {
  position: fixed;
  bottom: 30px;
  right: 30px;
}

.mouse {
  position: fixed;
  bottom: 80px;
  right: 30px;
}
</style>
