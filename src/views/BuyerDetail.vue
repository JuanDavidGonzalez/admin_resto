<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col md="4">
          <v-card elevation="10">
            <v-list disabled>
              <v-subheader>Detalles</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon> mdi-cellphone-link</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title
                      ><strong>Dispositivo: </strong>
                      {{ buyer ? buyer.device : "__" }}</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon> mdi-web</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title
                      ><strong> IP: </strong
                      >{{ buyer ? buyer.ip : "__" }}</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <div class="text-center">
              <v-btn color="indigo" class="ma-2 white--text" to="/buyers">
                <v-icon left dark>
                  mdi-arrow-left-bold
                </v-icon>
                Atras
              </v-btn>
            </div>
          </v-card>
        </v-col>
        <v-col md="8">
          <v-row class="mb-6">
            <v-col md="12">
              <v-card elevation="10">
                <v-card-title>
                  <h5>Historial de compras</h5>
                </v-card-title>
                <v-card-text>
                  <v-simple-table dense v-if="buyer">
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-center">#</th>
                          <th class="text-center">Producto</th>
                          <th class="text-center">Precio</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(product, index) in products" :key="index">
                          <td class="text-center">{{ product.id }}</td>
                          <td class="text-left">{{ product.name }}</td>
                          <td class="text-right">$ {{ product.price }}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                  <v-alert v-else border="left" color="indigo" dark>
                    No hay información disponible!
                  </v-alert>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="12">
              <v-card elevation="10">
                <v-card-title>
                  <h5>Compradores misma ip</h5>
                </v-card-title>
                <v-card-text>
                  <v-simple-table dense v-if="buyer">
                    <template>
                      <thead>
                        <tr>
                          <th class="text-center">#</th>
                          <th class="text-center">Comprador</th>
                          <th class="text-center">Edad</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(buyer, index) in otherBuyers" :key="index">
                          <td class="text-center">{{ buyer.id }}</td>
                          <td class="text-left">{{ buyer.name }}</td>
                          <td class="text-center">{{ buyer.age }}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                  <v-alert v-else border="left" color="indigo" dark>
                    No hay información disponible!
                  </v-alert>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import api from "@/api";

export default {
  name: "BuyerDetail",
  data() {
    return {
      buyer: null,
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
      api
        .getBuyerDetail(id)
        .then((resp) => {
          if (resp[0]) {
            this.buyer = resp[0];

            if (this.buyer.products) {
              this.buyer.products.forEach((element) => {
                api
                  .getProduct(element)
                  .then((resp) => this.products.push(resp[0]));
              });
            }

            if (this.buyer.ip) {
              api
                .getOtherBuyer(this.buyer.ip)
                .then((resp) => (this.otherBuyers = resp));
            }
          }
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
