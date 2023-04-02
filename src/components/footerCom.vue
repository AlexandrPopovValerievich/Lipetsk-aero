<template>
    <div class="gen">
        <section class="footer wrapper-col">
            <div class="upper wrapper space-between">
                <div class="left">
                    <ul class="ul wrapper-col">
                    <li class="li"><router-link to="/"> Главная</router-link></li>
                    <li class="li"><router-link to="/aboutUs"> О нас</router-link></li>
                    <li class="li"><a href=""> Стать клиентом</a></li>
                    <li class="li"><a href=""> Бизнесу</a></li>
                    <li class="li"><a href=""> Вакансии</a></li>
                    </ul>
                </div>
                <div class="right wrapper-col">
                    <a class="tel" href="tel:+7 4247 77 77 77">+7 4247 77 77 77</a>
                    <a href="#" class="write_us footer_button">Написать нам</a>
                    <a href="#" class="take_a_call footer_button">Заказать звонок</a>
                    <span class="soc">
                        <a href="#"><img src="../assets/whatsapp.png" alt="whatsapp"></a>
                        <a href=""><img src="../assets/telegram.png" alt="telegram"></a>
                        <a href=""><img src="../assets/vk.png" alt="vk"></a>
                    </span>
                </div>
            </div>
            <div class="down space-between">
                <div class="left">
                    <p>ООО “УСБ” 2015-2022</p>
                </div>
                <div class="right">
                   <p>г. Липецк ул. Спиртзаводская д.3</p>
                </div> 
            </div>
        </section>
    </div>
</template>

<script>
export default{
    
}
</script>

<style scoped>
.footer{
    margin-top: 5vw;
    padding: 2vw;
    background: center url(../assets/bg-footer.png) no-repeat;
    background-size: cover;
    color: white;
    height: 30vw;
    display: flex;
    justify-content: space-between;
}
.footer li{
    list-style-type: none;
    margin-bottom: .5vw;
}
.footer a{
    text-decoration: none;
    color: white;
    margin-bottom: 1vw;
}
.footer a:hover{
    color: rgb(170, 170, 170);
}
.footer_button{
    width: 10vw;
    border: solid 2px #ffffff;
    border-radius: 2vw;
    text-align: center;
    padding: .2vw 0vw;
}
.footer_button:hover{
    color: black !important;
    background-color: #ffffff;
}
.soc img{
    width: 2vw;
    margin-right: 1vw;
}

</style>