const lista = document.querySelector('ul'); 
let personagens = {};
let results = [];

const getPersonagens = async () => { // função assíncrona
    let query = document.querySelector('input').value; // recupera texto do input
    try {
        const res = await fetch(`https://www.superheroapi.com/api.php/3708772112566731/search/${query}`); // capta os dados da API de acordo com a query
        personagens = await res.json();
        results = personagens.results;
        mostrarPersonagens(results);
    } catch (falha) {
        console.error(falha);
    }
};

const mostrarPersonagens = (characters) => {
    const htmlString = characters
        .map((character) => { // array 
            return `       
            <li>
                    <h1>Nome: ${character.name}</h1></a>
                    <h2>Editora: ${character.biography.publisher}</h2></a>
                    <img class="containerHero image" src="${character.image.url}"></img>
                    <p>inteligência: ${character.powerstats.intelligence}</p>
                    <p>força: ${character.powerstats.strength}</p>
                    <p>poder: ${character.powerstats.power}</p>
                    <p>durabilidade: ${character.powerstats.durability}</p> 
                
           </li>
      
        `
        })
        .join('');
    lista.innerHTML = htmlString; // adiciona o conteudo
};
var button = document.querySelector('button'); // recupera botao
button.addEventListener("click", getPersonagens); // faz carregar a pesquisa ao clicar, chamando a função
