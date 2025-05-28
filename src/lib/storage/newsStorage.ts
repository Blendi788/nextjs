interface NewsItem {
  _id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

// In-memory storage that persists between API calls
class NewsStorage {
  private static instance: NewsStorage;
  private news: NewsItem[] = [
    {
      _id: '1',
      title: 'First News Article',
      content: 'This is our first news article content.',
      author: 'John Doe',
      createdAt: new Date().toISOString(),
    },
  ];

  private constructor() {}

  public static getInstance(): NewsStorage {
    if (!NewsStorage.instance) {
      NewsStorage.instance = new NewsStorage();
    }
    return NewsStorage.instance;
  }

  public getAllNews(): NewsItem[] {
    return this.news;
  }

  public addNews(news: Omit<NewsItem, '_id' | 'createdAt'>): NewsItem {
    const newArticle = {
      _id: Date.now().toString(),
      ...news,
      createdAt: new Date().toISOString(),
    };
    this.news.push(newArticle);
    return newArticle;
  }

  public deleteNews(id: string): boolean {
    const index = this.news.findIndex(item => item._id === id);
    if (index === -1) return false;
    this.news.splice(index, 1);
    return true;
  }
}

export const newsStorage = NewsStorage.getInstance(); 