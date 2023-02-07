const resetHomeScrenn = (windowSize, part) => {
    if (windowSize.current[0] >= 500 && windowSize.current[0] <= 600) {
      document.querySelector("#part1").style.width = "33.33vw";
      document.querySelector("#part2").style.width = "33.33vw";
      document.querySelector("#part3").style.width = "33.33vw";
      document.querySelector("#home_subtitle").style.margin = "-28vh 0 0 24vw";
      document.querySelector("#btn_see_more ").style.margin =
        "-20vh 0 5vh 38vw";
      if (part === "part1") {
        document
          .querySelector("#part1")
          .querySelector(".home_title").style.fontSize = "10vw";
        document
          .querySelector("#part1")
          .querySelector(".home_title").style.margin = "37vh 0 0 0vw";
        document
          .querySelector("#part1")
          .querySelector(".home_img").style.transform = "rotate(-53deg)";
        document
          .querySelector("#part1")
          .querySelector(".home_img").style.margin = "32vh 0 0 0";
        document
          .querySelector("#part1")
          .querySelector(".home_img").style.width = "100%";
        document
          .querySelector("#part1")
          .querySelector(".home_img").style.height = "100%";
      } else if (part === "part2") {
        document
          .querySelector("#part2")
          .querySelector(".home_title").style.fontSize = "10vw";
        document
          .querySelector("#part2")
          .querySelector(".home_title").style.margin = "37vh 0 0 0vw";
        document
          .querySelector("#part2")
          .querySelector(".home_img").style.transform = "rotate(-53deg)";
        document
          .querySelector("#part2")
          .querySelector(".home_img").style.margin = "32vh 0 0 0";
        document
          .querySelector("#part2")
          .querySelector(".home_img").style.width = "100%";
        document
          .querySelector("#part")
          .querySelector(".home_img").style.height = "100%";
      } else if (part === "part3") {
        document
          .querySelector("#part3")
          .querySelector(".home_title").style.fontSize = "10vw";
        document
          .querySelector("#part3")
          .querySelector(".home_title").style.margin = "37vh 0 0 0vw";
        document
          .querySelector("#part3")
          .querySelector(".home_img").style.transform = "rotate(-53deg)";
        document
          .querySelector("#part3")
          .querySelector(".home_img").style.margin = "30.75vh 0 0 2vw";
        document
          .querySelector("#part3")
          .querySelector(".home_img").style.width = "100%";
        document
          .querySelector("#part3")
          .querySelector(".home_img").style.height = "100%";
      }
    } else if (windowSize.current[0] > 600 && windowSize.current[0] <= 800) {
      document.querySelector("#part1").style.width = "33.33vw";
      document.querySelector("#part2").style.width = "33.33vw";
      document.querySelector("#part3").style.width = "33.33vw";
      document.querySelector("#home_subtitle").style.margin = "-28vh 0 0 29vw";
      document.querySelector("#btn_see_more ").style.margin =
        "-20vh 0 5vh 38vw";
      if (part === "part1") {
        document
          .querySelector("#part1")
          .querySelector(".home_title").style.fontSize = "10vw";
        document
          .querySelector("#part1")
          .querySelector(".home_title").style.margin = "37vh 0 0 0vw";
        document
          .querySelector("#part1")
          .querySelector(".home_img").style.transform = "rotate(-53deg)";
        document
          .querySelector("#part1")
          .querySelector(".home_img").style.margin = "32vh 0 0 0";
        document
          .querySelector("#part1")
          .querySelector(".home_img").style.width = "100%";
        document
          .querySelector("#part1")
          .querySelector(".home_img").style.height = "100%";
      } else if (part === "part2") {
        document
          .querySelector("#part2")
          .querySelector(".home_title").style.fontSize = "10vw";
        document
          .querySelector("#part2")
          .querySelector(".home_title").style.margin = "37vh 0 0 0vw";
        document
          .querySelector("#part2")
          .querySelector(".home_img").style.transform = "rotate(-53deg)";
        document
          .querySelector("#part2")
          .querySelector(".home_img").style.margin = "32vh 0 0 0";
        document
          .querySelector("#part2")
          .querySelector(".home_img").style.width = "100%";
        document
          .querySelector("#part")
          .querySelector(".home_img").style.height = "100%";
      } else if (part === "part3") {
        document
          .querySelector("#part3")
          .querySelector(".home_title").style.fontSize = "10vw";
        document
          .querySelector("#part3")
          .querySelector(".home_title").style.margin = "37vh 0 0 0vw";
        document
          .querySelector("#part3")
          .querySelector(".home_img").style.transform = "rotate(-53deg)";
        document
          .querySelector("#part3")
          .querySelector(".home_img").style.margin = "30.75vh 0 0 2vw";
        document
          .querySelector("#part3")
          .querySelector(".home_img").style.width = "100%";
        document
          .querySelector("#part3")
          .querySelector(".home_img").style.height = "100%";
      }
    } else if (windowSize.current[0] > 800 && windowSize.current[0] <= 1000) {
      document.querySelector("#part1").style.width = "33.33vw";
      document.querySelector("#part2").style.width = "33.33vw";
      document.querySelector("#part3").style.width = "33.33vw";
      document.querySelector("#home_subtitle").style.margin = "-21vh 0 0 34vw";
      document.querySelector("#btn_see_more ").style.margin =
        "-12vh 0 5vh 43vw";
      if (part === "part1") {
        document
          .querySelector("#part1")
          .querySelector(".home_title").style.fontSize = "8vw";
        document
          .querySelector("#part1")
          .querySelector(".home_title").style.margin = "37vh 0 0 0vw";
        document
          .querySelector("#part1")
          .querySelector(".home_img").style.transform = "rotate(-53deg)";
        document
          .querySelector("#part1")
          .querySelector(".home_img").style.margin = "32vh 0 0 0";
        document
          .querySelector("#part1")
          .querySelector(".home_img").style.width = "94%";
        document
          .querySelector("#part1")
          .querySelector(".home_img").style.height = "93%";
      } else if (part === "part2") {
        document
          .querySelector("#part2")
          .querySelector(".home_title").style.fontSize = "8vw";
        document
          .querySelector("#part2")
          .querySelector(".home_title").style.margin = "37vh 0 0 0vw";
        document
          .querySelector("#part2")
          .querySelector(".home_img").style.transform = "rotate(-53deg)";
        document
          .querySelector("#part2")
          .querySelector(".home_img").style.margin = "32vh 0 0 0";
        document
          .querySelector("#part2")
          .querySelector(".home_img").style.width = "100%";
        document
          .querySelector("#part2")
          .querySelector(".home_img").style.height = "100%";
      } else if (part === "part3") {
        document
          .querySelector("#part3")
          .querySelector(".home_title").style.fontSize = "8vw";
        document
          .querySelector("#part3")
          .querySelector(".home_title").style.margin = "37vh 0 0 0vw";
        document
          .querySelector("#part3")
          .querySelector(".home_img").style.transform = "rotate(-53deg)";
        document
          .querySelector("#part3")
          .querySelector(".home_img").style.margin = "30.75vh 0 0 2vw";
        document
          .querySelector("#part3")
          .querySelector(".home_img").style.width = "100%";
        document
          .querySelector("#part3")
          .querySelector(".home_img").style.height = "100%";
      }
    } else if (windowSize.current[0] > 1000 && windowSize.current[0] <= 1200) {
      document.querySelector("#part1").style.width = "33.33vw";
      document.querySelector("#part2").style.width = "33.33vw";
      document.querySelector("#part3").style.width = "33.33vw";
      document.querySelector("#home_subtitle").style.margin = "-15vh 0 0 34vw";
      document.querySelector("#btn_see_more ").style.margin = "-7vh 0 5vh 44vw";
      if (part ==="part1") {
        document
          .querySelector("#part1")
          .querySelector(".home_title").style.fontSize = "6vw";
        document
          .querySelector("#part1")
          .querySelector(".home_title").style.margin = "37vh 0 0 0vw";
        document
          .querySelector("#part1")
          .querySelector(".home_img").style.transform = "rotate(-53deg)";
        document
          .querySelector("#part1")
          .querySelector(".home_img").style.margin = "32vh 0 0 0";
        document
          .querySelector("#part1")
          .querySelector(".home_img").style.width = "80%";
        document
          .querySelector("#part1")
          .querySelector(".home_img").style.height = "60%";
      } else if (part === "part2") {
        document
          .querySelector("#part2")
          .querySelector(".home_title").style.fontSize = "6vw";
        document
          .querySelector("#part2")
          .querySelector(".home_title").style.margin = "37vh 0 0 0vw";
        document
          .querySelector("#part2")
          .querySelector(".home_img").style.transform = "rotate(-53deg)";
        document
          .querySelector("#part2")
          .querySelector(".home_img").style.margin = "32vh 0 0 0";
        document
          .querySelector("#part2")
          .querySelector(".home_img").style.width = "80%";
        document
          .querySelector("#part")
          .querySelector(".home_img").style.height = "60%";
      } else if (part === "part3") {
        document
          .querySelector("#part3")
          .querySelector(".home_title").style.fontSize = "6vw";
        document
          .querySelector("#part3")
          .querySelector(".home_title").style.margin = "37vh 0 0 0vw";
        document
          .querySelector("#part3")
          .querySelector(".home_img").style.transform = "rotate(-53deg)";
        document
          .querySelector("#part3")
          .querySelector(".home_img").style.margin = "30.75vh 0 0 2vw";
        document
          .querySelector("#part3")
          .querySelector(".home_img").style.width = "80%";
        document
          .querySelector("#part3")
          .querySelector(".home_img").style.height = "60%";
      }
    } else if (windowSize.current[0] > 1200) {
      document.querySelector("#part1").style.width = "33.33vw";
      document.querySelector("#part2").style.width = "33.33vw";
      document.querySelector("#part3").style.width = "33.33vw";
      document.querySelector("#home_subtitle").style.margin = "-18vh 0 0 37vw";
      document.querySelector("#btn_see_more ").style.margin =
        "-9vh 0 5vh 44vw";
      if (part === "part1") {
        document
          .querySelector("#part1")
          .querySelector(".home_title").style.fontSize = "6vw";
        document
          .querySelector("#part1")
          .querySelector(".home_title").style.margin = "37vh 0 0 0vw";
        document
          .querySelector("#part1")
          .querySelector(".home_img").style.transform = "rotate(-53deg)";
        document
          .querySelector("#part1")
          .querySelector(".home_img").style.margin = "19vh 0 0 0";
        document
          .querySelector("#part1")
          .querySelector(".home_img").style.width = "90%";
        document
          .querySelector("#part1")
          .querySelector(".home_img").style.height = "90%";
        document
          .querySelector("#part1")
          .querySelector(".home_img").style.marginTop = "25vh";
      } else if (part === "part2") {
        document
          .querySelector("#part2")
          .querySelector(".home_title").style.fontSize = "6vw";
        document
          .querySelector("#part2")
          .querySelector(".home_title").style.margin = "37vh 0 0 0vw";
        document
          .querySelector("#part2")
          .querySelector(".home_img").style.transform = "rotate(-53deg)";
        document
          .querySelector("#part2")
          .querySelector(".home_img").style.margin = "20vh 0 0 0";
        document
          .querySelector("#part2")
          .querySelector(".home_img").style.width = "100%";
        document
          .querySelector("#part2")
          .querySelector(".home_img").style.height = "100%";
        document
          .querySelector("#part2")
          .querySelector(".home_img").style.marginTop = "28vh";
      } else if (part === "part3") {
        document
          .querySelector("#part3")
          .querySelector(".home_title").style.fontSize = "6vw";
        document
          .querySelector("#part3")
          .querySelector(".home_title").style.margin = "37vh 0 0 0vw";
        document
          .querySelector("#part3")
          .querySelector(".home_img").style.transform = "rotate(-53deg)";
        document
          .querySelector("#part3")
          .querySelector(".home_img").style.margin = "19vh 0 0 2vw";
        document
          .querySelector("#part3")
          .querySelector(".home_img").style.width = "100%";
        document
          .querySelector("#part3")
          .querySelector(".home_img").style.marginTop = "28vh";
      }
    }
  };

  export { resetHomeScrenn };