document.querySelectorAll('.emotion').forEach(img => {
    img.addEventListener('click', async () => {
        const emotion = img.getAttribute('data-emotion');
        try {

            // TODO: COMPLETAR: Necesitamos hacer un fetch al endpoint correcto, procesar los datos y asignar el libro recuperado a la variable 'book'

            const book = {};

            // NO MODIFICAR A PARTIR DE AQUÍ
            document.getElementById('book-title').textContent = book.title;
            document.getElementById('book-isbn').textContent = book.isbn;
            document.getElementById('book-price').textContent = book.price.toFixed(2);
            document.getElementById('book-description').textContent = book.description;
            document.getElementById('book-image').src = book.imageURL;

            document.getElementById('book-container').style.display = 'block';

        } catch (error) {
            console.error('Error fetching book:', error.message);
            alert('An error ocurred. Use the developer tools!');
        }
    });
});
