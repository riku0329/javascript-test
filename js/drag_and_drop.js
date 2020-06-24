{
  // ドラッグ中のアイテムを保持しておく変数
  // event.dataTransfer.setData()でIDをセットしておくサンプルばかりですが、
  // 動的に追加する要素に一意のIDを振るのは大変なのでドラッグするエレメント(event.target)をdragItemに入れるという
  // やり方でやってみましょう
  // let dragItem = null;
}

const dropItemEl = document.querySelector('.drop-item');
const addItem = document.querySelector('.js-add-item');

const dragItem = ['1', '2', '3', '4', '5', '6'];

const listItems = [];

let dragStartIndex;

const createList = () => {
  [...dragItem].map((item, index) => {
    const itemEl = document.createElement('div');
    itemEl.setAttribute('data-index', index);
    itemEl.innerHTML = `
      <div class="drag-item" draggable="true">
              ${item}
            </div>
    `;
    listItems.push(itemEl);
    dropItemEl.appendChild(itemEl);
  });
  addEventListeners();
};

function dragStart() {
  dragStartIndex = +this.closest('.drop-item > div').getAttribute('data-index');
  console.log(dragStartIndex);
}

function dragEnter() {
  dropItemEl.classList.add('drag-enter');
}

function dragLeave() {
  dropItemEl.classList.remove('drag-enter');
}

const dragOver = (e) => {
  e.preventDefault();
};

function dragDrop() {
  const dragEndIndex = +this.closest('div').getAttribute('data-index');
  console.log(dragEndIndex);
  console.log(this);
  swapItems(dragStartIndex, dragEndIndex);
  dropItemEl.classList.remove('drag-enter');
}

const swapItems = (fromIndex, toIndex) => {
  const itemFrom = listItems[fromIndex].querySelector('.drag-item');
  const itemTo = listItems[toIndex].querySelector('.drag-item');

  listItems[fromIndex].appendChild(itemTo);
  listItems[toIndex].appendChild(itemFrom);
};

const addEventListeners = () => {
  const draggables = document.querySelectorAll('.drag-item');
  const dragListItems = document.querySelectorAll('.drop-item div');

  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', dragStart);
  });

  dragListItems.forEach((item) => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
  });
};

createList();
