<template>
  <div>
      <h2>This is outlet</h2>
      <OutletItems />
      <!-- <OutletItems @outletBooks="outletBook" /> -->
  </div>
</template>

<script>
import OutletItems from './../components/Outlet/OutletItems'
export default {
  props: {
    outletBooks: Array
  },
  components: {
    OutletItems
  }
}
</script>

<style>

</style>