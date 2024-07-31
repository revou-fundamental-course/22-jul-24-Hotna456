// ini javascript

console.log("hello world");

document.addEventListener("DOMContentLoaded", function () {
    // Example: Change button color on hover
    const callToActionButton = document.querySelector('.call-to-action');
    callToActionButton.addEventListener('mouseover', function () {
        callToActionButton.style.backgroundColor = '#333333';
        callToActionButton.style.color = '#fff';
    });

    callToActionButton.addEventListener('mouseout', function () {
        callToActionButton.style.backgroundColor = '#000000';
        callToActionButton.style.color = '#fff';
    });

    // Example: Basic form validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const interest = document.getElementById('interest').value;

        // Jika ada field yang kosong, tampilkan pesan alert dan cegah pengiriman form
        if (name === '' || email === '' || interest === '') {
            alert('Please fill out all required fields.');
            event.preventDefault(); // Prevent form submission
        }
    });
});
