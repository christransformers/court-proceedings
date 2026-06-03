/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			386: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkorw"] = self["webpackChunkorw"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/**
 * @file
 * Custom JS.
 */

window.toggleUserMenu = function () {
  const chevron = document.getElementById('btn-user-chevron');
  const menu = document.getElementById('euser-dropdown-ul');
  const userBox = document.getElementById('user-box');
  const userExpandMore = chevron.querySelector("#user-expand-more");
  const userExpandLess = chevron.querySelector("#user-expand-less");
  if (userExpandMore.style.display !== 'none') {
    userExpandMore.style.display = 'none';
    userExpandLess.style.display = 'inline-block';
    menu.style.display = "block";
    userBox.classList.add("open");
  } else {
    userExpandMore.style.display = 'inline-block';
    userExpandLess.style.display = 'none';
    menu.style.display = "";
    userBox.classList.remove("open");
  }
};
function switchDelegator(delegatorId) {
  const path = window.contextPath
  // + "/eservices/switchDelegator.do?delegatorId="
  + "/landing?delegatorId=" + delegatorId.value;
  const uri = path.replace('NaN/', '');
  window.location = uri;
}
function toggleDelegatorDDL(element) {
  element.style.display = "none";
  const ddlWrapper = document.getElementById("delegator-ddl-wrapper");
  ddlWrapper.style.display = "inline-block";
  jQuery(".chosen-select").chosen("destroy");
  jQuery(".chosen-select").chosen({
    rtl: true
  });
  jQuery(".chosen-select").trigger("chosen:updated");
}

// Close the account menu when a user clicks away from the area.
document.addEventListener('click', function (event) {
  let parentNav = document.querySelector(".nav.euser");
  let userExpandMore = document.getElementById("user-expand-more");
  if (parentNav && !parentNav.contains(event.target) && userExpandMore && userExpandMore.style.display === 'none') {
    toggleUserMenu();
  }
});
function addExternalLinkIcons() {
  // Check if the document contains the class .frontpage
  const isFrontPage = document.querySelector('.path-frontpage') !== null;

  // Add external link icon to external links within .region.region--main
  document.querySelectorAll('.region.region--content a, .region.region-above-footer a').forEach(function (link) {
    try {
      // Check if the href is valid and not empty
      if (!link.href || link.href === '#' || link.href.startsWith('javascript:')) {
        return;
      }
      const url = new URL(link.href);
      if (url.protocol === 'mailto:' || link.id === 'block-orw-browseservices' || link.id === 'block-orw-browseservicesauthenticated' || link.id === 'block-orw-browseservicesrea' || link.id === 'block-orw-courtlist' || link.classList.contains('view-current-alerts') || link.classList.contains('block-court-list') || link.classList.contains('tiles-button') || link.classList.contains('link-button') || url.href.startsWith('https://s3-ap') || isFrontPage || link.href === 'javascript:void(0)' || url.pathname === '/content/landing' || url.pathname.startsWith('/content/landing')) {
        return;
      }
      if (url.hostname !== window.location.hostname) {
        link.classList.add('external-link');

        // Set target to _blank if not already set
        if (!link.hasAttribute('target') || link.getAttribute('target') === '') {
          link.setAttribute('target', '_blank');
        }

        // Check if the icon is already added to prevent duplicates
        // if (!link.querySelector('.material-icons')) {
        if (!link.nextElementSibling || !link.nextElementSibling.classList.contains('material-icons')) {
          const icon = document.createElement('span');
          icon.className = 'material-icons';
          icon.setAttribute('aria-hidden', 'true');
          icon.setAttribute('role', 'presentation');
          icon.textContent = 'open_in_new';
          // link.appendChild(icon);
          link.parentNode.insertBefore(icon, link.nextSibling);
        }
      }
    } catch (error) {
      console.error('Invalid URL:', link.href, error);
    }
  });
}
function guideTilesSVGSwap() {
  const guideTiles = document.querySelectorAll('.guide-tiles');
  guideTiles.forEach(tile => {
    const img = tile.querySelector('.guide-icon img');
    console.log("img:" + img);
    if (img) {
      // Save the original 'src'
      const originalSrc = img.src;
      const hoverSrc = originalSrc.replace(/(.*-brand-dark)\.svg$/, '$1-reverse.svg');

      // Only apply the reverse version on hover
      tile.addEventListener('mouseover', () => {
        img.src = hoverSrc;
      });

      // Revert to original sec when hover ends
      tile.addEventListener('mouseleave', () => {
        img.src = originalSrc;
      });
      console.log("img source:" + img);
    }
  });
}

// Disable Bootstrap 5 Tooltips globally
if (window.bootstrap && bootstrap.Tooltip) {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.forEach(function (el) {
    el.removeAttribute('data-bs-toggle');
    el.removeAttribute('data-bs-placement');
    el.removeAttribute('title');
  });
}

// Initialize NSW Design System Tooltips
// if (typeof window.NSW !== "undefined" && window.NSW.tooltip) {
//   window.NSW.tooltip.init();
// }

window.onload = () => {
  const delegatorDDL = document.getElementById("delegator-ddl");
  const delegatorLink = document.getElementById("delegator-link");
  const delegatorDDLWrapper = document.getElementById("delegator-ddl-wrapper");
  if (delegatorDDL) {
    if (delegatorDDL.value) {
      delegatorLink.style.display = "inline-block";
      delegatorDDLWrapper.style.display = "none";
    } else {
      // delegatorLink.style.display = "none";
      // delegatorDDLWrapper.style.display = "inline-block";
    }
  }

  // Disable tel links on non-mobile devices
  if (!/Mobi|Android/i.test(navigator.userAgent)) {
    var telLinks = document.querySelectorAll('a.tel-link');
    telLinks.forEach(function (link) {
      link.removeAttribute('href');
      link.style.pointerEvents = 'none';
      link.style.cursor = 'default';
      // link.style.color = 'grey';
    });
  }

  // Automatically update the TOC title from h2 to h4
  const tocTitle = document.querySelector('.top-title.h2');
  if (tocTitle) {
    tocTitle.classList.remove('h2');
    tocTitle.classList.add('h4');
  }

  // Change margin-top of the first h2 in .region-inner.region-inner--main if .nsw-hero-banner exists
  if (document.querySelector('.nsw-hero-banner')) {
    const firstH2 = document.querySelector('.region-inner.region-inner--main h2');
    if (firstH2) {
      firstH2.style.marginTop = '0';
    }
  } else {
    // Add margin-top to .region--main if banner doesn't exist
    const regionMain = document.querySelector('.nsw-layout__main');
    if (regionMain) {
      regionMain.style.marginTop = '2rem';
    }
    const regionSidebar = document.querySelector('.nsw-layout__sidebar');
    if (regionSidebar) {
      regionSidebar.style.marginTop = '2rem';
    }
  }

  // Add external link icon to external links within .region.region--main
  addExternalLinkIcons();

  // Swap SVGs in guide tiles
  guideTilesSVGSwap();
};
jQuery(document).ready(function () {
  const $regionAboveFooter = jQuery('.region--above-footer');
  const $targetElement = $regionAboveFooter.length ? $regionAboveFooter : jQuery('.region--main');

  // $targetElement.css('margin-bottom', '3.75rem');

  // Function to adjust margin-bottom based on the last child condition
  function adjustMarginBasedOnLastChild() {
    const lastChild = $regionAboveFooter.children().last();
    if (lastChild.hasClass('field--name-field-paragraph-guides-group')) {
      $regionAboveFooter.css('margin-bottom', '0');
    }
  }

  // Call the function to potentially override the default margin
  adjustMarginBasedOnLastChild();

  // Use jQuery to select all iframes
  jQuery('iframe').each(function (index) {
    // Check if the iframe's src contains "https://www.youtube.com"
    if (/https:\/\/www\.youtube\.com/.test(this.src)) {
      // Add the 'youtube-outline' class to the parent div
      // var $parent = jQuery(this).parent().attr('tabindex', index + 1).addClass("youtube-outline");
      var $parent = jQuery(this).parent().addClass("youtube-outline");

      // Set the width and height of the parent div based on the iframe
      $parent.css({
        width: this.width || "300px",
        height: this.height || "150px"
      });

      // Add focus and blur event listeners to handle focus styles
      $parent.on('focus', function () {
        console.log('Focused parent: ', $parent.attr('class'));
        $parent.addClass('focused');
      }).on('blur', function () {
        console.log('Blur state parent: ', $parent.attr('class'));
        $parent.removeClass('focused');
      });
      var iframe = document.querySelector('.youtube-outline iframe');
      iframe.addEventListener('click', function () {
        // Set focus on the parent div when the iframe is clicked
        this.parentNode.focus();
      });
    }
  });
});

