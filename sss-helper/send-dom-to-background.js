/**
 * Author: Furkan Sarihan
 * Mail: fusarihan@gmail.com
 */

'use strict';

// All pages sends their dom to sss-helper

chrome.runtime.sendMessage([document.title, document.all[0].outerHTML]);