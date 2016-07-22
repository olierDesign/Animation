window.onload = function() {
	var imgUrl = "image/man.png";
	var positions = ["0 -292", "-148 -292", "-300 -292", "-594 -6"];
	var ele = document.getElementById("man");

	var animation = window.animation;

	var repeatAnimation = animation().loadImage([imgUrl])
									 .changePosition(ele, positions, imgUrl)
									 .repeatForever();
	repeatAnimation.start(80);



	// animation(ele, positions, imgUrl);

	// function animation(ele, positions, imgUrl) {
	// 	ele.style.backgroundImage = "url(" + imgUrl + ")";
	// 	ele.style.backgroundRepeat = "no-repeat";

	// 	var index = 0;

	// 	function run() {
	// 		var position = positions[index].split(/\s+/);
	// 		ele.style.backgroundPosition = position[0] + "px " + position[1] + "px";
	// 		index++;

	// 		if (index >= positions.length) {
	// 			index = 0;
	// 		}

	// 		setTimeout(run, 200);
	// 	}

	// 	run();
	// }
};