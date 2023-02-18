const main=document.querySelector('.main');
const alive=document.querySelector('.alive');
const h2=document.querySelector('h2');

const btn=document.querySelector('.btn');


async function myFunction(){
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const datas = await response.json();
        
        for (const data of datas.results) {
        
            if (data.episode.length > 25 ) {
                data.character='Main';
            } else {
                data.character = 'side';
            }
               
        }
        for (let i = 0; i < datas.results.length; i++) {

                const div = document.createElement('div');

                div.innerHTML = `<ul>
                <li>Id: ${datas.results[i].id}</li>
                <li>Name: ${datas.results[i].name}</li>
                <li>Character: ${datas.results[i].character}</li>
                <li>Status: ${datas.results[i].status}</li>
                <li>Species: ${datas.results[i].species}</li>
                <li>Gender: ${datas.results[i].gender}</li>
                <li>Origin: ${datas.results[i].origin.name}</li>
                </ul>`;
                main.appendChild(div);
            }
    
               for (const data of datas.results) {
                if (data.character==='Main' && data.status==='Alive') {

                    h2.innerText='Main character who are alived';
                    const div1=document.createElement('div');
                    div1.innerHTML =`<ul>
                    <li>Id: ${data.id}</li>
                <li>Name: ${data.name}</li>
                <li>Species: ${data.species}</li>
                <li>Gender: ${data.gender}</li>
                <li>Origin: ${data.origin.name}</li>
                    </ul>`
                   
                    alive.appendChild(div1);
                }
               }
                
            }

     catch (error) {
        console.error(`Could not get products: ${error}`);

    }
 
    
}
myFunction();




