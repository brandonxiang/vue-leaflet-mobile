<template>
    <div>
        <blur :blur-amount=40 :url="headImg">
            <p class="center headpart"><img :src="headImg"></p>
        </blur>
        <group>
            <cell :title="$t('Name')" value="项伟平"></cell>
            <cell :title="$t('Jianshu')" value="brandonxiang" link="http://www.jianshu.com/u/64467c788eb7" is-link></cell>
            <cell :title="$t('Weibo')" value="一久肆叁" link="http://weibo.com/xwpisme" is-link></cell>
            <cell :title="$t('Zhihu')" value="项伟平" link="https://www.zhihu.com/people/xiang-wei-ping" is-link></cell>
            <cell title="QQ" value="1542453460"></cell>
            <cell :title="$t('Wechat')" value="brandonxiang"></cell>
            <cell title="Github" value="brandonxiang" link="https://github.com/brandonxiang" is-link></cell>
            <cell :title="$t('WOA')">
                <img class="center padding" :src="QrImg">
            </cell>
        </group>
    </div>
</template>

<script>
import {Qrcode,Blur,Group,Cell} from 'vux'

export default {
    components:{
        Qrcode,
        Blur,
        Group,
        Cell,
    },
    data() {
        return {
            headImg: require("../assets/headpart.jpg"),
            QrImg: require("../assets/qrcode.jpg"),
        }
    }
}
</script>

<style>

</style>