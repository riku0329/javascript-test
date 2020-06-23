// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener(
  'DOMContentLoaded',
  () => {
    // 取得した要素を配列に一旦変換して処理を行った方が楽にできます
    const noneSelectEl = document.getElementById('none-selected-items');
    const slideToRight = document.querySelector('.js-item-to-right');
    const selectedEl = document.getElementById('selected-items');
    const op = document.createElement('option');
    const items = [];

    noneSelectEl.onchange = (e) => {
      items.push(noneSelectEl.value);
      const select = noneSelectEl.options[noneSelectEl.selectedIndex].text;
      console.log(select);
      console.log(items);
    };

    slideToRight.addEventListener('click', (e) => {
      e.preventDefault();
      items.map((item) => {
        op.innerHTML = `
          ${item}
        `;
        console.log(item);
        selectedEl.appendChild(op);
      });
      noneSelectEl.getAttribute('selected', false);
    });

    // jQueryと違い要素一つ一つにイベントをセットしたり、値を変更したりしなければなりません

    // [JavaScript で forEach を使うのは最終手段](https://qiita.com/diescake/items/70d9b0cbd4e3d5cc6fce)
  },
  false
);
