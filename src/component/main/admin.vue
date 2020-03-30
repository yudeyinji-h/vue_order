<template>
 <div id="admin">
      <router-view></router-view>
      <footer-nav></footer-nav>
 </div>
</template>
<script>
import footermenu from '../smallcomponent/footer'
export default {
    name:"admin",
    components:{
        "footer-nav":footermenu
    }
}
</script>
<style lang='less'>
</style>