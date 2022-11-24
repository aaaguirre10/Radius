export async function fetchProfileLogin(id) {

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
    //await submitProfile(id); //TODO: Remove when sign up implemented (sign up will be responsible for creating block)
    return profileSearchResponse['id'];

}

export async function submitProfile(id, signature, public_data, protected_data, private_data) {
    return await fetch('http://localhost:8080/add_block/profiles', {
      method: 'POST',
      headers : {
        'Access-Control-Allow-Origin' : '*', //Needed to enable CORS fetches
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify( {
        'id': id,//TODO: Combination of sha256(username+password),
        'signature': signature, //TODO: rsa.sign(id+'It is me', private_key)
        'public': public_data,
        'protected': protected_data,
        'private': private_data
      })
    }).then(function (response) {
      if(response.ok) {
        response.json().then(function(response) {
          console.log(response);
        });
        return true
      }
      else {
        return false
      }
    });
} 