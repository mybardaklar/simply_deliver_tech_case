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
});
