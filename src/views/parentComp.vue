<template>
    <div>
        <ChildComp :msg="greeting">
            Message du :{{ message }}
        </ChildComp>
        <FirstComponents  @response="(msg) => childMsg = msg"/>
        <p>{{ childMsg }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import ChildComp from './ChildComp.vue'
import FirstComponents from './FirstComponents.vue';

const greeting = ref('Hello from parent')
const childMsg = ref('No child msg yet')
const message = ref('du parent')
</script>
