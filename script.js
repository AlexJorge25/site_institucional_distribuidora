document.querySelector('.btn-first').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
});

function fecharPopup() {
    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
})}
