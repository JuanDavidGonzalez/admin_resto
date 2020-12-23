<template>
  <nav
    id="sidebarMenu"
    class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
  >
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/">
            <i class="fa fa-home"></i>
            Dashboard
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/products">
            <i class="fa fa-tags"></i>
            Productos
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/buyers">
            <i class="fa fa-shopping-cart"></i>
            Compradores
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Menu",
};
</script>
