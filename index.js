const atcNovel = document.getElementById("novel");

function mchSwap() {
  const pckSwap = atcNovel.querySelectorAll(`[id^="swapbtn"]`);

  for (let idxA = 0; idxA < pckSwap.length; idxA++) {
    const idxCt = idxA % 2;

    if (idxCt === 0) {
      const idxItem = idxA / 2 + 1,
        swapBtn = atcNovel.querySelectorAll(`[id^="swapbtn${idxItem}"]`),
        swapPnl = atcNovel.querySelectorAll(`[id^="swappnl${idxItem}"]`);

      for (let idxB = 0; idxB < swapBtn.length; idxB++) {
        const eltIA = swapBtn[idxB];

        eltIA.addEventListener("click", () => {
          swapPnl[0].classList.toggle("show");
          swapPnl[1].classList.toggle("show");
        });
      }
    }
  }
}

function mchTabs() {
  const pckTabs = atcNovel.querySelectorAll(`[role="tablist"]`);

  for (let idxA = 0; idxA < pckTabs.length; idxA++) {
    const tablist = pckTabs[idxA],
      tabIA = idxA + 1;

    const tabBtns = tablist.querySelectorAll(`[id^="tab${tabIA}-"]`),
      tabPnls = tablist.querySelectorAll(`:scope > [id^="tabpanel${tabIA}-"]`);

    for (let idxB = 0; idxB < tabBtns.length; idxB++) {
      const tabBtn = tabBtns[idxB];

      tabBtn.addEventListener("click", () => {
        const tabAct = tablist.querySelector(`.active[id^="tab${tabIA}-"]`),
          tabShow = tablist.querySelector(
            `:scope >.show[id^="tabpanel${tabIA}-"]`
          );

        tabAct.classList.toggle("active");
        tabAct.setAttribute("aria-selected", "false");
        tabBtn.classList.toggle("active");
        tabBtn.setAttribute("aria-selected", "true");

        tabShow.classList.toggle("show");
        tabPnls[idxB].classList.toggle("show");
      });
    }
  }
}

function mchAccord() {
  const pckAccord = atcNovel.querySelectorAll(`[id^="accordbtn"]`);

  for (let idxA = 0; idxA < pckAccord.length; idxA++) {
    const idxCt = idxA + 1,
      accordbtn = atcNovel.querySelector(`#accordbtn${idxCt}`),
      accordPnl = atcNovel.querySelector(`#accordpnl${idxCt}`),
      accordCtx = accordbtn.querySelector(`.context`);

    let context = 0;

    accordbtn.addEventListener("click", () => {
      accordPnl.classList.toggle("show");

      if (idxCt > 1) {
        accordbtn.parentNode.classList.toggle("show");
      }

      switch (context) {
        case 0:
          context++;
          accordCtx.textContent = "Hide";

          accordbtn.classList.toggle("active");
          accordbtn.setAttribute("aria-expanded", "true");

          break;
        default:
          context = 0;
          accordCtx.textContent = "Show";

          accordbtn.classList.toggle("active");
          accordbtn.setAttribute("aria-expanded", "false");
          break;
      }
    });
  }
}

function mchPck() {
  const pckSrOnly = atcNovel.querySelectorAll(`.pck-sr-only`),
    pckItem = atcNovel.querySelectorAll(`.pck-item`);

  for (let idx = 0; idx < pckSrOnly.length; idx++) {
    const eltIA = pckSrOnly[idx];

    eltIA.classList.replace("pck-sr-only", "sr-only");
  }

  for (let idx = 0; idx < pckItem.length; idx++) {
    const eltIA = pckItem[idx];

    eltIA.classList.replace("pck-item", "item");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (atcNovel !== undefined || atcNovel !== null) {
    mchPck();
    mchTabs();
    mchSwap();
    mchAccord();
  }
});
