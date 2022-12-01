import { HOST } from './hosts';
export async function sendMessages(id, sender, recipient, timestamp, private_data){
    return await fetch(HOST+'add_block/messages', {
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
    const getMessageChain = await fetch(HOST+'get_chain/messages', {
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
    

    let correctMessages = [];
    for (let messageIndex = 0; messageIndex<getMessageChain.length; messageIndex++){
        if (getMessageChain.chain[messageIndex].signature.sender === sender){
            if (getMessageChain.chain[messageIndex].public_data.recipient === recipient){
                correctMessages.push(getMessageChain.chain[messageIndex])
            }
        }
        else if (getMessageChain.chain[messageIndex].signature.sender === recipient){
            if (getMessageChain.chain[messageIndex].public_data.recipient === sender){
                correctMessages.push(getMessageChain.chain[messageIndex])
            }
        }
    };
    return correctMessages;
};