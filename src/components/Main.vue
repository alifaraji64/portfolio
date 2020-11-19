<template>
  <main>
    <div id="button"><a href="#contact">Get in Touch</a></div>
    <section class="skewed-bg">
      <div class="content">
        <div class="text">
          <h1 ref="main_text"></h1>
        </div>
        <div class="image">
          <img
            src="@/assets/undraw_feeling_proud_qne1.svg"
            alt="home"
            width="230"
          />
        </div>
      </div>
    </section>
    <canvas></canvas>
  </main>
</template>

<script>
export default {
  methods: {
    toContact() {
      this.$router.push("/contact");
    },
  },
  mounted() {
    const canvas = document.querySelector("canvas");
    const c = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight / 6;
    const wave = {
      y: canvas.height / 2,
      length: 0.009,
      amplitude: 28,
      frequency: 200.01,
      lineWidth: 30,
    };
    const strokeColor = {
      r: 216,
      g: 27,
      b: 96,
    };
    const backgroundColor = {
      r: 255,
      g: 255,
      b: 255,
      a: 1,
    };

    let increment = 0.04;

    function animate() {
      wave.frequency += increment;
      requestAnimationFrame(animate);
      c.fillStyle = `rgba(${backgroundColor.r},${backgroundColor.g},${backgroundColor.b},${backgroundColor.a})`;
      c.fillRect(0, 0, canvas.width, canvas.height);
      c.beginPath();
      c.moveTo(-100, canvas.height / 2);
      for (let i = 0; i < canvas.width; i++) {
        c.lineTo(
          i,
          wave.y + Math.sin(i * wave.length + wave.frequency) * wave.amplitude
        );
      }
      c.strokeStyle = `rgb(${strokeColor.r},${strokeColor.g},${strokeColor.b})`;
      c.lineWidth = wave.lineWidth;
      c.stroke();
      c.closePath();
    }
    animate();
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight / 6;
    });
    let string = `Creativity and Interactivity are the things that I am expert in. I can create your dream website that you can enjoy and also profit.`;
    let i = 0;
    if (i < string.length)
      setInterval(() => {
        if (i < string.length) {
          let span = document.createElement("span");
          let h1 = this.$refs.main_text;
          span.innerHTML = string[i] && string[i];
          span.innerHTML && h1.appendChild(span);
          i++;
        }
      }, 65);
  },
};
</script>

<style lang='scss' scoped>
main #button {
  a {
    color: #d81b60;
    font-weight: 600;
    font-size: 1.2rem;
    cursor: pointer;
    position: relative;
    top: 290px;
    left: 14px;
    border: 3px solid #d81b60;
    background: white;
    padding: 10px 5px;
    transition: all 0.4s ease-out;
    &:hover {
      background: #d81b60;
      color: white;
      transform: scale(1.1);
      border: 2px dashed white;
    }
  }
}
.skewed-bg {
  background: purple;
  padding: 150px 0;
  transform: skew(0deg, 4deg) translateY(-100px);
  z-index: -1;
  position: relative;
  pointer-events: none;
  .content {
    transform: skew(0deg, -4deg);
    display: flex;
    .text {
      width: 60%;

      h1 {
        font-size: 2.1vw;
        color: rgb(223, 223, 223);
        line-height: 45px;
        padding-left: 10px;
        span {
          &:last-child {
            border-right: 2px solid orange;
          }
        }
      }
    }
    .image {
      width: 40%;
      display: flex;
      justify-content: center;
      img {
        width: 23vw;
      }
    }
  }
}
canvas {
}
</style>