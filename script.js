const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const letters =
        'アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const fontSize = 14;

    let columns = Math.floor(canvas.width / fontSize);

    let drops = Array(columns).fill(1);


    function draw() {

        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        ctx.fillStyle = '#0F0';

        ctx.font = `${fontSize}px monospace`;


        drops.forEach((y, i) => {

            const text =
                letters[
                    Math.floor(
                        Math.random() * letters.length
                    )
                ];

            const x = i * fontSize;

            ctx.fillText(
                text,
                x,
                y * fontSize
            );


            if (
                y * fontSize > canvas.height &&
                Math.random() > 0.975
            ) {

                drops[i] = 0;

            } else {

                drops[i]++;

            }

        });

    }


    setInterval(draw, 33);


    /* Ajustar Matrix al cambiar tamaño de ventana */

    window.addEventListener('resize', () => {

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        columns = Math.floor(
            canvas.width / fontSize
        );

        drops = Array(columns).fill(1);

    });

let juegoActual = '';
    let precioActual = '';


    function comprarJuego(nombre, precio) {

        juegoActual = nombre;

        precioActual = precio;


        document.getElementById(
            'juegoSeleccionado'
        ).textContent =
            `Juego: ${nombre}`;


        document.getElementById(
            'precioJuego'
        ).textContent =
            `Precio: $${precio}`;


        const modal =
            new bootstrap.Modal(
                document.getElementById('modalCompra')
            );


        modal.show();

    }


    function confirmarCompra() {

        const metodo =
            document.getElementById(
                'metodoPago'
            ).value;


        alert(
            `¡Gracias por comprar "${juegoActual}"!\n` +
            `Método de pago seleccionado: ${metodo.toUpperCase()}\n` +
            `Precio: $${precioActual}`
        );


        const modal =
            bootstrap.Modal.getInstance(
                document.getElementById('modalCompra')
            );


        modal.hide();

    }
