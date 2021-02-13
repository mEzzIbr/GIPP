const api = "./Data.json"
var HowMany = 150;
var pSpeed = 2;
async function get() {
  const response = await fetch('./Data.json');
  const MyData = await response.json();
  document.querySelector('#food').innerHTML = `
<select onchange='getGI(this.value)'>
${
  MyData.map(item => `<option> ${item.name} </option>`)
}

  </select>
 `
}



get();

async function getGI(itemname) {

  const response = await fetch('./Data.json');
  const MyData = await response.json();
  
  let obj = MyData.find(o => o.name === itemname);

   Gvalue = obj.GI

document.getElementById('GIvalue').innerHTML = Gvalue

  if (Gvalue > 30) {
    HowMany = 200
    pSpeed = 10
    Rain();
  }
  else if ( Gvalue < 30) {
    HowMany = 10
    pSpeed = 1.5
    Rain();
  }
}




function Rain() {

particlesJS("particles-js", {
  particles: {
    number: {
      value: HowMany,
      density: {
        enable: true,
        value_area: 631.3280775270874
      }
    },
    color: {
      value: "#fff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: pSpeed,
      direction: "bottom",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5
        }
      },
      bubble: {
        distance: 400,
        size: 4,
        duration: 0.3,
        opacity: 1,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
}
Rain();