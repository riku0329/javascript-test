// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener(
  'DOMContentLoaded',
  function () {
    // 「window.scroll」を使ってスクロールさせましょう
    const SPEED = 350;
    // jQueryと違い要素一つ一つにイベントをセットしたり、値を変更したりしなければなりません
    const scrollTrigger = document.querySelector('a[href^="#"]');
    scrollTrigger.addEventListener('click', () => {
      console.log('hello');
    })
    // [JavaScript で forEach を使うのは最終手段](https://qiita.com/diescake/items/70d9b0cbd4e3d5cc6fce)
  },
  false
);
