// change background color while scrolling through sections
document.onscroll = function () {
  const sections = document.getElementsByTagName("section");
  let scrollTop = document.documentElement.scrollTop;

  for (let i = 0; i < sections.length; i++) {
    let currentSection = sections[i];
    let heightBefore = 0;

    if (i > 0) {
      heightBefore = sections[i - 1].offsetHeight / 4;
    }

    if (scrollTop > currentSection.offsetTop - heightBefore) {
      let color = currentSection.getAttribute("data-color");
      document.body.style.background = color;
    }
  }
};
