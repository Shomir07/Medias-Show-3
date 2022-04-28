/**Boton Modo Nocturno*/
const switchButton = document.getElementById('switch');
switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    switchButton.classList.toggle('active');

    /**guardar el modo*/
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
});

//Optenemos el modo actual.
if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark');
    switchButton.classList.add('active');

} else {
    document.body.classList.remove('dark');
    switchButton.classList.remove('active');

}