interface User {
  _id: string;
  username: string;
  email: string;
  password: string; // In production, this should be hashed
  createdAt: string;
}

// In-memory storage that persists between API calls
class UserStorage {
  private static instance: UserStorage;
  private users: User[] = [];
  private currentUser: User | null = null;

  private constructor() {}

  public static getInstance(): UserStorage {
    if (!UserStorage.instance) {
      UserStorage.instance = new UserStorage();
    }
    return UserStorage.instance;
  }

  public getAllUsers(): User[] {
    return this.users.map(({ password, ...user }) => user) as User[];
  }

  public register(user: Omit<User, '_id' | 'createdAt'>): User {
    // Check if user already exists
    if (this.users.some(u => u.email === user.email)) {
      throw new Error('User with this email already exists');
    }

    const newUser = {
      _id: Date.now().toString(),
      ...user,
      createdAt: new Date().toISOString(),
    };

    this.users.push(newUser);
    return { ...newUser, password: '' }; // Don't return the password
  }

  public login(email: string, password: string): User {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    this.currentUser = user;
    return { ...user, password: '' }; // Don't return the password
  }

  public getCurrentUser(): User | null {
    return this.currentUser ? { ...this.currentUser, password: '' } : null;
  }

  public logout(): void {
    this.currentUser = null;
  }
}

export const userStorage = UserStorage.getInstance(); 