<template>
  <div>
    <Activity :text="activitytext" />
    <Button label="I'm bored" @click="fetchActivity()" />

    <InformationChart
      :participants="activityparticipants"
      :price="activityprice"
      :accessibility="activityaccessibility"
      :key="componentKey"
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
