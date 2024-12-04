import { useEffect, useState } from "react";
import "./App.css";
import $ from "jquery";

function App() {
  let datetxt = "1/1/2003";
  let datatxtletter =
    "Happy birthday! Wishing you a day filled with joy, laughter, and wonderful memories 💕";
  let titleLetter = "Dear em :)))";
  let datetxtSplit = datetxt.split("");
  const [text, setText] = useState("");
  let charArrDateLetter = datatxtletter.split("");
  let charArrTitle = titleLetter.split("");
  let currentIndexLetter = 0;
  let currentIndexTitle = 0;
  let text__letter = document.querySelector(".text__letter p");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      let currentIndex = 0;
      let b = "";
      const timeDatetxt = setInterval(() => {
        if (currentIndex < datetxtSplit.length) {
          b += datetxtSplit[currentIndex];
          setText(b);
          currentIndex += 1;
        } else {
          const i = document.createElement("i");
          i.className = "fa-solid fa-star";
          document.querySelector(".date__of__birth").prepend(i);
          document
            .querySelector(".date__of__birth")
            .appendChild(i.cloneNode(true));
          clearInterval(timeDatetxt);
        }
      }, 100);
    }, 12000);

    return () => clearTimeout(timeoutId);
  }, []);

  var intervalContent;
  var intervalTitle;
  const openLetter = () => {
    $(".box__letter").slideDown();
    setTimeout(function () {
      $(".letter__border").slideDown();
    }, 1000);

    setTimeout(function () {
      intervalTitle = setInterval(function () {
        if (currentIndexTitle < charArrTitle.length) {
          document.querySelector(".title__letter").textContent +=
            charArrTitle[currentIndexTitle];
          let i = document.createElement("i");
          i.className = "fa-solid fa-heart";
          document.querySelector(".title__letter").appendChild(i);
          currentIndexTitle++;
        } else {
          clearInterval(intervalTitle);
        }
      }, 100);
    }, 2000);
    setTimeout(function () {
      document.querySelector("#heart__letter").classList.add("animationOp");
      document.querySelector(".love__img").classList.add("animationOp");
      document.querySelector("#mewmew").classList.add("animationOp");
    }, 2800);
    setTimeout(function () {
      document.querySelectorAll(".heart").forEach((item) => {
        item.classList.add("animation");
      });
    }, 3500);
    setTimeout(function () {
      const intervalContent = setInterval(function () {
        if (currentIndexLetter < charArrDateLetter.length) {
          text__letter.textContent += charArrDateLetter[currentIndexLetter];
          currentIndexLetter++;
        } else {
          clearInterval(intervalContent);
        }
      }, 50);
    }, 6000);
  };

  const closeLetter = () => {
    clearInterval(intervalContent);
    document.querySelector(".title__letter").textContent = "";
    text__letter.textContent = "";
    currentIndexLetter = 0;
    currentIndexTitle = 0;
    document.querySelector("#heart__letter").classList.remove("animationOp");
    document.querySelector(".love__img").classList.remove("animationOp");
    document.querySelector("#mewmew").classList.remove("animationOp");
    document.querySelectorAll(".heart").forEach((item) => {
      item.classList.remove("animation");
    });
    $(".box__letter").slideUp();
    $(".letter__border").slideUp();
  };

  //mobile

  function mobile() {
    const app = {
      timeout: function (txt, dom) {
        let currentIndex = 0;
        let charArr = txt.split("");
        const intervalMobile = setInterval(function () {
          if (currentIndex < charArr.length) {
            dom.textContent += charArr[currentIndex];
            currentIndex++;
          } else {
            clearInterval(intervalMobile);
          }
        }, 200);
      },
    };
    return app;
  }
  const fcMobile = mobile();
  if (window.innerWidth < 768) {
    setTimeout(() => {
      fcMobile.timeout("26", document.querySelector(".day"));
    }, 5000);
    setTimeout(() => {
      fcMobile.timeout("10", document.querySelector(".month"));
    }, 6000);
  }

  return (
    <div id="wrapper" className="App">
      <div className="flag__birthday">
        <img src="./images/1.png" alt="" width="350" className="flag__left" />
        <img src="./images/1.png" alt="" width="350" className="flag__right" />
      </div>
      <div className="content">
        <div className="left">
          <div className="title">
            <h1 className="happy">
              <span style={{ "--t": "4s" }}>H</span>
              <span style={{ "--t": "4.2s" }}>a</span>
              <span style={{ "--t": "4.4s" }}>p</span>
              <span style={{ "--t": "4.6s" }}>p</span>
              <span style={{ "--t": "4.8s" }}>
                y
                <div className="hat">
                  <img src="./images/hat.png" alt="" width="130" />
                </div>
              </span>
            </h1>
            <h1 className="birthday">
              <span style={{ "--t": "5s" }}>B</span>
              <span style={{ "--t": "5.2s" }}>i</span>
              <span style={{ "--t": "5.4s" }}>r</span>
              <span style={{ "--t": "5.6s" }}>t</span>
              <span style={{ "--t": "5.8s" }}>h</span>
              <span style={{ "--t": "6s" }}>d</span>
              <span style={{ "--t": "6.2s" }}>a</span>
              <span style={{ "--t": "6.4s" }}>y</span>
            </h1>
          </div>
          <div className="date__of__birth">
            <span>{text}</span>
          </div>
          <div className="btn">
            <button id="btn__letter" onClick={openLetter}>
              Nhận thư nè :)))
              <i className="fa-regular fa-envelope"></i>
            </button>
          </div>
        </div>
        <div className="right">
          <div className="box__account">
            <div className="image">
              <img alt="" />
            </div>
            <div className="name">
              <i className="fa-solid fa-heart"></i>
              <span>Yenaiti</span>
              <i className="fa-solid fa-heart"></i>
            </div>
            <div className="balloon_one">
              <img width="100px" src="./images/balloon1.png" alt="" />
            </div>
            <div className="balloon_two">
              <img width="100px" src="./images/balloon2.png" alt="" />
            </div>
          </div>
          <div className="cricle">
            <div className="text__cricle">
              <span style={{ "--i": 1 }}>h</span>
              <span style={{ "--i": 2 }}>a</span>
              <span style={{ "--i": 3 }}>p</span>
              <span style={{ "--i": 4 }}>p</span>
              <span style={{ "--i": 5 }}>y</span>
              <span style={{ "--i": 6 }}>-</span>
              <span style={{ "--i": 7 }}>b</span>
              <span style={{ "--i": 8 }}>i</span>
              <span style={{ "--i": 9 }}>r</span>
              <span style={{ "--i": 10 }}>t</span>
              <span style={{ "--i": 11 }}>h</span>
              <span style={{ "--i": 12 }}>d</span>
              <span style={{ "--i": 13 }}>a</span>
              <span style={{ "--i": 14 }}>y</span>
              <span style={{ "--i": 15 }}>-</span>
            </div>
            <i class="fa-solid fa-heart"></i>
          </div>
          <span className="day"></span>
          <span className="month"></span>
        </div>
      </div>
      <div className="decorate_star star1" style={{ "--t": "15s" }}></div>
      <div className="decorate_star star2" style={{ "--t": "15.2s" }}></div>
      <div className="decorate_star star3" style={{ "--t": "15.4s" }}></div>
      <div className="decorate_star star4" style={{ "--t": "15.6s" }}></div>
      <div className="decorate_star star5" style={{ "--t": "15.8s" }}></div>

      <div className="decorate_flower--one" style={{ "--t": "15s" }}>
        <img width="20" src="./images/decorate_flower.png" alt="" />
      </div>
      <div className="decorate_flower--two" style={{ "--t": "15.3s" }}>
        <img width="20" src="./images/decorate_flower.png" alt="" />
      </div>
      <div className="decorate_flower--three" style={{ "--t": "15.6s" }}>
        <img width="20" src="./images/decorate_flower.png" alt="" />
      </div>

      <div className="decorate_bottom">
        <img src="./images/decorate.png" alt="" width="100" />
      </div>
      <div className="smiley__icon">
        <img src="./images/smiley_icon.png" alt="" width="100" />
      </div>

      <div className="box__letter">
        <div className="letter__border">
          <div className="letter">
            <div className="title__letter"></div>
            <div className="content__letter">
              <div className="left">
                <img
                  id="heart__letter"
                  src="./images/heart_letter.png"
                  alt=""
                />
                <img
                  className="heart heart_1"
                  style={{ "--t": "0.2s" }}
                  width="20"
                  src="./images/heart.png"
                  alt=""
                />
                <img
                  className="heart heart_2"
                  style={{ "--t": "0.4s" }}
                  width="20"
                  src="./images/heart.png"
                  alt=""
                />
                <img
                  className="heart heart_3"
                  style={{ "--t": "0.6s" }}
                  width="20"
                  src="./images/heart.png"
                  alt=""
                />
                <img
                  className="heart heart_4"
                  style={{ "--t": "0.8s" }}
                  width="20"
                  src="./images/heart.png"
                  alt=""
                />
              </div>
              <div className="right">
                <div className="love__img">
                  <img src="./images/love.png" alt="" width="220" />
                </div>
                <div className="text__letter">
                  <p></p>
                </div>
                <img id="mewmew" width="80" src="./images/mewmew.gif" alt="" />
              </div>
            </div>
          </div>
          <div className="close" onClick={closeLetter}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
