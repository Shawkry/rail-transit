<template>
  <div id="app">
    <div class="wrapper">
    <router-link to="/Home/Mappage" class="button">进入平台</router-link>
  </div>
    <canvas id="cvs"></canvas>
    <div class="input-container" style="display: none">
      <div class="input-content">
        <div class="mask"></div>
        <div class="body">
          <input type="text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      const cvs = document.querySelector("#cvs");
      cvs.width = cvs.offsetWidth * window.devicePixelRatio;
      cvs.height = cvs.offsetHeight * window.devicePixelRatio;
      var g = true
      /* 粒子 */
      class Particle {
        cvsCtx = null; // canvas 绘图上下文
        radius = 0; // 粒子半径
        diameter = 0; // 粒子直径
        minX = 0; // 粒子分布最小坐标
        minY = 0; // 粒子分布最小坐标
        maxX = 0; // 粒子分布最大坐标
        maxY = 0; // 粒子分布最大坐标

        color = 0; // 粒子当前色值
        alpha = 0.5; // 粒子透明度
        x = 0; // 粒子当前坐标
        y = 0; // 粒子当前坐标

        path = []; // 粒子的运动路径队列
        random = true; // 是否是自由粒子（不参与组成文字）
        delay = 0; // 粒子动画启动延时
        duration = 1000; // 粒子动画持续时间
        fromColor = 0; // 粒子运动起始色值
        toColor = 0; // 粒子运动结束色值
        fromAlpha = 0; // 粒子运动起始透明度
        toAlpha = 0; // 粒子运动结束透明度
        fromX = 0; // 粒子运动起始坐标
        fromY = 0; // 粒子运动起始坐标
        toX = 0; // 粒子运动结束坐标
        toY = 0; // 粒子运动结束坐标
        startTime = 0;

        get randomX() {
          const { minX, maxX, diameter } = this;
          return (
            (Math.floor((Math.random() * (maxX - minX) + minX) / diameter) +
              0.5) *
            diameter
          );
        }

        get randomY() {
          const { minY, maxY, diameter } = this;
          return (
            (Math.floor((Math.random() * (maxY - minY) + minY) / diameter) +
              0.5) *
            diameter
          );
        }

        constructor({
          cvsCtx,
          radius,
          minX,
          minY,
          maxX,
          maxY,
          color = 0,
          alpha = 0,
          random = true,
          delay = 0,
          duration = 1000,
        }) {
          this.cvsCtx = cvsCtx;
          this.radius = radius;
          this.diameter = radius * 2;
          this.minX = minX;
          this.minY = minY;
          this.maxX = maxX;
          this.maxY = maxY;

          this.color = this.fromColor = this.toColor = color;
          this.alpha = this.fromAlpha = this.toAlpha = alpha;
          this.x = this.fromX = this.toX = this.randomX;
          this.y = this.fromY = this.toY = this.randomY;

          this.random = random;
          this.delay = delay;
          this.duration = duration;
        }

        update({ random, delay, duration, color, alpha, x, y } = {}) {
          this.path.push({
            random: random === undefined ? this.random : random,
            delay: delay === undefined ? this.delay : delay,
            duration: duration === undefined ? this.duration : duration,
            color: color === undefined ? this.color : color,
            alpha: alpha === undefined ? this.alpha : alpha,
            x: x === undefined ? this.randomX : x + this.radius,
            y: y === undefined ? this.randomY : y + this.radius,
          });
        }

        render() {
          const {
            startTime,
            delay,
            duration,
            fromColor,
            toColor,
            fromAlpha,
            toAlpha,
            fromX,
            toX,
            fromY,
            toY,
            cvsCtx,
            radius,
          } = this;
          const p = this._easeInOutQuad(
            Math.max(
              Math.min((Date.now() - startTime - delay) / duration, 1),
              0
            )
          );
          this.color = (toColor - fromColor) * p + fromColor;
          this.alpha = (toAlpha - fromAlpha) * p + fromAlpha;
          this.x = (toX - fromX) * p + fromX;
          this.y = (toY - fromY) * p + fromY;

          cvsCtx.beginPath();
          cvsCtx.fillStyle = `hsla(${200}, 100%, 80%, ${this.alpha})`;
          cvsCtx.arc(this.x, this.y, radius * 0.8, 0, Math.PI * 2, false);
          cvsCtx.fill();

          // 已运动到当前终点坐标
          if (p === 1) {
            if (this.path.length === 0) {
              if (this.random) {
                this.update({ random: true });
              } else {
                return;
              }
            }
            this.startTime = Date.now();
            const {
              random,
              delay,
              duration,
              color,
              alpha,
              x,
              y,
            } = this.path.shift();
            this.fromColor = this.color;
            this.fromAlpha = this.alpha;
            this.fromX = this.x;
            this.fromY = this.y;
            this.random = random;
            this.delay = delay;
            this.duration = duration;
            this.toColor = color;
            this.toAlpha = alpha;
            this.toX = x;
            this.toY = y;
            if(g==false){  //粒子运动停止
              this.random = 0;
            }
          }
        }

        _easeInOutQuad(x) {
          return x < 0.5 ? 2 * x ** 2 : 1 - (2 - 2 * x) ** 2 / 2;
        }
      }

      /* 粒子文本 */
      class ParticleText {
        particles = []; // 所有粒子
        text = ["轨道交通","大数据挖掘",'LSTM预测','SpringBoot','Vue+Echarts',]; // 文字轮播队列
        cvs = null; // 粒子画布
        cvsCtx = null; // 粒子画布绘图上下文
        textCvs = null; // 文本画布
        textCvsCtx = null; // 文本画布绘图上下文
        textData = null; // 文本画布的imageData
        cvsRatio = 10; // 粒子画布与文本画布边长之比
        _spreadTimer = null; // 粒子自动扩散延时器

        get randomText() {
          const _text = "轨道交通分析平台";
          return _text;
        }

        get randomColor() {
          return Math.random() * 360;
        }

        get randomDelay() {
          return Math.random() * 200;
        }

        get randomDuration() {
          //return 1000 + Math.random() * 1000;
          return 1000;
        }

        get randomAlpha() {
          return Math.random() > 0.9 ? 0.5 : 0;
        }

        constructor(cvs, text = "") {
          this.cvs = cvs;
          this.text.push(text || this.randomText);
          this.cvsCtx = cvs.getContext("2d");
          this.textCvs = document.createElement("canvas");
          this.textCvs.width = cvs.width / this.cvsRatio;
          this.textCvs.height = cvs.height / this.cvsRatio;
          this.textCvsCtx = this.textCvs.getContext("2d");

          this._initParticles();
          this._update();
          this._onEnterFrame();
        }

        _initParticles() {
          const {
            textCvs: { width, height },
            cvs: { width: w, height: h },
            cvsCtx,
            cvsRatio,
          } = this;
          const color = this.randomColor;
          for (let i = 0; i < (width * height) / 10; i++) {
            this.particles[i] = new Particle({
              cvsCtx,
              radius: cvsRatio / 2,
              minX: 0,
              minY: 0,
              maxX: w,
              maxY: h,
              delay: this.randomDelay,
              duration: this.randomDuration,
              color,
              alpha: this.randomAlpha,
            });
          }
        }

        updateText(text) {
          text.split(" ").forEach((item) => {
            if (/[a-zA-Z]/.test(item)) {
              this.text.push(item);
            } else {
              this.text.push(...item.split(""));
            }
          });
        }

        _update() {
          const { particles, textCvsCtx: cvsCtx } = this;
          const { width, height } = this.textCvs;

          cvsCtx.clearRect(0, 0, width, height);
          cvsCtx.fillStyle = "#000000";
          //cvsCtx.font = `700 ${width / 6.4}px Helvetica`;
          cvsCtx.font = `700 ${width / 10.4}px Helvetica`;
          cvsCtx.textAlign = "center";
          cvsCtx.textBaseline = "middle";
          cvsCtx.fillText(this.text.shift(), width / 2, height / 2);

          const textData = (this.textData = cvsCtx.getImageData(
            0,
            0,
            width,
            height
          ));

          // 组成文字的粒子
          const textParticle = [];
          for (let i = 0; i < textData.data.length; i += 4) {
            if (textData.data[i + 3] !== 0) {
              textParticle.push({
                index: i / 4,
                alpha: textData.data[i + 3] / 255,
              });
            }
          }

          // 设置粒子运动目标
          const color = this.randomColor;
          for (let i = 0; i < particles.length; i++) {
            let option = {
              random: true,
              delay: this.randomDelay,
              duration: this.randomDuration,
              color,
              alpha: this.randomAlpha,
            };
            if (i < textParticle.length) {
              const { index, alpha } = textParticle[i];
              option.random = false;
              option.alpha = alpha;
              option.x = (index % textData.width) * this.cvsRatio;
              option.y = parseInt(index / textData.width) * this.cvsRatio;
            }
            particles[i].update(option);
          }

          // 一段时间后自动散开
          if(g==true){
            this._spreadTimer = setTimeout(() => {
            const color = this.randomColor;
            for (let i = 0; i < particles.length; i++) {
              particles[i].update({
                random: true,
                delay: this.randomDelay,
                duration: this.randomDuration,
                color,
                alpha: this.randomAlpha,
              });
            }

            setTimeout(() => {
              this._spreadTimer = null;
              if (this.text.length === 1) {
                 g = false
                //this.text.push(this.randomText);
              }
              this._update();
            }, 700);
          }, 2000);
          }
          
        }
      
        _onEnterFrame() {
          const { particles, cvs, cvsCtx } = this;
          cvsCtx.clearRect(0, 0, cvs.width, cvs.height);
          for (let i = 0; i < particles.length; i++) {
            particles[i].render();
          }
          requestAnimationFrame(this._onEnterFrame.bind(this));
        }
      }

      const particleText = new ParticleText(cvs);

      /* (function () {
    const inputContainer = document.querySelector(".input-container");
    const inputContent = inputContainer.querySelector(".input-content");
    const inputMask = inputContent.querySelector(".mask");
    const input = inputContent.querySelector("input");

    let inputContainerVisible = false;
    let inputContentVisible = false;

    window.addEventListener("keyup", function (e) {
        if (e.code === "Enter" && !inputContainerVisible) {
            inputContainerVisible = true;
            inputContainer.style.display = "block";
            inputContentVisible = true;
            inputContent.classList.add("show");
            input.focus();
        }
    });

    input.addEventListener("keyup", function (e) {
        if (e.code === "Enter") {
            inputContentVisible = false;
            inputContent.classList.replace("show", "hide");
            input.blur();
        }
    });

    input.addEventListener("blur", function (e) {
        if (input.value.trim()) {
            particleText.updateText(input.value.trim());
        }
    });

    inputMask.addEventListener("animationend", function (e) {
        if (!inputContentVisible) {
            inputContainerVisible = false;
            inputContainer.style.display = "none";
            inputContent.classList.remove("hide");
            input.value = "";
        }
    });
})(); */
    },
  },
};
</script>

