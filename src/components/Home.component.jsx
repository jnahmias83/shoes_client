const HomeComponent = () => {
  const changeHomePageStyle = (part) => {
    if (part == "part1") {
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
        .querySelector(".home_title").style.margin = "18vh 0 0 30vw";
      document
        .querySelector("#part1")
        .querySelector(".home_img").style.transition = "1s";
      document
        .querySelector("#part1")
        .querySelector(".home_img").style.transform = "rotate(0deg)";
      document.querySelector("#part1").querySelector(".home_img").style.width =
        "50vw";
      document.querySelector("#part1").querySelector(".home_img").style.margin =
        "35vh 0 0 30vw";
      document.querySelector("#home_subtitle").style.margin = "-22vh 0 0 40vw";
      document.querySelector("#btn_see_more").style.margin = "-14vh 0 0 47vw";
    } else if (part == "part2") {
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
        "50vw";
      document.querySelector("#part2").querySelector(".home_img").style.margin =
        "35vh 0 0 30vw";
      document.querySelector("#home_subtitle").style.margin = "-22vh 0 0 37vw";
      document.querySelector("#btn_see_more").style.margin = "-14vh 0 0 47vw";
    } else if (part == "part3") {
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
        "50vw";
      document.querySelector("#part3").querySelector(".home_img").style.margin =
        "35vh 0 0 30vw";
      document.querySelector("#home_subtitle").style.margin = "-22vh 0 0 37vw";
      document.querySelector("#btn_see_more").style.margin = "-14vh 0 0 47vw";
    }

    const element = document.querySelector("#home");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const resetHomeScrenn = (part) => {
    document.querySelector("#part1").style.width = "33.33vw";
    document.querySelector("#part2").style.width = "33.33vw";
    document.querySelector("#part3").style.width = "33.33vw";
    document.querySelector("#home_subtitle").style.margin = "-25vh 0 0 39vw";

    if (part == "part1") {
      document
        .querySelector("#part1")
        .querySelector(".home_title").style.margin = "37vh 0 0 0vw";
      document
        .querySelector("#part1")
        .querySelector(".home_img").style.transform = "rotate(-53deg)";
      document.querySelector("#part1").querySelector(".home_img").style.margin =
        "19vh 0 0 0";
      document.querySelector("#part1").querySelector(".home_img").style.width =
        "100%";
      document.querySelector("#part1").querySelector(".home_img").style.height =
        "100%";
    } else if (part == "part2") {
      document
        .querySelector("#part2")
        .querySelector(".home_title").style.margin = "37vh 0 0 0vw";
      document
        .querySelector("#part2")
        .querySelector(".home_img").style.transform = "rotate(-53deg)";
      document.querySelector("#part2").querySelector(".home_img").style.margin =
        "20vh 0 0 0";
      document.querySelector("#part2").querySelector(".home_img").style.width =
        "100%";
      document.querySelector("#part").querySelector(".home_img").style.height =
        "100%";
    } else if (part == "part3") {
      document
        .querySelector("#part3")
        .querySelector(".home_title").style.margin = "37vh 0 0 0vw";
      document
        .querySelector("#part3")
        .querySelector(".home_img").style.transform = "rotate(-53deg)";
      document.querySelector("#part3").querySelector(".home_img").style.margin =
        "19vh 0 0 2vw";
      document.querySelector("#part3").querySelector(".home_img").style.width =
        "100%";
    }
  };

  const handleGoToProductsScreen = () => {
    const element = document.querySelector("#products");
    element.style.display = "block";
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div>
        <div id="home_container">
          <div id="part1">
            <div
              className="top_div"
              onMouseOver={() => resetHomeScrenn("part1")}
            >
              &nbsp;
            </div>
            <div className="middle_div">
              <div className="home_title">Simply classy.</div>
              <div
                className="home_img"
                onMouseOver={() => changeHomePageStyle("part1")}
              >
                <img src="/images/shoes2.png" width="80%" height="60%" />
              </div>
            </div>
          </div>
          <div id="part2">
            <div
              className="top_div"
              onMouseOver={() => resetHomeScrenn("part2")}
            >
              &nbsp;
            </div>
            <div className="middle_div">
              <div className="home_title">Simply elegant.</div>
              <div
                className="home_img"
                onMouseOver={() => changeHomePageStyle("part2")}
              >
                <img src="/images/shoes1.png" width="80%" height="60%" />
              </div>
            </div>
          </div>
          <div id="part3">
            <div
              className="top_div"
              onMouseOver={() => resetHomeScrenn("part3")}
            >
              &nbsp;
            </div>
            <div
              className="middle_div"
              onMouseOver={() => changeHomePageStyle("part3")}
            >
              <div className="home_title">Italian leather.</div>
              <div className="home_img">
                <img src="/images/shoes3.png" width="80%" height="60%" />
              </div>
            </div>
          </div>
        </div>

        <div id="home_logo">
          <img src="./images/shoes_logo.png" width="80" height="60" />
        </div>
        <div id="home_subtitle">THE MILANO COLLECTION</div>
        <button id="btn_see_more" onClick={handleGoToProductsScreen}>
          See More
        </button>
      </div>
    </>
  );
};

export default HomeComponent;
