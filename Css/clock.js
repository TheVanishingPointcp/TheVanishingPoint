function actualizarReloj () {
	const reloj = document.getElementById('reloj');
	const horaActual = new Date();

	const horas = horaActual.getHours().toString().padStart(2, '0');
	const minutos = horaActual.getMinutes().toString().padStart(2, '0');
	const segundos = horaActual.getSeconds().toString().padStart(2, '0');
	reloj.textContent = '${horas}:${minutos}:${segundos}';
}

actualizarReloj();

setInterval(actualizarReloj, 1000);