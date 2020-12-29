<template>
  <div>
    <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        :size="100"
        :width="10"
        color="info"
      ></v-progress-circular>
    </v-overlay>
    <v-container my-3>
      <v-card elevation="24">
        <v-card-title color="indigo">
          <h5>Productos Cargados</h5>
        </v-card-title>
        <v-card-text>
          <v-simple-table dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">#</th>
                  <th class="text-center">Nombre</th>
                  <th class="text-center">Precio</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in products" :key="product.uid">
                  <td class="text-center">{{ product.id }}</td>
                  <td class="text-left">{{ product.name }}</td>
                  <td class="text-md-end">$ {{ product.price }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import api from "@/api";
export default {
  name: "Products",
  data() {
    return {
      products: [],
      overlay: true,
    };
  },

  created() {
    api
      .getProducts()
      .then((resp) => {
        this.products = resp;
        this.overlay = false;
      })
      .catch((error) => {
        this.overlay = false;
        console.log(error);
      });
  },
};
</script>