<style>
@keyframes sheen {
  0% {
    transform: skewY(-45deg) translateX(0);
  }
  100% {
    transform: skewY(-45deg) translateX(12.5em);
  }
}

.wrapper {
  display: block;
  position: fixed;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-name:bottonChange;
	animation-timing-function:ease-in-out;
  -webkit-animation-duration:15s;
}
@-webkit-keyframes bottonChange{
	0% {  
    opacity: 0;
        display: none;
    }
    98% {
      opacity: 0;
      display: none;
	}
    100% {
      display: block;
        opacity: 1;
        transition: 1s;
	}
 }
.button {
  padding: 0.75em 2em;
  text-align: center;
  text-decoration: none;
  color: #2194E0;
  border: 2px solid #2194E0;
  font-size: 24px;
  display: inline-block;
  border-radius: 0.3em;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
}
.button:before {
    content: "";
    background-color: rgba(255,255,255,0.5);
    height: 100%;
    width: 3em;
    display: block;
    position: absolute;
    top: 0;
    left: -4.3em;
    transform: skewX(-45deg) translateX(0);
    transition: none;
  }
  .button:hover {
    background-color:  #27395c;
    color: #fff;
    border-bottom: 4px solid darken(#2194E0, 10%);
  }
  .button:hover:before {
      transform: skewX(-45deg) translateX(13.5em);
     transition: all 0.5s ease-in-out;
    }
#app {
  position: relative;
  width: 100%;
  height: 100%;
}
html,
body {
  height: 100%;
  background-color: #000;
}

