<script>
(function () {
	var tabs_menu = document.getElementsByClassName("tabs-menu");
	for (var k = 0; k < tabs_menu.length; k++) {
		tabs_menu[k].onclick = js_tabs;
	}
	function js_tabs() {
		var tab_id = this.getAttribute("data-target");
		var tabs_panel = document.getElementsByClassName("tabs-panel");

		for (var i = 0; i < tabs_panel.length; i++) {
			tabs_panel[i].style.display = "none";
			tabs_panel[i].className = tabs_panel[i].className.replace(" animated-tabs bounceIn", "");
		}
		for (var j = 0; j < tabs_menu.length; j++) {
			tabs_menu[j].className = tabs_menu[j].className.replace(" tabs-menu-active", "");
		}
		this.className += " tabs-menu-active";
		var current_tab = document.getElementById(tab_id);
		current_tab.style.display = "block";
		current_tab.className += " animated-tabs bounceIn";
		return false;
	}
})();
</script>