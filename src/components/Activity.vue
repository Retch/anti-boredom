<template>
  <div class="">
    <Card style="width: 25rem; background-color: #b2ebf2" class="p-ripple" v-ripple>
      <template #title> {{ heading }} </template>
      <template #content>
        <p>{{ text }}</p>
      </template>
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: String,
  },
  data() {
    return {
      heading: "You could do that",
    };
  },
});
</script>
