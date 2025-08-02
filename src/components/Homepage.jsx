import React from "react";
import "../styles/Homepage.css";

const featuredArticleData = {
  imageUrl: "https://placehold.co/800x450/e2e8f0/334155?text=Featured+Image",
  category: "CRIME SCENE DO NOT CROSS",
  title: "Manhunt for ex-US soldier suspected of killing 4 in Montana bar",
  summary:
    "Police have told residents to stay home and not approach the suspect, who could be 'armed and dangerous'.",
  date: "2 Aug 2025",
};

const smallArticlesData = [
  {
    id: 1,
    imageUrl: "https://placehold.co/300x200/e2e8f0/334155?text=Story+1",
    title:
      "Indonesian president frees hundreds of prisoners as part of unity plan",
    date: "2 Aug 2025",
  },
  {
    id: 2,
    imageUrl: "https://placehold.co/300x200/e2e8f0/334155?text=Story+2",
    title:
      "Epstein victims claim 'cover up' as Maxwell moved to low security prison",
    date: "2 Aug 2025",
  },
];

const articleListData = [
  {
    id: 1,
    title: "Russia-Ukraine war: List of key events, day 1,255",
    imageUrl: "https://placehold.co/100x75/e2e8f0/334155?text=Thumb+1",
  },
  {
    id: 2,
    title:
      "Dangerous Mekong River pollution blamed on lawless mining in Myanmar",
    imageUrl: "https://placehold.co/100x75/e2e8f0/334155?text=Thumb+2",
  },
  {
    id: 3,
    title:
      "Another US citizen killed by Israeli settlers' attack in West Bank: Family",
    imageUrl: "https://placehold.co/100x75/e2e8f0/334155?text=Thumb+3",
  },
  {
    id: 4,
    title: "Ukraine's Zelensky calls for 'unconditional' ceasefire with Russia",
    imageUrl: "https://placehold.co/100x75/e2e8f0/334155?text=Thumb+4",
  },
  {
    id: 5,
    title: "Ukraine's Zelensky calls for 'unconditional' ceasefire with Russia",
    imageUrl: "https://placehold.co/100x75/e2e8f0/334155?text=Thumb+5",
  },
  {
    id: 6,
    title: "Ukraine's Zelensky calls for 'unconditional' ceasefire with Russia",
    imageUrl: "https://placehold.co/100x75/e2e8f0/334155?text=Thumb+6",
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
  </main>
);

export default Homepage;
