
  const burgerButtonMain = document.querySelector('.burger-menu__open-icon');
  const burgerButtonCommon = document.querySelector('.inner-header__burger-container');
  const closeTrigger = document.querySelector('.burger-menu__close-icon')
  const burgerMenu = document.querySelector('.burger-menu')

  /**
   * Initialize the menu functionality.
   */
  if (burgerButtonCommon) {
    burgerButtonMain.addEventListener('click', () => {
      if (burgerMenu.classList.contains('menu-hidden')) {
        burgerMenu.classList.remove('menu-hidden')
      }
    });
  }
  if (burgerButtonMain) {
    burgerButtonMain.addEventListener('click', () => {
      if (burgerMenu.classList.contains('menu-hidden')) {
        burgerMenu.classList.remove('menu-hidden')
      }
    });
  }
  if (closeTrigger) {
    closeTrigger.addEventListener('click', () => {
      if (!burgerMenu.classList.contains('menu-hidden')) {
        burgerMenu.classList.add('menu-hidden')
      }
    });
  }

