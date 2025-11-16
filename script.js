document.getElementById('evalForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(this).entries());
    localStorage.setItem('formData', JSON.stringify(formData));
    window.location.href = 'results.html';
    });