import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

import { auth } from './firebase.js';
import { showMessage } from './showMessage.js';

const signInForm = document.querySelector('#login-form');

signInForm.addEventListener('submit', async e => {
    e.preventDefault()

const email = signInForm['login-email'].value;
const password = signInForm['login-password'].value;

try {
    const credentials = await signInWithEmailAndPassword(auth, email, password)
console.log(credentials);

const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'))
modal.hide()

showMessage('Welcome '+ credentials.user.email,)

} catch (error) {
if (error.code === "auth/invalid-login-credentials") {
    showMessage('Wrong Credentials', 'error')
} else if (error.code === "auth/account-exists-with-different-credential"){
    showMessage('Account already exists', 'error')
}

else {
    showMessage(error.message, 'error')
}
}

})