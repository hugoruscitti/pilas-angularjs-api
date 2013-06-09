var app = angular.module('app', []);

app.controller('APICtrl', function($scope) {
  $scope.modulos_columna_1 = [
    {nombre: 'pilas',
     url: 'https://pilas.readthedocs.org/es/latest/referencia.html#modulo-pilas',
     funciones: [
                  {nombre: 'iniciar',
                   firma: "pilas.iniciar(ancho=640, alto=480, titulo='Pilas', usar_motor='qtgl', rendimiento=60, modo='detectar', gravedad=(0, -90), pantalla_completa=False, permitir_depuracion=True, audio='phonon', centrado=True)",
                   doc: "Inicia la ventana principal y define las opciones iniciales.",
                   ejemplo: 'pilas.iniciar(320, 240)',
                  },

                  {nombre: 'avisar',
                   firma: 'pilas.avisar(mensaje, retraso=5)',
                   doc: "Emite un mensaje en la ventana principal. Este mensaje aparecerá en la parte inferior de la pantalla durante 5 segundos.",
                   ejemplo: 'pilas.avisar("pulse una tecla para continuar")',
                  },

                  {nombre: 'ver',
                   firma: 'pilas.ver(objeto, imprimir=True, retornar=False)',
                   doc: 'Imprime en pantalla el codigo fuente asociado a un objeto.',
                   ejemplo: 'pilas.ver(mono)',
                  },

                  {nombre: 'ejecutar',
                   firma: 'pilas.ejecutar(ignorar_errores=False)',
                   doc: 'Pone en funcionamiento las actualizaciones y dibujado.',
                   ejemplo: 'pilas.ejecutar()',
                  },

                  {nombre: 'cambiar_escena',
                   firma: 'pilas.cambiar_escena(escena)',
                   doc: 'Establece una nueva escena para mostrar.',
                   ejemplo: 'pilas.cambiar_escena(nueva_escena)',
                  },
              ],
    },

    {nombre: 'eventos',
     url: 'https://pilas.readthedocs.org/es/latest/referencia.html#modulo-pilas-evento',
     funciones: [
        {
          nombre: 'introduccion',
          doc: 'Los eventos permiten interactuar con el usuario, atender señales como la pulsación del teclado, el movimiento del mouse etc...',
          ejemplo: 'pilas.eventos.click_de_mouse.conectar(cuando_pulsa_el_mouse)',
        },
        {
          nombre: 'actualizar',
          doc: 'Se invoca regularmente, 60 veces por segundo.',
          ejemplo: 'pilas.eventos.actualizar.conectar(cuando_actualiza)',
        },

        {
          nombre: 'click_de_mouse',
          parametros: {
            x: 'Posición horizontal del mouse.',
            y: 'Posición vertical del mouse.',
            dx: 'Posición horizontal relativa del mouse.',
            dy: 'Posición vertical relativa del mouse.',
            boton: 'Botón del mouse que se pulsó (1 - Izquierdo, 2 - Derecho, 4 - Central)',
          },
          doc: 'Informa ante la pulsación del mouse',
          ejemplo: 'pilas.eventos.click_de_mouse.conectar(cuando_hace_click)',
        },

        {
          nombre: 'log',
          doc: 'Indica que se emitió un mensaje para depuración usando la función pilas.log.',
          ejemplo: 'pilas.eventos.log.conectar(cuando_emite_log)',
        },

        {
          nombre: 'mueve_camara',
          parametros: {
            x: 'Posición horizontal de la cámara.',
            y: 'Posición vertical de la cámara.',
            dx: 'Movimiento relativo horizontal que sufrió la cámara.',
            dy: 'Movimiento relativo vertical que sufrió la cámara.',
          },
          doc: 'Informa que ha cambiado la posición de la cámara.',
          ejemplo: 'pilas.eventos.mueve_camara.conectar(cuando_mueve_camara)',
        },

        {
          nombre: 'mueve_mouse',
          parametros: {
            x: 'Posición horizontal del mouse.',
            y: 'Posición vertical del mouse.',
            dx: 'Posición horizontal relativa del mouse.',
            dy: 'Posición vertical relativa del mouse.',
          },
          doc: 'Informa que la posición del mouse ha cambiado.',
          ejemplo: 'pilas.eventos.mueve_mouse.conectar(cuando_mueve_mouse)',
        },

        {
          nombre: 'mueve_rueda',
          parametros: {
            x: 'Posición horizontal del mouse.',
            y: 'Posición vertical del mouse.',
            dx: 'Posición horizontal relativa del mouse.',
            dy: 'Posición vertical relativa del mouse.',
          },
          doc: 'Indica que cambió la rueda del mouse que se utiliza para desplazamiento o scroll.',
          ejemplo: 'pilas.eventos.mueve_rueda.conectar(cuando_mueve_rueda)',
        },

        {
          nombre: 'pulsa_tecla',
          doc: 'Informa que se ha pulsado una tecla del teclado.',
          parametros: {
            codigo: 'Codigo de la tecla normalizado, por ejemplo "simbolos.m".',
            es_repeticion: 'Indica si el evento surgió por repetición de teclado. False indica que es la primer pulsación.',
            texto: 'Cadena de texto que indica la tecla pulsada, por ejemplo "m".',
          },
          ejemplo: 'pilas.eventos.pulsa_tecla.conectar(cuando_pulsa_tecla)',
        },

        {
          nombre: 'pulsa_tecla_escape',
          doc: 'Indica que se ha pulsado la tecla escape.',
          ejemplo: 'pilas.eventos.pulsa_tecla_escape.conectar(cuando_pulsa_tecla_escape)',
        },

        {
          nombre: 'termina_click',
          doc: 'Informa cuando la pulsación del mouse termina.',
          parametros: {
            x: 'Posición horizontal del mouse.',
            y: 'Posición vertical del mouse.',
            dx: 'Posición horizontal relativa del mouse.',
            dy: 'Posición vertical relativa del mouse.',
            boton: 'Botón del mouse que se pulsó (1 - Izquierdo, 2 - Derecho, 4 - Central)',
          },
          ejemplo: 'pilas.eventos.termina_click.conectar(cuando_termina_click)',
        },
       ]
    },
  ];

  $scope.modulos_columna_2 = [
    {nombre: 'actores',
     url: 'https://pilas.readthedocs.org/es/latest/referencia.html#modulo-pilas-actores',
     funciones: [
        {
          nombre: 'Actor',
          imagen: 'https://pilas.readthedocs.org/es/latest/_images/actor.png',
          doc: 'Representa un objeto visible en pantalla, algo que se ve y tiene posicion.',
          ejemplo: 'protagonista = Actor("protagonista_de_frente.png")',
          atributos: {
            abajo: 'Establece el espacio entre la parte inferior del actor y el centro de coordenadas del mundo.',
            actor_mas_cercano: 'Retorna otro actor mas cercano a este actor',
            actualizar: 'Este metodo se llama una vez por frame, y generalmente se suele usar para implementar el comportamiento del actor.',
            alto: 'Obtiene el alto del Actor.',
            ancho: 'Obtiene el ancho del Actor.',
            arriba: 'Establece el espacio entre la parte superior del actor y el centro de coordenadas del mundo.',
            centro: 'Cambia la posición del punto (x, y) dentro de actor.',
            derecha: 'Establece el espacio entre la derecha del actor y el centro de coordenadas del mundo.',
          }
        },

        {
          nombre: 'Mono',
          imagen: 'https://pilas.readthedocs.org/es/latest/_images/mono.png',
          doc: 'Representa la cara de un mono de color marrón.',
          ejemplo: 'mono = pilas.actores.Mono()',
        },

        {
          nombre: 'Ejes',
          doc: 'Representa el eje de coordenadas tomado como referencia',
          ejemplo: 'eje = pilas.actores.Eje()',
        },

        {
          nombre: 'Animado',
          imagen: 'https://pilas.readthedocs.org/es/latest/_images/pingu1.png',
          doc: 'Representa un actor que tiene asociada una grilla con cuadros de animacion.',
          ejemplo: 'actor = pilas.actores.Animado(grilla)',
        },

        {
          nombre: 'Animacion',
          imagen: 'https://pilas.readthedocs.org/es/latest/_images/explosion.png',
          doc: 'Representa una animacion de una grilla de imagenes.',
          ejemplo: 'actor = pilas.actores.Animacion(grilla, ciclica=True, velocidad=1)',
        },



     ]
    },
  ];


  $scope.columnas = [$scope.modulos_columna_1, $scope.modulos_columna_2];

});
