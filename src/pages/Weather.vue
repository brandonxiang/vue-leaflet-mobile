<template>
    <div class="container">
        <div class="nowinfo">
            <div class="now-cityname">{{now.cityName}}</div>
            <div class="now-text">{{now.text}}</div>
            <div class="now-temperature">{{now.temperature}}</div>
        </div>
        <div class="futureinfo">
            <div class="vux-1px-t vux-1px-b future-box" v-for="item in future">
                <span class="future-text">{{item.day}}</span>
                <span class="future-text">日</span>
                <img class="future-img" :src="require(`../assets/weather/${item.codeDay}.png`)">
                <span class="future-text">夜</span>
                <img class="future-img" :src="require(`../assets/weather/${item.codeNight}.png`)">
                <span class="future-text">{{item.high}}</span>
                <span class="future-text">{{item.low}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    data() {
        return {
            now: {
                cityName: 'Shenzhen',
                text: 'Sunny',
                temperature: 20,
            },
            future: [
                {
                    day: '今日',
                    codeDay: '1',
                    codeNight: '2',
                    high: 25,
                    low: 20,
                },
                {
                    day: '明天',
                    codeDay: '1',
                    codeNight: '2',
                    high: 25,
                    low: 20,
                },
                {
                    day: '后天',
                    codeDay: '1',
                    codeNight: '2',
                    high: 25,
                    low: 20,
                },
            ]
        }
    },

    mounted() {
        this.SET_TITLE('天气')
        this.SET_RIGHT_OPTION({show:true,name:'城市',link:'cities'})
    },

    methods: {
        ...mapMutations(['SET_TITLE','SET_RIGHT_OPTION'])
    }
}
</script>

<style>
.container {
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
}

.nowinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
}

.now-cityname {
    font-size: 30px;
}

.now-temperature {
    padding-top: 15px;
    font-size: 50px;
}

.future-box {
    display: flex;
    justify-content: space-between;
}

.future-text {
    padding: 10px;
}

.future-img {
    width: 40px;
    height: 40px;
}
</style>