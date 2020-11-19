import service from './service'
import api from '../../service/api.js';

export default {
    loadDestination(state){
        service.getAllDestinations().then((data)=>{
            console.log(data);
            state.commit('setDestinations',data);
        })
    },
    loadTicket(state,code){
        new Promise((resolve, reject) => {
            console.log("yo " + code)
            api.get('/tickets',{params:{filter:{offset:0,limit:100,skip:0,where: {to: code}}}})
            .then(response => {   
                console.log(response.data);
                state.commit('setTickets',response.data);
            })
            .catch(error => console.log(error))
        });
    }
}