document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const dialog = document.createElement('dialog');
    dialog.innerHTML = `
        <p>Thanks for joining our newsletter!</p>
        <button id="closeDialog">Close</button>
    `;
    document.body.appendChild(dialog);

    const submittedEmails = JSON.parse(localStorage.getItem('submittedEmails')) || [];

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const emailInput = form.querySelector('input[name="email"]').value;

        if (submittedEmails.includes(emailInput)) {
            alert('This email is already subscribed to the newsletter.');
            return;
        }

        submittedEmails.push(emailInput);
        localStorage.setItem('submittedEmails', JSON.stringify(submittedEmails));

        localStorage.setItem('formSubmitted', 'true');

        dialog.showModal();

        document.getElementById('closeDialog').addEventListener('click', () => {
            dialog.close();
            form.reset();
        });
    });

    submittedEmails.forEach(email => {
        console.log(`Already subscribed: ${email}`);
    });
});