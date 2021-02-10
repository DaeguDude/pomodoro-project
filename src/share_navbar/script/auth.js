import gapi from 'googleAPI';
import { toggleOnNavbar , toggleOffNavbar } from './navbar';

var googleUser = {};
let googleUserImg;

var startApp = function() {
  gapi.load('auth2', function(){
    let auth2;
    auth2 = gapi.auth2.init({
      client_id: '886700924848-jm5ejqtkomd15mh1uo08j0q2ou0kgqk4.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin',
    });
    attachSignin(document.getElementById('google-signin'), auth2);
  });
};

function attachSignin(element, auth2) {
  console.log(element.id);
  auth2.attachClickHandler(element, {},
      function(googleUser) {
        console.log(`Signed in: ${googleUser.getBasicProfile().getName()}`);
        googleUserImg = googleUser.getBasicProfile().getImageUrl();
        toggleOnNavbar();
      }, function(error) {
        alert(JSON.stringify(error, undefined, 2));
      });
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    toggleOffNavbar();
    console.log('User signed out.');
    window.location.reload();
    });
  }

export { startApp , signOut , googleUserImg }