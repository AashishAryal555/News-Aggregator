import React from "react";
import "../styles/TexasNews.css";
import TheElements from "../assets/TheElement.jpg";
import TikTok from "../assets/tiktok.jpg";
import Proud from "../assets/Proud.jpg";

export function TexasNews() {
  const texasnews = [
    {
      title: "The Elements Live Concert",
      description: `Get ready for an unforgettable experience, for an electrifying musical experience!✨
The Elements are performing live at Texas International College!🤯
Join us at Texas Bites Festival as The Elements light up the stage with electrifying music!🎶

Enjoy an evening filled with Music🎸 | Food 🍔| Dance 🕺💃|

🗓 Date: August 1
🕙 Time: 10 AM
📍 Venue: Texas International College
🌐 texasintl.edu.np
📞 For more info: ‪+977-9865727332‬

Don't miss the energy, the vibes, and the music! 🎶🔥

#TexasBitesFestival #TheElements #LiveMusic #TexasInternationalCollege #NepalEvents #MusicFestival #FoodAndFun`,
      image: TheElements,
    },
    {
      title: "Tik Tok Competition",
      description: `🎬 Texas College TikTok Competition 2025 🎉
Unleash your creativity and stand a chance to win Cash Prize of Rs. 50,000 and more exciting rewards!

📅 Registration Deadline: 20th July, 2025
🎤 Grand Finale: 20th August, 2025
📍 Organized by: Texas College

💥 Don’t miss your chance to shine on the digital stage!

👉 Register Now: https://forms.gle/Vwg6ecrvqMah1bRTA

📞 For more info: 01-4589134 | 9801644458 | 9801644462

#TexasTikTok2025 #CashPrizeRs50000 #DigitalTalent #TexasCollege #TikTokCompetition #ShowYourTalent #TCMIT`,
      image: TikTok,
    },
    {
      title: "Texas Prides",
      description: `🏆 Proud Moment for Texas International College!
We are truly honored to receive the Best Innovative Teaching Practice Award at the prestigious Kendrabindu Education Excellence Awards 2025.

This recognition is a testament to our commitment to delivering excellence in education through innovation, dedication, and student-centered learning.

Thank you to our entire academic team, students, and supporters who made this achievement possible!

#TexasInternationalCollege #KendrabinduAwards2025 #ProudMoment #EducationExcellence`,
      image: Proud,
    },
  ];

  return (
    <div className="news-grid">
      {texasnews.map((newsItem, index) => (
        <div key={index} className="news-item">
          <h2>{newsItem.title}</h2>
          <p>{newsItem.description}</p>
          {newsItem.image && (
            <img
              src={newsItem.image}
              alt={newsItem.title}
              className="news-image"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export function Loading() {
  return <div className="loading-text">⏳ Loading... Please wait.</div>;
}

export function Error({ message }) {
  return (
    <div className="error-text" style={{ color: "red", padding: "1em" }}>
      ⚠️ {message || "Something went wrong. Please try again later."}
    </div>
  );
}

// If you're using named imports only, you can remove this:
export default TexasNews;

