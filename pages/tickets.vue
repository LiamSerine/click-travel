<template>
  <div class="container">
    <div class="toolbar">
      <Logo />
    </div>
    <div class="content">
      <div>
        <h1 class="title">Choose your dream destination...</h1>
        <div class="links">
            <li class="giant-button" v-for="value in tickets" :key="value.flight" @click="selectTicket(value)">
                <a>{{ value.class }} - {{ value.from }} - {{ value.to }}  </a>                              
            </li>
        </div>
      </div>
      <div v-if="selectedTicket != null" class="Ticket" style="height:500px; width: 1000px;">
          <div style="height:100px; width: 1000px; background-color: #5dbcd2;">              
              <h3 style="opacity: 0.50">{{selectedTicket.flight}}</h3>
              <br/>
              <h2>{{selectedTicket.class}}</h2>
          </div>
          <div style="height:350px; width: 1000px; background-color: white;">
              <h2>
                  Passenger  : {{selectedTicket.passenger}}
                  <br/>
                  <br/>
                  FROM  : {{selectedTicket.from}}
                  <br/>
                  TO : {{selectedTicket.to}}
                  <br/>
                  <br/>
                  CLASS : {{selectedTicket.class}} 
                  <br/>
                  GATE : {{selectedTicket.gate}}  
                  <br/>
                  TIME : {{selectedTicket.time}}   
                  <br/>
                  SEAT : {{selectedTicket.seat}}
              </h2>
          </div>
          <div style="height:50px; width: 1000px; background-color: #5dbcd2;"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { vue } from "vue";
import { mapGetters, mapActions } from "vuex";
export default {

  data() {
    return {
      selectedTicket: null
    }
  },
    computed: {
        ...mapGetters({
            tickets: "destination/getTicket",
    }),
  },
    methods: {
    selectTicket: function(ticket)
    {
      this.selectedTicket = ticket;
      console.log(this.selectedTicket);
    },
    ...mapActions({
      loadTicket: "destination/loadTicket"
    }),
  },
    mounted() {
    this.loadTicket(this.$route.params.code);    
  }
  
  
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.toolbar {
  height: 80px;
  background-color: #35495e;
  align-self: flex-start;
  width: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-image: url('~assets/airplane.jpg');
  background-size: cover;
}

.title {
  font-weight: 500;
  font-size: 58px;
  color: #fff;
  letter-spacing: 1px;
  text-shadow: 1px 1px 4px #000;
  text-align: center;
}

.links {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  & > * {
    margin: 5px;
  }
}
</style>
