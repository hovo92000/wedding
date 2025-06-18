<template>
    <section class="section2" >
        <div class="text-container">
            <div class="title" v-animateonscroll="{
                enterClass: 'animate-enter fadein animation-duration-1000',
                leaveClass: 'animate-leave fadeout'
            }">
                Սիրելի Հյուրեր
            </div>
            <div class="description" v-animateonscroll="{
                enterClass: 'animate-enter fadein animation-duration-1000',
                leaveClass: 'animate-leave fadeout'
            }">Սիրով հրավիրում ենք Ձեզ ներկա գտնվելու մեր հարսանյաց արարողությանը:</div>
            <div class="date" v-animateonscroll="{
                enterClass: 'animate-enter fadein animation-duration-1000',
                leaveClass: 'animate-leave fadeout'
            }">Օգոստոս 1/2025</div>
        </div>
        <div class="img-container" >
            <img src="../assets/images/calendar.png" alt="">
        </div>
    </section>
</template>


<script setup>

</script>


<style lang="scss">
.section2{
    max-width: 650px;
    margin: 0 auto;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    .text-container{
        display: flex;
        text-align: center;
        flex-direction: column;
        gap: 10px;
        .title{

        }
        .description{

        }
    }
    .img-container{
        margin: 0 40px;
        display: flex;
        flex-direction: column;
        img{

        }
    }
}

</style>