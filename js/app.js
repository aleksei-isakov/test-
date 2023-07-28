/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */

import { BurgerMenu } from './modules/BurgerMenu';
import { HeaderSearch } from './modules/HeaderSearch';
import { VisibilityModeChange } from './modules/VisibilityModeChange';
import * as aboutSection from './modules/aboutSectionModals.js';
import * as modalTooltipContainer from './modules/modalTooltip.js';
import { newsSlider } from './modules/news-slider.js';
import {
  leadBannerModal,
  leadVisionSideButton,
  subscribeModal,
} from './modules/lead.js';
import { paginationContent } from './modules/pagination.js';
import { showHidePassword } from './modules/login.js';
import { ratingButtonClick } from './modules/ratingBtn.js';
import { dropDownMenu } from './modules/dropDown.js';
import { newsChoise } from './modules/newsSelects.js';
import { libraryChoise } from './modules/librarySelects.js';
import { initSelects } from './modules/initSelects.js';

libraryChoise();
newsChoise();
dropDownMenu();
paginationContent();
ratingButtonClick();
showHidePassword();
subscribeModal();
VisibilityModeChange();
HeaderSearch();
BurgerMenu();
leadVisionSideButton();
leadBannerModal();
newsSlider();
aboutSection.aboutSectionSwiper();
aboutSection.aboutSectionModals();
modalTooltipContainer.modalTooltipInit();
initSelects();

