<template>
  <div>
    <v-container my-3>
      <v-card elevation="24">
        <v-card-title color="indigo">
          <h5>Cargar Datos</h5>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-container>
              <v-row>
                <v-col md="6">
                  <v-select
                    label="Tipo de dato"
                    :items="dataTypes"
                    item-text="name"
                    item-value="value"
                    v-model="search_params.type"
                  ></v-select>
                </v-col>
                <v-col md="6">
                  <v-menu
                    v-model="menu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="search_params.date"
                        label="Fecha"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="search_params.date"
                      @input="menu = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
              <v-row>
                <v-col md="12">
                  <div class="text-center">
                    <v-btn
                      :loading="loading"
                      :disabled="loading"
                      color="indigo"
                      class="ma-2 white--text"
                      @click="getData"
                    >
                      Upload
                      <v-icon right dark>
                        mdi-cloud-upload
                      </v-icon>
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import api from "@/api";
import Swal from "sweetalert2";

export default {
  name: "Home",

  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      dataTypes: [
        { value: "products", name: "Productos" },
        { value: "buyers", name: "Compradores" },
        { value: "transactions", name: "Transacciones" },
      ],
      search_params: {
        date: null,
        type: -1,
      },
      loading: false,
    };
  },

  methods: {
    getData() {
      this.loading = true;
      let newDate = new Date();
      if (this.search_params.date) {
        newDate = new Date(this.search_params.date);
      }

      newDate = newDate / 1000;

      if (this.search_params.type !== -1) {
        api
          .loadData(newDate, this.search_params.type)
          .then((resp) => {
            this.loading = false;
            Swal.fire("Ok", resp.message, "success");
            this.search_params = { date: null, type: -1 };
          })
          .catch((error) => {
            console.log(error);
            Swal.fire("Upss!", "Se presentó un error", "error");
          });
      } else {
        this.loading = false;
        Swal.fire("Upss!", "Debe seleccionar un tipo de dato", "error");
      }
    },
  },
};
</script>
