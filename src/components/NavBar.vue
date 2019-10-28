<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/why">Why?</router-link>
    <nav-dropdown>
      <template v-slot:header>
        <router-link to="/components">Components</router-link>
      </template>
      <template v-slot:list>
        <router-link to="/components/motherboard">Motherboard</router-link>
      </template>
    </nav-dropdown>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
import NavDropdown from "@/components/NavDropdown";

export default {
  components: {
    "nav-dropdown": NavDropdown
  }
};
</script>

<style lang="scss">
#nav {
  display: flex;
  justify-content: center;
  align-items: center;

  >*:not(:last-child) {
    border-right: solid #2c3e50 2px;
  } 

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    padding: 0 20px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>