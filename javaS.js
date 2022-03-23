$(function() {
    $('details').click(function (event) {
        $('details').not(this).removeAttr("open");
    });
});

$(document).ready(function () {
	function hex_initial_animation() {
		$(".hex-wrap,.hover-notify").velocity("transition.expandIn", { stagger: 150 });
		$(".hex-wrap").velocity("callout.pulse");
		$(".hoverblock").velocity("fadeOut", { delay: 3000, duration: 0 });
		}
	hex_initial_animation();

var hoverdetect = setInterval(function(){ hovernotify() }, 3000);
function hovernotify() {
    $(".hover-notify").velocity("callout.tada");
}
function myStopFunction() {
$(".hover-notify").velocity('stop', true).velocity("fadeOut");
    clearInterval(hoverdetect);
}

		$(".hex-init").mouseenter(function () {
			
			myStopFunction();

			var title_color =  $(this).parent().attr("data-color");
			var title_name = $(this).parent().attr("data-title");
			var desc_name = $(this).parent().attr("data-content");

				function hex_description() {
					$('.code-description').velocity('stop', true).velocity("transition.slideRightBigIn");
					$('.' + desc_name).siblings().removeClass('desc-active');
						setTimeout(function() {
							$('.' + desc_name).addClass('desc-active');
							$('.code-descriptopn > div, .desc-active').children().velocity('stop', true).velocity("transition.slideRightBigIn", { stagger: 300 });
							$('.code-title, .desc-active span').velocity({color: title_color}, { queue: false });
							$('.code-title').text(title_name)
						}, 0);
			    }
			    hex_description();

				$(this).parent().addClass('hexactive'); 
				$('.hexactive').velocity({scaleX:"1.1",scaleY:"1.1"}, { duration: 200 });

			}).mouseleave(function () {
				 $('.hexactive').velocity('stop', true).velocity('reverse').removeClass('hexactive');
			});
});

$("#scrollerInterets").simplyScroll({
    speed: 4
});

$("#scrollerAtouts").simplyScroll({
    speed: 4
});

// ===========================================
// Hero Animated Canvas Background
// by Mário Duarte
// ===========================================

let ww = $(window).width();
let wh = $(window).height();

// pure javascrip random function ============
function random(min, max) {
	return Math.random() * (max - min) + min;
}

window.requestAnimFrame = (function() {
	return window.requestAnimationFrame ||
		function(callback, element) {
			window.setTimeout(callback, 1000 / 60);
		};
})();

function init() {} //end init

function animate() {
	requestAnimFrame(animate);
	draw();
}

