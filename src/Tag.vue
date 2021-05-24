<template>
    <customTag2 :is="tagName" v-if="tag" v-bind="getAttrs(tag[tagName])" v-on="getEvents(tag[tagName])">
        <template v-if="checkIsArray(tag[tagName])">
            <template  v-for="(t, k) in getTags(tag[tagName])">
                <CustomTag v-if="t && isValidTag(getTag(t), t)" :key="k" :tag="parse(t, {parent: tag})" />
                <template v-else-if="typeof t == 'string'">{{parse(t, {tag})}}</template>
                <template v-else>{{parse(t[getTag(t)], {tag})}}</template>
            </template>
        </template>
        <template v-else-if="typeof tag[tagName] == 'object'">
            <template  v-for="(t, k) in getTags(tag[tagName])">
                <CustomTag v-if="t && isValidTag(k, t)" :key="k" :tag="{[k]: parse(t, {parent: tag})}" />
                <template v-else-if="typeof t == 'string'">{{parse(t, {tag})}}</template>
                <template v-else>{{parse(t[getTag(t)], {tag})}}</template>
            </template>
        </template>
        <template v-else-if="typeof tag[tagName] == 'string'">{{parse(tag[tagName], {tag})}}</template>
        <template v-else>{{parse(tag, {tag})}}</template>
    </customTag2>
</template>

<script>
import CustomTag from './Tag.vue';
export default {
    name: 'CustomTag',
    props: {
        tag: {}
    },
    components: {
        CustomTag: CustomTag,
        customTag2: {
            props: {
                tag: String
            },
            functional: true,
            render(h, context) {
                return h(context.props.tag, context.props, context.props.content);
            }
        }
    },
    computed: {
        tagName() {
            return this.getTag(this.tag)
        }
    },
    methods: {
        checkIsArray(config){
            return Array.isArray(config)
        },
        isValidTag(tag, config) {
            if(Array.isArray(config[tag])) {
                return false
            }
            if(isNaN(tag) == false) {
                return false
            }
            return document.createElement(tag).toString() != "[object HTMLUnknownElement]";
        },
        parse(input, params) {
            if(typeof input == 'function') {
                return input(params)
            }
            return input
        },
        getTag(tag) {
            return Object.keys(tag)[0]
        },
        getTags(config) {
            let conf = Object.assign({}, config)
            delete conf.attrs
            delete conf.events
            return this.parse(conf, {parent: this.tag})
        },
        getAttrs(config) {
            return this.parse(config.attrs, {parent: this.tag})
        },
        getEvents(config) {
            return this.parse(config.events, {parent: this.tag})
        }
    }
}
</script>

<style>

</style>