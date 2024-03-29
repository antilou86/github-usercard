

/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const info = axios.get('https://api.github.com/users/antilou86')

info.then(
  (response) => {
    console.log('info.data: ' + response.data)
    let cards = document.querySelector('.cards')
    let element = makerBot(response);
    cards.appendChild(element);
  })
  .catch(
    (error) => {
      console.log('the error is: ' + error);
    })


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

//stretch- get followers programatically

// let newFollowersArray = axios.get('https://api.github.com/users/antilou86/followers').then(response => {
//   resultingArray = [];
//   //console.log(response)
//   response.data.forEach(item => {
//     resultingArray.push(item.login);
//     return resultingArray;
//   })
//   //console.log(resultingArray);
//   return makerBot2Helper(resultingArray);
// })

// .then(array => {
//   let followerUrlArray = [];
//   array.forEach(follower => {
//     followerUrlArray.push('https://api.github.com/users/' + follower);
//     //console.log(followerUrlArray)
//     return followerUrlArray;
//   })
//   console.log(followerUrlArray)
//   return followerUrlArray;
// }).then(urlArray => {
//   let objectArray = [];
//   urlArray.forEach(url => {
//     let axiosThing = axios.get(url)
//     //console.log(axiosThing)
//     objectArray.push(axiosThing);
//     return objectArray;
//   })
//   //console.log(objectArray)
//   return objectArray;
// }).then(objects => {
//   objects.forEach(object => {
//   let data = object.data;
//   let element = makerBot2(data);
//   let cards = document.querySelector('.cards')
//   cards.appendChild(element);
// })
// })

.catch (error => {
  console.log('error: ' + error);
});


const followersArray = ['tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell' ];

// function makerBot2Helper(array) {
//  array.forEach(item => {
//   let followerURL = 'https://api.github.com/users/' + item;
//   axios.get(followerURL).then( 
//     (response) => {
//     console.log('SUCCESS!!')
//   let cards = document.querySelector('.cards')
//   let element = makerBot2(response);
//   return cards.appendChild(element);
// })
//   .catch( 
//   (error) => {
//   console.log('the error is: ' + error);
// })
// })
// };

followersArray.forEach(follower => {
let followerURL = 'https://api.github.com/users/' + follower;
axios.get(followerURL).then( 
  (response) => {
    console.log('SUCCESS!!')
  let cards = document.querySelector('.cards')
  let element = makerBot(response);
  cards.appendChild(element);
})
  .catch( 
  (error) => {
  console.log('the error is: ' + error);
})
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

let makerBot = (object) => {
  let cardDiv = document.createElement('div')
  cardDiv.classList.add('card')

  let imageDiv = document.createElement('img')
  imageDiv.src = object.data.avatar_url;  //if buggy check this path
  cardDiv.appendChild(imageDiv)

  let cardInfoDiv = document.createElement('div')
  cardInfoDiv.classList.add('card-info')
  cardDiv.appendChild(cardInfoDiv)

  let h3 = document.createElement('h3')
  h3.classList.add('name')
  h3.textContent = object.data.name;
  cardInfoDiv.appendChild(h3)

  let userNameP = document.createElement('p')
  userNameP.classList.add('username')
  userNameP.textContent = object.data.login;
  cardInfoDiv.appendChild(userNameP)

  let locationP = document.createElement('p')
  locationP.textContent = 'Location: ' + object.data.location;
  cardInfoDiv.appendChild(locationP)

  let profileP = document.createElement('p')
  profileP.textContent = 'Profile: '
  let anchorTag = document.createElement('a')
  anchorTag.href = object.data.url;
  anchorTag.textContent = object.data.html_url;
  profileP.appendChild(anchorTag)
  cardInfoDiv.appendChild(profileP)

  let followersP = document.createElement('p')
  followersP.textContent = 'Followers: ' + object.data.followers;
  cardInfoDiv.appendChild(followersP)

  let followingP = document.createElement('p')
  followingP.textContent = 'Following: ' + object.data.following;
  cardInfoDiv.appendChild(followingP)

  let bioP = document.createElement('p')
  bioP.textContent = 'Bio: ' + object.data.bio

  return cardDiv;
};


// let makerBot2 = (object) => {
//   let cardDiv = document.createElement('div')
//   cardDiv.classList.add('card')

//   let imageDiv = document.createElement('img')
//   imageDiv.src = object.avatar_url;  //if buggy check this path
//   cardDiv.appendChild(imageDiv)

//   let cardInfoDiv = document.createElement('div')
//   cardInfoDiv.classList.add('card-info')
//   cardDiv.appendChild(cardInfoDiv)

//   let h3 = document.createElement('h3')
//   h3.classList.add('name')
//   h3.textContent = object.name;
//   cardInfoDiv.appendChild(h3)

//   let userNameP = document.createElement('p')
//   userNameP.classList.add('username')
//   userNameP.textContent = object.login;
//   cardInfoDiv.appendChild(userNameP)

//   let locationP = document.createElement('p')
//   locationP.textContent = 'Location: ' + object.location;
//   cardInfoDiv.appendChild(locationP)

//   let profileP = document.createElement('p')
//   profileP.textContent = 'Profile: '
//   let anchorTag = document.createElement('a')
//   anchorTag.href = object.url;
//   anchorTag.textContent = object.html_url;
//   profileP.appendChild(anchorTag)
//   cardInfoDiv.appendChild(profileP)

//   let followersP = document.createElement('p')
//   followersP.textContent = 'Followers: ' + object.followers;
//   cardInfoDiv.appendChild(followersP)

//   let followingP = document.createElement('p')
//   followingP.textContent = 'Following: ' + object.following;
//   cardInfoDiv.appendChild(followingP)

//   let bioP = document.createElement('p')
//   bioP.textContent = 'Bio: ' + object.bio

//   return document.querySelector('.cards').appendChild(cardDiv);
// };
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/