// (function ($, Drupal, drupalSettings) {
//   Drupal.behaviors.mythemeTabIndex = {
//     attach: function (context, settings) {
//       // Add tabindex to elements with a specific class.
//       $('.site-logo', context).attr('tabindex', '1');
//       $('.button.button--login', context).attr('tabindex', '2');
//     }
//   };
// })(jQuery, Drupal, drupalSettings);

(function ($, Drupal) {
  // Behavior to automatically update the TOC title from h2 to h4
  Drupal.behaviors.updateTOCTitle = {
    attach: function (context, settings) {
      $('.toc-title.h2', context).one('updateTOCTitle', function () {
        var newTitle = $('<h4></h4>').addClass('toc-title h4').html($(this).html());
        $(this).replaceWith(newTitle);
      }).trigger('updateTOCTitle');
    }
  };
  Drupal.behaviors.tocLabelOverride2x = {
    attach: function (context) {
      // Ensure jQuery and the old toc plugin are present.
      if (!window.jQuery || !jQuery.fn || !jQuery.fn.toc || !jQuery.fn.toc.defaults) {
        return;
      }

      // Keep original behavior for everything else.
      var originalHeaderText = jQuery.fn.toc.defaults.headerText || function (i, el, $el) {
        return $el ? $el.text() : jQuery(el).text();
      };

      // Case-insensitive match for our target phrase.
      var TARGET_PHRASE = /using\s+online\s+court/i;

      /**
       * Override signature for toc v0.3.2:
       * headerText(index, element, $element)
       */
      jQuery.fn.toc.defaults.headerText = function (i, el, $el) {
        try {
          var text = ($el ? $el.text() : jQuery(el).text()).trim();
          if (TARGET_PHRASE.test(text)) {
            return 'Using Online Court';
          }
          return originalHeaderText.call(this, i, el, $el);
        } catch (e) {
          // Fail-safe: never break the TOC.
          return originalHeaderText.call(this, i, el, $el);
        }
      };
    }
  };

  // Behavior to initialize the NSW Design System Navigation
  Drupal.behaviors.nswDesignSystemNav = {
    attach: function (context, settings) {
      const navElement = document.getElementById('main-nav');
      const openNavButton = document.querySelector('.js-open-nav');
      const closeNavButton = document.querySelector('.js-close-nav');

      // Function to open the navigation
      function openNav() {
        if (navElement) {
          navElement.classList.add('active'); // Add 'active' class to nav element
          openNavButton.setAttribute('aria-expanded', 'true'); // Set ARIA attributes
        }
      }

      // Function to close the navigation
      function closeNav() {
        if (navElement) {
          navElement.classList.remove('active'); // Remove 'active' class from nav element
          closeNavButton.setAttribute('aria-expanded', 'false'); // Update ARIA attributes
        }
      }

      // Attach click event listeners
      if (openNavButton) {
        openNavButton.addEventListener('click', openNav);
      } else {
        console.error('Open navigation button not found.');
      }
      if (closeNavButton) {
        closeNavButton.addEventListener('click', closeNav);
      } else {
        console.error('Close navigation button not found.');
      }
    }
  };

  // Click away listener for closing the user menu
  // $(document).on('click', function (event) {
  //   if (!$('.nav.euser', document).has(event.target).length && $('#user-expand-more').css('display') === 'none') {
  //     Drupal.behaviors.toggleUserMenu.attach(document, Drupal.settings);
  //   }
  // });

  Drupal.behaviors.accordionAutocompleteSearch = {
    attach: function (context, settings) {
      const searchInput = context.querySelector('.nsw-form__input');
      const accordionRows = context.querySelectorAll('.accordion-rows li');
      if (!searchInput || accordionRows.length === 0) return;

      // Collect items: accordion form text + title + href
      const items = [];
      document.querySelectorAll('.nsw-accordion__title').forEach(titleEl => {
        const accordionTitle = titleEl.textContent.trim();
        const rows = titleEl.nextElementSibling.querySelectorAll('.accordion-rows li a');
        rows.forEach(link => {
          items.push({
            title: accordionTitle,
            text: link.querySelector('.accordion-row-text').textContent.trim(),
            href: link.getAttribute('href')
          });
        });
      });

      // Create autocomplete dropdown
      const dropdown = document.createElement('ul');
      dropdown.className = 'nsw-form__predictive-list';
      dropdown.id = "search-listbox";
      dropdown.role = 'listbox';
      dropdown.style.display = 'none';
      searchInput.parentNode.appendChild(dropdown);

      // Show suggestions on input
      searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase();
        dropdown.innerHTML = '';
        if (query.length < 2) {
          dropdown.style.display = 'none';
          searchInput.setAttribute('aria-expanded', 'false');
          return;
        }

        // const matches = items.filter(item => item.text.toLowerCase().includes(query));

        const normalize = str => str.toLowerCase().replace(/[()\.,]/g, ' ') // replace punctuation with space
        .split(/\s+/) // split by spaces
        .filter(Boolean);
        const queryWords = normalize(query);
        const matches = items.filter(item => {
          const textWords = normalize(item.text);
          return queryWords.every(word => textWords.some(t => t.includes(word)) // partial match allowed
          );
        });
        searchInput.setAttribute('aria-expanded', matches.length > 0 ? 'true' : 'false');
        matches.forEach((match, index) => {
          const li = document.createElement('li');
          li.role = 'option';
          li.id = `option-${index + 1}`;
          function escapeRegex(str) {
            return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          }
          const safeQuery = escapeRegex(query);
          const regex = new RegExp(`(${safeQuery})`, 'gi');
          const highlightedText = match.text.replace(regex, '<span>$1</span>');
          const link = document.createElement('a');
          link.innerHTML = highlightedText + ' - ' + match.title;
          link.href = match.href;
          link.tabIndex = '-1';
          li.appendChild(link);

          // Handle mouse selection using mousedown
          li.addEventListener('click', e => {
            dropdown.style.display = 'none';
            searchInput.setAttribute('aria-expanded', 'false');
          });
          dropdown.appendChild(li);
        });
        if (matches.length === 0) {
          const li = document.createElement('li');
          li.textContent = 'No results';
          li.className = 'no-results';
          dropdown.appendChild(li);
        }
        dropdown.style.display = 'block';
        enablePredictiveKeyboardNavigation(searchInput, dropdown);
      });

      // Hide dropdown on outside click
      document.addEventListener('click', e => {
        if (!dropdown.contains(e.target) && e.target !== searchInput) {
          dropdown.style.display = 'none';
          searchInput.setAttribute('aria-expanded', 'false');
        }
      });

      // Delay hiding on blur to allow click
      searchInput.addEventListener('blur', () => {
        setTimeout(() => {
          dropdown.style.display = 'none';
          searchInput.setAttribute('aria-expanded', 'false');
        }, 250);
      });
    }
  };
})(jQuery, Drupal);

