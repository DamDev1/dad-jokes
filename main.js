const btn = document.querySelector(".btn")
const joke = document.querySelector(".joke")

btn.addEventListener("click", () => {
    const response = fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });

    response.then(res => res.json())
            .then(data => joke.textContent = data.joke)
})

// async function fetchData(){
//     const response = await fetch('https://icanhazdadjoke.com/',{
//         headers: {
//             'Accept': 'application/json'
//         }
//     });
//     const joke = await response.json();
//     console.log(joke.id)
    
// }

// fetchData();

// const name = prompt("what's your name")

// function anotherFetch(){
//     const response =fetch(`https://api.genderize.io?name=${name}`);
//     response.then(res => res.json())
//             .then(d => {
//                 console.log(d)
//             })

// }

// anotherFetch()