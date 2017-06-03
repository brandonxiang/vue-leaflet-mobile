export const title = state => state.header.title|| ''

export const rightOption = state => state.header.rightOption || {show: false }

export const leftOption = state => state.header.leftOption || {showBack: false}

export const direction = state => state.direction

export const cityName = state => state.mapCityName

export const center = state => state.cities.filter(x=>x.name === state.mapCityName)[0].coordinates

export const selectedCities =  state => state.cities.filter(city => state.selectedNames.includes(city.name))

export const cities = state => state.cities

export const now = state => state.now

export const future = state => state.future