//1
// const oneUser = document.getElementById('1user');
// const fiveUsers = document.getElementById('5users');
// const div = document.getElementById('div');

// async function getUser(){
//     const resp = await fetch('https://randomuser.me/api');
//     const user = await resp.json();
//     return user;
// }

// function createCard(user){
//     const name = document.createElement('h2');
//     name.textContent = `${user.results[0].name.title} ${user.results[0].name.first} ${user.results[0].name.last}`;
//     div.appendChild(name);

//     const email = document.createElement('h3');
//     email.textContent = `Email: ${user.results[0].email}`;
//     div.appendChild(email);

//     const createImg = document.createElement('img');
//     createImg.src = user.results[0].picture.medium;
//     div.appendChild(createImg);

//     const age = document.createElement('h3');
//     age.textContent = `age: ${user.results[0].registered.age}`;
//     div.appendChild(age);
// }

// //1.1
// oneUser.addEventListener('click',async () => {
//     const user = await getUser();
//     createCard(user);
// });

// //1.2
// fiveUsers.addEventListener('click',async () => {
//     manyUsers(5);
// });

// async function manyUsers(num){
//     for(i = 0; i < num; i++){
//         const user = await getUser();
//         createCard(user);
//     }
// }


//2
// const div = document.getElementById('div');

// const jokes = document.querySelector('button');

// jokes.addEventListener('click', () => {
//     getJoke();
// })

// async function getJoke(){
//     try{
//         const resp = await fetch("https://api.humorapi.com/jokes/search?api-key=68464328db66422a9ddd85bf0f6f5dc1");
//         const joke = await resp.json();
//         div.textContent = joke.jokes[0].joke;
//     }catch(error){
//         console.error(error);
//     }
// }


//3
// async function allProducts(){
//     const list = document.createElement('ul');
//     document.body.appendChild(list);

//     const resp = await fetch('https://fakestoreapi.com/products');
//     const products = await resp.json();


//     products.forEach(element => {
//         const product = document.createElement('li');
//         product.textContent = element.title;
//         list.appendChild(product);
//     });
// }
// allProducts();


//4
const form = document.getElementById('user');
form.addEventListener('submit', event => {
    event.preventDefault();
    
    const firstName = document.getElementById('1').value;
    const lastName = document.getElementById('2').value;
    const email = document.getElementById('3').value;
    const age = document.getElementById('4').value;
    
    
    const resp = fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'post',
    body: JSON.stringify({
        name: {firstName, lastName},
        email,
        age,
    }),
    headers: {
        'Content-Type': 'application/json'
    }
    })
    .then(resp => resp.json())
    .then(json => console.log(json));
})