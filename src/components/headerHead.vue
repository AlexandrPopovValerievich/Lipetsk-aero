<template>
    <div id="generalHead">
        <section class="section space-around">
            <form action="" class="form wrapper-col">
                <span class="wrapper space-around tabs" >
                    <span class="tab" @click="formTabs()" :class="{active2: isActive2}">Написать нам</span>
                    <span class="tab" @click="formTabs()" :class="{active: isActive}">Заказать звонок</span>
                </span>
                <input class="input" type="text" name="name" placeholder="Имя">
                <input class="input" type="number" name="tel" placeholder="Номер телефона">
                <input class="input" type="email" name="email" placeholder="Электронная почта">
                <textarea class="textarea" name="message">Сообщение</textarea>
                <button class="btn" type="submit">Отправить</button>
            </form>
            <div class="get wrapper-col">
                <h1 class="h1">Более 10 лет на рынке</h1>
                <h4 class="h4">Комфортно, безопасно и в нужное время доставим Вас до любой точки города </h4>
                <button type="submit"><h3 class="h3"><p class="p">Заказать такси</p></h3></button>
            </div>
        </section>
    </div>
</template>

<script>

export default{
    data(){
        return{
        isActive:false,
        isActive2:true
        }
    },
    methods:{
        formTabs(){
            this.isActive = !this.isActive;
            this.isActive2 = !this.isActive2
        }
    }

}

</script>

<style scoped>

#generalHead{
    margin-top: -5vw;
    width: 100vw;
    height: 100vh;
    background:no-repeat center url(../assets/bg.png);
    background-size: cover;
    padding-top: 11vw;
}
.form{
    width: 25vw;
    padding-bottom:1.5vw;
    background-color:#ffffff38; 
    backdrop-filter: blur(5px);
    border: solid 1px #9d9d9d;
    border-radius: .5vw;
}
.input,.textarea{
    width: 85%;
    margin: auto;
    height: 2vw;
    margin-bottom: 1.8vw;
    background: none;
    border: none;
    border-bottom: solid 1px #9d9d9d;
}
.textarea{
    height: 5vw;
    color: #cecece; 
}
.btn{
    width: 50%;
    background:none;
    border: solid 2px #FFFFFF;
    border-radius: 5vw;
    color: #FFFFFF;
    padding: .4vw 0;
    margin-left: 43%;
}
.tabs{
    position: relative;
    margin-bottom: 1.5vw;
}
.tab{
    padding-top: .4vw;
    height: 2.2vw;
    width: 50%;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
}
.tab.active{
    padding-top: .4vw;
    height: 2.2vw;
    width: 50%;
    text-align: center;
    background-color: #1d1d1d;
    border-bottom-left-radius: .5vw;
    border-top-right-radius: .5vw;
    border-bottom: solid 1px #9d9d9d;
    border-left: solid 1px #9d9d9d;;
    margin: -1px -1px 0 0;
}
.tab.active2{
    padding-top: .4vw;
    height: 2.2vw;
    width: 50%;
    text-align: center;
    background-color: #1d1d1d;
    border-bottom-right-radius: .5vw;
    border-top-left-radius: .5vw;
    border-bottom: solid 1px #9d9d9d;
    border-right: solid 1px #9d9d9d;
    margin: -1px 0 0 -1px;
}
::placeholder{
    color:#cecece;
}
</style>