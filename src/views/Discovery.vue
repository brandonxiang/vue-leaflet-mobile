<template>
  <panel header="我的博客" :footer="footer" :list="list" :type="type"></panel>
</template>

<script>
    import { mapMutations } from 'vuex'
    import axios from 'axios'
   import {Panel} from 'vux'
    
    export default {
        components:{
            Panel,
        },

        data(){
            return {
                type:'1',
                list: [],
                footer: {
                    title: '查看更多',
                    url: 'http://www.jianshu.com/u/64467c788eb7'
                }
            }
        },

        created(){
            axios.get('./static/blog.json').then((res)=>{
                this.list = res.data
            })
        },

        mounted() {
            this.SET_TITLE(this.$t('Discovery'))
            this.SET_RIGHT_OPTION({show:false})
        },

        methods: {
            ...mapMutations(['SET_TITLE','SET_RIGHT_OPTION'])
        }
    }
</script>
