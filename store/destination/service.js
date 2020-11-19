import api from '../../service/api.js';

export default {
    getAllDestinations(){
        return new Promise((resolve, reject) => {
        api.get('/destinations',{params:{filter:{offset:0,limit:100,skip:0,where: {isDreamDestination: true}}}})
            .then(response => {                
                resolve(response.data);
            })
            .catch(error => console.log(error))
        });
    }
}