<template>
  <div>
    <!-- 编译作用域 -->
    <!-- <child-cpn>
          <button>哈哈哈</button>
      </child-cpn> -->
    <show-names :names="names">
      <template v-slot:xc="slotProps">
        <button>{{ slotProps.item }} - {{ slotProps.index }}</button>
      </template>
    </show-names>

    <show-names :names="names" v-slot="slotProps">
      <button>{{ slotProps.item }} - {{ slotProps.index }}</button>
    </show-names>

    <!-- 注意：如果还有其他的具名插槽，那么默认插槽也必须使用template来编写 -->

    <show-names :names="names">
      <template v-slot:xc="slotProps">
        <button>{{ slotProps.item }} - {{ slotProps.index }}</button>
      </template>
    </show-names>

    <show-names :names="names">
      <template v-slot:xc="slotProps">
        <strong>{{ slotProps.item }} - {{ slotProps.index }}</strong>
      </template>
    </show-names>
  </div>
</template>

<script>
import ChildCpn from "./ChildCpn.vue";
import ShowNames from "./ShowNames.vue";
export default {
  components: {
    ChildCpn,
    ShowNames,
  },
  data() {
    return {
      names: ["xc", "kobe", "james", "curry"],
    };
  },
};
</script>

<style scoped>
</style>