 /*!
 * jQuery JavaScript Library v1.8.0
 */


$(document).ready(function (){
	$('.normal,.active', '.navbar-title').hover(function () {
		$(this).addClass('open');
	}, function () {
		$(this).removeClass('open');
	});
});

startList = function() {
if (document.all&&document.getElementById) {
cssdropdownRoot = document.getElementById("cssdropdown");
for (i=0; i<cssdropdownRoot.childNodes.length; i++) {
node = cssdropdownRoot.childNodes[i];
if (node.nodeName=="LI") {
node.onmouseover=function() {
this.className+=" over";
}
node.onmouseout=function() {
this.className=this.className.replace(" over", "");
}
}
}
}
}
if (window.attachEvent)
window.attachEvent("onload", startList)
else
window.onload=startList;
