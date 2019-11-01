// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

// ************************************************************

// console.dir(document.forms);

// document.title = 123;
// console.dir((document.all[10].textContent = "senthil"));

// console.log(document.all);

// const title = document.getElementById("header-title");
// const header = document.getElementById("main-header");

// console.log((title.innerHTML = "<h1> sk </h1>"));

// title.style.color = "#056";
// console.dir(title.style.color);
// console.log(title.style.color);

// header.style.borderBottom = "1px solid #000";

// const items = document.getElementsByClassName("list-group-item");
// const items = document.querySelectorAll(".list-group-item");

// console.log(items[1].innerText);
// items.style.color = "red";

// items[1].innerText = "test";
// console.log(items);
// console.dir(items);

// for (var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "red";
//   items[i].style.color = "#fff";
// }

// const submit = document.querySelector("input[type='submit']");
// submit.value = "kanna";

// submit.value = "hi";

// const li = document.querySelectorAll("li:nth-child(even)");
// const li = document.getElementsByClassName("list-group-item");

// console.dir(li);
// console.log(li);
// li.style.color = "blue";

// for (let i = 0; i < li.length; i++) {
//   li[i].style.color = "green";
// // }
// const form = document.querySelector("form");
// const domElement = document.querySelector("#main");
// const items = document.querySelector("#items");
// // console.dir(items);
// // items.parentElement.parentElement.style.backgroundColor = "#f4f4f4";

// const newHeader = document.createElement("p");
// const newItag = document.createElement("i");
// let newLineTag = document.createElement("span");
// newLineTagChild = document.createTextNode("hallo there ");
// newLineTag.appendChild(newLineTagChild);
// newHeader.className = "h2";
// newHeader.id = "halo";
// newHeader.setAttribute("title", "header");

// // newHeader.classList.add("h3");
// // newHeader.classList.add("h1");

// let newSpan = document.createTextNode("hallo i am senthil");
// newItag.appendChild(newLineTag);
// newHeader.appendChild(newItag);
// newHeader.appendChild(newSpan);

// // domElement.appendChild(newHeader);
// domElement.insertBefore(newHeader, form);
// console.log(newSpan);
// console.log(newHeader);
// console.log(newSpan);
// console.dir(document.createElement);
// console.dir(document);

// console.dir(items);

// const button = document.querySelector("#button");
// const headerTitle = document.querySelector("#header-title");
// const card = document.querySelector("#main");
// const output = document.querySelector("#output");
// const form = document.querySelector("form");
// const input = document.querySelector("input[type='text']");

// const buttonClicked = e => {
//   // headerTitle.innerText = "hi all";
//   // main.style.backgroundColor = "#f5f5f5";
//   // let out = ``;
//   // console.dir(e);
//   // out = `<h2>${e.target.className}<h2>`;
//   // output.innerHTML += out;

// };
// console.dir(document);
// button.addEventListener("click", buttonClicked);

// const getValue = e => {
// e.preventDefault();
// let out = "";
// out = input.value;
//   output.textContent = input.value;
//   console.log(e.target.value);
// };

// input.addEventListener("keydown", getValue);

// console.dir(document);