body {
  margin: 0;
  overflow: hidden;
}

#cvs {
  width: 100%;
  height: 100%;
  
  /* background-image: url(../../assets/img/image.jpg); */
  /* background-image: url(../../assets/img/bj1.png); */
  /* background-image: url(../../assets/img/bj1.png); */
  /* background-image: url(../../assets/img/image.png); */
  background-image: url(../../assets/img/back.png);
  background-size: 100% 100%;
}

.input-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.input-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.input-content.show .mask {
  -webkit-animation: maskShow 0.3s linear forwards;
  animation: maskShow 0.3s linear forwards;
}

@-webkit-keyframes maskShow {
  from {
    -webkit-backdrop-filter: blur(0px);
    backdrop-filter: blur(0px);
  }
  to {
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
  }
}

@keyframes maskShow {
  from {
    -webkit-backdrop-filter: blur(0px);
    backdrop-filter: blur(0px);
  }
  to {
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
  }
}

.input-content.hide .mask {
  -webkit-animation: maskHide 0.3s linear forwards;
  animation: maskHide 0.3s linear forwards;
}
@-webkit-keyframes maskHide {
  from {
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
  }
  to {
    -webkit-backdrop-filter: blur(0px);
    backdrop-filter: blur(0px);
  }
}
@keyframes maskHide {
  from {
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
  }
  to {
    -webkit-backdrop-filter: blur(0px);
    backdrop-filter: blur(0px);
  }
}

.body {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100%;
}

.body input {
  margin-bottom: 1em;
  padding: 0.25em;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  outline: none;
  font-size: 2vw;
  color: #fff;
}

.input-content.show input {
  -webkit-animation: inputShow 0.25s ease-out forwards;
  animation: inputShow 0.25s ease-out forwards;
}

@-webkit-keyframes inputShow {
  from {
    transform: translateY(5vw);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes inputShow {
  from {
    transform: translateY(5vw);
  }
  to {
    transform: translateY(0);
  }
}

.input-content.hide input {
  -webkit-animation: inputHide 0.25s ease-out forwards;
  animation: inputHide 0.25s ease-out forwards;
}

@-webkit-keyframes inputHide {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(5vw);
  }
}

@keyframes inputHide {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(5vw);
  }
}
</style>