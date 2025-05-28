interface Blog {
  _id: string;
  title: string;
  body: string;
  author: string;
  createdAt: string;
}

// In-memory storage that persists between API calls
class BlogStorage {
  private static instance: BlogStorage;
  private blogs: Blog[] = [
    {
      _id: '1',
      title: 'First Blog Post',
      body: 'This is our first blog post content.',
      author: 'John Doe',
      createdAt: new Date().toISOString(),
    },
  ];

  private constructor() {}

  public static getInstance(): BlogStorage {
    if (!BlogStorage.instance) {
      BlogStorage.instance = new BlogStorage();
    }
    return BlogStorage.instance;
  }

  public getAllBlogs(): Blog[] {
    return this.blogs;
  }

  public addBlog(blog: Omit<Blog, '_id' | 'createdAt'>): Blog {
    const newBlog = {
      _id: Date.now().toString(),
      ...blog,
      createdAt: new Date().toISOString(),
    };
    this.blogs.push(newBlog);
    return newBlog;
  }

  public deleteBlog(id: string): boolean {
    const index = this.blogs.findIndex(item => item._id === id);
    if (index === -1) return false;
    this.blogs.splice(index, 1);
    return true;
  }
}

export const blogStorage = BlogStorage.getInstance(); 