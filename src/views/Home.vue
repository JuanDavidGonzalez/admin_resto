<template>
  <div>
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h1 class="h2">Bienvenido!</h1>
    </div>

    <div class="container">
      <!-- <div class="py-5 text-center">
        <h2>Cargar Datos <i class="fa fa-upload"></i></h2>
      </div> -->

      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5>Cargar Datos</h5>
            </div>
            <div class="card-body">
              <form action="">
                <div class="form-group row">
                  <div class="col-md-6">
                    <label>Tipo Dato</label>
                    <select
                      name="data_type"
                      id="data_type"
                      class="form-select"
                      v-model="search_params.type"
                    >
                      <option value="-1" selected disabled
                        >--Seleccionar--</option
                      >
                      <option
                        v-for="(item, index) in dataTypes"
                        :key="index"
                        :value="index"
                        >{{ item }}</option
                      >
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label>Fecha</label>
                    <input
                      type="date"
                      class="form-control"
                      name="date"
                      v-model="search_params.date"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div class="card-footer text-center">
              <button class="btn btn-primary" @click="getData">
                <i class="fa fa-upload"></i> Cargar Datos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import Swal from "sweetalert2";

export default {
  name: "Home",

  data() {
    return {
      dataTypes: {
        products: "Productos",
        buyers: "Compradores",
        transactions: "Transacciones",
      },

      search_params: {
        date: null,
        type: -1,
      },
    };
  },

  methods: {
    getData() {
      let newDate = new Date();
      if (this.search_params.date) {
        newDate = new Date(this.search_params.date);
      }

      newDate = newDate / 1000;

      if (this.search_params.type !== -1) {
        api.loadData(newDate, this.search_params.type).then((resp) => {
          console.log(resp);
          Swal.fire("Ok", resp.message, "success");
          this.search_params = { date: null, type: -1 };
        });
      } else {
        Swal.fire("Upss!", "Debe Seleccionar un tipo de dato", "error");
      }
    },
  },
};
</script>
