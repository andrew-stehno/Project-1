

const auth = firebase.auth();
const database = firebase.database();
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
let uid;

// Listen for auth status change:
auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user);
    console.log('user uid' + user.uid);
    uid = user.uid;
    // user interface function:
    setupUI(user);
  } else {
    console.log('user logged out');
    // user interface function:
    setupUI();
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
    return database('users').doc(cred.user.uid).set({
      favorites: fav-table['user-fav'].value
    });

  }).then(() => {
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signUpForm.reset();
  });
});

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

// UI setup:
const setupUI = (user) => {
  if (user) {
    // toggle UI elements:
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    // toggle UI elements:
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
};

