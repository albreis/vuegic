<template>
  <Vuegic :doc="doc" />
</template>

<script>
import Vuegic from '../src/Vuegic'
export default {
    components: {
        Vuegic
    },
    data() {
        return {
            doc: {
                div: {
                    header: [
                        {
                            img: {
                                attrs: {
                                    src: '//via.placeholder.com/300x100'
                                }
                            }
                        },
                        {h1: 'telskjdsldf'},
                        {
                            img: {
                                attrs: {
                                    src: '//via.placeholder.com/300x100'
                                },
                                events: function() {
                                    return {
                                        mouseover(event) {
                                            console.log(event)
                                        }
                                    }
                                }
                            }
                        },
                    ]
                }
            }
        }
    }
}
</script>

<style>

</style>