# Vuegic

Componente para gerar páginas HTML a partir de um objeto Javascript usando VueJS.

## Exemplo

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Vuegic</title>
    <script src="//unpkg.com/vue"></script>
    <script src="//unpkg.com/@ersolucoesweb/vuegic"></script>
</head>
<body>
    <div id="app">
        <Vuegic :doc="doc" />
    </div>
    <script>
        new Vue({
            el: "#app",
            components: {
            Vuegic: Vuegic.default
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
    })
    </script>
</body>
</html>
```

Veja o exemplo funcionando em:

https://jsfiddle.net/ersolucoesweb/nwep9k6g/
