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
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="buyer in buyers" :key="buyer.uid">
            <td class="text-center">{{ buyer.id }}</td>
            <td class="text-left">{{ buyer.name }}</td>
            <td class="text-center">{{ buyer.age }}</td>
            <td class="text-center">
              <button
                class="btn btn-primary btn-sm btn-rounded"
                @click="goToDetail(buyer.id)"
              >
                <i class="fa fa-eye"></i>
              </button>
            </td>
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
  // components: {
  //   Modal,
  // },
  data() {
    return {
      buyers: [],
      showModal: false,
    };
  },

  created() {
    api.getBuyers().then((resp) => (this.buyers = resp));
  },

  methods: {
    goToDetail(id) {
      this.$router.push({ name: "buyer-detail", params: { id } });
    },
  },
};
</script>
