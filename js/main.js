var x = document.getElementById("mainSite");
var y = document.getElementById("captcha");
var particles = document.getElementById("captcha");

var source = document.createElement('source');

x.style.display = "none";

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

source.setAttribute('src', 'https://cdn.honest.wtf/media/background/bg.webp');
video.appendChild(source);

video.pause();

function enterSite() {
  var title = new MovingTitle("Honest.wtf | Discord bot   ", 250, 15);
  title.init();
  video.volume = 0.15;
	video.play();
	x.style.display = "block";
	y.style.display = "none";
	
tsParticles.load("tsparticles", {
  fpsLimit: 144,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab"
      },
      resize: true
    },
  },
  particles: {
    color: {
      value: "#5a5aff"
    },
    links: {
      color: "#E2A6FF",
      distance: 100,
      enable: true,
      opacity: 1,
      width: 1
    },
    collisions: {
      enable: true
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 5,
      straight: false
    },
    number: {
      density: {
        enable: true,
        value_area: 500
      },
      value: 25
    },
    opacity: {
      value: 1
    },
    shape: {
      type: "edge"
    },
    size: {
      random: true,
      value: 3
    }
  },
  detectRetina: true
});

}

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

function on() {
  document.getElementById("overlay").style.display = "block";
}

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
