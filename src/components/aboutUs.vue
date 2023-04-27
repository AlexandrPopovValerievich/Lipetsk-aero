<template>
    <div id="app">
        <notAllowed />
    </div>
    <!-- <div id="generalHead">
    <h1 v-for="ids in id" :key="ids.id" >{{ids.id}} {{ ids.login }}</h1>
    </div> -->
</template>
 <script>
 import notAllowed from './notAllowed.vue'
export default{
    name: 'App',
    components:{
        notAllowed
  }
//     name: "get-request",
//     data(){
//         return {
//             id: null
//     };
//     },

//     methods:{           
//     },
//     mounted(){         
// },
// created() {
//   fetch("https://popovalexandr.ru/bin/api/users")
//     .then(response => response.json())
//     .then(data => (this.id = data))
// },
 }
</script>
