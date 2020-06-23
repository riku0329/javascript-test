// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener(
  'DOMContentLoaded',
  () => {
    // 取得した要素を配列に一旦変換して処理を行った方が楽にできます
    const noneSelectEl = document.getElementById('none-selected-items');
    const slideToRight = document.querySelector('.js-item-to-right');
    const selectedEl = document.getElementById('selected-items');
    let items = [];

    slideToRight.addEventListener('click', () => {
      const lenght = noneSelectEl.options.length;

      // セレクトされたオプションを配列にいれる
      for (let i = 0; i < lenght; i++) {
        const item = noneSelectEl.options[i];
        if (noneSelectEl.options[i].selected === true) {
          items.push({
            // key: item.text.replace('item', ''),
            text: item.text,
            value: item.value,
          });
          console.log(items);
          noneSelectEl.options[i].selected = false;
        }
      }

      // 右に移動
      items.map((item) => {
        let option = document.createElement('option');
        // let key = Number(item.key) - 1;
        option.setAttribute('value', item.value);
        option.innerHTML = item.text;
        selectedEl.appendChild(option);
        // noneSelectEl.removeChild(noneSelectEl.options[key]);
      });
      items = [];
    });

    // jQueryと違い要素一つ一つにイベントをセットしたり、値を変更したりしなければなりません

    // [JavaScript で forEach を使うのは最終手段](https://qiita.com/diescake/items/70d9b0cbd4e3d5cc6fce)
  },
  false
);
