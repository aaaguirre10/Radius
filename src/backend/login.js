import { sha256 } from 'js-sha256';

export async function fetchProfileLogin(username, password) {

    const id = sha256(username+password);

    //look for profile
    const profileSearchResponse = await fetch('http://localhost:8080/get_block/profiles/'+id, {
        method: 'GET',
        headers : {
            'Access-Control-Allow-Origin' : '*', //Needed to enable CORS fetches
        }
        }).then(function (response) {
        if(response.ok) {
            return response.json();
        }
        else {
            alert('Error creating logging in please try again');
        }
    });
    
    console.log(profileSearchResponse);
    await submitProfile(id); //TODO: Remove when sign up implemented (sign up will be responsible for creating block)
    return profileSearchResponse['id'];
   return id;
}

export async function submitProfile(id) {
    await fetch('http://localhost:8080/add_block/profiles', {
      method: 'POST',
      headers : {
        'Access-Control-Allow-Origin' : '*', //Needed to enable CORS fetches
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify( {
        'id': id,//TODO: Combination of sha256(username+password),
        'signature': 'TODO', //TODO: rsa.sign(id+'It is me', private_key)
        'public': {},
        'protected': {},
        'private': {}
      })
    }).then(function (response) {
      if(response.ok) {
        response.json().then(function(response) {
          console.log(response);
        });
      }
      else {
        alert('Error creating logging in please try again');
      }
    });
} 