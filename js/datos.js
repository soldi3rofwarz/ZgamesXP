import {db} from './firebase'
const datos = document.getElementById("prueba")

const getTask = ()=> db.collection("Historias").get();

window.addEventListener("DOMContentLoader", async(e)=>{
    const querysnapshot = await getTask();
    querysnapshot.forEach(doc=>{
        const task = doc.data;
        console.log(doc.data())
        datos.innerHTML +=`<div class="card_fire"><h3>${doc.data().nombre}</h3></div>`
    })
})