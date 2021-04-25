<template>
  <div>
    <SideBar v-if="isLogged"/>
    <Nuxt class="ml-72 pl-6" @log-in="logged" />
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";

export default {
	components: {
		SideBar
	},

  data(){
    return {
      isLogged: localStorage.getItem('token')? true: false
    }
  },

  methods: {
    logged(e) {
      console.log("e", e)
      this.isLogged = e
    }
  }
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: var(--white-light);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.white-bg{
	background-color: var(--white);
}

.white--light-bg{
	background-color: var(--white-light);
}

.pink-bg{
	background-color: var(--pink-light);
}

.green-bg{
	background-color: var(--green);
}

.pink-text{
	color: var(--pink-light);
}

.red-text{
	color: var(--red);
}

.green-text{
	color: var(--green);
}

</style>
