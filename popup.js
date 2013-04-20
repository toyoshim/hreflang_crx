var values = window.location.search.substring(1).split('&');
var args = {};
for (var i = 0; i < values.length; ++i) {
    var kv = values[i].split('=');
    args[kv[0]] = kv[1];
}
var hrefs = JSON.parse(unescape(args['json']));
var select = document.lang_form.lang_select;
select.length = hrefs.length + 1;
for (var i = 0; i < hrefs.length; ++i) {
    select.options[i + 1].value = hrefs[i].href;
    select.options[i + 1].text = hrefs[i].lang;
}
select.options[0].text = 'Select a language';
select.options[0].selected = true;

document.querySelector('#lang_select').addEventListener('change', function(e) {
    var url = e.srcElement[e.srcElement.selectedIndex].value;
    var id = parseInt(args['id']);
    chrome.tabs.update(id, { 'url': url });
    window.close();
});
