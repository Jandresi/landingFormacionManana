const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const numberRegex = /^[0-9]+$/;

iniciarGrafico();

function submitContacto(event) {
    event.preventDefault();

    const {nombreTutor, email, celular, curso} = event.target;

    const errores = [];

    if(nombreTutor.value.trim().split(' ').length < 2) errores.push('• Debe ingresar un nombre y un apellido.');
    if(!email.value && !celular.value) errores.push('Debe introducir un correo electrónico o número de celular para ser contactado');
    if(email.value && !emailRegex.test(email.value)) errores.push('• Debe ingresar un correo electrónico válido.');
    if(celular.value && !numberRegex.test(celular.value)) errores.push('• Debe ingresar un número de celular válido.');
    if(!curso.value) errores.push('• Debe seleccionar un curso o espacio de formación.');

    if(errores.length) alert(errores.join('\n'));
    else {
        const celularContacto = celular.value ? ' celular ' + celular.value : '';
        const emailContacto = email.value ? ' correo ' + email.value : '';
        const concat = celularContacto&&emailContacto ? ' y al' : '';
        alert('Un asesor se pondrá en contacto al' + celularContacto + concat + emailContacto);

        nombreTutor.value = '';
        email.value = '';
        celular.value = '';
        curso.value = '';
    }
}

function iniciarGrafico() {
    const ctx = document.getElementById('chartEspecializaciones');

    const dataGrafico = {
        labels: [
            'Sistemas',
            'Dibujo técnico',
            'Electrónica',
            'Contabilidad',
        ],
        datasets: [{
            label: 'Estudiantes',
            data: [681, 268, 342, 223],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(108, 28, 86)',
            ],
            hoverOffset: 4
        }]
    };
    new Chart(ctx, {
        type: 'doughnut',
        data: dataGrafico,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            responsive: false,
        }
    });
}