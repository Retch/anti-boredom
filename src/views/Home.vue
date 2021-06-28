<template>
  <div>
    <Activity
      class="p-d-flex p-jc-center"
      :text="activitytext"
      style="margin-bottom: 2rem"
    />
    <Button
      label="I'm bored"
      @click="fetchActivity()"
      style="margin-bottom: 10vh"
    />

    <InformationChart
      :participants="activityparticipants"
      :price="activityprice"
      :accessibility="activityaccessibility"
      :key="componentKey"
      style="max-width: 47rem; background-color: #b2ebf2; padding: 0.5rem"
      class="p-d-block p-mx-auto p-card p-component p-ripple"
      v-ripple
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Activity from "@/components/Activity.vue";
import InformationChart from "@/components/InformationChart.vue";
import axios from "axios";

export default defineComponent({
  name: "Home",
  components: {
    Activity,
    InformationChart,
  },
  data() {
    return {
      activitytext: "",
      activityparticipants: 0,
      activityprice: 0,
      activityaccessibility: 0,
      activityinformation: {
        participants: 0,
        price: 0,
        accessibility: 0,
      },
      componentKey: 0,
    };
  },
  methods: {
    async fetchActivity() {
      const res = await axios(process.env.VUE_APP_APIENDPOINT);

      const data = res.data;

      this.activitytext = data.activity;
      this.activityparticipants = data.participants;
      this.activityprice = data.price;
      this.activityaccessibility = data.accessibility;

      this.activityinformation.participants = data.participants;
      this.activityinformation.price = data.price;
      this.activityinformation.accessibility = data.accessibility;

      this.forceRerender();
    },
    forceRerender() {
      this.componentKey += 1;
    },
  },
  created() {
    this.fetchActivity();
  },
});
</script>
