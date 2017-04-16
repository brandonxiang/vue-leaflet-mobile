<template>
    <flexbox :gutter="0"
             wrap="wrap">
        <flexbox-item :span="1/4"
                      v-for="city in cities">
            <div v-bind="city"
                      :class="selectedNames.includes(city.name)?'selector active':'selector'"
                      @click="TOGGLE_CITY(city.name)">{{$t(city.name)}}</div>
        </flexbox-item>
    </flexbox>
</template>

<script>
import { Flexbox, FlexboxItem, XButton } from 'vux'
import { mapState, mapMutations } from 'vuex'

export default {
    components: {
        Flexbox,
        FlexboxItem,
        XButton
    },
    computed: {
        ...mapState({
            cities: state => state.app.cities,
            selectedNames: state => state.app.selectedNames,
        }),
    },
    methods: {
        ...mapMutations([
            'TOGGLE_CITY',
        ]),
        toggleCity(item) {
            this.TOGGLE_CITY(item)
        }
    }
}
</script>

<style>
.selector {
    text-align: center;
    border: 1px solid #e5e5e5;
    margin: 0.5rem 0.5rem;
    padding: 0.5rem;
    border-radius: 1rem;
}

.active {
    border: 1px solid #4078C0;
}
</style>