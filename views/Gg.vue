<template>
    <div class="gg">
        <img src="../assets/timg.jpg">
        <h1>{{num}}</h1>
    </div>
</template>
<script>
export default {
    data(){
        return{
            num:3,
            timer:null
        }
    },
    created(){
        this.timer=setInterval(()=>{
                this.num--
                if(this.num==0){
                    this.$router.push("/home")
                }
            },1000)
    },
    beforeDestroy() {
        clearInterval(this.timer)
    },
}
</script>
<style lang="less" scoped>
.gg{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 8888;
    text-align: center;
    background-color: #fff;
    img{
        width: 100%;
        height: 100%;
    }
    h1{
        position: absolute;
        bottom: 8%;
        left: 50%;
        color: #fff;
        font-size: 50px;
        z-index: 8889;
    }
}
</style>
