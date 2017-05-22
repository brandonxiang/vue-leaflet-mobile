import { makeAction } from '../utils/actionTools'
import * as types from './mutation-types'
import { getNowWeather, getFutureWeather } from '@/api/getWeather'
import { weatherhost, WEATHERKEY, WEATHERUID } from '@/api/api'
import jsonp from '@/api/jsonp'
import { base64 } from 'vux'
const crypto = require('crypto')
import querystring from 'querystring'

export const loadCoordinates = ({ commit }) => { }

export const changeCity = makeAction(types.CHANGE_CITY)

export const deleteCity = makeAction(types.DELETE_CITY)

export const toggleCity = makeAction(types.TOGGLE_CITY)

export const updateDirction = makeAction(types.UPDATE_DIRECTION)

export const loadNowWeather = ({commit}) => {
    getNowWeather({
        key:WEATHERKEY,
        location: 'shenzhen',
        language:'zh-Hans',
        unit:'c',
    }).then((res)=>{
        commit('SET_NOW_WEATHER', res.data.results[0].now)
    })
}

export const loadDailyWeather = ({commit}) => {
    getFutureWeather({
        key:WEATHERKEY,
        location: 'shenzhen',
        language:'zh-Hans',
        unit:'c',
        start:0,
        days:5,
    }).then((res)=>{
        commit('SET_FUTURE_WEATHER', res.data.results[0].daily)
    })
}

// export const loadNowWeather = ({ commit, state }) => {

//     var params = {}
//     params.ts = Math.floor((new Date()).getTime() / 1000); // 当前时间戳
//     params.ttl = 300; // 过期时间
//     params.uid = WEATHERUID; // 用户ID

//     var str = querystring.encode(params); // 构造请求字符串

//     // 使用 HMAC-SHA1 方式，以API密钥（key）对上一步生成的参数字符串进行加密
//     params.sig = crypto.createHmac('sha1', WEATHERKEY)
//         .update(str)
//         .digest('base64'); // 将加密结果用 base64 编码，并做一个 urlencode，得到签名 sig


//     params.language = 'zh-Hans'
//     params.unit = 'c'
//     params.location = state.now.cityName

//     jsonp(weatherhost + '/now.json', params).then((res) => {
//         commit('SET_NOW_WEATHER', res.data.results[0].now)
//     })
// }
// export const loadDailyWeather = ({ commit, state }) => {
//     const params = Object.assign({
//         uid: WEATHERUID,
//         ts: new Date().getTime(),
//         sig: crypto.createHmac("sha1", WEATHERKEY).digest().toString('base64'),
//         language: 'zh-Hans',
//         unit: 'c',
//         start: 0,
//         days: 3
//     }, { location: state.now.cityName })

//     jsonp(weatherhost + '/daily.json', params).then((res) => {
//         commit('SET_FUTURE_WEATHER', res.data.results[0].daily)
//     })
// }
