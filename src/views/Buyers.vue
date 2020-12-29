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
          <h5>Compradores Cargados</h5>
        </v-card-title>
        <v-card-text>
          <v-simple-table dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">#</th>
                  <th class="text-center">Nombre</th>
                  <th class="text-center">Edad</th>
                  <th class="text-center">Accion</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="buyer in buyers" :key="buyer.uid">
                  <td class="text-center">{{ buyer.id }}</td>
                  <td class="text-left">{{ buyer.name }}</td>
                  <td class="text-center">{{ buyer.age }}</td>
                  <td class="text-center">
                    <v-btn
                      title="Detalle"
                      icon
                      dark
                      color="primary"
                      @click="goToDetail(buyer.id)"
                    >
                      <v-icon dark>
                        mdi-eye
                      </v-icon>
                    </v-btn>
                  </td>
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
  name: "Buyers",
  data() {
    return {
      buyers: [],
      overlay: true,
    };
  },

  created() {
    this.getBuyers();
  },

  methods: {
    getBuyers() {
      api
        .getBuyers()
        .then((resp) => {
          this.buyers = resp;
          this.overlay = false;
        })
        .catch((error) => {
          this.overlay = false;
          console.log(error);
        });
    },
    goToDetail(id) {
      this.$router.push({ name: "buyer-detail", params: { id } });
    },
  },
};
</script>
