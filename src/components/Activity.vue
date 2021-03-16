<template>
  <div>
    <Card style="width: 25rem; margin-bottom: 2em">
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
      heading: "Activity",
    };
  },
});
</script>
