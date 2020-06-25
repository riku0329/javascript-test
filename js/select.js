// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener(
  'DOMContentLoaded',
  () => {
    // 取得した要素を配列に一旦変換して処理を行った方が楽にできます
    const noneSelectEl = document.getElementById('none-selected-items');
    const selectedEl = document.getElementById('selected-items');

    const slideToRight = document.querySelector('.js-item-to-right');
    const allSlideToRight = document.querySelector('.js-item-to-right-all');
    const slideToLeft = document.querySelector('.js-item-to-left');
    const allSlideToLeft = document.querySelector('.js-item-to-left-all');

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

      // nodeListから配列に変換
      const options = Array.from(fromEl.querySelectorAll('option'));

      //選択されたオプションを変数にいれる
      const filterOptions = options.filter((otption) => otption.selected === true);

      // 要素を移動させる
      filterOptions.forEach((item) => {
        toEl.appendChild(item);
      });

      // optionの選択解除
      options.map((option) => (option.selected = false));
    };

    const allSlideItem = (fromEl, toEl) => {
      const options = Array.from(fromEl.querySelectorAll('option'));
      options.forEach((option) => {
        toEl.appendChild(option);
      });
      options.map((option) => (option.selected = false));
    };

    // jQueryと違い要素一つ一つにイベントをセットしたり、値を変更したりしなければなりません

    // [JavaScript で forEach を使うのは最終手段](https://qiita.com/diescake/items/70d9b0cbd4e3d5cc6fce)
  },
  false
);
