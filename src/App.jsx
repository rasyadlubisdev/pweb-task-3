import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronRight, Clock, User, Globe, ArrowLeft, Share2, BookmarkPlus, Eye } from 'lucide-react';

// Simple Router Implementation
const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  return React.cloneElement(children, { currentPath, navigate });
};

// Mock data untuk artikel dengan konten lengkap
const mockNews = [
  {
    id: 1,
    slug: "major-economic-development-announced",
    title: "Breaking: Major Economic Development Announced",
    summary: "Government reveals new economic package that could reshape the financial landscape for millions of citizens.",
    content: `
      <p>In a groundbreaking announcement today, government officials unveiled a comprehensive economic development package that promises to reshape the financial landscape for millions of citizens across the nation.</p>
      
      <p>The initiative, dubbed the "Economic Prosperity Framework," includes substantial investments in infrastructure, technology, and workforce development programs designed to stimulate growth and create sustainable employment opportunities.</p>
      
      <h3>Key Components of the Package</h3>
      
      <p>The multi-billion dollar initiative encompasses several critical areas:</p>
      
      <ul>
        <li><strong>Infrastructure Investment:</strong> $50 billion allocated for modernizing transportation networks, digital infrastructure, and renewable energy projects</li>
        <li><strong>Technology Innovation:</strong> Tax incentives for startups and established companies investing in emerging technologies</li>
        <li><strong>Workforce Development:</strong> Comprehensive retraining programs for workers transitioning to new industries</li>
        <li><strong>Small Business Support:</strong> Expanded access to capital and reduced regulatory barriers for entrepreneurs</li>
      </ul>
      
      <p>According to economic advisors, this package represents the most significant economic policy shift in over a decade, with projections indicating potential job creation of over 2 million positions within the next five years.</p>
      
      <h3>Industry Response</h3>
      
      <p>Initial reactions from industry leaders have been overwhelmingly positive, with many praising the government's commitment to long-term economic stability and growth.</p>
      
      <p>"This initiative demonstrates a clear understanding of the challenges facing our economy and provides a roadmap for sustainable prosperity," said Maria Rodriguez, CEO of the National Business Council.</p>
      
      <p>The implementation timeline spans three years, with the first phase focusing on immediate infrastructure projects and workforce training programs set to begin within the next quarter.</p>
    `,
    category: "Economy",
    author: "John Smith",
    publishedAt: "2 hours ago",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=600&fit=crop",
    featured: true,
    views: "12.5K",
    tags: ["Economy", "Government", "Policy", "Infrastructure"]
  },
  {
    id: 2,
    slug: "technology-giants-ai-partnership",
    title: "Technology Giants Announce AI Partnership",
    summary: "Leading tech companies join forces to advance artificial intelligence research and development.",
    content: `
      <p>In an unprecedented move, five of the world's largest technology companies have announced a collaborative partnership aimed at advancing artificial intelligence research and development on a global scale.</p>
      
      <p>The alliance, officially named the "Global AI Innovation Consortium," brings together industry leaders to address critical challenges in AI safety, ethics, and accessibility while accelerating breakthrough innovations.</p>
      
      <h3>Partnership Objectives</h3>
      
      <p>The consortium has outlined several key objectives for the collaboration:</p>
      
      <ul>
        <li>Developing unified AI safety standards and protocols</li>
        <li>Creating open-source AI tools and frameworks</li>
        <li>Establishing ethical guidelines for AI development</li>
        <li>Promoting AI education and workforce development</li>
      </ul>
      
      <p>This partnership represents a significant shift from the traditionally competitive nature of the tech industry, signaling a recognition that AI development requires collaborative effort to address its complex challenges.</p>
      
      <h3>Investment and Timeline</h3>
      
      <p>The consortium plans to invest a combined $10 billion over the next three years in joint research initiatives, with a focus on developing AI systems that are safe, beneficial, and accessible to organizations of all sizes.</p>
      
      <p>Research centers will be established in multiple countries, creating a global network of AI innovation hubs that will work together on breakthrough technologies while respecting local regulations and cultural considerations.</p>
    `,
    category: "Technology",
    author: "Sarah Johnson",
    publishedAt: "4 hours ago",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
    views: "8.3K",
    tags: ["Technology", "AI", "Partnership", "Innovation"]
  },
  {
    id: 3,
    slug: "climate-summit-historic-agreement",
    title: "Climate Summit Reaches Historic Agreement",
    summary: "World leaders unite on unprecedented climate action plan with binding commitments.",
    content: `
      <p>After weeks of intense negotiations, world leaders at the Global Climate Summit have reached a historic agreement that establishes the most comprehensive and binding climate action plan in history.</p>
      
      <p>The agreement, signed by representatives from 195 countries, commits to ambitious targets for reducing greenhouse gas emissions and transitioning to renewable energy sources over the next two decades.</p>
      
      <h3>Key Provisions</h3>
      
      <p>The landmark agreement includes several groundbreaking provisions:</p>
      
      <ul>
        <li>50% reduction in global emissions by 2035</li>
        <li>$500 billion annual fund for climate adaptation in developing countries</li>
        <li>Mandatory renewable energy targets for all signatory nations</li>
        <li>Strict penalties for countries failing to meet commitments</li>
      </ul>
      
      <p>Environmental scientists and activists have hailed the agreement as a crucial step toward preventing catastrophic climate change, though some argue that even these ambitious targets may not be sufficient to limit global warming to 1.5 degrees Celsius.</p>
      
      <h3>Implementation Challenges</h3>
      
      <p>While the agreement represents unprecedented global cooperation on climate issues, experts acknowledge that implementation will face significant challenges, including economic transitions, technological hurdles, and political resistance.</p>
      
      <p>A new international monitoring body will be established to track progress and ensure accountability, with annual reviews and adjustment mechanisms built into the framework.</p>
    `,
    category: "Environment",
    author: "Michael Brown",
    publishedAt: "6 hours ago",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1582032718643-0711f971a959?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    views: "15.7K",
    tags: ["Environment", "Climate", "Policy", "Global"]
  },
  {
    id: 4,
    slug: "sports-championship-finals-weekend",
    title: "Sports Championship Finals This Weekend",
    summary: "Two powerhouse teams prepare for the ultimate showdown in what promises to be an epic finale.",
    content: `
      <p>This weekend marks the culmination of an extraordinary season as two powerhouse teams prepare to face off in what analysts are calling the most anticipated championship finale in recent memory.</p>
      
      <p>Both teams have demonstrated exceptional performance throughout the season, with record-breaking statistics and memorable victories that have captivated fans worldwide.</p>
      
      <h3>Team Preparations</h3>
      
      <p>As the final approaches, both teams have been intensifying their training regimens and fine-tuning their strategies:</p>
      
      <ul>
        <li>Extended practice sessions with focus on tactical adjustments</li>
        <li>Comprehensive analysis of opponent's playing patterns</li>
        <li>Mental conditioning and team bonding activities</li>
        <li>Recovery and injury management protocols</li>
      </ul>
      
      <p>The venue is expected to be filled to capacity, with millions more viewers tuning in from around the globe to witness this historic confrontation.</p>
      
      <h3>Historical Context</h3>
      
      <p>This championship represents more than just a sporting event; it's a culmination of years of dedication, training, and perseverance from athletes who have dedicated their lives to reaching this moment.</p>
      
      <p>The economic impact of the event is also significant, with local businesses and the broader sports industry anticipating substantial benefits from the increased attention and tourism.</p>
    `,
    category: "Sports",
    author: "Emma Wilson",
    publishedAt: "8 hours ago",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&h=600&fit=crop",
    views: "9.1K",
    tags: ["Sports", "Championship", "Finals", "Competition"]
  },
  {
    id: 5,
    slug: "medical-breakthrough-cancer-research",
    title: "Medical Breakthrough in Cancer Research",
    summary: "Scientists announce promising results from clinical trials of new treatment approach.",
    content: `
      <p>Medical researchers have announced promising results from clinical trials of a revolutionary new approach to cancer treatment that could transform how the disease is managed and potentially cured.</p>
      
      <p>The breakthrough involves a novel combination of immunotherapy and targeted gene therapy that has shown remarkable success rates in early trials, offering new hope for patients with previously untreatable forms of cancer.</p>
      
      <h3>Research Findings</h3>
      
      <p>The clinical trials, conducted over three years with 500 participants, revealed significant improvements in treatment outcomes:</p>
      
      <ul>
        <li>85% improvement in five-year survival rates</li>
        <li>Reduced side effects compared to traditional treatments</li>
        <li>Effective across multiple cancer types</li>
        <li>Shorter treatment duration and recovery time</li>
      </ul>
      
      <p>Dr. Lisa Chen, lead researcher on the project, described the results as "a paradigm shift in cancer treatment that could benefit millions of patients worldwide."</p>
      
      <h3>Next Steps</h3>
      
      <p>While the results are encouraging, researchers emphasize that larger-scale trials are needed before the treatment becomes widely available. The next phase will involve 2,000 participants across multiple international medical centers.</p>
      
      <p>Regulatory approval processes are already underway in several countries, with hopes that the treatment could be available to patients within the next two to three years.</p>
    `,
    category: "Health",
    author: "Dr. Lisa Chen",
    publishedAt: "12 hours ago",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop",
    views: "18.2K",
    tags: ["Health", "Medical", "Research", "Cancer"]
  },
  {
    id: 6,
    slug: "space-mission-groundbreaking-data",
    title: "Space Mission Returns with Groundbreaking Data",
    summary: "Latest space exploration mission provides new insights into the cosmos and potential for life.",
    content: `
      <p>The latest deep space exploration mission has returned to Earth with groundbreaking data that provides unprecedented insights into the cosmos and significantly advances our understanding of the potential for life beyond our planet.</p>
      
      <p>The mission, which lasted 18 months and traveled over 500 million kilometers, collected data from multiple celestial bodies and conducted experiments that were previously impossible due to technological limitations.</p>
      
      <h3>Key Discoveries</h3>
      
      <p>Among the most significant findings from the mission:</p>
      
      <ul>
        <li>Evidence of water ice on previously unexplored moons</li>
        <li>Detection of organic compounds in asteroid samples</li>
        <li>New understanding of planetary formation processes</li>
        <li>Data suggesting potential habitable zones around distant stars</li>
      </ul>
      
      <p>These discoveries not only expand our knowledge of the universe but also inform future missions and the search for extraterrestrial life.</p>
      
      <h3>Implications for Future Exploration</h3>
      
      <p>The success of this mission paves the way for even more ambitious space exploration projects, including plans for human missions to Mars and the establishment of permanent research stations on the Moon.</p>
      
      <p>International space agencies are already collaborating on follow-up missions that will build upon these discoveries and continue humanity's quest to understand our place in the universe.</p>
    `,
    category: "Science",
    author: "Robert Taylor",
    publishedAt: "1 day ago",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1200&h=600&fit=crop",
    views: "22.4K",
    tags: ["Science", "Space", "Exploration", "Research"]
  }
];

