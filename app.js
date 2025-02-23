document.getElementById('getJoke').addEventListener('click', async () => {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        document.getElementById('joke').innerText = data.value;
    } catch (error) {
        document.getElementById('joke').innerText = 'Error al obtener la broma. Intenta de nuevo.';
    }
});
