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
                    <span class="wrapper">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="21" height="21" rx="7.5" stroke="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6882 11.6317C13.3475 14.1504 13.9508 11.2365 15.6441 12.8395C17.2765 14.3856 18.2147 14.6954 16.1465 16.6542C15.8874 16.8515 14.2414 19.2245 8.45673 13.7458C2.67134 8.2664 5.17472 6.70541 5.38297 6.46005C7.45624 4.49577 7.77757 5.3898 9.40999 6.93587C11.1032 8.53955 8.02876 9.11297 10.6882 11.6317Z" fill="white"/>
                     </svg>
                     <a class="tel" href="tel:+7 4247 906 906">906 906</a>
                    </span>
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
.tel{
    margin-left: 1vw;
}

</style>