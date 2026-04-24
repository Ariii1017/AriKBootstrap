document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".category-card");

  cards.forEach((card) => {
    const imageWrap = card.querySelector(".category-image-wrap");
    const collapse = card.querySelector(".collapse");

    imageWrap.addEventListener("click", () => {
      // 關掉其他卡片
      cards.forEach((otherCard) => {
        if (otherCard !== card) {
          otherCard.classList.remove("is-open");

          const otherCollapse = otherCard.querySelector(".collapse");
          const bsOtherCollapse = bootstrap.Collapse.getInstance(otherCollapse);

          if (bsOtherCollapse) {
            bsOtherCollapse.hide();
          }
        }
      });

      // 自己 flip
      card.classList.toggle("is-open");
    });

    // collapse 收起來時同步關閉 flip
    collapse.addEventListener("hidden.bs.collapse", () => {
      card.classList.remove("is-open");
    });
  });
});

function toggleProject(id) {
  const content = document.getElementById(id);

  if (content) {
    content.classList.toggle("show");
  }
}