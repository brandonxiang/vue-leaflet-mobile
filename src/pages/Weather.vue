<template>
    <div class="nowinfo">
        <div class="now-cityname">{{now.cityName}}</div>
        <div class="now-text">{{now.text}}</div>
        <div class="now-temperature">{{now.temperature}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            now: {
                cityName: 'Shenzhen',
                text: 'Sunny',
                temperature: 20,
            },
        }
    }
}
</script>