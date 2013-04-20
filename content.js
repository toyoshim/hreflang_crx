var links = document.getElementsByTagName('link');
var hreflangs = [];

for (var i = 0; i < links.length; ++i) {
    if (links[i].rel != 'alternate' || typeof links[i].hreflang == 'undefined')
        continue;
    hreflangs.push({
        lang: links[i].hreflang,
        href: links[i].href
    });
}
chrome.extension.sendRequest({
  show: hreflangs.length != 0,
  hreflangs: hreflangs
}, function(response) {});
