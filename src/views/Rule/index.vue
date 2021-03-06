<template>
  <div>
    <b-card style="height: auto; background-color: #56317c; color: #fff">
      <h2 class="text-center">協會章程 Rule</h2>
    </b-card>
    <b-container>
      <Rule></Rule>
    </b-container>
  </div>
</template>
<script>
import Rule from "./components/RuleCard";

export default {
  components: {
    Rule,
  },
};
</script>

