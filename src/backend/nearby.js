import { sha256 } from "js-sha256";

//TODO: Fetch from profiles blockchain, hardcoded right now
export async function fetchNearby() {
    const nearbyPeople = [
        {
          id: sha256('daviddominguez'),
          firstName: 'david',
          lastName: 'dominguez',
          imgUrl: `https://avatars.dicebear.com/api/bottts/daviddominguez.svg`,
          location: {
            city: 'Juarez',
            state: 'Chihuahua'
          }
        },
        {
          id: sha256('alangamez'),
          firstName: 'alan',
          lastName: 'gamez',
          imgUrl: `https://avatars.dicebear.com/api/bottts/alangamez.svg`,
          location: {
            city: 'El Paso',
            state: 'Texas'
          }
        },
        {
          id: sha256('jiohernandez'),
          firstName: 'jio',
          lastName: 'hernandez',
          imgUrl: `https://avatars.dicebear.com/api/bottts/jiohernandez.svg`,
          location: {
            city: 'El Paso',
            state: 'Texas'
          }
        },
        {
          id: sha256('donleo'),
          firstName: 'don',
          lastName: 'leo',
          imgUrl: `https://avatars.dicebear.com/api/bottts/donleo.svg`,
          location: {
            city: 'Las Cruces',
            state: 'NM'
          }
        }
      ];
      return nearbyPeople;
}

export async function sendFriendRequest(id, public_data, protected_data, private_data) {
    return await fetch('http://localhost:8080/add_block/interactions', {
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