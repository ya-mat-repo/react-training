const onClickAdd = () => {
  const inputText = document.querySelector(".input-area__input-box").value;
  document.querySelector(".input-area__input-box").value = "";

  const item = document.createElement("li");
  item.className = "list-row";

  const div = document.createElement("div");

  const span = document.createElement("span");
  span.innerText = inputText;
  span.className = "item-text";

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.className = "complete-button";

  // 未完了タスクの完了ボタンを押した時の処理
  completeButton.addEventListener("click", () => {
    const _li = document.createElement("li");
    _li.className = "list-row";
    const _div = document.createElement("div");
    const _span = document.createElement("span");
    _span.innerText = span.innerText;
    _span.className = "item-text";
    const _button = document.createElement("button");
    _button.innerText = "戻す";
    _button.className = "back-incomplete-button";

    // 完了タスクの戻すボタンを押した時の処理
    _button.addEventListener("click", () => {
      addItem(item, ".incomplete-area__rows");
      removeItem(_li, ".complete-area__rows");
    });

    const removeButton = document.createElement("button");
    removeButton.innerText = "削除";
    removeButton.className = "remove-button";

    // 完了タスクの削除ボタンを押した時の処理
    removeButton.addEventListener("click", () => {
      removeItem(_li, ".complete-area__rows");
    });
    
    // 完了したタスクエリアにアイテムを追加
    _div.appendChild(_span);
    _div.appendChild(_button);
    _div.appendChild(removeButton);
    _li.appendChild(_div);
    addItem(_li, ".complete-area__rows");

    //未完了エリアからアイテムを削除
    removeItem(item, ".incomplete-area__rows");
  });

  const removeButton = document.createElement("button");
  removeButton.innerText = "削除";
  removeButton.className = "remove-button";
  removeButton.addEventListener("click", () => {
    removeItem(item, ".incomplete-area__rows");
  });

  div.appendChild(span);
  div.appendChild(completeButton);
  div.appendChild(removeButton);

  item.appendChild(div);

  const addItemTarget = document.querySelector(".incomplete-area__rows");
  addItemTarget.appendChild(item); 

}

const addItem = (target, addNode) => {
  const targetArea = document.querySelector(addNode);
  targetArea.appendChild(target);
}
const removeItem = (target, removeNode) => {
  const targetArea = document.querySelector(removeNode);
  targetArea.removeChild(target);
}
