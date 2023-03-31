<template>
    <div>
        <nav class="nav wrapper space-between">
        <span class="wrapper-col menuBtn" @click="showMenu()">
            <span class="span" :class="{active: isActive}"></span>
            <span class="span" :class="{active: isActive}"></span> 
        </span> 
        <div class="search"><svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="22.5" cy="22.5" r="14.4179" transform="rotate(-46.8147 22.5 22.5)" stroke="black" stroke-width="3"/>
        <line x1="35.3752" y1="32.042" x2="42.597" y2="38.8202" stroke="black" stroke-width="3"/>
        </svg></div>
        </nav>
        <div class="menu" :class="{active: isActive}">
            <ul class="ul">
             <li class="li" v-for="tag in tags" :key="tag.id"><a href="">{{ tag }}</a></li>
            </ul>
        </div>
    </div>
</template>

<script>

export default{
    data() {
  return {
    isActive: false,
    tags:['home','articles','etc.','somethink']
  }
},
 methods:{
    showMenu(){
        this.isActive = !this.isActive
    }
 }
}
</script>
<style scoped>
.menu{
    position: fixed;
    top: 0;
    left: -100vw;
}
@media(max-width: 800px){
a.menuBtn{
    cursor: pointer;
}
.span{
    width: 50px;
    height: 3px;
    background-color: rgb(0, 0, 0);
    margin-left: 5vw;
    transition: all ease-in-out .5s;
}
.span:nth-child(odd){
    width: 50px;
    height: 3px;
    background-color: rgb(0, 0, 0);
    margin-bottom: 5vw;
    margin-left: 5vw;
    transition: all ease-in-out .5s;
}
.menu{
    width:70vw;
    height: 100vh;
    background-color: brown;
    position: fixed;
    top: 0;
    left: -100vw;
    z-index: -1;
    transition: all ease-in-out .5s;
}
.menu.active{
    color: white;
    top: 0;
    left:0;
    padding: 10vw 0.5vw;
    font-size: 5vw;

}
.span.active:nth-child(odd){
    margin-top: 4.5vw;
    transform: rotate(45deg);
    background-color: rgb(255, 255, 255);
}
.span.active:nth-child(even){
    margin-top: -5.5vw;
    transform: rotate(-45deg);
    background-color: rgb(255, 255, 255);
}
.ul{
    height: 90vh;
    overflow-y:auto;
}
.ul,.li,.li a{
    list-style: none;
    color: white;
    text-decoration: none;
}
.li a:hover{
    list-style: none;
    color: rgb(255, 161, 161);
    text-decoration: none;
}
.nav{
    width: 100%;
}
.search{
    margin-right: 5vw;
}
}
</style>