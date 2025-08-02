import React from "react";
import "../styles/First.css";

const mainHeadlineData = {
  category: "Technology",
  title: "The Unseen Revolution: How AI is Quietly Reshaping Our World",
  author: "Jane Doe",
  date: "August 2, 2025",
  imageUrl: "https://placehold.co/1200x600/000000/FFFFFF?text=Future+Tech",
};

const articlesData = [
  {
    category: "Politics",
    title: "Global Leaders Convene for Landmark Climate Summit",
    author: "John Smith",
    imageUrl: "https://placehold.co/400x300/111111/FFFFFF?text=Politics",
  },
  {
    category: "Business",
    title: "Market Trends: The Rise of Sustainable Investing",
    author: "Emily White",
    imageUrl: "https://placehold.co/400x300/222222/FFFFFF?text=Business",
  },
  {
    category: "Health",
    title: "Breakthrough in Longevity Research Could Extend Human Lifespan",
    author: "Dr. Michael Chen",
    imageUrl: "https://placehold.co/400x300/333333/FFFFFF?text=Health",
  },
  {
    category: "World",
    title: "A New Era of Space Exploration Begins with Mars Colony",
    author: "Chris Hatfield",
    imageUrl: "https://placehold.co/400x300/444444/FFFFFF?text=World",
  },
  {
    category: "Culture",
    title: "The Renaissance of Vinyl: Why Analog Music is Back",
    author: "Alex Johnson",
    imageUrl: "https://placehold.co/400x300/555555/FFFFFF?text=Culture",
  },
  {
    category: "Science",
    title: "Deep Sea Vents Reveal New Forms of Life",
    author: "Maria Garcia",
    imageUrl: "https://placehold.co/400x300/666666/FFFFFF?text=Science",
  },
];

const trendingData = [
  {
    title: "The Future of Urban Transportation is Electric and Autonomous",
    date: "August 1, 2025",
    imageUrl: "https://placehold.co/100x100/1a1a1a/FFFFFF?text=1",
  },
  {
    title: "How Remote Work is Changing the Global Economy",
    date: "July 31, 2025",
    imageUrl: "https://placehold.co/100x100/2a2a2a/FFFFFF?text=2",
  },
  {
    title: "A Look Inside the World's Most Advanced Robotics Lab",
    date: "July 30, 2025",
    imageUrl: "https://placehold.co/100x100/3a3a3a/FFFFFF?text=3",
  },
  {
    title: "The Psychology of Color in Marketing and Design",
    date: "July 29, 2025",
    imageUrl: "https://placehold.co/100x100/4a4a4a/FFFFFF?text=4",
  },
];

const MainHeadline = ({ article }) => (
  <section className="main-headline">
    <img src={article.imageUrl} alt={article.title} />
    <div className="main-headline-content">
      <span className="category">{article.category}</span>
      <h1>{article.title}</h1>
      <div className="meta">
        By {article.author} | {article.date}
      </div>
    </div>
  </section>
);

const ArticleCard = ({ article }) => (
  <article className="article-card">
    <img src={article.imageUrl} alt={article.title} />
    <div className="article-card-content">
      <span className="category">{article.category}</span>
      <h3>{article.title}</h3>
      <div className="meta">By {article.author}</div>
    </div>
  </article>
);

const ArticleGrid = ({ articles }) => (
  <section className="article-grid">
    {articles.map((article, index) => (
      <ArticleCard key={index} article={article} />
    ))}
  </section>
);

const TrendingNews = ({ articles }) => (
  <div className="widget">
    <h2 className="widget-title">Trending Now</h2>
    <ul className="trending-list">
      {articles.map((item, index) => (
        <li key={index} className="trending-item">
          <img src={item.imageUrl} alt={item.title} />
          <div className="trending-item-content">
            <h4>{item.title}</h4>
            <div className="meta">{item.date}</div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const SocialFollow = () => (
  <div className="widget">
    <h2 className="widget-title">Follow Us</h2>
    <div className="social-links">
      <a href="#" className="social-link" style={{ backgroundColor: "#555" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
        </svg>
        X
      </a>
      <a href="#" className="social-link" style={{ backgroundColor: "#555" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
        </svg>
        Facebook
      </a>
      <a href="#" className="social-link" style={{ backgroundColor: "#555" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.282.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.884a1.161 1.161 0 1 0 0 2.322 1.161 1.161 0 0 0 0-2.322zM8 4.202a3.79 3.79 0 1 0 0 7.58 3.79 3.79 0 0 0 0-7.58zm0 1.443a2.347 2.347 0 1 1 0 4.694 2.347 2.347 0 0 1 0-4.694z" />
        </svg>
        Instagram
      </a>
      <a href="#" className="social-link" style={{ backgroundColor: "#555" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8.051 1.999h.089c.822.003 1.258.011 1.687.033.434.022.662.062.862.135.225.084.384.19.488.301.1.11.217.263.302.488.073.2.113.428.135.862.022.43.03.865.033 1.688v.09c0 .822-.004 1.258-.033 1.687-.022.434-.062.662-.135.862-.085.225-.19.384-.301.488-.11.1-.264.217-.488.302-.2.073-.429.113-.862.135-.43.022-.865.03-1.688.033h-.09c-.822 0-1.258-.003-1.687-.033-.434-.022-.662-.062-.862-.135-.225-.084-.384-.19-.488-.301-.1-.11-.217-.263-.302-.488-.073-.2-.113-.428-.135-.862-.022-.43-.03-.865-.033-1.688v-.09c0-.822.004-1.258.033-1.687.022-.434.062.662.135.862.085.225.19.384.301.488.11.1.264.217.488.302.2.073.429.113.862.135.43.022.865.03 1.688.033zM6.3 5.2h.94s.125-.577.63-.577c.504 0 .595.416.595.839 0 .838-.87.838-1.783 1.24a2.583 2.583 0 0 0-1.16 2.2c0 .983.826 1.32 1.734 1.32.83 0 1.523-.51 1.523-.51L10.5 11.1s-.73.55-1.68.55c-1.352 0-2.522-.854-2.522-2.372 0-1.22.866-1.648 1.83-2.074 1.05-.456 1.05-.79 1.05-.98 0-.19-.12-.416-.49-.416-.36 0-.57.34-.57.34l-.94-1.2s.42-.576 1.32-.576c.95 0 1.42.55 1.42 1.24 0 .55-.22 1.03-.68 1.24a1.32 1.32 0 0 0-1.32-.416z" />
        </svg>
        Podcast
      </a>
    </div>
  </div>
);

export default function First() {
  return (
    <>
      <header
        style={{
          textAlign: "center",
          padding: "2rem 1rem",
          borderBottom: "1px solid var(--border-color)",
        }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "3rem",
            margin: 0,
            color: "var(--accent-color)",
          }}
        >
          NewsDak
        </h1>
        <p style={{ margin: "0.25rem 0 0 0", color: "var(--meta-text-color)" }}>
          Your Daily Dose of Unbiased News
        </p>
      </header>
      <main className="container">
        <div className="main-grid">
          <div className="main-content">
            <MainHeadline article={mainHeadlineData} />
            <ArticleGrid articles={articlesData} />
          </div>
          <aside className="sidebar">
            <TrendingNews articles={trendingData} />
            <SocialFollow />
          </aside>
        </div>
      </main>
    </>
  );
}
