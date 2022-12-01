import { sha256 } from "js-sha256";
import { HOST } from './hosts';
//TODO: Fetch from profiles blockchain, hardcoded right now
export async function fetchNearby() {
    let nearbyPeople = [
        {
          id: sha256('daviddominguez'),
          firstName: 'david',
          lastName: 'dominguez',
          imgURL: `https://avatars.dicebear.com/api/bottts/daviddominguez.svg`,
          bio: 'hello'
        },
        {
          id: sha256('alangamez'),
          firstName: 'alan',
          lastName: 'gamez',
          imgURL: `https://avatars.dicebear.com/api/bottts/alangamez.svg`,
          bio: '420'
        },
        {
          id: sha256('jiohernandez'),
          firstName: 'jio',
          lastName: 'hernandez',
          imgURL: `https://avatars.dicebear.com/api/bottts/jiohernandez.svg`,
          bio: 'estoy gigante'
        },
        {
          id: sha256('donleo'),
          firstName: 'don',
          lastName: 'leo',
          imgURL: `https://avatars.dicebear.com/api/bottts/donleo.svg`,
          bio: 'soy leo'
        }
      ];

      const fetched = await fetch(HOST+'get_chain/profiles', {
      method: 'GET',
      headers : {
        'Access-Control-Allow-Origin' : '*', //Needed to enable CORS fetches
        'Content-Type' : 'application/json'
      },
    }).then(async function (response) {
      let fetchedChain = []
      if(response.ok) {
        const chain = await response.json().then(function(response) {
          return response['chain'];
        });
        chain.map(user => {
          const public_data = user['public_data'];
          const newUser = {
            id: user['id'],
            firstName: public_data['firstName'],
            lastName: public_data['lastName'],
            imgURL: public_data['imgURL'],
            bio: public_data['bio'],
            userName: public_data['userName'],
          }
          if(newUser['id'] !== 0) {
            fetchedChain = [...fetchedChain, newUser];
          }
        })

      }
      return fetchedChain;
    }).catch(function(response) {
        console.log(response);
        return [];
    });
    nearbyPeople = [...nearbyPeople, ...fetched];
    return fetched;
}

export async function sendFriendRequest(id, public_data, protected_data, private_data) {
    return await fetch(HOST+'add_block/interactions', {
      method: 'POST',
      headers : {
        'Access-Control-Allow-Origin' : '*', //Needed to enable CORS fetches
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify( {
        'id': id,//TODO: Combination of sha256(username+password),
        'signature': id, //TODO: rsa.sign(id+'It is me', private_key)
        'public': public_data,
        'protected': protected_data,
        'private': private_data
      })
    }).then(function (response) {
      if(response.ok) {
        response.json().then(function(response) {
          console.log(response);
        });
        return true;
      }
      else {
        return false;
      }
    }).catch(function(response) {
        return false;
    });
}