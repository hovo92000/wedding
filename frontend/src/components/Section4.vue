<template>
    <section class="section4" >
        <div class="text-container">
            <div class="title" v-animateonscroll.once="{
                enterClass: 'animate-enter fadein animation-duration-1000',
                leaveClass: 'animate-leave fadeout'
            }">
                <div>
                    Հարսանյաց արարողությունը տեղի կունենա «Մորենա» սպիտակ դահլիճում,
                </div>
                 <div>
                     Ժամը 18:00-ին:
                 </div>
            </div>
        </div>
        <div class="img-container">
            <img src="../assets/images/morena.png" alt="">
        </div>
        <div class="button-container">
            <a href="https://maps.app.goo.gl/Dcr1JrvudAviLKUx8" target="_blank">Քարտեզ</a>
        </div>
        <div class="img-container" style="margin: 0 20px;">
            <img src="../assets/images/section4Img2.png" alt="">
        </div>
    </section>
</template>


<script setup>

</script>


<style lang="scss">
.section4{
    max-width: 650px;
    margin: 0 auto;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    .text-container{
        display: flex;
        text-align: center;
        flex-direction: column;
        gap: 10px;
        margin: 0 30px 10px 30px;
        font-size: 18px;
        .title{
                font-family: montserratarm-regular;
                color: #261914;
        }
        .description{

        }
    }
    .img-container{
        margin: 0 30px;
        display: flex;
        flex-direction: column;
        img{

        }
    }
    .button-container{
        display: flex;
        justify-content: center;
        margin: 20px 0;
        a{
            padding: 5px 40px;
            text-decoration: none;
            border-radius: 60px;
            background: #7C8E85;
            color: #fff;
        }
    }
}

</style>