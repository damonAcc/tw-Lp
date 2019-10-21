<template>
  <div id="container"></div>
</template>

<script >
import { loadScript, getQueryString } from "@/utils"
import {reportSubmit} from '@/api/report'

export default {
  name: "entry",
  data: () => ({}),
  components: {},
  computed: {},
  created() {
    
  },
  mounted() {
    loadScript('/zwe.js', 'head')
  },
  methods: {}
}
</script>

<style scoped>

</style>