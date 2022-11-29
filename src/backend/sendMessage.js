export async function sendMessages(id, sender, recipient, timestamp, private_data){
    return await fetch('http://localhost:8080/add_block/messages', {
        method: 'POST',
        headers : {
        'Access-Control-Allow-Origin' : '*', //Needed to enable CORS fetches
        'Content-Type' : 'application/json'
        },
        body : JSON.stringify( {
        'id': id,//TODO: Combination of sha256(username+password),
        'sender': sender, //TODO: rsa.sign(id+'It is me', private_key)
        'recipient': recipient,
        'timestamp': timestamp,
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

export async function getMessages(sender, recipient){
    const getMessageChain = await fetch('http://localhost:8080/get_chain/messages', {
        method: 'GET',
        headers : {
            'Access-Control-Allow-Origin' : '*', //Needed to enable CORS fetches
        }
        }).then(function (response){
            if(response.ok){
                return response.json();
            }
            else{
                alert('Could not fetch message blockchain');
            }
        });
    
    return getMessageChain;
};