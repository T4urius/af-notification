importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyDGfGMzwDyKQ15Mp9YFn4GY7CwSTE7x8Mg",
    authDomain: "melhoragen-24ae3.firebaseapp.com",
    projectId: "melhoragen-24ae3",
    storageBucket: "melhoragen-24ae3.appspot.com",
    messagingSenderId: "335478874248",
    appId: "1:335478874248:web:3198cb2d29487913293f3d",
    measurementId: "G-GKKSL9RPSJ",
    vapidKey: "BMoBWEfIJYLnzh-zL4zxe61gcCnmFHd5yKjTQLtt7TDhWvYsAKMvvDVMa0Zr06J0-I9adCGAwbEuY_Hd8one5Fk"
});

const messaging = firebase.messaging();