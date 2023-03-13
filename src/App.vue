<template>
  <div id="app">
    <HeaderNav />
    <HeaderHead />
  </div>
</template>

<script>
import HeaderNav from './components/headerNav.vue';
import HeaderHead from './components/headerHead.vue';

export default {

  name: 'App',
  components:{
    HeaderNav,
    HeaderHead
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
#app {

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
