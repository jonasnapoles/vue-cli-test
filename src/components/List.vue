<template>
    <div>
        <ul class="list-group">
            <li v-for="(item, index) of orderedArry" :key="item.id" @click="increase(index)"
            class="list-group-item d-flex justify-content-between align-items-center">
                {{index}} - {{item.name}}
                <span class="badge bg-primary badge-pill">{{item.amount}}</span>
            </li>
        </ul>
        <button class="btn btn-danger btn-block" @click="reboot" >Reboot</button>
    </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex';

export default {
    name: 'List',
    computed:{
        ...mapState(['fruits']),
        orderedArry(){
             /* This arranges the objects in descending order */
            return this.fruits.sort((a, b) => b.amount - a.amount )
        }
    },
    methods: {
        ...mapMutations(['increase', 'reboot'])
    },

}
</script>