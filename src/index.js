import './style/style.css';
import { renderHeader } from './script/navbar'


// function profileMenu() {
//     const loginBtn = document.querySelector('.login-btn');
//     loginBtn.addEventListener('click', () => {
//         loginBtn.remove();
//         nav.appendChild(profileBox);
//     })

//     nav.appendChild(profileBox);

// };

// var googleUser = {};
// var startApp = function() {
//     gapi.load('auth2', function(){
//       // Retrieve the singleton for the GoogleAuth library and set up the client.
//       auth2 = gapi.auth2.init({
//         client_id: '886700924848-jm5ejqtkomd15mh1uo08j0q2ou0kgqk4.apps.googleusercontent.com',
//         cookiepolicy: 'single_host_origin',
//         // Request scopes in addition to 'profile' and 'email'
//         //scope: 'additional_scope'
//       });
//       attachSignin(document.getElementById('google-signin'));
//     });
//   };

renderHeader();
// startApp();