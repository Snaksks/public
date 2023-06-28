const login = document.querySelector('.login-icon');
login.addEventListener('click', (event) =>{
    document.getElementById('login-container').style.display = 'block';
    document.querySelector('body').classList.add('disabled');
    document.querySelector('.grid').classList.add('opacity-05');
})

const closeContainer = document.querySelector('.close-login');
closeContainer.addEventListener('click',(event) =>{
    document.getElementById('login-container').style.display = 'none';
    document.querySelector('body').classList.remove('disabled');
    document.querySelector('.grid').classList.remove('opacity-05');
})

const form = document.getElementById('login');
const username = document.getElementById('username');
const password = document.getElementById('password');    
let git, git2;
form.addEventListener('submit', e => {
    e.preventDefault();

     validateInputs();
     if(git&&git2 === true){
        document.getElementById('login-container').style.display = 'none';
        document.querySelector('body').classList.remove('disabled');
        document.querySelector('.grid').classList.remove('opacity-05');
        document.querySelector('.login-icon').style.display = 'none';
        document.querySelector('.user-profile').innerText = username.value;
        document.querySelector('.user-login').style.backgroundColor = "red";

     }
});
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue === '' ) {
        setError(username, 'Enter your username');
    } else {
        setSuccess(username);
        git=true;
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
        git2=true;
    }
};