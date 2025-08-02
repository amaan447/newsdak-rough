import React from "react";
import "../styles/Homepage.css";

const featuredArticleData = {
  imageUrl:
    "https://uawc-pal.org/wp-content/uploads/2025/04/Gaza-Famine-scaled.jpg",
  category: "CRIME SCENE DO NOT CROSS",
  title:
    "UAWC Statement on Famine in Gaza: Starvation as a Weapon of Genocide - Union of Agricultural Work Committees (UAWC)",
  summary:
    "The Union of Agricultural Work Committees (UAWC) urgently draws attention to the deepening famine in the Gaza Strip, a catastrophe deliberately manufactured through the Israeli genocidal war. Since March 2, 2025, the Israeli occupation has prevented entry of all food or humanitarian aid into Gaza. On Monday, April 7, Israeli Finance Minister Bezalel Smotrich reaffirmed the Israeli commitment to enforcing famine in Gaza, declaring that “not even a grain of wheat” would be allowed into Gaza. This is not policy failure; this is a calculated campaign of mass starvation.",
  date: "2 Aug 2025",
};

const smallArticlesData = [
  {
    id: 1,
    imageUrl:
      "https://www.aljazeera.com/wp-content/uploads/2025/08/AP21194543182185-1-1754106510.jpg?resize=770%2C513&quality=80",
    title: "Manhunt for ex-US soldier suspected of killing 4 in Montana bar",
    date: "2 Aug 2025",
  },
  {
    id: 2,
    imageUrl:
      "https://www.aljazeera.com/wp-content/uploads/2025/08/AP25213583791231-1754102142.jpg?resize=770%2C513&quality=80",
    title:
      "Indonesian president frees hundreds of prisoners as part of unity plan",
    date: "2 Aug 2025",
  },
];

const articleListData = [
  {
    id: 1,
    title:
      "Epstein victims claim ‘cover up’ as Maxwell moved to low-security prison",

    imageUrl:
      "https://www.aljazeera.com/wp-content/uploads/2023/06/AP23060190601874-1687881435.jpg?resize=770%2C513&quality=80",
  },
  {
    id: 2,
    title:
      "Dangerous Mekong River pollution blamed on lawless mining in Myanmarr",
    imageUrl:
      "https://www.aljazeera.com/wp-content/uploads/2025/07/Fishermen-Laos-Fabio-Polese-5-1753863906.jpg?resize=770%2C513&quality=80",
  },
  {
    id: 3,
    title:
      "Another US citizen killed by Israeli settlers' attack in West Bank: Family",
    imageUrl:
      "https://www.aljazeera.com/wp-content/uploads/2025/08/2025-08-01T141552Z_115079070_RC2RXFAMDPE4_RTRMADP_3_UKRAINE-CRISIS-KOSTIANTYNIVKA-1754093058.jpg?resize=770%2C513&quality=80s",
  },
  {
    id: 4,
    title: "Ukraine's Zelensky calls for 'unconditional' ceasefire with Russia",
    imageUrl:
      "https://www.aljazeera.com/wp-content/uploads/2025/07/Fishermen-Laos-Fabio-Polese-5-1753863906.jpg?resize=770%2C513&quality=80",
  },
];

const FeaturedArticle = ({ data }) => (
  <article className="featured-article">
    <a href="#">
      <div className="image-wrapper">
        <img src={data.imageUrl} alt={data.title} />
      </div>
      <p className="category">{data.category}</p>
      <h2 className="title">{data.title}</h2>
      <p className="summary">{data.summary}</p>
      <p className="date">{data.date}</p>
    </a>
  </article>
);

const SmallArticle = ({ data }) => (
  <article className="small-article">
    <a href="#">
      <img src={data.imageUrl} alt={data.title} />
      <h3 className="title">{data.title}</h3>
      <p className="date">{data.date}</p>
    </a>
  </article>
);

const ArticleListItem = ({ data }) => (
  <article className="list-item">
    <a href="#" className="list-item-link">
      <h4 className="title">{data.title}</h4>
      <img src={data.imageUrl} alt={data.title} />
    </a>
  </article>
);

const Homepage = () => (
  <main className="homepage">
    <section className="featured-section">
      <FeaturedArticle data={featuredArticleData} />
    </section>

    <section className="small-articles-section">
      {smallArticlesData.map((article) => (
        <SmallArticle key={article.id} data={article} />
      ))}
    </section>

    <section className="article-list-section">
      {articleListData.map((item) => (
        <ArticleListItem key={item.id} data={item} />
      ))}
    </section>

    {/* --- ADVERTISEMENT SECTION ADDED HERE --- */}
    <section className="ad-section">
      <p>Advertisement</p>
    </section>
  </main>
);

export default Homepage;
