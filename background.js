function onRequest(request, sender, sendResponse) {
  var tab = sender.tab;
  var id = tab.id;

  // Hides if there is not any alternate hreflang site.
  if (!request.show) {
    chrome.pageAction.hide(id);
    sendResponse({});
    return;
  }

  // Shows an indicator.
  chrome.pageAction.setIcon({
    path: 'icon_128.png',
    tabId: id
  });
  var langs = request.hreflangs.length;
  chrome.pageAction.setTitle({
    title: langs + ' languages are supported in this site.',
    tabId: id
  });
  var query = escape(JSON.stringify(request.hreflangs));
  var url = 'popup.html?id=' + id + '&json=' + query;
  chrome.pageAction.setPopup({
    popup: url,
    tabId: id
  });
  chrome.pageAction.show(id);
  sendResponse({});
};

chrome.extension.onRequest.addListener(onRequest);