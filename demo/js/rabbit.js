function $(id) {
	return document.getElementById(id);
}

var $rabbit1 = $("rabbit1");
var $rabbit2 = $("rabbit2");
var $rabbit3 = $("rabbit3");
var $rabbit4 = $("rabbit4");

var images = ["image/rabbit.png", "image/rabbit-lose.png", "image/rabbit-win.png"];

// var imgUrl = "image/rabbit.png";
var rightRunningMap = ["0 -854", "-174 -852", "-349 -852", "-524 -852",
					   "-698 -852", "-873 -848"];
var leftRunningMap  = ["0 -373", "-175 -376", "-350 -377", "-524 -377", 
					  "-699 -377", "-873 -379"];
var rabbitWinMap    = ["0 0", "-198 0", "-401 0", "-609 0", "-816 0", 
					   "0 -96", "-208 -97", "-415 -97", "-623 -97", 
					   "-831 -97", "0 -203", "-207 -203", "-415 -203",
					   "-623 -203", "-831 -203", "0 -307", "-206 -307",
					   "-414 -307", "-623 -307"];
var rabbitLoseMap 	= ["0 0", "-163 0", "-327 0", "-491 0", "-655 0", "-819 0",
					   "0 -135", "-166 -135", "-333 -135", "-500 -135", "-668 -135",
					   "-835 -135", "0 -262"];

//动画库
var animation = window.animation;

function repeat() {
	var repeatAnimation = animation().loadImage(images).changePosition($rabbit1, rightRunningMap, images[0]).repeatForever();
	repeatAnimation.start(80);
}
repeat();

function win() {
	var winAnimation = animation().loadImage(images).changePosition($rabbit3, rabbitWinMap, images[2]).repeat(3).then(function(){
		console.log("win animation repeat 3 times and finished!")
	});
	winAnimation.start(200);
}
win();

function lose() {
	var loseAnimation = animation().loadImage(images).changePosition($rabbit4, rabbitLoseMap, images[1]).wait(1000).repeat(1)
								   .then(function(){
								   		console.log("lose animation repeat 1 time and finished");
								   });
	loseAnimation.start(200);
}
lose();

function run() {
	// 兔子奔跑的速度
	var speed = 6;
	// 初始位置
	var initLeft = 100;
	// 终点位置
	var finalLeft = 400;
	// 帧数
	var frameLength = 6;
	// 初始腿的位置为第4帧
	var frame = 4;
	// 初始往右跑
	var right = true;
	// 动画执行间隔
	var interval = 50;

	// success 就是 next
	var runAnimation = animation().loadImage(images).enterFrame(function(success, time) {
		// 运行的比率，运行了多少次
		var ratio = time / interval;
		var position;
		var left;
		// 向右跑的动画
		if (right) {
			position = rightRunningMap[frame].split(/\s+/);
			left = Math.min(initLeft + speed * ratio, finalLeft);
			
			if (left === finalLeft) {
				right = false;
				frame = 4;
				success();
				return;
			}
			
		} else {
			position = leftRunningMap[frame].split(/\s+/);
			left = Math.max(initLeft, finalLeft - speed * ratio);

			if (left === initLeft) {
				right = true;
				frame = 4;
				success();
				return;
			}

		}

		$rabbit2.style.backgroundImage = "url(" + images[0] + ")";
		$rabbit2.style.backgroundPosition = position[0] + "px " + position[1] + "px";
		$rabbit2.style.left = left + "px";
		frame++;
		if (frame === frameLength) {
			frame = 0;
		}
	}).repeat(1).wait(1000).changePosition($rabbit2, rabbitWinMap, images[2]).then(function() {
		console.log("finished!");
	});
	runAnimation.start(interval);
}
run();


























