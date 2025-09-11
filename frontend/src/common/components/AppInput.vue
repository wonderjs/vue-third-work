<template>
  <div class="text-field">
    <input
      v-model="input"
      :type="type"
      :name="name"
      class="text-field__input"
      :class="{ 'text-field__input--error': showError }"
      :placeholder="placeholder"
      :required="required"
    />
    <span v-if="showError" class="text-field__text">
      {{ errorText }}
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  errorText: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const input = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

const showError = computed(() => {
  return !!props.errorText;
});
</script>

<style lang="scss" scoped>
@use '@/assets/scss/ds-system/ds-colors';
@use '@/assets/scss/ds-system/ds-typography';

.text-field {
  position: relative;

  &__input {
    display: block;

    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 12px 16px;

    color: ds-colors.$gray-900;
    border: 1px solid ds-colors.$white-800;
    border-radius: 6px;

    &--error {
      border-color: ds-colors.$red-600;
    }

    &:focus {
      border-color: ds-colors.$blue-600;
    }
  }

  &__text {
    position: absolute;
    bottom: -12px;
    left: 0;

    color: ds-colors.$red-600;

    @include ds-typography.r-s10-h12;
  }
}
</style>
