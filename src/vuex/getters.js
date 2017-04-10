export default {
    selectedCities: (state) => state.cities.filter(city => state.selectedNames.indexOf(city.name) >= 0),
}