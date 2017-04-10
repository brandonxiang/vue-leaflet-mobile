export default {
    selectedCities: (state) => state.cities.filter(city => state.selectedNames.includes(city.name)),
}