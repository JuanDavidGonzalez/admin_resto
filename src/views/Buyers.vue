<template>
  <div>
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h1 class="h2">Compradores</h1>
    </div>
    <div class="table-responsive">
      <table class="table table-striped table-hover caption-top">
        <caption>
          Listado De Compradores Almacenados
        </caption>
        <thead class="table-dark">
          <tr class="text-center">
            <th>#</th>
            <th>Nombre</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="buyer in buyers" :key="buyer.id">
            <td class="text-center">{{ buyer.id }}</td>
            <td class="text-left">{{ buyer.name }}</td>
            <td class="text-center">{{ buyer.age }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import api from "@/api";
export default {
  name: "Buyers",
  data() {
    return {
      buyers: [],
    };
  },

  created() {
    api.getBuyers().then((resp) => (this.buyers = resp));
  },
};
</script>
