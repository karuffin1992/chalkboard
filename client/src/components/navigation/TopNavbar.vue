<template>
  <b-navbar :class="'container'">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Chalkboard
      </b-navbar-item>
    </template>

    <template #start>
      <b-navbar-item href="#">
        Home
      </b-navbar-item>
      <b-navbar-item href="#">
        About
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Log in</strong>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'TopNavbar'
}
</script>

<style scoped lang="scss">
</style>
