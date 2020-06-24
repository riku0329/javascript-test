// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener(
  'DOMContentLoaded',
  function () {
    // 「window.scroll」を使ってスクロールさせましょう
    const scrollTriggers = document.querySelectorAll('a[href^="#"]');
    scrollTriggers.forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        const href = trigger.getAttribute('href');
        const currentPos = window.pageYOffset;
        const targetEl = document.getElementById(href.replace('#', ''));

        if (targetEl) {
          e.preventDefault();
          const targetPos =
            currentPos + targetEl.getBoundingClientRect().top - 70;
          console.log(targetPos);
          window.scroll({
            top: targetPos,
            behavior: 'smooth',
          });
        }
      });
    });
    // jQueryと違い要素一つ一つにイベントをセットしたり、値を変更したりしなければなりません
    // [JavaScript で forEach を使うのは最終手段](https://qiita.com/diescake/items/70d9b0cbd4e3d5cc6fce)
  },
  false
);
