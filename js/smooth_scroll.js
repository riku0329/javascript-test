// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener(
  'DOMContentLoaded',
  function () {
    // 「window.scroll」を使ってスクロールさせましょう
    const scrollTriggers = document.querySelectorAll('a[href^="#"]');

    // clickイベント
    scrollTriggers.forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();

        // 要素の取得
        const href = trigger.getAttribute('href');
        const targetEl = document.getElementById(href.replace('#', ''));

        // heightの取得
        const currentPos = window.pageYOffset;
        const headerPos = document.querySelector('header').offsetHeight;
        const defaultFontSize = parseInt(
          window.getComputedStyle(document.body).fontSize,
          10
        );
        const offset = headerPos + defaultFontSize;
        const targetTop = targetEl.getBoundingClientRect().top;

        // ターゲットがなければ0
        const targetPos = targetEl
          ? currentPos + targetTop - offset
          : 0;

        window.scroll({
          top: targetPos,
          behavior: 'smooth',
        });
      });
    });
    // jQueryと違い要素一つ一つにイベントをセットしたり、値を変更したりしなければなりません
    // [JavaScript で forEach を使うのは最終手段](https://qiita.com/diescake/items/70d9b0cbd4e3d5cc6fce)
  },
  false
);
