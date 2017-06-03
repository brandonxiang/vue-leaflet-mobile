import mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'

const state = {
  header: {
    title: '地图',
    rightOption: {
      show: true,
      name: '城市',
      link: 'cities',
    },
    leftOption: {}
  },

  direction: 'forward',

  mapCityName: 'Shenzhen',

  selectedNames: ['Shenzhen', 'Beijing', 'Shanghai'],

  cities: [
    { name: 'Shenzhen', coordinates: [22.5455537937, 114.0544373601] },
    { name: 'Beijing', coordinates: [39.9032724643, 116.4009203787] },
    { name: 'Shanghai', coordinates: [31.2323076784, 121.4691562490] },
    { name: 'Guangzhou', coordinates: [23.1317346641, 113.2590285241] },
    { name: 'Hangzhou', coordinates: [30.2764554112, 120.1504383337] },
    { name: 'Xiamen', coordinates: [24.4822103305, 118.0844769942] },
    { name: 'Haerbin', coordinates: [45.8001578452, 126.5297346860] },
    { name: 'Xian', coordinates: [34.3427473471, 108.9351962803] },
    { name: 'Wuhan', coordinates: [30.5951668577, 114.2998018195] }
  ],

  now: {
    cityName: 'Shenzhen',
    text: 'Sunny',
    temperature: 20,
    code: '14',
  },
  future: [
    {
      day: '今日',
      date: '2017-05-13',
      code_day: '1',
      code_night: '2',
      high: 25,
      low: 20,
    },
    {
      day: '明天',
      date: '"2017-05-14"',
      code_day: '1',
      code_night: '2',
      high: 25,
      low: 20,
    },
    {
      day: '后天',
      date: '"2017-05-15"',
      code_day: '1',
      code_night: '2',
      high: 25,
      low: 20,
    },
  ]
};

export default {
  state,
  mutations,
  getters,
  actions,
};