const categories = ["All", "Economy", "Technology", "Environment", "Sports", "Health", "Science"];

const Header = ({ isMenuOpen, setIsMenuOpen, navigate }) => (
  <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <button 
            onClick={() => navigate('/')}
            className="flex-shrink-0 cursor-pointer"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-bold text-xl hover:shadow-lg transition-all duration-200">
              NewsHub
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 xl:space-x-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => navigate('/')}
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-50 rounded-md"
            >
              {category}
            </button>
          ))}
        </nav>

        {/* Search and Menu */}
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200">
            <Search className="h-5 w-5" />
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Menu */}
    <div className={`lg:hidden transition-all duration-300 ease-in-out ${
      isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
    } overflow-hidden bg-white border-t border-gray-200`}>
      <div className="px-4 py-2 space-y-1">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              navigate('/');
              setIsMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  </header>
);

const FeaturedArticle = ({ article, navigate }) => (
  <div 
    onClick={() => navigate(`/article/${article.slug}`)}
    className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
  >
    <div className="aspect-w-16 aspect-h-9 lg:h-96">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
      <div className="flex items-center space-x-3 mb-3">
        <span className="bg-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
          {article.category}
        </span>
        <span className="text-xs opacity-90 flex items-center">
          <Clock className="h-3 w-3 mr-1" />
          {article.publishedAt}
        </span>
        <span className="text-xs opacity-90 flex items-center">
          <Eye className="h-3 w-3 mr-1" />
          {article.views}
        </span>
      </div>
      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 leading-tight">
        {article.title}
      </h2>
      <p className="text-sm lg:text-base opacity-90 line-clamp-2 lg:line-clamp-3 mb-4">
        {article.summary}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm opacity-90">
          <User className="h-4 w-4 mr-2" />
          {article.author} • {article.readTime}
        </div>
        <ChevronRight className="h-5 w-5 opacity-75 group-hover:opacity-100 transition-opacity duration-200" />
      </div>
    </div>
  </div>
);

