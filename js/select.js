// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener(
  'DOMContentLoaded',
  () => {
    // 取得した要素を配列に一旦変換して処理を行った方が楽にできます
    const noneSelectEl = document.getElementById('none-selected-items');
    const slideToRight = document.querySelector('.js-item-to-right');
    const allSlideToRight = document.querySelector('.js-item-to-right-all');

    const selectedEl = document.getElementById('selected-items');
    const slideToLeft = document.querySelector('.js-item-to-left');
    const allSlideToLeft = document.querySelector('.js-item-to-left-all');

    let items = [];

    // 右に移動
    slideToRight.addEventListener('click', () => {
      sliedItem(noneSelectEl, selectedEl);
    });

    allSlideToRight.addEventListener('click', () => {
      allSlideItem(noneSelectEl, selectedEl);
    });

    // 左に移動
    slideToLeft.addEventListener('click', () => {
      sliedItem(selectedEl, noneSelectEl);
    });

    allSlideToLeft.addEventListener('click', () => {
      allSlideItem(selectedEl, noneSelectEl);
    });

    const sliedItem = (fromEl, toEl) => {
      const lenght = fromEl.options.length;
      for (let i = 0; i < lenght; i++) {
        const item = fromEl.options[i];
        if (fromEl.options[i].selected === true) {
          items.push(item);
          console.log(item);
          fromEl.options[i].selected = false;
        }
      }

      items.map((item) => {
        toEl.appendChild(item);
      });
      items = [];
    };

    const allSlideItem = (fromEl, toEl) => {
      const lenght = fromEl.options.length;
      for (let i = 0; i < lenght; i++) {
        const item = fromEl.options[i];
        items.push(item);
        console.log(item);
        fromEl.options[i].selected = false;
      }

      items.map((item) => {
        toEl.appendChild(item);
      });
      items = [];
    };

    // jQueryと違い要素一つ一つにイベントをセットしたり、値を変更したりしなければなりません

    // [JavaScript で forEach を使うのは最終手段](https://qiita.com/diescake/items/70d9b0cbd4e3d5cc6fce)
  },
  false
);