// Keyboard navigation function
function enablePredictiveKeyboardNavigation(input, list) {
  let currentIndex = -1;
  input.addEventListener('keydown', e => {
    const options = list.querySelectorAll('li[role="option"]');
    if (options.length === 0) return;
    if (e.key === 'Escape') {
      list.style.display = 'none';
      input.setAttribute('aria-expanded', 'false');
      currentIndex = -1;
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      currentIndex = (currentIndex + 1) % options.length;
      updateActiveOption(options);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      currentIndex = (currentIndex - 1 + options.length) % options.length;
      updateActiveOption(options);
    } else if (e.key === 'Enter' && currentIndex >= 0) {
      e.preventDefault();
      options[currentIndex].querySelector('a').click();
    }
  });
  function updateActiveOption(options) {
    options.forEach(opt => opt.classList.remove('active'));
    const activeItem = options[currentIndex];
    activeItem.classList.add('active');
    input.setAttribute('aria-activedescendant', activeItem.id);

    // Scroll active item into view
    activeItem.scrollIntoView({
      block: 'nearest',
      behavior: 'smooth'
    });
  }
}

// Accordion functionality integration from main.js

function createButtons({
  textContent
}) {
  const fragment = document.createDocumentFragment();
  const button = document.createElement('button');
  const uID = `accordion-${Math.random().toString(36).substr(2, 9)}`;
  button.textContent = textContent;
  button.setAttribute('type', 'button');
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-controls', uID);
  button.classList.add('nsw-accordion__button');
  button.insertAdjacentHTML('beforeend', `
    <span class="material-icons nsw-material-icons" focusable="false" aria-hidden="true">keyboard_arrow_down</span>
  `);
  fragment.appendChild(button);
  return fragment;
}
class Accordion {
  constructor(element) {
    this.element = element;
    const [expandAll, collapseAll] = Array.from(this.element.querySelectorAll('.nsw-accordion__toggle button'));
    this.accordionHeadingClass = '.nsw-accordion__title';
    this.headings = this.element.querySelectorAll(this.accordionHeadingClass);
    this.expandAllBtn = expandAll;
    this.collapseAllBtn = collapseAll;
    this.isExpandedOnLoad = this.element.querySelectorAll('.nsw-accordion__open');
    this.buttons = [];
    this.content = [];
  }
  init() {
    this.setUpDom();
    this.controls();
  }
  setUpDom() {
    this.element.classList.add('ready');
    if (this.collapseAllBtn) {
      this.collapseAllBtn.disabled = true;
    }
    this.headings.forEach(heading => {
      const contentElem = heading.nextElementSibling;
      const buttonFrag = createButtons({
        textContent: heading.textContent
      });
      heading.textContent = '';
      heading.appendChild(buttonFrag);
      const buttonElem = heading.querySelector('button');
      if (contentElem) {
        contentElem.id = buttonElem.getAttribute('aria-controls');
        contentElem.hidden = 'until-found';
        this.content.push(contentElem);
      }
      this.buttons.push(buttonElem);
    });
    if (this.isExpandedOnLoad) {
      this.isExpandedOnLoad.forEach(element => {
        const openButton = element.querySelector('button');
        this.setAccordionState(openButton, 'open');
      });
    }
  }
  controls() {
    this.buttons.forEach(button => {
      button.addEventListener('click', event => this.toggle(event));
    });
    if (this.expandAllBtn && this.collapseAllBtn) {
      this.expandAllBtn.addEventListener('click', () => this.expandAll());
      this.collapseAllBtn.addEventListener('click', () => this.collapseAll());
    }
  }
  getTargetContent(element) {
    const currentIndex = this.buttons.indexOf(element);
    return this.content[currentIndex];
  }
  setAccordionState(element, state) {
    const targetContent = this.getTargetContent(element);
    if (state === 'open') {
      element.classList.add('active');
      element.setAttribute('aria-expanded', 'true');
      targetContent.hidden = false;
    } else if (state === 'close') {
      element.classList.remove('active');
      element.setAttribute('aria-expanded', 'false');
      targetContent.hidden = 'until-found';
    }
  }
  toggle(event) {
    const targetContent = this.getTargetContent(event.currentTarget);
    if (targetContent) {
      const isHidden = targetContent.hidden;
      if (isHidden === true || isHidden === 'until-found') {
        this.setAccordionState(event.currentTarget, 'open');
      } else {
        this.setAccordionState(event.currentTarget, 'close');
      }
      if (this.expandAllBtn && this.collapseAllBtn) {
        this.expandAllBtn.disabled = this.content.every(item => item.hidden === false);
        this.collapseAllBtn.disabled = this.content.every(item => item.hidden === 'until-found');
      }
    }
  }
  expandAll() {
    this.buttons.forEach(button => this.setAccordionState(button, 'open'));
    this.expandAllBtn.disabled = true;
    this.collapseAllBtn.disabled = false;
  }
  collapseAll() {
    this.buttons.forEach(button => this.setAccordionState(button, 'close'));
    this.expandAllBtn.disabled = false;
    this.collapseAllBtn.disabled = true;
  }
}
class SwipeContent {
  constructor(element) {
    this.element = element;
    this.delta = [false, false];
    this.dragging = false;
    this.intervalId = false;
    this.changedTouches = false;
  }
  init() {
    this.element.addEventListener('mousedown', this.handleEvent.bind(this));
    this.element.addEventListener('touchstart', this.handleEvent.bind(this), {
      passive: true
    });
  }
  initDragging() {
    this.element.addEventListener('mousemove', this.handleEvent.bind(this));
    this.element.addEventListener('touchmove', this.handleEvent.bind(this), {
      passive: true
    });
    this.element.addEventListener('mouseup', this.handleEvent.bind(this));
    this.element.addEventListener('mouseleave', this.handleEvent.bind(this));
    this.element.addEventListener('touchend', this.handleEvent.bind(this));
  }
  cancelDragging() {
    if (this.intervalId) {
      if (!window.requestAnimationFrame) {
        clearInterval(this.intervalId);
      } else {
        window.cancelAnimationFrame(this.intervalId);
      }
      this.intervalId = false;
    }
    this.element.removeEventListener('mousemove', this.handleEvent.bind(this));
    this.element.removeEventListener('touchmove', this.handleEvent.bind(this));
    this.element.removeEventListener('mouseup', this.handleEvent.bind(this));
    this.element.removeEventListener('mouseleave', this.handleEvent.bind(this));
    this.element.removeEventListener('touchend', this.handleEvent.bind(this));
  }
  handleEvent(event) {
    switch (event.type) {
      case 'mousedown':
      case 'touchstart':
        this.startDrag(event);
        break;
      case 'mousemove':
      case 'touchmove':
        this.drag(event);
        break;
      case 'mouseup':
      case 'mouseleave':
      case 'touchend':
        this.endDrag(event);
        break;
      default:
        console.log(`${event.type}.`);
    }
  }
  startDrag(event) {
    this.dragging = true;
    this.initDragging();
    this.delta = [parseInt(this.unify(event).clientX, 10), parseInt(this.unify(event).clientY, 10)];
    this.emitSwipeEvents('dragStart', this.delta, event.target);
  }
  endDrag(event) {
    this.cancelDragging();
    const dx = parseInt(this.unify(event).clientX, 10);
    const dy = parseInt(this.unify(event).clientY, 10);
    if (this.delta && (this.delta[0] || this.delta[0] === 0)) {
      const s = getSign(dx - this.delta[0]);
      if (Math.abs(dx - this.delta[0]) > 30) {
        if (s < 0) {
          this.emitSwipeEvents('swipeLeft', [dx, dy]);
        } else {
          this.emitSwipeEvents('swipeRight', [dx, dy]);
        }
      }
      this.delta[0] = false;
    }
    if (this.delta && (this.delta[1] || this.delta[1] === 0)) {
      const y = getSign(dy - this.delta[1]);
      if (Math.abs(dy - this.delta[1]) > 30) {
        if (y < 0) {
          this.emitSwipeEvents('swipeUp', [dx, dy]);
        } else {
          this.emitSwipeEvents('swipeDown', [dx, dy]);
        }
      }
      this.delta[1] = false;
    }
    this.emitSwipeEvents('dragEnd', [dx, dy]);
    this.dragging = false;
  }
  drag(event) {
    if (!this.dragging) return;
    if (!window.requestAnimationFrame) {
      this.intervalId = setTimeout(() => {
        this.emitDrag(event);
      }, 250);
    } else {
      this.intervalId = window.requestAnimationFrame(() => {
        this.emitDrag(event);
      });
    }
  }
  unify(event) {
    this.changedTouches = event.changedTouches;
    return this.changedTouches ? this.changedTouches[0] : event;
  }
  emitDrag(event) {
    this.emitSwipeEvents('dragging', [parseInt(this.unify(event).clientX, 10), parseInt(this.unify(event).clientY, 10)]);
  }
  emitSwipeEvents(eventName, detail, el) {
    let trigger = false;
    if (el) trigger = el;
    const event = new CustomEvent(eventName, {
      detail: {
        x: detail[0],
        y: detail[1],
        origin: trigger
      }
    });
    this.element.dispatchEvent(event);
  }
}