function draw() {

	//setup canvas enviroment
	let time = new Date().getTime() * 0.002;
	//console.log(time);
	const color1 = "rgb(255,69,0,0.3)";
	const color2 = "rgb(22,210,174,0.3)";
	let canvas = document.getElementById("hero-canvas");
	let ctx = document.getElementById("hero-canvas").getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.save();

	// random float to be used in the sin & cos
	let randomX = random(.2, .9);
	let randomY = random(.2, .9);

	// sin & cos for the movement of the triangles in the canvas
	let rectX = Math.cos(time) * 1.5 + randomX;
	let rectY = Math.sin(time) * 1.5 + randomY;
	let rectX2 = Math.cos(time * .7) * 3 + randomX;
	let rectY2 = Math.sin(time * .7) * 3 + randomY;
	let rectX3 = Math.cos(time * 1.4) * 4 + randomX;
	let rectY3 = Math.sin(time * 1.4) * 4 + randomY;

	//console.log(rectX + '-' + rectY + '-' + rectX2 + '-' + rectY2 + '-' + rectX3 + '-' + rectY3);

	//triangle gradiente ==========================================
	var triangle_gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
	triangle_gradient.addColorStop(0, color1);
	triangle_gradient.addColorStop(1, color2);

	//triangle group 1 ===========================================
	// triangle 1.1
	ctx.beginPath();
	ctx.moveTo(rectX2 + 120, rectY2 - 100);
	ctx.lineTo(rectX2 + 460, rectY2 + 80);
	ctx.lineTo(rectX2 + 26, rectY2 + 185);
	ctx.fillStyle = triangle_gradient;
	ctx.fill();

	//triangle 1.2
	ctx.beginPath();
	ctx.moveTo(rectX - 50, rectY - 25);
	ctx.lineTo(rectX + 270, rectY + 25);
	ctx.lineTo(rectX - 50, rectY + 195);
	ctx.fillStyle = triangle_gradient;
	ctx.fill();

	//triangle 1.3
	ctx.beginPath();
	ctx.moveTo(rectX3 - 140, rectY3 - 150);
	ctx.lineTo(rectX3 + 180, rectY3 + 210);
	ctx.lineTo(rectX3 - 225, rectY3 - 50);
	ctx.fillStyle = triangle_gradient;
	ctx.fill();

	//triangle group 2 ===========================================
	// triangle 2.1
	ctx.beginPath();
	ctx.moveTo(rectX + (canvas.width - 40), rectY - 30);
	ctx.lineTo(rectX + (canvas.width + 40), rectY + 190);
	ctx.lineTo(rectX + (canvas.width - 450), rectY + 120);
	ctx.fillStyle = triangle_gradient;
	ctx.fill();

	// triangle 2.2
	ctx.beginPath();
	ctx.moveTo(rectX3 + (canvas.width - 200), rectY3 - 240);
	ctx.lineTo(rectX3 + (canvas.width + 80), rectY3 - 240);
	ctx.lineTo(rectX3 + (canvas.width - 50), rectY3 + 460);
	ctx.fillStyle = triangle_gradient;
	ctx.fill();

	// triangle 2.3
	ctx.beginPath();
	ctx.moveTo(rectX2 + (canvas.width - 400), rectY2 + 140);
	ctx.lineTo(rectX2 + (canvas.width + 20), rectY2 + 200);
	ctx.lineTo(rectX2 + (canvas.width - 350), rectY2 + 370);
	ctx.fillStyle = triangle_gradient;
	ctx.fill();

	//triangle group 3 ===========================================
	// triangle 3.1
	ctx.beginPath();
	ctx.moveTo(rectX3 - 50, rectY3 + (canvas.height - 350));
	ctx.lineTo(rectX3 + 350, rectY3 + (canvas.height - 220));
	ctx.lineTo(rectX3 - 100, rectY3 + (canvas.height - 120));
	ctx.fillStyle = triangle_gradient;
	ctx.fill();

	// triangle 3.2
	ctx.beginPath();
	ctx.moveTo(rectX + 100, rectY + (canvas.height - 380));
	ctx.lineTo(rectX + 320, rectY + (canvas.height - 180));
	ctx.lineTo(rectX - 275, rectY + (canvas.height + 150));
	ctx.fillStyle = triangle_gradient;
	ctx.fill();

	// triangle 3.3
	ctx.beginPath();
	ctx.moveTo(rectX2 - 230, rectY2 + (canvas.height - 50));
	ctx.lineTo(rectX2 + 215, rectY2 + (canvas.height - 110));
	ctx.lineTo(rectX2 + 250, rectY2 + (canvas.height + 130));
	ctx.fillStyle = triangle_gradient;
	ctx.fill();

	//triangle group 4 ===========================================
	// triangle 4.1
	ctx.beginPath();
	ctx.moveTo(rectX3 + (canvas.width - 80), rectY3 + (canvas.height - 320));
	ctx.lineTo(rectX3 + (canvas.width + 250), rectY3 + (canvas.height + 220));
	ctx.lineTo(rectX3 + (canvas.width - 200), rectY3 + (canvas.height + 140));
	ctx.fillStyle = triangle_gradient;
	ctx.fill();

	// triangle 4.2
	ctx.beginPath();
	ctx.moveTo(rectX + (canvas.width - 100), rectY + (canvas.height - 160));
	ctx.lineTo(rectX + (canvas.width - 30), rectY + (canvas.height + 90));
	ctx.lineTo(rectX + (canvas.width - 420), rectY + (canvas.height + 60));
	ctx.fillStyle = triangle_gradient;
	ctx.fill();

	// triangle 4.3
	ctx.beginPath();
	ctx.moveTo(rectX2 + (canvas.width - 320), rectY2 + (canvas.height - 200));
	ctx.lineTo(rectX2 + (canvas.width - 50), rectY2 + (canvas.height - 20));
	ctx.lineTo(rectX2 + (canvas.width - 420), rectY2 + (canvas.height + 120));
	ctx.fillStyle = triangle_gradient;
	ctx.fill();

	ctx.restore();

} //end function draw

//call init
init();
animate();