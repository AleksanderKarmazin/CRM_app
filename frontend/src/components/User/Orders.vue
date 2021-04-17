<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-list subheader two-line flat>
          <!-- <v-subheader>Hangout notifications</v-subheader> -->
         <h1 class="text--secondary text-center">Orders</h1>
          <v-list-item-group>
            <v-list-item 
            v-for="order in orders"
            :key="order.id"
            >
              <template>
                <v-list-item-action>
                  <v-checkbox
                  color="success"
                  :input-value="order.done"
                  @change="markDone(order)"
                  ></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{order.name}}</v-list-item-title>
                  <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-btn 

                  :to="'/ad/' + order.adId"
                  class="primary" 
                  @click="openBtn"
                  
                  >OPEN</v-btn>
                </v-list-item-action>

              </template>
            </v-list-item>

          </v-list-item-group>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {

        orders: [
            {
                id: '1',
                name: 'Vladilen',
                phone: '45784597650697',
                adId: '156',
                done: false
            },
            {
                id: '12',
                name: 'Vlad',
                phone: '45784597650697',
                adId: '156',
                done: false
            },
            {
                id: '13',
                name: 'Vla',
                phone: '45784597650697',
                adId: '156',
                done: false
            },
            {
                id: '14',
                name: 'Kostiya',
                phone: '45784597650697',
                adId: '156',
                done: false
            }

        ]
    };
  },
  methods: {
      markDone (order) {
          // Здесь будем отправлять запрос на сервер где будем говорить что выполнели заказ 
        console.log("Чек бокс нажат")
        order.done = false
        // if(order.done === true){
        //     order.done = false
        //     console.log("MADE order.done  = false ", order)
        // } else{
        //     order.done = true
        //     console.log("MADE order.done  = true ", order)
        // };

      },
      openBtn () {
          console.log("Нажата кнопка 'Open' ")
      }

  }
};
</script>

<style></style>
