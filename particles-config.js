particlesJS("particles-js", {
  particles: {
    number: {
      value: 80, // Quantidade de partículas
      density: {
        enable: true,
        value_area: 600 // Densidade das partículas
      }
    },
    color: {
      value: "#ffffff" // Cor das partículas (branco)
    },
    shape: {
      type: "circle", // Formato: circle, edge, triangle, polygon, star
      stroke: {
        width: 0,
        color: "#000000"
      }
    },
    opacity: {
      value: 0.7, // Opacidade das partículas
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3, // Tamanho das partículas
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true, // Linhas conectando partículas
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 4, // Velocidade do movimento
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse" // Partículas se afastam do cursor
      },
      onclick: {
        enable: true,
        mode: "push" // Adiciona partículas ao clicar
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});