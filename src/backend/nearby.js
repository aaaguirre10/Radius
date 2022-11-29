import { sha256 } from "js-sha256";

//TODO: Fetch from profiles blockchain, hardcoded right now
export async function fetchNearby() {
    const nearbyPeople = [
        {
          id: sha256('daviddominguez'),
          firstName: 'david',
          lastName: 'dominguez',
          imgUrl: `https://avatars.dicebear.com/api/bottts/daviddominguez.svg`,
          bio: 'que rollo alv'
        },
        {
          id: sha256('alangamez'),
          firstName: 'alan',
          lastName: 'gamez',
          imgUrl: `https://avatars.dicebear.com/api/bottts/alangamez.svg`,
          bio: 'top g'
        },
        {
          id: sha256('jiohernandez'),
          firstName: 'jio',
          lastName: 'hernandez',
          imgUrl: `https://avatars.dicebear.com/api/bottts/jiohernandez.svg`,
          bio: 'im tall'
        },
        {
          id: sha256('donleo'),
          firstName: 'don',
          lastName: 'leo',
          imgUrl: `https://avatars.dicebear.com/api/bottts/donleo.svg`,
          bio: 'hello world' 
        }
      ];

      await fetch('http://localhost:8080/get_chain/profiles', {
      method: 'GET',
      headers : {
        'Access-Control-Allow-Origin' : '*', //Needed to enable CORS fetches
        'Content-Type' : 'application/json'
      }
    }).then(function (response) {
      if(response.ok) {
        response.json().then(function(response) {
          console.log(response);
          
          const chainArray = response['chain'];
            
            chainArray.map(user => {

              const id = user['id'];
              if (id === 0) {
                return null;
              }
              const firstName = user['public_data']['firstName'];
              const lastName = user['public_data']['lastName'];
              const imgUrl = 'https://avatars.dicebear.com/api/bottts/donleo.svg';
              const bio = user['public_data']['bio'];

              const toAdd = {
                id: id,
                firstName: firstName,
                lastName: lastName,
                imgUrl: imgUrl,
                bio: bio
              }

              nearbyPeople.push(toAdd);
              console.log(nearbyPeople);
              return 0;
            });

        });
        // alert('fetched');
        return true;
      } 
      else {
        return false;
      }
    }).catch(function(response) {
        return false;
    });
      console.log(nearbyPeople);
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