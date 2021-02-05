// function onSignIn(googleUser) {
//     var profile = googleUser.getBasicProfile();
//     console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//     console.log('Name: ' + profile.getName());
//     console.log('Image URL: ' + profile.getImageUrl());
//     console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
//   }
  
//   function onSuccess(googleUser) {
//     console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
//   }


//   export {onSignIn};

var googleUser = {};
  var startApp = function() {
    gapi.load('auth2', function(){
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      auth2 = gapi.auth2.init({
        client_id: '886700924848-jm5ejqtkomd15mh1uo08j0q2ou0kgqk4.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      });
      attachSignin(document.getElementById('google-signin'));
    });
  };

  // function attachSignin(element) {
  //   console.log(element.id);
  //   auth2.attachClickHandler(element, {},
  //       function(googleUser) {
  //         document.getElementById('name').innerText = "Signed in: " +
  //             googleUser.getBasicProfile().getName();
  //       }, function(error) {
  //         alert(JSON.stringify(error, undefined, 2));
  //       });
  // }

