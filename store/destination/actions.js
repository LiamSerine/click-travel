import service from './service'

export default {
    loadDestination(state){
        service.getAllDestinations().then((data)=>{
            console.log(data);
            state.commit('setDestinations',data);
        })
    }
}