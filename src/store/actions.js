import {makeAction} from '../utils/actionTools'
import * as types from './mutation-types'
import Vue from 'vue'

export default {
    loadCoordinates({commit}){
        Vue.$http.get()
    },
    changeCity: makeAction(types.CHANGE_CITY),
    deleteCity: makeAction(types.DELETE_CITY),
    toggleCity: makeAction(types.TOGGLE_CITY),
    updateDirction: makeAction(types.UPDATE_DIRECTION),
}
