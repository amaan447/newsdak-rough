import React from "react";
import "../styles/Opinion.css";
const opinionData = [
  {
    author: "Donald Earl Collins",
    title:
      "Axing of The Late Show reveals how monopolisation has gutted US media",
  },
  {
    author: "Marianna Karakoulaki",
    title: "Europe’s deadly border theatre is back",
  },
  {
    author: "Tariq Mehmood",
    title: "The UK is slipping into racist dystopia",
  },
  {
    author: "58 Former Ambassadors of the European Union",
    title: "Former EU ambassadors warn: Europe’s silence on Gaza is complicity",
  },
  {
    author: "Soňa Mužikárová",
    title: "Eastern Europe must earn its security in a post-American NATO",
  },
  {
    author: "Yara Hawari",
    title:
      "Settler sanctions are theatre. Hathaleen’s murder exposes the cover-up",
  },
];

const popularData = [
  "Israel kills 106 Palestinians in a day of attacks on Gaza as people starve",
  "Trump orders nuclear submarines to reposition amid war of words with Russia",
  "Advocates hail ‘historic’ progress after US Senate vote on arms to Israel",
  "Trump says economic growth ‘shatters expectations’. Data says otherwise",
  "Epstein victims claim ‘cover up’ as Maxwell moved to low-security prison",
  "Another US citizen killed by Israeli settler attack in West Bank: Family",
  "Russia-Ukraine war: List of key events, day 1,255",
  "Prosecutors want PSG and Morocco’s Achraf Hakimi to face rape trial",
  "Indonesian president frees hundreds of prisoners as part of unity plan",
  "Manhunt for ex-US soldier suspected of killing 4 in Montana bar",
];

const Opinion = () => {
  return (
    <div className="news-container">
      <div className="news-main">
        <section className="opinion-section">
          <h3 className="section-title">Opinion</h3>
          <div className="opinion-list">
            {opinionData.map((item, index) => (
              <div key={index} className="opinion-item">
                <p className="opinion-title">{item.title}</p>
                <p className="opinion-author">{item.author}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sport-section">
          <h3 className="section-title">Sport</h3>
          <img
            src="https://placehold.co/800x400"
            alt="sport"
            className="sport-main-image"
          />
          <div className="sport-articles">
            <div className="sport-article-card">
              <img src="https://placehold.co/300x200" alt="1" />
              <div>
                <p className="sport-title">
                  Enhanced Games signs first female athlete for 2026 debut
                </p>
                <p className="sport-desc">
                  Megan Romano announced as first female competitor at 2026
                  debut of Olympic-style Enhanced Games in Las Vegas.
                </p>
              </div>
            </div>
            <div className="sport-side-articles">
              <p>Pakistan and Afghanistan pen UAE T20 tri-series</p>
              <p>Isak’s Liverpool link grows</p>
              <p>Olympian killed in Pakistan</p>
              <p>Nawaz takes 3 wickets in 14-run win</p>
            </div>
          </div>
        </section>
      </div>

      <aside className="sidebar">
        <section className="popular-section">
          <h3 className="section-title">Most Popular</h3>
          <ol className="popular-list">
            {popularData.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </section>

        <section className="subscribe-section">
          <h4>
            Sign up for Al Jazeera
            <br />
            Breaking News Alert
          </h4>
          <p>
            Get real-time breaking news alerts and stay up-to-date with the most
            important headlines.
          </p>
          <input type="email" placeholder="E-mail address" />
          <button>Subscribe</button>
          <p className="privacy-note">
            By signing up, you agree to our <a href="#">Privacy Policy</a>
          </p>
        </section>
      </aside>
    </div>
  );
};

export default Opinion;