/* eslint-disable max-len */
class Carousel extends SwipeContent {
  constructor(element) {
    super(element);
    this.element = element;
    this.containerClass = 'nsw-carousel-container';
    this.controlClass = 'js-carousel__control';
    this.wrapperClass = 'js-carousel__wrapper';
    this.counterClass = 'js-carousel__counter';
    this.counterTorClass = 'js-carousel__counter-tot';
    this.navClass = 'js-carousel__navigation';
    this.navItemClass = 'js-carousel__nav-item';
    this.navigationItemClass = this.element.getAttribute('data-navigation-item-class') ? this.element.getAttribute('data-navigation-item-class') : 'nsw-carousel__nav-item';
    this.navigationClass = this.element.getAttribute('data-navigation-class') ? this.element.getAttribute('data-navigation-class') : 'nsw-carousel__navigation';
    this.paginationClass = this.element.getAttribute('data-pagination-class') ? this.element.getAttribute('data-pagination-class') : 'nsw-carousel__navigation--pagination';
    this.draggingClass = 'nsw-carousel--is-dragging';
    this.loadedClass = 'nsw-carousel--loaded';
    this.animateClass = 'nsw-carousel__list--animating';
    this.cloneClass = 'js-clone';
    this.srClass = 'sr-only';
    this.srLiveAreaClass = 'js-carousel__aria-live';
    this.hideControlsClass = 'nsw-carousel--hide-controls';
    this.hideClass = 'nsw-display-none';
    this.centerClass = 'nsw-justify-content-center';
    this.listWrapper = this.element.querySelector(`.${this.wrapperClass}`);
    this.list = this.listWrapper ? this.listWrapper.querySelector('ol') : false;
    this.items = this.list ? this.list.getElementsByTagName('li') : false;
    this.controls = this.element.querySelectorAll(`.${this.controlClass}`);
    this.counter = this.element.querySelectorAll(`.${this.counterClass}`);
    this.counterTor = this.element.querySelectorAll(`.${this.counterTorClass}`);
    this.ariaLabel = this.element.getAttribute('data-description') ? this.element.getAttribute('data-description') : 'Card carousel';
    this.dragEnabled = !!(this.element.getAttribute('data-drag') && this.element.getAttribute('data-drag') === 'on');
    this.loop = !!(this.element.getAttribute('data-loop') && this.element.getAttribute('data-loop') === 'on');
    this.nav = !(this.element.getAttribute('data-navigation') && this.element.getAttribute('data-navigation') === 'off');
    this.navigationPagination = !!(this.element.getAttribute('data-navigation-pagination') && this.element.getAttribute('data-navigation-pagination') === 'on');
    this.justifyContent = !!(this.element.getAttribute('data-justify-content') && this.element.getAttribute('data-justify-content') === 'on');
    this.initItems = [];
    this.itemsNb = this.items.length;
    this.visibItemsNb = 1;
    this.itemsWidth = 1;
    this.itemOriginalWidth = false;
    this.selectedItem = 0;
    this.translateContainer = 0;
    this.containerWidth = 0;
    this.animating = false;
    this.dragStart = false;
    this.resizeId = false;
    this.cloneList = [];
    this.itemAutoSize = false;
    this.totTranslate = 0;
    if (this.nav) this.loop = false;
    this.flexSupported = CSS.supports('align-items', 'stretch');
    this.transitionSupported = CSS.supports('transition', 'transform');
    this.cssPropertiesSupported = 'CSS' in window && CSS.supports('color', 'var(--color-var)');
  }
  init() {
    if (!this.items) return;
    this.initCarouselLayout();
    this.setItemsWidth(true);
    this.insertBefore(this.visibItemsNb);
    this.updateCarouselClones();
    this.resetItemsTabIndex();
    this.initAriaLive();
    this.initCarouselEvents();
    this.initCarouselCounter();
  }
  initCarouselLayout() {
    this.element.classList.add(this.loadedClass);
    this.element.setAttribute('aria-roledescription', 'carousel');
    this.element.setAttribute('aria-label', this.ariaLabel);
    const itemsArray = Array.from(this.items);
    itemsArray.forEach((element, index) => {
      element.setAttribute('aria-roledescription', 'slide');
      element.setAttribute('aria-label', `${index + 1} of ${itemsArray.length}`);
      element.setAttribute('data-index', index);
    });
    this.carouselCreateContainer();
    const itemStyle = this.items && window.getComputedStyle(this.items[0]);
    const containerStyle = this.listWrapper && window.getComputedStyle(this.listWrapper);
    let itemWidth = itemStyle ? parseFloat(itemStyle.getPropertyValue('width')) : 0;
    const itemMargin = itemStyle ? parseFloat(itemStyle.getPropertyValue('margin-right')) : 0;
    const containerPadding = containerStyle ? parseFloat(containerStyle.getPropertyValue('padding-left')) : 0;
    let containerWidth = containerStyle ? parseFloat(containerStyle.getPropertyValue('width')) : 0;
    if (!this.itemAutoSize) {
      this.itemAutoSize = itemWidth;
    }
    containerWidth = this.getCarouselWidth(containerWidth);
    if (!this.itemOriginalWidth) {
      this.itemOriginalWidth = itemWidth;
    } else {
      itemWidth = this.itemOriginalWidth;
    }
    if (this.itemAutoSize) {
      this.itemOriginalWidth = parseInt(this.itemAutoSize, 10);
      itemWidth = this.itemOriginalWidth;
    }
    if (containerWidth < itemWidth) {
      this.itemOriginalWidth = containerWidth;
      itemWidth = this.itemOriginalWidth;
    }
    this.visibItemsNb = parseInt((containerWidth - 2 * containerPadding + itemMargin) / (itemWidth + itemMargin), 10);
    this.itemsWidth = parseFloat(((containerWidth - 2 * containerPadding + itemMargin) / this.visibItemsNb - itemMargin).toFixed(1));
    this.containerWidth = (this.itemsWidth + itemMargin) * this.items.length;
    this.translateContainer = 0 - (this.itemsWidth + itemMargin) * this.visibItemsNb;
    if (!this.flexSupported) this.list.style.width = `${(this.itemsWidth + itemMargin) * this.visibItemsNb * 3}px`;
    this.totTranslate = 0 - this.selectedItem * (this.itemsWidth + itemMargin);
    if (this.items.length <= this.visibItemsNb) this.totTranslate = 0;
    this.centerItems();
  }
  carouselCreateContainer() {
    if (!this.element.parentElement.classList.contains(this.containerClass)) {
      const el = document.createElement('div');
      el.classList.add(this.containerClass);
      this.element.parentNode.insertBefore(el, this.element);
      el.appendChild(this.element);
    }
  }
  setItemsWidth(bool) {
    for (let i = 0; i < this.items.length; i += 1) {
      this.items[i].style.width = `${this.itemsWidth}px`;
      if (bool) this.initItems.push(this.items[i]);
    }
  }
  updateCarouselClones() {
    if (!this.loop) return;
    if (this.items.length < this.visibItemsNb * 3) {
      this.insertAfter(this.visibItemsNb * 3 - this.items.length, this.items.length - this.visibItemsNb * 2);
    } else if (this.items.length > this.visibItemsNb * 3) {
      this.removeClones(this.visibItemsNb * 3, this.items.length - this.visibItemsNb * 3);
    }
    this.setTranslate(`translateX(${this.translateContainer}px)`);
  }
  initCarouselEvents() {
    if (this.nav) {
      this.carouselCreateNavigation();
      this.carouselInitNavigationEvents();
    }
    if (this.controls.length > 0) {
      this.controls[0].addEventListener('click', event => {
        event.preventDefault();
        this.showPrevItems();
        this.updateAriaLive();
      });
      this.controls[1].addEventListener('click', event => {
        event.preventDefault();
        this.showNextItems();
        this.updateAriaLive();
      });
      this.resetCarouselControls();
      this.emitCarouselActiveItemsEvent();
    }
    if (this.dragEnabled && window.requestAnimationFrame) {
      super.init();
      this.element.addEventListener('dragStart', event => {
        if (event.detail.origin && event.detail.origin.closest(`.${this.controlClass}`)) return;
        if (event.detail.origin && event.detail.origin.closest(`.${this.navClass}`)) return;
        if (event.detail.origin && !event.detail.origin.closest(`.${this.wrapperClass}`)) return;
        this.element.classList.add(this.draggingClass);
        this.dragStart = event.detail.x;
        this.animateDragEnd();
      });
      this.element.addEventListener('dragging', event => {
        if (!this.dragStart) return;
        if (this.animating || Math.abs(event.detail.x - this.dragStart) < 10) return;
        let translate = event.detail.x - this.dragStart + this.translateContainer;
        if (!this.loop) {
          translate = event.detail.x - this.dragStart + this.totTranslate;
        }
        this.setTranslate(`translateX(${translate}px)`);
      });
    }
    window.addEventListener('resize', () => {
      clearTimeout(this.resizeId);
      this.resizeId = setTimeout(() => {
        this.resetCarouselResize();
        this.resetDotsNavigation();
        this.resetCarouselControls();
        this.setCounterItem();
        this.centerItems();
        this.emitCarouselActiveItemsEvent();
      }, 250);
    });
    this.element.addEventListener('keydown', event => {
      if (event.key && event.key.toLowerCase() === 'arrowright') {
        this.showNextItems();
      } else if (event.key && event.key.toLowerCase() === 'arrowleft') {
        this.showPrevItems();
      } else if (event.key && event.key.toLowerCase() === 'home') {
        this.showPrevItems();
      } else if (event.key && event.key.toLowerCase() === 'end') {
        this.showNextItems();
      } else if (event.key && event.key.toLowerCase() === 'enter') {
        event.preventDefault();
        event.target.click();
      }
    });
    const itemLinks = this.element.querySelectorAll('.nsw-carousel__item a');
    if (itemLinks.length > 0) {
      itemLinks.forEach((link, index) => {
        link.addEventListener('focus', () => {
          const slider = link.closest('.js-carousel__wrapper');
          const carousel = slider.querySelector('.nsw-carousel__list');
          if (carousel) {
            link.focus({
              preventScroll: true
            });
          }
        });
        link.addEventListener('focusout', () => {
          const item = link.closest('.nsw-carousel__item');
          const dataIndex = Number(item.getAttribute('data-index')) + 1;
          if (dataIndex % this.visibItemsNb === 0 && dataIndex !== this.items.length) {
            itemLinks[index + 1].focus({
              preventScroll: true
            });
            this.showNextItems();
          }
        });
      });
    }
  }
  showPrevItems() {
    if (this.animating) return;
    this.animating = true;
    this.selectedItem = this.getIndex(this.selectedItem - this.visibItemsNb);
    this.animateList('0', 'prev');
  }
  showNextItems() {
    if (this.animating) return;
    this.animating = true;
    this.selectedItem = this.getIndex(this.selectedItem + this.visibItemsNb);
    this.animateList(`${this.translateContainer * 2}px`, 'next');
  }
  animateDragEnd() {
    const cb = event => {
      this.element.removeEventListener('dragEnd', cb);
      this.element.classList.remove(this.draggingClass);
      if (event.detail.x - this.dragStart < -40) {
        this.animating = false;
        this.showNextItems();
      } else if (event.detail.x - this.dragStart > 40) {
        this.animating = false;
        this.showPrevItems();
      } else if (event.detail.x - this.dragStart === 0) {
        return;
      } else {
        this.animating = true;
        this.animateList(`${this.translateContainer}px`, false);
      }
      this.dragStart = false;
    };
    this.element.addEventListener('dragEnd', cb);
  }
  animateList(translate, direction) {
    let trans = translate;
    this.list.classList.add(this.animateClass);
    const initTranslate = this.totTranslate;
    if (!this.loop) {
      trans = this.noLoopTranslateValue(direction);
    }
    setTimeout(() => {
      this.setTranslate(`translateX(${trans})`);
    });
    if (this.transitionSupported) {
      const cb = event => {
        if (event.propertyName && event.propertyName !== 'transform') return;
        if (this.list) {
          this.list.classList.remove(this.animateClass);
          this.list.removeEventListener('transitionend', cb);
        }
        this.animateListCb(direction);
      };
      this.list.addEventListener('transitionend', cb);
    } else {
      this.animateListCb(direction);
    }
    if (!this.loop && initTranslate === this.totTranslate) {
      this.list.dispatchEvent(new CustomEvent('transitionend'));
    }
    this.resetCarouselControls();
    this.setCounterItem();
    this.emitCarouselActiveItemsEvent();
  }
  noLoopTranslateValue(direction) {
    let translate = this.totTranslate;
    if (direction === 'next') {
      translate = this.totTranslate + this.translateContainer;
    } else if (direction === 'prev') {
      translate = this.totTranslate - this.translateContainer;
    } else if (direction === 'click') {
      translate = this.selectedDotIndex * this.translateContainer;
    }
    if (translate > 0) {
      translate = 0;
      this.selectedItem = 0;
    }
    if (translate < -this.translateContainer - this.containerWidth) {
      translate = -this.translateContainer - this.containerWidth;
      this.selectedItem = this.items.length - this.visibItemsNb;
    }
    if (this.visibItemsNb > this.items.length) translate = 0;
    this.totTranslate = translate;
    return `${translate}px`;
  }
  animateListCb(direction) {
    if (direction) this.updateClones(direction);
    this.animating = false;
    this.resetItemsTabIndex();
  }
  updateClones(direction) {
    if (!this.loop) return;
    const index = direction === 'next' ? 0 : this.items.length - this.visibItemsNb;
    this.removeClones(index, false);
    if (direction === 'next') {
      this.insertAfter(this.visibItemsNb, 0);
    } else {
      this.insertBefore(this.visibItemsNb);
    }
    this.setTranslate(`translateX(${this.translateContainer}px)`);
  }
  insertBefore(nb, delta) {
    if (!this.loop) return;
    const clones = document.createDocumentFragment();
    let start = 0;
    if (delta) start = delta;
    for (let i = start; i < nb; i += 1) {
      const index = this.getIndex(this.selectedItem - i - 1);
      const clone = this.initItems[index].cloneNode(true);
      clone.classList.add(this.cloneClass);
      clones.insertBefore(clone, clones.firstChild);
    }
    this.list.insertBefore(clones, this.list.firstChild);
    this.emitCarouselUpdateEvent();
  }
  insertAfter(nb, init) {
    if (!this.loop) return;
    const clones = document.createDocumentFragment();
    for (let i = init; i < nb + init; i += 1) {
      const index = this.getIndex(this.selectedItem + this.visibItemsNb + i);
      const clone = this.initItems[index].cloneNode(true);
      clone.classList.add(this.cloneClass);
      clones.appendChild(clone);
    }
    this.list.appendChild(clones);
    this.emitCarouselUpdateEvent();
  }
  removeClones(index, bool) {
    let newBool = bool;
    if (!this.loop) return;
    if (!bool) {
      newBool = this.visibItemsNb;
    }
    for (let i = 0; i < newBool; i += 1) {
      if (this.items[index]) this.list.removeChild(this.items[index]);
    }
  }
  resetCarouselResize() {
    const visibleItems = this.visibItemsNb;
    this.resetItemAutoSize();
    this.initCarouselLayout();
    this.setItemsWidth(false);
    this.resetItemsWidth();
    if (this.loop) {
      if (visibleItems > this.visibItemsNb) {
        this.removeClones(0, visibleItems - this.visibItemsNb);
      } else if (visibleItems < this.visibItemsNb) {
        this.insertBefore(this.visibItemsNb, visibleItems);
      }
      this.updateCarouselClones();
    } else {
      const translate = this.noLoopTranslateValue();
      this.setTranslate(`translateX(${translate})`);
    }
    this.resetItemsTabIndex();
  }
  resetItemAutoSize() {
    if (!this.cssPropertiesSupported) return;
    this.items[0].removeAttribute('style');
    this.itemAutoSize = getComputedStyle(this.items[0]).getPropertyValue('width');
  }
  resetItemsWidth() {
    this.initItems.forEach(element => {
      const el = element;
      el.style.width = `${this.itemsWidth}px`;
    });
  }
  resetItemsTabIndex() {
    const carouselActive = this.items.length > this.visibItemsNb;
    let j = this.items.length;
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.loop) {
        if (i < this.visibItemsNb || i >= 2 * this.visibItemsNb) {
          this.items[i].setAttribute('tabindex', '-1');
          this.items[i].setAttribute('aria-hidden', 'true');
          this.items[i].removeAttribute('aria-current');
        } else {
          if (i < j) j = i;
          this.items[i].removeAttribute('tabindex');
          this.items[i].removeAttribute('aria-hidden');
          this.items[i].setAttribute('aria-current', 'true');
        }
      } else if ((i < this.selectedItem || i >= this.selectedItem + this.visibItemsNb) && carouselActive) {
        this.items[i].setAttribute('tabindex', '-1');
        this.items[i].setAttribute('aria-hidden', 'true');
        this.items[i].removeAttribute('aria-current');
      } else {
        if (i < j) j = i;
        this.items[i].removeAttribute('tabindex');
        this.items[i].removeAttribute('aria-hidden');
        this.items[i].setAttribute('aria-current', 'true');
      }
    }
    this.resetVisibilityOverflowItems(j);
  }
  initAriaLive() {
    const srLiveArea = document.createElement('div');
    srLiveArea.setAttribute('class', `${this.srClass} ${this.srLiveAreaClass}`);
    srLiveArea.setAttribute('aria-live', 'polite');
    srLiveArea.setAttribute('aria-atomic', 'true');
    this.element.appendChild(srLiveArea);
    this.ariaLive = srLiveArea;
  }
  updateAriaLive() {
    this.ariaLive.innerHTML = `Item ${this.selectedItem + 1} selected. ${this.visibItemsNb} items of ${this.initItems.length} visible`;
  }
  getIndex(index) {
    let i = index;
    if (i < 0) i = this.getPositiveValue(i, this.itemsNb);
    if (i >= this.itemsNb) i %= this.itemsNb;
    return i;
  }
  getPositiveValue(value, add) {
    let val = value;
    val += add;
    if (val > 0) return val;
    return this.getPositiveValue(val, add);
  }
  setTranslate(translate) {
    this.list.style.transform = translate;
    this.list.style.msTransform = translate;
  }
  getCarouselWidth(computedWidth) {
    let comWidth = computedWidth;
    const closestHidden = this.listWrapper.closest(`.${this.srClass}`);
    if (closestHidden) {
      closestHidden.classList.remove(this.srClass);
      comWidth = this.listWrapper.offsetWidth;
      closestHidden.classList.add(this.srClass);
    } else if (Number.isNaN(comWidth)) {
      comWidth = this.getHiddenParentWidth(this.element);
    }
    return comWidth;
  }
  getHiddenParentWidth(element) {
    const parent = element.parentElement;
    if (parent.tagName.toLowerCase() === 'html') return 0;
    const style = window.getComputedStyle(parent);
    if (style.display === 'none' || style.visibility === 'hidden') {
      parent.setAttribute('style', 'display: block!important; visibility: visible!important;');
      const computedWidth = this.listWrapper.offsetWidth;
      parent.style.display = '';
      parent.style.visibility = '';
      return computedWidth;
    }
    return this.getHiddenParentWidth(parent);
  }
  resetCarouselControls() {
    if (this.loop) return;
    if (this.controls.length > 0) {
      if (this.totTranslate === 0) {
        this.controls[0].setAttribute('disabled', true);
      } else {
        this.controls[0].removeAttribute('disabled');
      }
      if (this.totTranslate === -this.translateContainer - this.containerWidth || this.items.length <= this.visibItemsNb) {
        this.controls[1].setAttribute('disabled', true);
      } else {
        this.controls[1].removeAttribute('disabled');
      }
    }
    if (this.nav) {
      const selectedDot = this.navigation.querySelectorAll(`.${this.navigationItemClass}--selected`);
      if (selectedDot.length > 0) selectedDot[0].classList.remove(`${this.navigationItemClass}--selected`);
      let newSelectedIndex = this.getSelectedDot();
      if (this.totTranslate === -this.translateContainer - this.containerWidth) {
        newSelectedIndex = this.navDots.length - 1;
      }
      this.navDots[newSelectedIndex].classList.add(`${this.navigationItemClass}--selected`);
    }
    if (this.totTranslate === 0 && (this.totTranslate === -this.translateContainer - this.containerWidth || this.items.length <= this.visibItemsNb)) {
      this.element.classList.add(this.hideControlsClass);
    } else {
      this.element.classList.remove(this.hideControlsClass);
    }
  }
  emitCarouselUpdateEvent() {
    this.cloneList = [];
    const clones = this.element.querySelectorAll(`.${this.cloneClass}`);
    clones.forEach(element => {
      element.classList.remove(this.cloneClass);
      this.cloneList.push(element);
    });
    this.emitCarouselEvents('carousel-updated', this.cloneList);
  }
  carouselCreateNavigation() {
    if (this.element.querySelectorAll(`.${this.navClass}`).length > 0) return;
    const navigation = document.createElement('ol');
    let navChildren = '';
    let navClasses = '';
    if (this.navigationPagination) {
      navClasses = `${this.navigationClass} ${this.paginationClass} ${this.navClass}`;
    } else {
      navClasses = `${this.navigationClass} ${this.navClass}`;
    }
    if (this.items.length <= this.visibItemsNb) {
      navClasses += ` ${this.hideClass}`;
    }
    navigation.setAttribute('class', navClasses);
    const dotsNr = Math.ceil(this.items.length / this.visibItemsNb);
    const selectedDot = this.getSelectedDot();
    const indexClass = this.navigationPagination ? '' : this.srClass;
    for (let i = 0; i < dotsNr; i += 1) {
      const className = i === selectedDot ? `class="${this.navigationItemClass} ${this.navigationItemClass}--selected ${this.navItemClass}"` : `class="${this.navigationItemClass} ${this.navItemClass}"`;
      navChildren = `${navChildren}<li ${className}><button><span class="${indexClass}">${i + 1}</span></button></li>`;
    }
    navigation.innerHTML = navChildren;
    this.element.appendChild(navigation);
  }
  carouselInitNavigationEvents() {
    this.navigation = this.element.querySelector(`.${this.navClass}`);
    this.navDots = this.element.querySelectorAll(`.${this.navItemClass}`);
    this.navIdEvent = this.carouselNavigationClick.bind(this);
    this.navigation.addEventListener('click', this.navIdEvent);
  }
  carouselRemoveNavigation() {
    if (this.navigation) this.element.removeChild(this.navigation);
    if (this.navIdEvent) this.navigation.removeEventListener('click', this.navIdEvent);
  }
  resetDotsNavigation() {
    if (!this.nav) return;
    this.carouselRemoveNavigation();
    this.carouselCreateNavigation();
    this.carouselInitNavigationEvents();
  }
  carouselNavigationClick(event) {
    const dot = event.target.closest(`.${this.navItemClass}`);
    if (!dot) return;
    if (this.animating) return;
    this.animating = true;
    const index = Array.from(this.navDots).indexOf(dot);
    this.selectedDotIndex = index;
    this.selectedItem = index * this.visibItemsNb;
    this.animateList(false, 'click');
  }
  getSelectedDot() {
    return Math.ceil(this.selectedItem / this.visibItemsNb);
  }
  initCarouselCounter() {
    if (this.counterTor.length > 0) this.counterTor[0].textContent = this.itemsNb;
    this.setCounterItem();
  }
  setCounterItem() {
    if (this.counter.length === 0) return;
    let totalItems = this.selectedItem + this.visibItemsNb;
    if (totalItems > this.items.length) totalItems = this.items.length;
    this.counter[0].textContent = totalItems;
  }
  centerItems() {
    if (!this.justifyContent) return;
    this.list.classList.toggle(this.centerClass, this.items.length < this.visibItemsNb);
  }
  emitCarouselActiveItemsEvent() {
    this.emitCarouselEvents('carousel-active-items', {
      firstSelectedItem: this.selectedItem,
      visibleItemsNb: this.visibItemsNb
    });
  }
  emitCarouselEvents(eventName, eventDetail) {
    const event = new CustomEvent(eventName, {
      detail: eventDetail
    });
    this.element.dispatchEvent(event);
  }
  resetVisibilityOverflowItems(j) {
    const itemWidth = this.containerWidth / this.items.length;
    const delta = (window.innerWidth - itemWidth * this.visibItemsNb) / 2;
    const overflowItems = Math.ceil(delta / itemWidth);
    for (let i = 0; i < overflowItems; i += 1) {
      const indexPrev = j - 1 - i;
      if (indexPrev >= 0) this.items[indexPrev].removeAttribute('tabindex');
      const indexNext = j + this.visibItemsNb + i;
      if (indexNext < this.items.length) this.items[indexNext].removeAttribute('tabindex');
    }
  }
}

