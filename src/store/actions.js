import {makeAction} from '../utils/actionTools'
import * as types from './mutation-types'
import Vue from 'vue'

export const loadCoordinates =  ({commit})=> {}

export const changeCity =  makeAction(types.CHANGE_CITY)

export const deleteCity = makeAction(types.DELETE_CITY)

export const toggleCity = makeAction(types.TOGGLE_CITY)

export const updateDirction = makeAction(types.UPDATE_DIRECTION)
