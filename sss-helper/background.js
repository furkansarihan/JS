/**
 * Author: Furkan Sarihan
 * Mail: fusarihan@gmail.com
 */

'use strict';

var tabs = [];

chrome.runtime.onInstalled.addListener(function() {

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'furkansarihan.github.io'}
      }), new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'maeyler.github.io'}
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });

  chrome.extension.onMessage.addListener(function (msg) {
    var obj = { title: msg[0], dom: msg[1]};
    tabs.push(obj);
    console.log(tabs);
  });
  
  chrome.runtime.onMessageExternal.addListener(
    function(request, sender, sendResponse) {
      // Sending doms to back to Inspector
      sendResponse(
        tabs
      );
  });

});

function genereateTabs(){
  var respondJson = "";
  
}