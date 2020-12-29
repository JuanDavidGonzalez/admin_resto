<template>
  <div>
    <v-app>
      <Menu></Menu>
      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Menu from "./components/Menu";

export default {
  name: "App",
  components: {
    Menu,
  },
};
</script>
