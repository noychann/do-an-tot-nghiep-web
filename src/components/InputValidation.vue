<script setup>
import { toRef } from "vue";
import { useField } from "vee-validate";
import { replaceStringInput, stringWithoutAccents } from "@/utils";

const props = defineProps({
  name: {
    type: String,
    required: true,
    default: "",
  },
  inputProps: {
    type: Object,
    required: false,
    default: () => {},
  },
  inputType: {
    type: String,
    required: false,
    default: "text",
    validator: (value) => {
      return ["text", "password", "number", "phone"].includes(value);
    },
  },
  inputClass: {
    type: String,
    required: false,
    default: "",
  },
  value: {
    type: null,
    required: false,
    default: "",
  },
  disabledCopy: {
    type: Boolean,
    required: false,
    default: true,
  },
  labelMessage: {
    type: String,
    required: false,
    default: "",
  },
  disableLabel: {
    type: String,
    required: false,
    default: "",
  },
  icon: {
    type: String,
    required: false,
    default: "",
  },
});

const emits = defineEmits(["input"]);

const name = toRef(props, "name");

const {
  value: inputValue,
  errorMessage,
  handleChange,
} = useField(name, undefined, {
  initialValue: props.value,
});

const onDisableCopyPaste = (e) => {
  props.disabledCopy && e.preventDefault();
};

const onInput = (e) => {
  switch (props.inputType) {
    case "number":
    case "phone": {
      let str = replaceStringInput(e.target.value);

      e.target.value = str;

      inputValue.value = str;

      emits("input", e);
      break;
    }

    case "password": {
      let str = stringWithoutAccents(e.target.value);

      str = str.replace(/\s/g, "");

      e.target.value = str;

      inputValue.value = str;

      emits("input", e);

      break;
    }

    default:
      emits("input", e);
      break;
  }
};
</script>

<template>
  <div class="input-custom w-full">
    <span
      class="form-group"
      :class="['w-full', icon ? 'p-input-icon-left' : '']"
    >
      <i v-if="icon" :class="['text-xl', icon]" style="z-index: 10" />

      <!--    :input-class="['input', inputClass, icon ? 'pl-6' : '']" -->
      <Password
        v-if="inputType === 'password'"
        v-model="inputValue"
        v-bind="{ ...inputProps, ...$attrs }"
        :toggleMask="true"
        :name="name"
        :inputProps="{ maxlength: 50, autocomplete: 'off' }"
        :input-class="inputClass"
        :input-style="{ 'z-index': 1, background: 'transparent' }"
        class="w-full"
        :class="{ 'p-invalid': errorMessage }"
        @input="onInput"
        @cut="onDisableCopyPaste"
        @copy="onDisableCopyPaste"
        @change="handleChange"
      />

      <InputText
        v-else
        v-bind="{ ...inputProps, ...$attrs }"
        v-model.trim="inputValue"
        :name="name"
        :class="[
          'input',
          inputClass,
          icon ? 'pl-6' : '',
          errorMessage ? 'p-invalid' : '',
        ]"
        required="required"
        @input="onInput"
        @cut="onDisableCopyPaste"
        @copy="onDisableCopyPaste"
      />

      <label
        style="z-index: 0"
        v-if="disableLabel === 'asterisk' && !inputValue"
        >{{ labelMessage }}</label
      >
    </span>

    <small class="w-full p-error" v-show="errorMessage">
      {{ errorMessage }}
    </small>
  </div>
</template>

<style lang="scss" scoped>
:deep(.input) {
  font-size: 1rem;
  border-radius: 1rem;
  padding-left: 1rem;
}

:deep(.p-input-icon-left) {
  i {
    left: 1.1rem;
    margin-top: -0.54rem;
    color: #000;
  }
}

.form-group {
  position: relative;
}
.form-group input {
  position: relative;
  z-index: 9;
  background: transparent;
}
.form-group label {
  position: absolute;
  z-index: 1;
  align-items: center;
  top: 0px;
  left: 17px;
  color: gray;
}
.form-group label::after {
  content: " *";
  color: red;
}
input[required]:valid + label {
  display: none;
}

input:disabled {
  background: #f5f5f5;
  border: 1px solid #d0d0d0;
}
</style>
