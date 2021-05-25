<template>
  <Vuegic :doc="doc" />
</template>
<script>
/* eslint-disable */
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
                            {td: 'Nome'},
                            {td: 'Sigla'}
                        ]
                    },
                    tbody: async (component) => {
                        console.log(component)
                        let res = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
                        let rows = []
                        let i;
                        for(i in res.data) {
                            rows.push({
                                tr: [
                                    {td: res.data[i].nome}, 
                                    {td: res.data[i].sigla}
                                ]
                            })
                        }
                        component.tag.table.tbody = rows
                    }
                }
            }
        }
    }
}
</script>