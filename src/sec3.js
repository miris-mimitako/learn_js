



// #3-3
const buttonEl = document.createElement("button");

buttonEl.textContent = "button"; // ボタンの名前を付与する

const divlEl = document.querySelector(".container"); // 一番最初のClassnameを取得する。

divlEl.appendChild(buttonEl); 

const h1El = document.querySelector(".title");  // selector の指定

const bodyEl = document.querySelector("body"); //場所を指示する
bodyEl.removeChild(h1El); // 削除


// #3-2
const divEl = document.createElement("div");
console.log(divEl);

const divEl = document.createElement("div");

const pEl = document.createElement("p");

const h2El = document.createElement("h2");

divEl.prepend(pEl);
divEl.prepend(h2El);
console.log(divEl);


// # 3-1
const title1 = document.getElementsByClassName("title");
console.log(title1);

const containers = document.getElementsByClassName("container");
console.log(containers)

const container = document.querySelector(".container");
console.log(container)

console.log("text");
