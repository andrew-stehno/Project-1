

const auth = firebase.auth();
const database = firebase.database();

// Listen for auth status change:
auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user);
    // Get user ID:
    uid = user.uid;
  } else {
    console.log('user logged out');
  }
});

// Signup users:
const signUpForm = document.querySelector('#signup-form');
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info:
  const email = signUpForm['signup-email'].value;
  const password = signUpForm['signup-password'].value;

  // Sign up user:
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    // console.log(cred);

    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signUpForm.reset();
  })
})

// Log user out:
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});

// log user in:
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info:
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  auth.signInWithEmailAndPassword(email, password).then(cred => {
    // console.log(cred);
    const modal = document.querySelector('#modal-login')
    M.Modal.getInstance(modal).close();
    signUpForm.reset();
  })
});