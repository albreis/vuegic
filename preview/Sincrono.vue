<template>
    <Vuegic :doc="doc" />
</template>
<script>
/* eslint-disable */
import Vuegic from '@ersolucoesweb/vuegic'
// import Vuegic from '../src/Vuegic'
import axios from 'axios'
export default {
    components: {
        Vuegic
    },
    data() {
        return {
            doc: {
                div: {
                    img: {
                        attrs: {
                            src: '//via.placeholder.com/300x50'
                        }
                    },
                    header: (root) => {
                        console.log(root)
                        var imgs = []
                        for(let i in [1,2,3,4,5]) {
                            imgs.push({
                                img: {
                                    attrs: {
                                        src: '//via.placeholder.com/300x50'
                                    },
                                    events: {
                                        mouseenter(event) {
                                            event.currentTarget.style.transform = 'scale(0.7)'
                                        },
                                        mouseleave(event) {
                                            event.currentTarget.style.transform = 'scale(1)'
                                        },
                                    }
                                }
                            })
                        }
                        return imgs
                    }
                }
            }
        }
    }
}
</script>