const NewsCard = ({ article, index, navigate }) => (
  <div 
    onClick={() => navigate(`/article/${article.slug}`)}
    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 cursor-pointer group animate-fade-in"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="aspect-w-16 aspect-h-9">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 lg:h-52 object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="p-4 lg:p-6">
      <div className="flex items-center space-x-2 mb-3">
        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
          {article.category}
        </span>
        <span className="text-xs text-gray-500 flex items-center">
          <Clock className="h-3 w-3 mr-1" />
          {article.publishedAt}
        </span>
      </div>
      <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
        {article.title}
      </h3>
      <p className="text-gray-600 text-sm lg:text-base line-clamp-3 mb-4">
        {article.summary}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center text-xs lg:text-sm text-gray-500">
          <User className="h-3 w-3 mr-1" />
          {article.author}
        </div>
        <div className="flex items-center space-x-3 text-xs lg:text-sm text-gray-500">
          <span className="flex items-center">
            <Eye className="h-3 w-3 mr-1" />
            {article.views}
          </span>
          <span>{article.readTime}</span>
        </div>
      </div>
    </div>
  </div>
);

const ArticlePage = ({ article, navigate }) => {
  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-colors duration-200 group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to News
        </button>

        {/* Article Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 lg:h-96 object-cover"
            />
          </div>
          
          <div className="p-6 lg:p-8">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {article.category}
              </span>
              <span className="text-sm text-gray-500 flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {article.publishedAt}
              </span>
              <span className="text-sm text-gray-500 flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                {article.views}
              </span>
              <span className="text-sm text-gray-500">{article.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {article.title}
            </h1>

            {/* Summary */}
            <p className="text-lg lg:text-xl text-gray-600 mb-6 leading-relaxed">
              {article.summary}
            </p>

            {/* Author and Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-gray-200">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  {article.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{article.author}</p>
                  <p className="text-sm text-gray-500">Journalist</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                  <Share2 className="h-4 w-4" />
                  <span className="text-sm font-medium">Share</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                  <BookmarkPlus className="h-4 w-4" />
                  <span className="text-sm font-medium">Save</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 mb-8">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* Tags */}
        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockNews
              .filter(a => a.id !== article.id && a.category === article.category)
              .slice(0, 2)
              .map((relatedArticle) => (
                <div
                  key={relatedArticle.id}
                  onClick={() => navigate(`/article/${relatedArticle.slug}`)}
                  className="flex space-x-4 cursor-pointer group"
                >
                  <img
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    className="w-24 h-24 object-cover rounded-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                      {relatedArticle.title}
                    </h4>
                    <div className="flex items-center space-x-2 mt-2 text-sm text-gray-500">
                      <span>{relatedArticle.author}</span>
                      <span>•</span>
                      <span>{relatedArticle.publishedAt}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => (
  <div className="flex space-x-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => setSelectedCategory(category)}
        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
          selectedCategory === category
            ? 'bg-blue-600 text-white shadow-md transform scale-105'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
        }`}
      >
        {category}
      </button>
    ))}
  </div>
);

const HomePage = ({ selectedCategory, setSelectedCategory, navigate }) => {
  const [filteredNews, setFilteredNews] = useState(mockNews);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredNews(mockNews);
    } else {
      setFilteredNews(mockNews.filter(article => article.category === selectedCategory));
    }
  }, [selectedCategory]);

  const featuredArticle = mockNews.find(article => article.featured);
  const regularNews = filteredNews.filter(article => !article.featured);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
      {/* Welcome Section */}
      <div className="text-center mb-8 lg:mb-12 animate-fade-in">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
          Stay Informed with <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">NewsHub</span>
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the latest news, insights, and stories that matter to you from around the world.
        </p>
      </div>

      {/* Featured Article */}
      {featuredArticle && (
        <div className="mb-8 lg:mb-12 animate-fade-in">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6 flex items-center">
            Featured Story
            <ChevronRight className="h-5 w-5 ml-2 text-blue-600" />
          </h2>
          <FeaturedArticle article={featuredArticle} navigate={navigate} />
        </div>
      )}

      {/* Category Filter */}
      <CategoryFilter 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {regularNews.map((article, index) => (
          <NewsCard key={article.id} article={article} index={index} navigate={navigate} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-12">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
          Load More Articles
        </button>
      </div>
    </main>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12 mt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="col-span-1 lg:col-span-2">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-bold text-xl mb-4 inline-block">
            NewsHub
          </div>
          <p className="text-gray-400 mb-4 max-w-md">
            Your trusted source for breaking news, in-depth analysis, and compelling stories from around the globe.
          </p>
          <div className="flex space-x-4">
            <Globe className="h-5 w-5 text-gray-400" />
            <span className="text-gray-400 text-sm">Available worldwide</span>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-400">
            {categories.slice(1).map((category) => (
              <li key={category}>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Contact</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 NewsHub. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const NewsPortal = ({ currentPath, navigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentPath]);

  // Route handling
  const isHomePage = currentPath === '/' || currentPath === '';
  const isArticlePage = currentPath.startsWith('/article/');

  let articleSlug = '';
  let currentArticle = null;

  if (isArticlePage) {
    articleSlug = currentPath.replace('/article/', '');
    currentArticle = mockNews.find(article => article.slug === articleSlug);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        navigate={navigate}
      />
      
      {isHomePage && (
        <HomePage 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          navigate={navigate}
        />
      )}

      {isArticlePage && (
        <ArticlePage article={currentArticle} navigate={navigate} />
      )}

      <Footer />

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .prose {
          color: #374151;
          line-height: 1.75;
        }

        .prose h3 {
          color: #111827;
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .prose p {
          margin-bottom: 1.25rem;
        }

        .prose ul {
          margin: 1.25rem 0;
          padding-left: 1.625rem;
        }

        .prose li {
          margin-bottom: 0.5rem;
          padding-left: 0.375rem;
        }

        .prose strong {
          color: #111827;
          font-weight: 600;
        }

        /* Responsive Grid Adjustments */
        @media (min-width: 768px) and (max-width: 1023px) {
          .grid-cols-1.md\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 1024px) and (max-width: 1279px) {
          .xl\\:grid-cols-3 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 1280px) {
          .xl\\:grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        /* Mobile optimizations */
        @media (max-width: 767px) {
          .aspect-w-16.aspect-h-9 {
            aspect-ratio: 16 / 9;
          }
        }
      `}</style>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <NewsPortal />
    </Router>
  );
};

export default App;