/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const newCard = document.querySelector('.cards')
axios
  .get('https://api.github.com/users/taty2010')
  .then((response) => {
      const create = createCard;
      newCard.appendChild(create(response.data));
  })
  .catch (err => {
    console.log('error');
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

const followersArray = ["FreedomWriter","warndawg", "leachcoding", "jchaing", "Chrvasq"];

//The foreach is on the outside of the promise because the array is on th eoutside and not withing the api
followersArray.forEach(user =>{
  axios.get(`https://api.github.com/users/${user}`)
    .then(response =>{
      const create = createCard;
      newCard.appendChild(create(response.data))
    })
    .catch (err => {
      console.log('error');
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

function createCard (data){
const card  = document.createElement('div');
const userImg = document.createElement('img');
const cardInfo = document.createElement('div')
const name = document.createElement('h3')
const username = document.createElement('p')
const location = document.createElement('p')
const profile = document.createElement('p')
const githubPage = document.createElement('a')
const followers = document.createElement('p')
const following = document.createElement('p')
const bio = document.createElement('p')

card.appendChild(userImg);
card.appendChild(cardInfo);
cardInfo.appendChild(name);
cardInfo.appendChild(username);
cardInfo.appendChild(location);
cardInfo.appendChild(profile);
profile.appendChild(githubPage);
cardInfo.appendChild(followers);
cardInfo.appendChild(following);
cardInfo.appendChild(bio);

card.classList.add('card');
cardInfo.classList.add('card-info');
name.classList.add('name');
username.classList.add('username');

userImg.src = data.avatar_url;
name.textContent = data.name;
username.textContent = data.login;
location.textContent = data.location;
profile.textContent = `Profile: ${githubPage.href = data.html_url}`;
followers.textContent = `Followers: ${data.followers}`;
following.textContent = `Following: ${data.following}`;
bio.textContent = `Bio: ${data.bio}`;

return card;

}
const container = document.querySelector('.container')
//container.appendChild(createCard(axios))
//createCard(data);


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
