<template>
  <div>
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h1 class="h2">Detalles</h1>
    </div>

    <div class="container">
      <!-- <div class="py-5 text-center">
        <h2>Cargar Datos <i class="fa fa-upload"></i></h2>
      </div> -->

      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5>Detalles comprador</h5>
            </div>
            <div class="card-body">
              <div v-if="buyer">
                <ul>
                  <!-- <li>Comprador {{ buyer.buyer }}</li> -->
                  <li><strong>Dispositivo</strong>{{ buyer.device }}</li>
                  <li><strong>IP:</strong>{{ buyer.ip }}</li>
                  <!-- <li>{{ buyer.productids }}</li> -->
                </ul>
                <div class="table-responsive">
                  <table
                    class="table table-striped table-hover caption-top table-bordered"
                  >
                    <caption>
                      Historial de Compras
                    </caption>
                    <thead class="table-dark">
                      <tr class="text-center">
                        <th>#</th>
                        <th>Producto</th>
                        <th>Precio</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(product, index) in products" :key="index">
                        <td class="text-center">{{ product.id }}</td>
                        <td class="text-right">{{ product.name }}</td>
                        <td class="text-left">$ {{ product.price }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="table-responsive">
                  <table class="table table-striped table-hover caption-top">
                    <caption>
                      Compradores Misma Ip
                    </caption>
                    <thead class="table-dark">
                      <tr class="text-center">
                        <th>#</th>
                        <th>Comprador</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(buyer, index) in otherBuyers" :key="index">
                        <td class="text-center">{{ buyer.id }}</td>
                        <td class="text-center">{{ buyer.name }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div v-else class="alert alert-warning">
                No hay información disponible!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";

export default {
  name: "BuyerDetail",
  data() {
    return {
      buyer: {},
      products: [],
      otherBuyers: [],
    };
  },

  created() {
    this.getBuyer();
  },

  methods: {
    getBuyer() {
      const id = this.$route.params.id;
      api.getBuyerDetail(id).then((resp) => {
        this.buyer = resp[0];

        if (this.buyer.products) {
          this.buyer.products.forEach((element) => {
            api.getProduct(element).then((resp) => this.products.push(resp[0]));
          });
        }

        if (this.buyer.ip) {
          api
            .getOtherBuyer(this.buyer.ip)
            .then((resp) => (this.otherBuyers = resp));
        }
      });
    },
  },
};
</script>
