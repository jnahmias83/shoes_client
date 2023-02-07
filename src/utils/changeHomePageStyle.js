const changeHomePageStyle = (windowSize, part) => {
  if (windowSize.current[0] >= 500 && windowSize.current[0] <= 600) {
    if (part === "part1") {
      document.querySelector("#part1").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part1").style.width = "100vw";
      document.querySelector("#part2").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part2").style.width = "0";
      document.querySelector("#part3").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part3").style.width = "0";
      document
        .querySelector("#part1")
        .querySelector(".home_title").style.fontSize = "12vw";
      document
        .querySelector("#part1")
        .querySelector(".home_title").style.margin = "18vh 0 0 10vw";
      document
        .querySelector("#part1")
        .querySelector(".home_img").style.transition = "1s";
      document
        .querySelector("#part1")
        .querySelector(".home_img").style.transform = "rotate(0deg)";
      document.querySelector("#part1").querySelector(".home_img").style.width =
        "67vw";
      document.querySelector("#part1").querySelector(".home_img").style.margin =
        "35vh 0 0 13vw";
      document.querySelector("#home_subtitle").style.margin = "-28vh 0 0 25vw";
      document.querySelector("#btn_see_more").style.margin = "-20vh 0 0 38vw";
    } else if (part === "part2") {
      document.querySelector("#part2").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part2").style.width = "100vw";
      document.querySelector("#part1").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part1").style.width = "0";
      document.querySelector("#part3").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part3").style.width = "0";
      document
        .querySelector("#part2")
        .querySelector(".home_title").style.fontSize = "12vw";
      document
        .querySelector("#part2")
        .querySelector(".home_title").style.margin = "18vh 0 0 10vw";
      document
        .querySelector("#part2")
        .querySelector(".home_img").style.transition = "1s";
      document
        .querySelector("#part2")
        .querySelector(".home_img").style.transform = "rotate(0deg)";
      document.querySelector("#part2").querySelector(".home_img").style.width =
        "80vw";
      document.querySelector("#part2").querySelector(".home_img").style.margin =
        "35vh 0 0 10vw";
      document.querySelector("#home_subtitle").style.margin = "-23vh 0 0 23vw";
      document.querySelector("#btn_see_more").style.margin = "-15vh 0 0 38vw";
    } else if (part === "part3") {
      document.querySelector("#part3").style.transition =
        "width 0.8s ease-out-in";
      document.querySelector("#part3").style.width = "100vw";
      document.querySelector("#part1").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part1").style.width = "0";
      document.querySelector("#part2").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part2").style.width = "0";
      document
        .querySelector("#part3")
        .querySelector(".home_title").style.fontSize = "12vw";
      document
        .querySelector("#part3")
        .querySelector(".home_title").style.margin = "18vh 0 0 10vw";
      document
        .querySelector("#part3")
        .querySelector(".home_img").style.transition = "1s";
      document
        .querySelector("#part3")
        .querySelector(".home_img").style.transform = "rotate(0deg)";
      document.querySelector("#part3").querySelector(".home_img").style.width =
        "80vw";
      document.querySelector("#part3").querySelector(".home_img").style.margin =
        "35vh 0 0 7vw";
      document.querySelector("#home_subtitle").style.margin = "-22vh 0 0 22vw";
      document.querySelector("#btn_see_more").style.margin = "-13vh 0 0 38vw";
    }
  } else if (windowSize.current[0] > 600 && windowSize.current[0] <= 800) {
    if (part === "part1") {
      document.querySelector("#part1").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part1").style.width = "100vw";
      document.querySelector("#part2").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part2").style.width = "0";
      document.querySelector("#part3").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part3").style.width = "0";
      document
        .querySelector("#part1")
        .querySelector(".home_title").style.fontSize = "8vw";
      document
        .querySelector("#part1")
        .querySelector(".home_title").style.margin = "18vh 0 0 28vw";
      document
        .querySelector("#part1")
        .querySelector(".home_img").style.transition = "1s";
      document
        .querySelector("#part1")
        .querySelector(".home_img").style.transform = "rotate(0deg)";
      document.querySelector("#part1").querySelector(".home_img").style.width =
        "55vw";
      document.querySelector("#part1").querySelector(".home_img").style.margin =
        "33vh 0 0 24vw";
      document.querySelector("#home_subtitle").style.margin = "-21vh 0 0 34vw";
      document.querySelector("#btn_see_more").style.margin = "-12vh 0 0 44vw";
    } else if (part === "part2") {
      document.querySelector("#part2").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part2").style.width = "100vw";
      document.querySelector("#part1").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part1").style.width = "0";
      document.querySelector("#part3").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part3").style.width = "0";
      document
        .querySelector("#part2")
        .querySelector(".home_title").style.fontSize = "8vw";
      document
        .querySelector("#part2")
        .querySelector(".home_title").style.margin = "18vh 0 0 26vw";
      document
        .querySelector("#part2")
        .querySelector(".home_img").style.transition = "1s";
      document
        .querySelector("#part2")
        .querySelector(".home_img").style.transform = "rotate(0deg)";
      document.querySelector("#part2").querySelector(".home_img").style.width =
        "55vw";
      document.querySelector("#part2").querySelector(".home_img").style.margin =
        "32vh 0 0 24vw";
      document.querySelector("#home_subtitle").style.margin = "-26vh 0 0 30vw";
      document.querySelector("#btn_see_more").style.margin = "-18vh 0 0 42vw";
    } else if (part === "part3") {
      document.querySelector("#part3").style.transition =
        "width 0.8s ease-out-in";
      document.querySelector("#part3").style.width = "100vw";
      document.querySelector("#part1").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part1").style.width = "0";
      document.querySelector("#part2").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part2").style.width = "0";
      document
        .querySelector("#part3")
        .querySelector(".home_title").style.fontSize = "8vw";
      document
        .querySelector("#part3")
        .querySelector(".home_title").style.margin = "18vh 0 0 21vw";
      document
        .querySelector("#part3")
        .querySelector(".home_img").style.transition = "1s";
      document
        .querySelector("#part3")
        .querySelector(".home_img").style.transform = "rotate(0deg)";
      document.querySelector("#part3").querySelector(".home_img").style.width =
        "55vw";
      document.querySelector("#part3").querySelector(".home_img").style.margin =
        "35vh 0 0 20vw";
      document.querySelector("#home_subtitle").style.margin = "-24vh 0 0 28vw";
      document.querySelector("#btn_see_more").style.margin = "-13vh 0 0 40vw";
    }
  } else if (windowSize.current[0] > 800 && windowSize.current[0] <= 1000) {
    if (part === "part1") {
      document.querySelector("#part1").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part1").style.width = "100vw";
      document.querySelector("#part2").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part2").style.width = "0";
      document.querySelector("#part3").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part3").style.width = "0";
      document
        .querySelector("#part1")
        .querySelector(".home_title").style.fontSize = "8vw";
      document
        .querySelector("#part1")
        .querySelector(".home_title").style.margin = "18vh 0 0 24vw";
      document
        .querySelector("#part1")
        .querySelector(".home_img").style.transition = "1s";
      document
        .querySelector("#part1")
        .querySelector(".home_img").style.transform = "rotate(0deg)";
      document.querySelector("#part1").querySelector(".home_img").style.width =
        "50vw";
      document.querySelector("#part1").querySelector(".home_img").style.margin =
        "37vh 0 0 23vw";
      document.querySelector("#home_subtitle").style.margin = "-21vh 0 0 32vw";
      document.querySelector("#btn_see_more").style.margin = "-12vh 0 0 43vw";
    } else if (part === "part2") {
      document.querySelector("#part2").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part2").style.width = "100vw";
      document.querySelector("#part1").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part1").style.width = "0";
      document.querySelector("#part3").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part3").style.width = "0";
      document
        .querySelector("#part2")
        .querySelector(".home_title").style.fontSize = "8vw";
      document
        .querySelector("#part2")
        .querySelector(".home_title").style.margin = "18vh 0 0 22vw";
      document
        .querySelector("#part2")
        .querySelector(".home_img").style.transition = "1s";
      document
        .querySelector("#part2")
        .querySelector(".home_img").style.transform = "rotate(0deg)";
      document.querySelector("#part2").querySelector(".home_img").style.width =
        "50vw";
      document.querySelector("#part2").querySelector(".home_img").style.margin =
        "36vh 0 0 23vw";
      document.querySelector("#home_subtitle").style.margin = "-22vh 0 0 32vw";
      document.querySelector("#btn_see_more").style.margin = "-13vh 0 0 43vw";
    } else if (part === "part3") {
      document.querySelector("#part3").style.transition =
        "width 0.8s ease-out-in";
      document.querySelector("#part3").style.width = "100vw";
      document.querySelector("#part1").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part1").style.width = "0";
      document.querySelector("#part2").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part2").style.width = "0";
      document
        .querySelector("#part3")
        .querySelector(".home_title").style.fontSize = "8vw";
      document
        .querySelector("#part3")
        .querySelector(".home_title").style.margin = "18vh 0 0 24vw";
      document
        .querySelector("#part3")
        .querySelector(".home_img").style.transition = "1s";
      document
        .querySelector("#part3")
        .querySelector(".home_img").style.transform = "rotate(0deg)";
      document.querySelector("#part3").querySelector(".home_img").style.width =
        "50vw";
      document.querySelector("#part3").querySelector(".home_img").style.margin =
        "35vh 0 0 23vw";
      document.querySelector("#home_subtitle").style.margin = "-22vh 0 0 32vw";
      document.querySelector("#btn_see_more").style.margin = "-13vh 0 0 43vw";
    }
  } else if (windowSize.current[0] > 1000 && windowSize.current[0] <= 1200) {
    if (part === "part1") {
      document.querySelector("#part1").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part1").style.width = "100vw";
      document.querySelector("#part2").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part2").style.width = "0";
      document.querySelector("#part3").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part3").style.width = "0";
      document
        .querySelector("#part1")
        .querySelector(".home_title").style.fontSize = "6vw";
      document
        .querySelector("#part1")
        .querySelector(".home_title").style.margin = "18vh 0 0 32vw";
      document
        .querySelector("#part1")
        .querySelector(".home_img").style.transition = "1s";
      document
        .querySelector("#part1")
        .querySelector(".home_img").style.transform = "rotate(0deg)";
      document.querySelector("#part1").querySelector(".home_img").style.width =
        "42vw";
      document.querySelector("#part1").querySelector(".home_img").style.margin =
        "35vh 0 0 30vw";
      document.querySelector("#home_subtitle").style.margin = "-21vh 0 0 37vw";
      document.querySelector("#btn_see_more").style.margin = "-10vh 0 0 46vw";
    } else if (part === "part2") {
      document.querySelector("#part2").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part2").style.width = "100vw";
      document.querySelector("#part1").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part1").style.width = "0";
      document.querySelector("#part3").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part3").style.width = "0";
      document
        .querySelector("#part2")
        .querySelector(".home_title").style.fontSize = "6vw";
      document
        .querySelector("#part2")
        .querySelector(".home_title").style.margin = "18vh 0 0 30vw";
      document
        .querySelector("#part2")
        .querySelector(".home_img").style.transition = "1s";
      document
        .querySelector("#part2")
        .querySelector(".home_img").style.transform = "rotate(0deg)";
      document.querySelector("#part2").querySelector(".home_img").style.width =
        "42vw";
      document.querySelector("#part2").querySelector(".home_img").style.margin =
        "35vh 0 0 29vw";
      document.querySelector("#home_subtitle").style.margin = "-22vh 0 0 35vw";
      document.querySelector("#btn_see_more").style.margin = "-12vh 0 0 45vw";
    } else if (part === "part3") {
      document.querySelector("#part3").style.transition =
        "width 0.8s ease-out-in";
      document.querySelector("#part3").style.width = "100vw";
      document.querySelector("#part1").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part1").style.width = "0";
      document.querySelector("#part2").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part2").style.width = "0";
      document
        .querySelector("#part3")
        .querySelector(".home_title").style.fontSize = "6vw";
      document
        .querySelector("#part3")
        .querySelector(".home_title").style.margin = "18vh 0 0 32vw";
      document
        .querySelector("#part3")
        .querySelector(".home_img").style.transition = "1s";
      document
        .querySelector("#part3")
        .querySelector(".home_img").style.transform = "rotate(0deg)";
      document.querySelector("#part3").querySelector(".home_img").style.width =
        "42vw";
      document.querySelector("#part3").querySelector(".home_img").style.margin =
        "35vh 0 0 28vw";
      document.querySelector("#home_subtitle").style.margin = "-21vh 0 0 34vw";
      document.querySelector("#btn_see_more").style.margin = "-11vh 0 0 44vw";
    }
  } else if (windowSize.current[0] > 1200) {
    if (part === "part1") {
      document.querySelector("#part1").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part1").style.width = "100vw";
      document.querySelector("#part2").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part2").style.width = "0";
      document.querySelector("#part3").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part3").style.width = "0";
      document
        .querySelector("#part1")
        .querySelector(".home_title").style.fontSize = "5vw";
      document
        .querySelector("#part1")
        .querySelector(".home_title").style.margin = "18vh 0 0 34vw";
      document
        .querySelector("#part1")
        .querySelector(".home_img").style.transition = "1s";
      document
        .querySelector("#part1")
        .querySelector(".home_img").style.transform = "rotate(0deg)";
      document.querySelector("#part1").querySelector(".home_img").style.width =
        "38vw";
      document.querySelector("#part1").querySelector(".home_img").style.height =
        "29vh";
      document.querySelector("#part1").querySelector(".home_img").style.margin =
        "39vh 0 0 29vw";
      document.querySelector("#home_subtitle").style.margin = "-22vh 0 0 36vw";
      document.querySelector("#btn_see_more").style.margin = "-13vh 0 0 44vw";
    } else if (part === "part2") {
      document.querySelector("#part2").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part2").style.width = "100vw";
      document.querySelector("#part1").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part1").style.width = "0";
      document.querySelector("#part3").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part3").style.width = "0";
      document
        .querySelector("#part2")
        .querySelector(".home_title").style.margin = "18vh 0 0 30vw";
      document
        .querySelector("#part2")
        .querySelector(".home_img").style.transition = "1s";
      document
        .querySelector("#part2")
        .querySelector(".home_img").style.transform = "rotate(0deg)";
      document.querySelector("#part2").querySelector(".home_img").style.width =
        "42vw";
      document.querySelector("#part2").querySelector(".home_img").style.height =
        "33vh";
      document.querySelector("#part2").querySelector(".home_img").style.margin =
        "35vh 0 0 29vw";
      document.querySelector("#home_subtitle").style.margin = "-22vh 0 0 38vw";
      document.querySelector("#btn_see_more").style.margin = "-13vh 0 0 46vw";
    } else if (part === "part3") {
      document.querySelector("#part3").style.transition =
        "width 0.8s ease-out-in";
      document.querySelector("#part3").style.width = "100vw";
      document.querySelector("#part1").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part1").style.width = "0";
      document.querySelector("#part2").style.transition =
        "width 0.8s ease-in-out";
      document.querySelector("#part2").style.width = "0";
      document
        .querySelector("#part3")
        .querySelector(".home_title").style.margin = "18vh 0 0 30vw";
      document
        .querySelector("#part3")
        .querySelector(".home_img").style.transition = "1s";
      document
        .querySelector("#part3")
        .querySelector(".home_img").style.transform = "rotate(0deg)";
      document.querySelector("#part3").querySelector(".home_img").style.width =
        "40vw";
      document.querySelector("#part3").querySelector(".home_img").style.height =
        "34vh";
      document.querySelector("#part3").querySelector(".home_img").style.margin =
        "36vh 0 0 28vw";
      document.querySelector("#home_subtitle").style.margin = "-22vh 0 0 36vw";
      document.querySelector("#btn_see_more").style.margin = "-13vh 0 0 44vw";
    }
  }

  const element = document.querySelector("#home");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export { changeHomePageStyle };
