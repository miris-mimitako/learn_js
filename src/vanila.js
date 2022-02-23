
// #3-4
const onClickAdd = () =>{
    const textEl = document.querySelector(".add-text");

    const text = textEl.value;

    textEl.value = "";

    const li = document.createElement("li");

    const div = document.createElement("div");

    const p = document.createElement("p");
    p.textContent = text;

    const button = document.createElement("button");
    button.textContent = "削除"

    button.addEventListener("click", () =>{
        const deleteTarget = button.closest("li");

        document.querySelector(".memo-list")
    });

    div.appendChild(p);
    div.appendChild(button);

    li.appendChild(div);

    document.querySelector(".memo-list").appendChild(li);
};

document
    .querySelector(".add-button")
    .addEventListener("click", () => onClickAdd());