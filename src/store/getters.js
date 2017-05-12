export const title = state => state.title

export const direction = state => state.direction

export const cityName = state => state.map.cityName

export const center = state => state.map.coordinate

export const selectedCities =  (state) => state.cities.filter(city => state.map.selectedNames.includes(city.name))

export const cities = state => state.cities

export const rightOption = state => state.rightOption

export const now = state => state.now

export const future = state => state.future