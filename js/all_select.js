// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener(
  'DOMContentLoaded',
  function () {
    // 全選択をクリックしたときのイベントをセットします
    const allRight = document.querySelector('.js-item-to-right-all');
    allRight.addEventListener('click', () => {
      console.log('click');
    });
    // 各アイテムをクリックしたときのイベントをセットします
  },
  false
);
