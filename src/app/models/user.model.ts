export class User {
  id?: number;
  email?: string;
  password?: string;
  role?: string;
  creationDate?: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
