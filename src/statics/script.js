const input = document.getElementById('searchx');
localStorage.setItem('Bienvenido', 'Aplicacion basica para almacenar tus datos')
localStorage.setItem('Donde se almacena', 'Tus datos se guardan en el localStorage')
localStorage.setItem('Limites', 'Tu base de datos tiene una capacidad de 5MB')
localStorage.setItem('Como agregar datos', 'Presione el icono de agregar y rellene los campos')

const show=document.querySelector('#add');
const add=document.querySelector('#add0x');
const less=document.querySelector('#less');

function mostrarDatos() {
let contenido = '';
for (let i = 0; i < localStorage.length; i++) {
const key = localStorage.key(i);
const value = localStorage.getItem(key);
contenido += `<div id="showinfo" data-sigil="${key}" onclick="copiarTexto(this)"><strong>${key}</strong><p> ${value}</div>`;
  }
 document.getElementById('show').innerHTML = contenido;
}
mostrarDatos();

document.getElementById('btn').addEventListener('click', (event) => {
const title=document.getElementById('text1').value;
const data=document.getElementById('text2').value;
localStorage.setItem(title, data);
mostrarDatos();
});

document.getElementById('add0x').addEventListener('click', (event) => {
show.style.display="block";
add.style.display="none";
less.style.display="flex";
});

document.getElementById('less').addEventListener('click', (event) => {
add.style.display="block";
show.style.display="none";
less.style.display="none";
});

 function copiarTexto(div) {
  const textarea = document.createElement('textarea');
  textarea.value = div.innerText;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alert('Texto copiado: ' + div.innerText);
 }


let isVisible = false;
document.getElementById('search').addEventListener('click', (event) => {
isVisible = !isVisible;
input.style.display = isVisible ? 'block' : 'none';
});

const title = document.getElementById('searchx').value;
const divs = document.querySelectorAll('div[data-sigil]');
input.addEventListener('input', () => {
const searchTerm = input.value.toLowerCase();
divs.forEach(div => {
const sigil = div.getAttribute('data-sigil').toLowerCase().includes(searchTerm);
if (sigil) {
 div.style.display = '';
} else {
 div.style.display = 'none';
  }
 });
});
