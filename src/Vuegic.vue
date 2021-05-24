<template>
    <CustomTag :tag="doc" />
</template>

<script>
import CustomTag from './Tag.vue'
export default {
    components: {
        CustomTag
    },
    props: {
        doc: {required: true}
    }
}
</script>