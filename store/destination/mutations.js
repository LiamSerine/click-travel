export default {
    setDestinations(state, destinations) {
        state.destinations.splice(0, state.destinations.length);
        state.destinations.push(...destinations);
    },
    setTickets(state, tickets) {
        state.tickets.splice(0, state.tickets.length);
        state.tickets.push(...tickets);
    }
}