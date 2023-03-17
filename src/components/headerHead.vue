<template>
    <div id="generalHead">
        <section class="section header">
            <div class="space-around content">
            <form action="" class="form wrapper-col">
                <span class="wrapper space-around tabs" >
                    <span class="tab" @click="formTabs()" :class="{active2: isActive2}">Написать нам</span>
                    <span class="tab" @click="formTabs()" :class="{active: isActive}">Заказать звонок</span>
                </span>
                <input class="input" type="text" name="name" placeholder="Имя">
                <input class="input" type="number" name="tel" placeholder="Номер телефона">
                <input class="input" type="email" name="email" :class="{active: isActive2}" placeholder="Электронная почта">
                <textarea class="textarea" :class="{active: isActive2}" name="message">Сообщение</textarea>
                <button class="btn" type="submit">Отправить</button>
            </form>
            <div class="get wrapper-col">
                <h1 class="h1">Более 10 лет на рынке</h1>
                <h4 class="h4">Комфортно, безопасно и в нужное время доставим Вас до любой точки города </h4>
                <button type="submit" class="takeCar"><h3 class="h3"><p class="p">Заказать автомобиль</p></h3></button>
            </div>
        </div>
        </section>
        <div id="test" class="test" :class="{show: scrolled}">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
       <section class="section">
        <h2 class="h2">Почему мы?</h2>
        <ul class="ul_section">
            <li class="li_section"><h3 class="h3">В нашем парке только иномарки</h3></li>
            <li class="li_section"><h3 class="h3">Медицинский контроль водителей перед выходом на линию</h3></li>
            <li class="li_section"><h3 class="h3">Ежедневный технический контроль автомобиля</h3></li>
            <li class="li_section"><h3 class="h3">Заключение договора в течении часа</h3></li>
            <li class="li_section"><h3 class="h3">Прозрачная система оплаты</h3></li>
            <li class="li_section"><h3 class="h3">Доставим в любой город России</h3></li>
        </ul>
       </section>
    </div>
</template>

<script>

export default{
    data(){
        return{
        isActive:true,
        isActive2:false,
        scrolled:false,
        }
    },
    methods:{
        formTabs(){
            this.isActive = !this.isActive;
            this.isActive2 = !this.isActive2
        }
            
    },
    mounted(){

            
}
}

</script>

<style scoped>

#generalHead{
    margin-top: -5vw;
    width: 100%;
}
.content{
    padding-top: 11vw;
}
.header{
    height:100vh;
    background:no-repeat center url(../assets/bg.png);
    background-size: cover;
}
.test{
    display: none;
}
.show{
    display: block;
}
.form{
    width: 25vw;
    padding-bottom:1.5vw;
    background-color:#ffffff38; 
    backdrop-filter: blur(5px);
    border: solid 1px #9d9d9d;
    border-radius: .5vw;
    transition: all ease 0.5s;
}
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
    -webkit-text-fill-color: #FFFFFF;
    -webkit-box-shadow:none;
    transition: background-color 5000s ease-in-out 0s;
}
.input,.textarea{
    width: 85%;
    margin: auto;
    height: 2vw;
    margin-bottom: 1.8vw;
    background: none;
    border: none;
    border-bottom: solid 1px #9d9d9d;
    color: #FFFFFF;
    padding: 0.5vw;
    outline:none;
}
.textarea{
    height: 5vw;
    color: #cecece; 
}
.input.active{
    opacity: 0;
}
textarea.active{
    opacity: 0;
}
.btn{
    width: 50%;
    background:none;
    border: solid 2px #FFFFFF;
    border-radius: 5vw;
    color: #FFFFFF;
    padding: .4vw 0;
    margin-left: 43%;
    cursor: pointer;
    transition: all ease-in-out 0.3s;
}
.btn:hover{
    background-color: #FFFFFF;
    color: #1d1d1d;
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
.get{
    color: #FFFFFF;
    width: 35vw;
    font-weight: lighter;
}
.h1,.h4,.p{
    font-weight: lighter;
}
.h1{
    font-size: 5vw;
    line-height: 5vw;
}
.h4{
    font-size: 1.5vw;
    margin: 4vw 0;
    width: 30vw;
}
.takeCar{
    font-size: 1.5vw;
    border: none;
    background-color: #007B1B;
    border-radius: 5vw;
    color: #FFFFFF;
    width: 60%;
    padding: 0.5vw 0 0.8vw 0;
    cursor: pointer;
}
.section{
    padding-left: 5vw;
margin-bottom: 5vw;
}
.li_section{
    font-size: 1.5vw;
}
.h2{
    font-size: 2.5vw;
    margin-bottom: 2vw;
}
</style>