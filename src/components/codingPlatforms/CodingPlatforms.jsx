
import "./codingPlatforms.scss";


export default function Portfolio() {
  const data =[
    {
        id: "1",
        img: "https://res.cloudinary.com/practicaldev/image/fetch/s--mzwvoucO--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cer3l19eex0wy900b101.jpg",
        title: "Codeforces",
        link: "https://codeforces.com/profile/Surya_10",
    },
    {
        id: "2",
        img:"https://leetcode.com/static/images/LeetCode_Sharing.png",
        title: "Leetcode",
        link: "https://leetcode.com/Surya_97/",
    },
    {
        id: "1",
        img:"https://yt3.googleusercontent.com/kv5nH1CBnmIJ-1g2hmmTm_GekJfaYothHb1HmgAU8IB9zdu3y7vVVtCTEGPqs_dHbr0XEB_anyM=s900-c-k-c0x00ffffff-no-rj",
        title: "Coding Ninjas",
        link: "https://www.codingninjas.com/studio/profile/ec8fd3ef-3260-442b-99e8-b339ebabcf8c",
    },
    {
        id: "1",
        img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png",
        title: "Geeks For Geeks",
        link: "https://auth.geeksforgeeks.org/user/surya_10",
    },
    {
        id: "1",
        img: "https://repository-images.githubusercontent.com/231893793/cec60480-04a9-11eb-80c4-df7359d94047",
        title: "Hackerrank",
        link: "https://www.hackerrank.com/surya2010703",
    }
  ]

  return (
    <div className="CodingPlatforms" id="CodingPlatforms">
      <h1>Coding Platforms and Profiles</h1>
      <div className="container">
        {data.map((d) => (
          <a href={d.link}>
            <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
          </a>
          
        ))}
      </div>
    </div>
  );
}