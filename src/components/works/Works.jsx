import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Front-End Development",
      desc:
        "Technologies: HTML, CSS, Javascript, bootstrap, Angular Js, React Js, Vue Js, Material UI",
      img:
        "https://www.developeronrent.com/newcss/images/SVG/hire-frontend-developers.png",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Back-End Development",
      desc:
        "Technologies: Javascript, Node Js, Express Js",
      img:
        "https://assets.bitdegree.org/online-learning-platforms/storage/media/2018/10/what-is-a-back-end-developer.png",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Database Management System",
      desc:
        "Technologies: MySql, MongoDB",
      img:
        "https://www.interviewbit.com/blog/wp-content/uploads/2021/08/dbms.jpg",
    },
    {
      id: "4",
      icon: "./assets/globe.png",
      title: "Competitve Programming",
      desc:
        "Technologies and Platforms: C, C++, Python, Codeforces, Codechef",
      img:
        "https://media.springernature.com/full/springer-static/cover-hires/book/978-3-030-39357-1",
    },
    {
      id: "4",
      icon: "./assets/writing.png",
      title: "Data Structures and Algorithms",
      desc:
        "Technologies and Concepts: C, C++, Python, Arrays, LinkedList, Stacks, Queues, Trees, Graphs, Dynamic Programming",
      img:
        "https://lastmomenttuitions.com/wp-content/uploads/2021/05/Data-Structure-and-Algorithm.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length-1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}