// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener(
  'DOMContentLoaded',
  function () {
    const allCheck = document.getElementById('select-all');
    const checkEl = document.querySelectorAll('.js-check');
    const selectedItemsEl = document.getElementById('selected-items');

    // スプレッド構文に慣れるためスプレッド構文で配列作成
    const checkBox = [...checkEl];

    // 要素のクローンを作成
    const createClone = (element) =>
      element.parentElement.querySelector('span').cloneNode(true);

    // クローン要素をいれる変数
    let items = [];

    // 全選択をクリックしたときのイベントをセットします
    allCheck.addEventListener('click', () => {
      checkBox.map((item) => {
        if (allCheck.checked === true) {
          const child = createClone(item);
          item.checked = true;
          items.push(child);
          updateDOM();
        } else {
          item.checked = false;
          items = [];
          updateDOM();
        }
      });
    });

    // 各アイテムをクリックしたときのイベントをセットします
    checkBox.map((item) =>
      item.addEventListener('click', () => {
        // 現在チェックされているエレメントを取得
        const currentChecked = document.querySelectorAll(
          '.js-check[type="checkbox"]:checked'
        );

        // 中間状態かチェック
        currentChecked.length > 0
          ? (allCheck.indeterminate = true)
          : (allCheck.indeterminate = false);

        // 全選択かチェック
        if (checkEl.length === currentChecked.length) {
          allCheck.checked = true;
          allCheck.indeterminate = false;
        } else {
          allCheck.checked = false;
        }

        // spanのコピーを作成
        const child = createClone(item);

        // 選択されたアイテムを一覧に追加
        if (item.checked === true) {
          items.push(child);
          updateDOM();
        }

        // 選択されたアイテムを一覧から削除
        if (item.checked === false) {
          items = items.filter(
            (item) => item.textContent !== child.textContent
          );
          updateDOM();
        }
      })
    );

    // DOMの更新
    const updateDOM = () => {
      // 他にもっと良いHTMLの書き換えがあるかもしれません
      selectedItemsEl.innerHTML = '';
      items.forEach((item) => selectedItemsEl.appendChild(item));
    };
  },
  false
);
