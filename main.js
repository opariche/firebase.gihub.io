import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { auth } from './app/firebase.js';
import {loginCheck} from './app/loginCheck.js';

import './app/signupform.js'
import './app/signinform.js'
import './app/googleLogin.js'
import './app/facebookLogin.js'
import './app/githubLogin.js'
import './app/logout.js'



onAuthStateChanged(auth, async (user) => {
    loginCheck(user)
    //if (user) {
       

    //} else {
    //    loginCheck(user)
    //}
})



