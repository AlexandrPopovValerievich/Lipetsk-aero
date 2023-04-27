<template>
    <section class="notAllowed"></section>
    <div class="div">
    <h1>Страница на реконструкции</h1>
    <span class="hammer_gear">
        <img src="@/assets/Vector-1.png" alt="hammer" class="hammer">
        <img src="@/assets/Vector.png" alt="gear" class="gear">
    </span>
    <h3>Приносим извинения за временные неудобства</h3>
   </div>
</template>
<script>
export default{

}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&display=swap');

.notAllowed{
    margin: -5vw 0;
    width: 100%;
    height: 100vh;
    background: center url(@/assets/bgNA.png) no-repeat;
    background-size: cover;
}
.div{
    position: absolute;
    top: 25%;
    left: 30%;
    width: 40%;
    height: 50%;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1vw;
    justify-content: space-between;
    background-color: #ffffff34;
    backdrop-filter: blur(10px);
    border-radius: .5vw;
    border: solid 1px #ffffff73;
}

.hammer{
    width: 3vw;
    margin-right: 1vw;
    animation: hammer 1.8s ease-in infinite;
}
.gear{
    width: 3vw;
    animation: spin 5s linear infinite;
}

@keyframes spin{
    0%{transform: rotate(0deg);}
    /* 50%{transform: rotate(360deg);} */
    100%{transform: rotate(360deg);}
}
@keyframes hammer{
    0%{transform: rotate(0deg);}
    50%{transform: rotate(50deg);}
    100%{transform: rotate(0deg);}
}
@media(max-width: 900px){
    .notAllowed{
        margin: -15vw 0;
        width: 100%;
        height: 100vh;
        background: center url(@/assets/bgNA.png) no-repeat;
        background-size: cover;
    }
    .div{
        position: absolute;
        top: 25%;
        left: 10%;
        width: 80%;
        height: 40%;
        padding: 5vw 1vw;
        border-radius: 1vw;
    }
    h3{
        font-size: 3vw;
        font-weight: 400;
    }
    h1{
        font-size: 5vw;
    }
    .hammer{
        width: 10vw;
        margin-right: 2vw;
    }
    .gear{
        width: 10vw;
    }
}
</style>