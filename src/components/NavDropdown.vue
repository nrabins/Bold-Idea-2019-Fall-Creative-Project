<template>
  <div class="nav-dropdown" @mouseleave="showDropdown=false" @mouseover="showDropdown=true">
    <div class="nav-header">
      <slot name="header" />
    </div>
    <div class="nav-list" v-show="showDropdown">
      <slot name="list" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false
    };
  }
};
</script>

<style>
</style>