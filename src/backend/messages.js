export async function fetchConversations(id) {
    
    //look for profile
    const profileSearchResponse = await fetch('http://localhost:8080/get_chain/messages', {
        method: 'GET',
        headers : {
            'Access-Control-Allow-Origin' : '*', //Needed to enable CORS fetches
        }
        }).then(function (response) {
        if(response.ok) {
            response.json().then(function(response) {
                console.log(response);
            })
        }
        else {
            alert('Error creating logging in please try again');
        }
    });
    //await submitProfile(id); //TODO: Remove when sign up implemented (sign up will be responsible for creating block)
    return profileSearchResponse;

    return [];
}