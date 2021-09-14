const api = 'https://www.officeapi.dev/api//quotes/random'


const place = document.querySelector('#place');
const quote = document.createElement('h1')
const character = document.createElement('p')
const text = document.createElement('div')

const buttonGenerate = document.getElementById('buttonGenerate')

buttonGenerate.addEventListener('click', App)


async function App(){
  place.innerHTML=""
  const response = await fetch(api);
  const data = await response.json();

  text.className = 'text'
  quote.textContent =`" ${data.data.content} "`;
  character.textContent=`- ${data.data.character.firstname} ${data.data.character.lastname}`;
  text.append(quote, character);
  place.appendChild(text)
  console.log(data.data.content)
}
