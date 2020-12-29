<template>
  <div>
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h1 class="h2">Productos</h1>
    </div>
    <div class="table-responsive">
      <table class="table table-striped table-hover caption-top">
        <caption>
          Listado De Productos Almacenados
        </caption>
        <thead class="table-dark">
          <tr class="text-center">
            <th>#</th>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.uid">
            <td class="text-center">{{ product.id }}</td>
            <td class="text-left">{{ product.name }}</td>
            <td class="text-md-end">$ {{ product.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import api from "@/api";
export default {
  name: "Products",
  data() {
    return {
      products: [],
    };
  },

  created() {
    api.getProducts().then((resp) => (this.products = resp));
  },
};
</script>
