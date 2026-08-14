(() => {
  const dialog = document.querySelector("#tiger-article-dialog");
  const openButton = document.querySelector("[data-open-tiger-article]");
  if (!(dialog instanceof HTMLDialogElement) || !(openButton instanceof HTMLElement)) return;

  const slides = [...dialog.querySelectorAll("[data-article-slide]")];
  const count = dialog.querySelector("[data-article-count]");
  let current = 0;

  const show = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => { slide.hidden = slideIndex !== current; });
    if (count) count.textContent = `${current + 1} / ${slides.length}`;
  };

  openButton.addEventListener("click", () => { show(0); dialog.showModal(); });
  dialog.querySelector("[data-close-tiger-article]")?.addEventListener("click", () => dialog.close());
  dialog.querySelector("[data-article-prev]")?.addEventListener("click", () => show(current - 1));
  dialog.querySelector("[data-article-next]")?.addEventListener("click", () => show(current + 1));
  dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") show(current - 1);
    if (event.key === "ArrowRight") show(current + 1);
  });
})();
