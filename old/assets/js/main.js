// бургер меню в мобильной версии
const headerBurger = document.querySelector('.header__burger');
const header = document.querySelector('.header');
headerBurger.addEventListener('click', function() {
  header.classList.toggle('active');
});


// показываем и скрываем символы пароля
const togglePasswords = document.querySelectorAll('.toggle-password');
togglePasswords.forEach(togglePassword => {
    const passwordField = togglePassword.previousElementSibling;
    const formGroup = passwordField.parentElement;

    togglePassword.addEventListener('click', function() {
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            formGroup.classList.add('active');
        } else {
            passwordField.type = 'password';
            formGroup.classList.remove('active');
        }
    });
});
