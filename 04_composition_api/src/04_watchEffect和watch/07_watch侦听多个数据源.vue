<template>
  <div>
    <h2 ref="title">{{ info.name }}</h2>
    <button @click="changeData">修改info.name</button>
  </div>
</template>

<script>
import { ref, reactive, watch } from "vue";
export default {
  setup() {
    // 1.定义可响应式对象
    const info = reactive({ name: "xc", age: 18 });
    const name = ref("xc");

    // 2.侦听器watch
    watch([info, name], ([newInfo, newName], [oldInfo, oldName]) => {
      console.log(newInfo, newName, oldInfo, oldName);
    });

    watch([() => ({ ...info }), name], ([newInfo, newName], [oldInfo, oldName]) => {
      console.log(newInfo, newName, oldInfo, oldName);
    });
    const changeData = () => {
      info.name = "xcc";
    };

    return {
      changeData,
      info
    };
  }
};
</script>

<style scoped></style>
