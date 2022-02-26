<template>
  <div>
    <h2>组件的开始</h2>
    <slot>
      <i>我是默认的i元素</i>
    </slot>
    <slot>
      <i>我是默认的i元素</i>
    </slot>
    <slot>
      <i>我是默认的i元素</i>
    </slot>
    <h2>组件的结束</h2>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>