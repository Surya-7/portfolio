import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img:"https://media.istockphoto.com/id/485372122/photo/silver-cup.jpg?s=612x612&w=0&k=20&c=3bZjp4kNWsxcAf6CRzQYrEYnyjae5p4wJs7FeWG6zjY=",
      icon: "assets/twitter.png",
      desc1: "Rank 5 in Code Kombat Conducted by ProCoDe",
      desc2: "Rank 25 in Pickle Rickle Coding Contest",
      desc3: "",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img:"https://img.freepik.com/premium-vector/golden-cup-realistic-metal-goblet-winner-award_53562-17720.jpg?w=2000",
      icon: "assets/youtube.png",
      desc1: "Winner of Codera Conducted by CIT",
      desc2: "Winner of ProCoDe Cup 2023",
      desc3: "Winner of Py-Bug conducted by IEEE",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img:"https://img.freepik.com/premium-vector/bronze-cup-third-place-prize-realistic-metal-trophy_533410-812.jpg?w=2000",
      icon: "assets/linkedin.png",
      desc1: "Google KickStart 2022 - Round B : Rank 4834",
      desc2: "Google Farewell- Round A: Rank 3311",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Achievements</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src={d.img} alt="" />
            </div>
            <div className="center">
              {d.desc1}
              <br /><br />
              {d.desc2}
              <br />
              <br />
              {d.desc3}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}