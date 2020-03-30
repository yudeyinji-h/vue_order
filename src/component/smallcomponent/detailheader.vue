<template>
 <div id="detailheader">
    <div>
        <img @click="goback" src="../../assets/title/leftback.png" alt="">
    </div>
    <div v-text="proname">
        
    </div>
    <div>
        <img src="../../assets/title/l_s.png" alt="">
    </div>
 </div>
</template>
<script>
export default {
    name:"detailheader",
    props:{
        'proname':{
            default:"商家名称"
        }
    },
    methods:{
        goback(){
            this.$router.back();
        }
    }
}
</script>
<style lang='less'>
    #detailheader{
        padding: 0.5rem 1rem;
        background: #fff;
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #e9e7e7;
        div{
            flex: 1;
            img{
                width: 1.2rem;
            }
        }
        div:nth-child(2){
            text-align: center;
            font-size: 0.9rem;
        }
         div:nth-child(3){
            text-align: right;
        }
    }
</style>