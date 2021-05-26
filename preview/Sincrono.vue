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
                    style: `
                        .img1{border:4px solid red;}
                        .img2{border:4px solid blue;}
                    `,
                    img: {
                        attrs: {
                            class: 'img1',
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
                                        class: 'img2',
                                        src: '//via.placeholder.com/300x50'
                                    },
                                    events: () => {
                                        return {
                                            mouseenter(event) {
                                                event.currentTarget.style.transform = 'scale(1.1)'
                                                event.currentTarget.style.position = 'relative'
                                                event.currentTarget.style.zIndex = '9'
                                                event.currentTarget.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)'
                                            },
                                            mouseleave(event) {
                                                event.currentTarget.style.transform = 'scale(1)'
                                                event.currentTarget.style.zIndex = '1'
                                                event.currentTarget.style.boxShadow = 'none'
                                            }
                                        }
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