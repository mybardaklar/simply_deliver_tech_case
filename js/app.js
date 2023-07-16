$(document).ready(function () {
	$("button.main-header__mobile-button").on("click", function (e) {
		e.preventDefault();
		$("aside.drawer-navigation").addClass("drawer-navigation--active");
	});

	$("aside.drawer-navigation").on("click", function (e) {
		const trigger = $(e.target);

		console.log(e);

		if (
			!trigger.is(".drawer-navigation__wrapper") &&
			!trigger.is(".drawer-navigation__wrapper *")
		) {
			$("aside.drawer-navigation").removeClass("drawer-navigation--active");
		}
	});

	$(".s-track-recording__filter button").on("click", function () {
		const attrFilter = $(this).data("filter");

		$(".s-track-recording__filter button").removeClass("active");
		$(this).addClass("active");

		if (attrFilter !== "") {
			$(".s-track-recording__card").hide();
			$(".s-track-recording__card")
				.filter(`[data-filter="${attrFilter}"]`)
				.show();
		} else {
			$(".s-track-recording__card").show();
		}

		console.log(attrFilter);
	});
});
