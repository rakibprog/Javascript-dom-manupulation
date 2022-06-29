

const li = document.createElement('li');
li.innerText = '6';
const ul = document.getElementById('line');
ul.appendChild(li);
const cc = document.getElementById('section');
const contain = document.createElement('div');
contain.classList.add('container');
contain.innerHTML = `
        <h2>this is title inner html</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptate consequuntur in voluptates officia voluptatem quae animi, atque debitis</p>
`;
cc.appendChild(contain);
const container = document.getElementsByClassName('container');
for(const content of container){
        content.style.color="red";
        content.style.border="2px solid black";
}
