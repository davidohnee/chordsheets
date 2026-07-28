<script setup lang="ts">
defineProps({
    modelValue: {
        required: true,
        type: String
    },
    label: {
        required: false,
        type: String
    },
    options: {
        required: true,
        type: Array as () => readonly string[]
    }
});

const emit = defineEmits(["update:modelValue"]);

const emitInput = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    emit("update:modelValue", value);
};
</script>
<template>
    <div class="input">
        <label
            v-if="label"
            for="dropdown"
            >{{ label }}</label
        >
        <select
            :value="modelValue"
            @input="emitInput"
            class="dropdown"
            id="dropdown"
        >
            <option
                v-for="option in options"
                :key="option"
                :value="option"
            >
                {{ option }}
            </option>
        </select>
    </div>
</template>

<style scoped>
.input {
    display: flex;
    flex-direction: column;
    height: 100%;
}

h2 {
    margin: 0;
    margin-bottom: 0.5em;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

select {
    background: none;
    border: 1px solid var(--color-border);
    border-radius: 0.5em;
    padding: 0.5em;
    height: 100%;
    color: var(--color-text);
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1rem;

    &:focus {
        outline: none;
        border-color: #d2d2d2;
    }
}

option {
    background: var(--color-background);
    color: var(--color-text);
}
</style>
