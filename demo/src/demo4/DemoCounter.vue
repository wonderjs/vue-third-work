<template>
  <demo-container>
    <div class="counter">
      <counter-button
        :disabled="counterStore.isDecrementDisabled"
        @action="counterStore.decrement"
        >-</counter-button
      >

      <counter-value :value="counterStore.value" />

      <counter-button @action="counterStore.increment">+</counter-button>
    </div>
  </demo-container>
</template>

<script setup>
import CounterButton from './CounterButton.vue';
import CounterValue from './CounterValue.vue';
import DemoContainer from '../components/DemoContainer.vue';

import { useCounterStore } from './store';

const counterStore = useCounterStore();
</script>

<style lang="scss" scoped>
.counter {
  display: flex;
  align-items: center;

  button {
    margin: 0 10px;
    font-size: 1.5rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: none;
    background: #dd0000;
    color: white;
    cursor: pointer;

    &:hover {
      background: #ff0000;
    }
  }
}
</style>
