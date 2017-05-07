export const selectedCities =  (state) => state.cities.filter(city => state.selectedNames.includes(city.name))

export const title = state => state.title

export const direction = state => state.direction

export const center = state => state.center

export const cityName = state => state.cityName