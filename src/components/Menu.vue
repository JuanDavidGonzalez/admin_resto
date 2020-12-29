<template>
  <div>
    <v-app-bar dense app color="indigo" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Admin Resto</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer dark app v-model="drawer" temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Admin Resto
          </v-list-item-title>
          <v-list-item-subtitle>
            Menu
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon large color="white darken-2">mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/products">
          <v-list-item-icon>
            <v-icon large color="white darken-2">mdi-tag-text</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Productos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/buyers">
          <v-list-item-icon>
            <v-icon large color="white darken-2">mdi-account-details</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Compradores</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
