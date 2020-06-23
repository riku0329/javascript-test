// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener(
  'DOMContentLoaded',
  function () {
    // 「window.scroll」を使ってスクロールさせましょう
    const scrollTopEl = document.querySelector('.scroll-top');
    // ボタンの表示・非表示のアニメーションは不要とします
    document.addEventListener('scroll', () => {
      const currentPos = window.pageYOffset;
      if (currentPos >= 30) {
        scrollTopEl.classList.add('show');
      } else {
        scrollTopEl.classList.remove('show');
      }
    });
  },
  false
);
