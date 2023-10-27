import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "../models/user.model";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endPointUrl = environment.baseApiUrl;
  AUTHENT_PATH = 'authent';

  constructor(private http: HttpClient) {}

  private token = 'fake token';

  getToken(): string {
    return this.token;
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.endPointUrl}${this.AUTHENT_PATH}/sign-up`, user);
  }

}
