const list = document.getElementById('list');
const createBtn = document.getElementById('create-btn');

let todos = [];

createBtn.addEventListener('click', createNewTodo);
// addEventListener  => 어떠한 이벤트가 발생했을 때 함수를 등록.
function createNewTodo () {
    // 새로운 아이템 객체 생성
    const item = {
        id: new Date().getTime(), 
        text: '', 
        complete: false 
    }

    // 배열 처음에 새로운 아이템 추가
    todos.unshift(item);

    // 요소 생성하기
    const {itemEl, inputEl} = createTodoElement(item)
    

    // 리스트 요소 안에 방금 생성한 아이템 요소 추가
    list.prepend(itemEl)

    inputEl.removeAttribute('disabled');

    inputEl.focus();
}

function createTodoElement() {
    const itemEl = document.createElement('div');
    itemEl.classList.add('item');

    const checkboxEl = document.createElement('input');
    checkboxEl.type = 'checkbox';

    if(item.complete) {
        itemEl.classList.add('complete');

    }

    const inputEl = document.createElement('input');
    inputEl.type = 'text';
    inputEl.value = item.text;
    inputEl.setAttribute('disabled', '');

    const actionEl = document.createElement('div');
    actionEl.classList.add('actions');

    const editBtnEl = document.createElement('button');
    removeBtnEl.classList.add('material-icons', 'remove-btn');
    removeBtnEl.innerText = 'remove_circles';

    actionEl.append(editBtnEl);
    actionEl.append(removeBtnEl);

    itemEl.append(checkboxEl);
    itemEl.append(inputEl);
    itemEl.append(actionEl);

    return {itemEl, inputEl, editBtnEl, removeBtnEl}
}
