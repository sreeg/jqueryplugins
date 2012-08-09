window.modalStates = [
	"closed",
	"normal",
	"maximized",
	"minimized"
];

window.modalState = 0;

var modalInit = function() {
	YAHOO.util.Event.on("launchModal", "click", showModal);
	YAHOO.util.Event.on("submitBtn", "click", closeModal);
	YAHOO.util.Event.on("cancelBtn", "click", closeModal);
	YAHOO.util.Event.on("maximizeModal", "click", maximizeModal);
	YAHOO.util.Event.on("minimizeModal", "click", minimizeModal);
	YAHOO.util.Event.on("restoreModal", "click", restoreModal);
	YAHOO.util.Event.on("closeModal", "click", closeModal);
	YAHOO.util.Event.on("showHide", "click", showHide);

	window.modalResize = new YAHOO.util.Resize('modalDialog', {
		proxy: true,
		handles: "br"
	});
};

var closeModal = function() {
	var modalOverlay = document.getElementById("modalOverlay");
	modalOverlay.style.display = "none";
	window.modalState = 0;
};

var showModal = function(initState) {
	var modalOverlay = document.getElementById("modalOverlay");
	modalOverlay.style.display = "block";
	window.modalState = 1;
};

var restoreModal = function() {
	var modalOverlay = document.getElementById("modalOverlay");
	YAHOO.util.Dom.removeClass(modalOverlay, "maximizedModal");
	YAHOO.util.Dom.removeClass(modalOverlay, "minimizedModal");
	//YAHOO.util.Resize.unlock(window.modalResize);
	/*var modalDialog = document.getElementById("modalDialog");
	modalDialog.style.width = "auto"
	modalDialog.style.height = "auto"*/

	window.modalState = 1;
};

var maximizeModal = function() {
	
	var modalOverlay = document.getElementById("modalOverlay");
	YAHOO.util.Dom.removeClass(modalOverlay, "minimizedModal");
	YAHOO.util.Dom.addClass(modalOverlay, "maximizedModal");

	//YAHOO.util.Resize.lock(window.modalResize);

	/*var modalDialog = document.getElementById("modalDialog");
	modalDialog.style.width = "100%"
	modalDialog.style.height = "100%"*/

	window.modalState = 2;
};

var minimizeModal = function() {
	var modalOverlay = document.getElementById("modalOverlay");
	YAHOO.util.Dom.removeClass(modalOverlay, "maximizedModal");
	YAHOO.util.Dom.addClass(modalOverlay, "minimizedModal");

	/*var modalDialog = document.getElementById("modalDialog");
	modalDialog.style.width = "auto"
	modalDialog.style.height = "auto"*/

	//YAHOO.util.Resize.lock(window.modalResize);

	window.modalState = 3;
};

var showHide = function() {
	if(YAHOO.util.Dom.hasClass("moreContent", "hidden")) {
		YAHOO.util.Dom.removeClass("moreContent", "hidden");
	} else {
		YAHOO.util.Dom.addClass("moreContent", "hidden");
	}
};

YAHOO.util.Event.onDOMReady(modalInit);