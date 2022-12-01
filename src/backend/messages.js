import { HOST } from './hosts'
export async function fetchConversations(id) {
    
    //look for profile
    const profileSearchResponse = await fetch(HOST+'get_chain/messages', {
        method: 'GET',
        headers : {
            'Access-Control-Allow-Origin' : '*', //Needed to enable CORS fetches
        }
        }).then(function (response) {
        if(response.ok) {
            response.json().then(function(response) {
                console.log('fetched converstaions below');
                console.log(response);
                const chain = response['chain'];
                const conversations = {};
                chain.map(message => {
                    console.log(message);
                    const sender = message['signature']['sender'];
                    const receiver = message['public_data']['receiver'];
                    
                    //const sender = chain['signature']['sender'];
                    //const receiver = chain['public_data']['receiver'];
                })
                
                console.log(chain);
                
            })
        }
        else {
            alert('Error creating logging in please try again');
        }
    });
    //await submitProfile(id); //TODO: Remove when sign up implemented (sign up will be responsible for creating block)
    return profileSearchResponse;
}