// Initialize Accordion on page load
// document.addEventListener('DOMContentLoaded', () => {
//   const accordionElements = document.querySelectorAll('.nsw-accordion');
//   accordionElements.forEach(element => {
//       const accordion = new Accordion(element);
//       accordion.init();
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  /**
     * Initializes all accordions on the page.
     * It automatically expands an accordion if there is only one title element.
     */
  document.querySelectorAll('.nsw-accordion').forEach(element => {
    const accordion = new Accordion(element);
    accordion.init();

    // Get the title and button elements
    const titleElements = element.querySelectorAll('.nsw-accordion__title');
    const button = element.querySelector('.nsw-accordion__button');
    const contentId = button.getAttribute('aria-controls');
    const content = document.getElementById(contentId);

    // Auto-expand if there is exactly one title element
    if (titleElements.length === 1) {
      button.classList.add('active');
      button.setAttribute('aria-expanded', 'true');
      if (content) {
        content.hidden = false;
      }
    }

    // Hide title if there's only one button and the 'hide-title' class is present
    const titleDiv = element.querySelector('.nsw-accordion__title');
    if (titleElements.length === 1 && titleDiv && titleDiv.classList.contains('hide-title')) {
      titleDiv.style.display = 'none';
    }
  });

  // Check if the browser is Safari (but NOT Chrome)
  const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
  if (isSafari) {
    console.log("Applying Safari-specific carousel fix.");

    // Select the "Next" button in the carousel
    const nextButton = document.querySelector('.nsw-carousel__control--next');
    if (nextButton) {
      // Fix issue where first tap does not register in Safari
      nextButton.addEventListener("touchend", function (event) {
        event.preventDefault(); // Prevents Safari from treating it as a focus event
        nextButton.click(); // Simulates a click event on touchend
      });
    }

    // Add a slight delay to ensure carousel is fully initialized in Safari
    setTimeout(() => {
      const carousels = document.querySelectorAll('.js-carousel');
      carousels.forEach(carousel => {
        const carouselInstance = new Carousel(carousel);
        carouselInstance.init();
      });
    }, 500); // Delay execution slightly to prevent Safari rendering issues
  }

  /**
     * Selects the main login block area.
     * This element exists for both logged-in and logged-out users.
     * @type {HTMLElement|null}
     */
  const loginBlockArea = document.querySelector('.login-block-area');
  /**
   * Determines if a user is logged in based on the presence of the user-box element.
   * @type {boolean}
   */
  const isLoggedIn = !!document.querySelector('.user-box');
  // Proceed only if the login block area exists
  if (loginBlockArea) {
    /**
     * Toggles the "logged-in" class on the login block area
     * depending on the user's authentication status.
     */
    loginBlockArea.classList.toggle('logged-in', isLoggedIn);

    // If the user is logged in, check for a delegator-box inside the login block
    if (isLoggedIn) {
      /**
       * Checks if the login block contains an element with the class "delegator-box".
       * This indicates that the user is acting on behalf of another user.
       * @type {HTMLElement|null}
       */
      const delegatorBox = loginBlockArea.querySelector('.delegator-box');

      /**
       * Toggles the "has-delegator" class on the login block area.
       * This class is used to modify the width and layout of the login block
       * when a delegator is present.
       */
      loginBlockArea.classList.toggle('has-delegator', !!delegatorBox);
    } else {
      // Ensure "has-delegator" is removed when the user logs out
      loginBlockArea.classList.remove('has-delegator');
    }
  }

  /**
     * Removes list items from the table of contents (TOC) if their links reference "#toc-recommended-for-you".
     * This prevents unnecessary items from appearing in the TOC navigation.
     */
  const tocItems = document.querySelectorAll(".toc-js-wrap nav ul li");
  tocItems.forEach(item => {
    const link = item.querySelector("a");
    if (link && link.getAttribute("href") === "#toc-recommended-for-you") {
      item.remove();
    }
  });

  /**
     * Adjusts the top margin of paragraph elements inside ".field--name-field-introduction"
     * if they follow an H1 inside ".field--name-node-title".
     */
  const h1Elements = document.querySelectorAll("h1");
  h1Elements.forEach((h1, index) => {
    // Navigate up to `.field--name-node-title`
    let nodeTitleDiv = h1.closest(".field--name-node-title");
    if (nodeTitleDiv) {
      let nextSibling = nodeTitleDiv.parentElement.querySelector(".field--name-field-introduction");
      if (nextSibling) {
        const firstP = nextSibling.querySelector("p");
        if (firstP) {
          firstP.style.marginTop = "0";
        }
      }
    }
  });

  /**
     * Initializes all carousels on the page.
     */
  const carousels = document.querySelectorAll('.js-carousel');
  carousels.forEach(carousel => {
    const carouselInstance = new Carousel(carousel);
    carouselInstance.init();
  });

  /**
     * Hides the body content area if its height is less than 100px
     * and the user is not on the "Online Court" page.
     */
  const contentLayoutMain = document.querySelector('.nsw-layout__main');
  const onlineCourtBlock = document.getElementById('block-orw-onlinecourt');
  const esubpoenaBlock = document.getElementById('block-orw-esubpoenaspacket');
  if (contentLayoutMain && !onlineCourtBlock && !esubpoenaBlock && contentLayoutMain.offsetHeight < 100) {
    contentLayoutMain.classList.add('hidden');
  }

  /**
     * Handles dropdown menu interactions, including mouse hover, click,
     * and keyboard navigation.
     */
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  // Handle mouse hover (visual only, no aria-expanded change)
  dropdownToggle.addEventListener('mouseenter', function () {
    dropdownMenu.classList.add('show');
  });
  dropdownToggle.addEventListener('mouseleave', function () {
    dropdownMenu.classList.remove('show');
  });

  // Handle keyboard and mouse click events (aria-expanded change)
  dropdownToggle.addEventListener('click', function (event) {
    event.preventDefault();
    const isExpanded = dropdownToggle.getAttribute('aria-expanded') === 'true';
    dropdownToggle.setAttribute('aria-expanded', !isExpanded);
    dropdownMenu.classList.toggle('show', !isExpanded);
  });

  // Optionally: Handle keyboard navigation inside the menu
  dropdownMenu.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      dropdownToggle.setAttribute('aria-expanded', 'false');
      dropdownMenu.classList.remove('show');
      dropdownToggle.focus();
    }
  });

  // // Initialize toggletips
  // const toggleTips = document.querySelectorAll('.js-toggletip');
  // const closeButtons = document.querySelectorAll('.js-close-toggletip');

  // if (toggleTips.length > 0) {
  //     toggleTips.forEach(toggleTip => {
  //         toggleTip.addEventListener('click', (event) => {
  //             event.stopPropagation();
  //             event.preventDefault();

  //             const controls = toggleTip.getAttribute('aria-controls');
  //             const content = document.getElementById(controls);

  //             if (content) {
  //                 const isExpanded = content.getAttribute('aria-expanded') === 'true';
  //                 content.setAttribute('aria-expanded', !isExpanded);

  //                 if (!isExpanded) {
  //                     content.classList.add('visible');
  //                     content.style.display = 'block';

  //                     // Position the toggletip
  //                     const rect = toggleTip.getBoundingClientRect();
  //                     const offsetTop = window.scrollY + rect.top;
  //                     const offsetLeft = window.scrollX + rect.left;

  //                     const popUpHeight = content.offsetHeight;
  //                     const popUpWidth = content.offsetWidth;

  //                     let calculatedTop = offsetTop - popUpHeight - 10;
  //                     if (calculatedTop < 0) {
  //                         calculatedTop = offsetTop + rect.height + 10;
  //                     }

  //                     const calculatedLeft = offsetLeft + rect.width / 2 - popUpWidth / 2;

  //                     content.style.position = 'absolute';
  //                     content.style.top = `${calculatedTop}px`;
  //                     content.style.left = `${calculatedLeft}px`;

  //                     // Add arrow positioning like tooltip
  //                     const arrow = content.querySelector('.nsw-toggletip__arrow');
  //                     if (arrow) {
  //                         arrow.style.left = '50%';
  //                         arrow.style.transform = 'translateX(-50%)';
  //                     }

  //                 } else {
  //                     content.classList.remove('visible');
  //                     content.style.display = 'none';
  //                 }
  //             } else {
  //                 console.error(`No content element found for ID "${controls}"`);
  //             }
  //         });
  //     });
  // } else {
  //     console.error('No toggle tips found.');
  // }

  // if (closeButtons.length > 0) {
  //   closeButtons.forEach(button => {
  //       button.addEventListener('click', (event) => {
  //           event.stopPropagation();
  //           event.preventDefault();

  //           // Find the closest toggletip container
  //           const toggletipElement = button.closest('.nsw-toggletip__element');
  //           if (toggletipElement) {
  //               // Hide the toggletip content
  //               toggletipElement.classList.remove('visible');
  //               toggletipElement.style.display = 'none';

  //               // Update ARIA attributes
  //               toggletipElement.setAttribute('aria-expanded', 'false');
  //           }
  //       });
  //   });
  // } else {
  //     console.error('No close buttons found for toggletips.');
  // }

  // Toggles Initialization
  const initializeToggles = () => {
    document.querySelectorAll('.js-toggletip').forEach(toggleTip => {
      toggleTip.addEventListener('click', event => {
        event.preventDefault();
        const contentId = toggleTip.getAttribute('aria-controls');
        const content = document.getElementById(contentId);
        if (!content) {
          console.error(`No content found for toggletip with ID "${contentId}"`);
          return;
        }
        const isExpanded = content.getAttribute('aria-expanded') === 'true';
        content.setAttribute('aria-expanded', !isExpanded);
        content.classList.toggle('visible', !isExpanded);
        content.style.display = !isExpanded ? 'block' : 'none';
        positionTooltip(toggleTip, content);
      });
    });
    document.querySelectorAll('.js-close-toggletip').forEach(button => {
      button.addEventListener('click', event => {
        event.preventDefault();
        const toggletipElement = button.closest('.nsw-toggletip__element');
        if (toggletipElement) {
          toggletipElement.classList.remove('visible');
          toggletipElement.style.display = 'none';
          toggletipElement.setAttribute('aria-expanded', 'false');
        }
      });
    });
  };
  const positionTooltip = (trigger, tooltip) => {
    const rect = trigger.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    const offsetTop = window.scrollY + rect.top;
    const offsetLeft = window.scrollX + rect.left;
    const topAbove = offsetTop - tooltipRect.height - 10;
    const topBelow = offsetTop + rect.height + 10;
    const top = topAbove > 0 ? topAbove : topBelow;
    const left = offsetLeft + rect.width / 2 - tooltipRect.width / 2;
    tooltip.style.position = 'absolute';
    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
    const arrow = tooltip.querySelector('.nsw-toggletip__arrow');
    if (arrow) {
      arrow.style.left = '50%';
      arrow.style.transform = 'translateX(-50%)';
    }
  };
  initializeToggles();

  // const tooltipElement = document.querySelector('.nsw-tooltip');
  // const linkElement = document.querySelector('a.accordion-row-items');

  // // let originalLinkTitle = linkElement.getAttribute('title');

  // // Create and show custom tooltip
  // tooltipElement.addEventListener('mouseenter', () => {
  //     // linkElement.removeAttribute('title');

  //     const tooltipText = tooltipElement.getAttribute('title');
  //     tooltipElement.removeAttribute('title');

  //     const customTooltip = document.createElement('div');
  //     customTooltip.className = 'custom-tooltip';
  //     customTooltip.textContent = tooltipText;

  //     // Style tooltip
  //     customTooltip.style.position = 'absolute';
  //     customTooltip.style.backgroundColor = '#fff';
  //     customTooltip.style.color = '#22272B';
  //     customTooltip.style.padding = '1rem';
  //     customTooltip.style.borderRadius = '4px';
  //     customTooltip.style.fontSize = '14px';
  //     customTooltip.style.zIndex = '9999';
  //     customTooltip.style.pointerEvents = 'none';
  //     // Position tooltip near element
  //     // const rect = tooltipElement.getBoundingClientRect();
  //     // customTooltip.style.top = rect.top - 40 + 'px';
  //     // customTooltip.style.left = rect.left + 'px';
  //     customTooltip.style.minWidth = '150px';
  //     customTooltip.style.maxWidth = '500px';
  //     customTooltip.style.height = 'auto';

  //     document.body.appendChild(customTooltip);

  //     // Position tooltip dynamically
  //     const rect = tooltipElement.getBoundingClientRect();
  //     const tooltipRect = customTooltip.getBoundingClientRect();

  //     customTooltip.style.top = rect.top - tooltipRect.height - 10 + 'px';
  //     customTooltip.style.left = rect.left + (rect.width / 2) - (tooltipRect.width / 2) + 'px';

  //     // Remove tooltip on mouse leave
  //     tooltipElement.addEventListener('mouseleave', () => {
  //         tooltipElement.setAttribute('title', tooltipText);
  //         // linkElement.setAttribute('title', originalLinkTitle);
  //         document.body.removeChild(customTooltip);
  //     });
  // });
});
__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ })()
;
//# sourceMappingURL=custom.76e5cee44f7742844307.js.map