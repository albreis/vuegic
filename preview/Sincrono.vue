<template>
  <Vuegic :doc="doc" />
</template>
<script>
/* eslint-disable */
// import Vuegic from '@ersolucoesweb/vuegic'
import Vuegic from '../src/Vuegic'
import axios from 'axios'
export default {
    components: {
        Vuegic
    },
    data() {
        return {
            doc: {
                table: {
                    attrs: {
                        width: '100%'
                    },
                    thead: {
                        tr: [
                            {td: [{b: 'asdasda'}]},
                            {td: 'Sigla'}
                        ]
                    },
                    tbody: (component) => {
                        var request = new XMLHttpRequest();
                        request.open('GET', 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome', false);
                        request.send(null);
                        if (request.status === 200) {
                            var res = JSON.parse(request.responseText);
                        }
                        let rows = []
                        let i;
                        for(i in res) {
                            rows.push({
                                tr: [
                                    {
                                        td: {
                                            strong: {
                                                text: `[${res[i].regiao.sigla}]`, 
                                                attrs: {
                                                    style: {
                                                        width: '50px', 
                                                        display: 'inline-block',
                                                        color: '#000'
                                                    }
                                                }
                                            }, 
                                            text: res[i].nome, 
                                            attrs: {
                                                style: 'color:red'
                                            }
                                        }
                                    }, 
                                    {td: res[i].sigla}
                                ]
                            })
                        }
                        return rows
                    }
                }
            }
        }
    }
}
</script>