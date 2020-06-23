// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener(
  'DOMContentLoaded',
  function () {
    const allCheck = document.getElementById('select-all');
    const checkEl = document.querySelectorAll('.js-check');
    const selectedItemsEl = document.getElementById('selected-items');
    console.log(checkEl);

    // 要素のコピー
    const appendItem = (child) => {
      const item = child.parentElement.querySelector('span').cloneNode(true);
      console.log(child);
      selectedItemsEl.appendChild(item);
    };

    // 全選択をクリックしたときのイベントをセットします
    allCheck.onchange = () => {
      if (allCheck.checked === true) {
        checkEl.forEach((check) => {
          check.checked = true;
          appendItem(check);
        });
      } else {
        checkEl.forEach((check) => (check.checked = false));
      }
    };

    // 各アイテムをクリックしたときのイベントをセットします
    checkEl.forEach((check) =>
      check.addEventListener('click', () => {
        const checkedEl = document.querySelectorAll(
          '.js-check[type="checkbox"]:checked'
        );
        if (checkEl.length === checkedEl.length) {
          allCheck.checked = true;
        } else {
          allCheck.checked = false;
        }

        if (check.checked === true) {
          appendItem(check);
        }
      })
    );
  },
  false
);
