<template>
  <div id="app">
    <HeaderNav />
    <router-view />
    <FooterCom />

  </div>
</template>

<script>
import HeaderNav from './components/headerNav';
import FooterCom from './components/footerCom.vue'

export default {
  data(){
    return{
    }
  },
  name: 'App',
  components:{
    HeaderNav,
    FooterCom
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Jura', sans-serif;
}
.wrapper{
  display: flex;
  flex-direction: row;
}
.space-between{
  display: flex;
  justify-content: space-between;
}
.space-around{
  display: flex;
  justify-content: space-around;
}
.wrapper-col{
  display: flex;
  flex-direction: column;
}

</style>
