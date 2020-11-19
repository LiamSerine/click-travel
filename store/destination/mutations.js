export default {
    setDestinations(state, destinations) {
        state.destinations.splice(0, state.destinations.length);
        state.destinations.push(...destinations);
    }
}