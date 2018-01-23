import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Account} from "./account.model";
import {AuthAccountBO} from "./auth-account-bo.model";
import {AuthBO} from "./auth-bo.model";
import {ResultBody} from "./result-body.model";
import {Observable} from "rxjs/Observable";
import {AuthDataService} from "./auth-data.service";

@Injectable()
export class AuthService {
  public static LOGIN_OK : string= 'ok';
  public static URL_AUTH_LOGIN: string = "/api/auth/login";
  // public token: string; //当前账户的token
  // public currentAccount: Account = null; // 当前登录的用户
  // public currentAccountSubject: BehaviorSubject<Account> = new BehaviorSubject<Account>(null);

  get token() {
    return this.authData.token;
  }

  set token(token: string){
    this.authData.token = token;
  }

  get authenticated() {
    return this.authData.authenticated;
  }

  // 当前用户
  get currentAccount() {
    return this.authData.currentAccount;
  }
  public changeAccount(newAccount: Account){
    this.authData.currentAccount = newAccount;
    this.authData.currentAccountSubject.next(newAccount);
}

  get currentUserObservable() {
    return this.authData.currentUserObservable;
    // return this.afAuth.currentAccount;
  }

  // 当前登录用户id
  get currentUserId(): string {
    return this.authData.currentUserId;
  }

  // 用户账号
  get currentAccountDisplayName(): string {
    return this.authData.currentAccountDisplayName
  }


  constructor(private http: HttpClient,private authData: AuthDataService) {

  }

  login(username:string,password:string): Observable<ResultBody<AuthBO>> {
    let loginAccount = new AuthAccountBO();
    loginAccount.username = username;
    loginAccount.password = password;
    return this.http.post<ResultBody<AuthBO>>(AuthService.URL_AUTH_LOGIN,loginAccount);
    //   .subscribe(
    //   data=>{
    //     if(data.code == ResultBody.RESULT_CODE_SUCCESS){
    //       this.changeAccount(data.data.account);
    //       this.token = data.data.token;
    //       return   AuthService.URL_AUTH_LOGIN;
    //     } else{
    //       return data.msg;
    //     }
    //   },
    //   err => {
    //     console.log(err);
    //     return err.toString;
    //   }
    // );


  }
  githubLogin() {
    // const provide = new firebase.auth.GithubAuthProvider();
    // return this.afAuth.auth.signInWithPopup(provide).then((credential) => {
    //   this.currentAccount = credential.user;
    //   this.updateUserData();
    // }).catch(error => console.log(error));
  }

  googleLogin() {
    // const provider = new firebase.auth.GoogleAuthProvider();
    // return this.afAuth.auth.signInWithPopup(provider).then((credential) => {
    //   this.currentAccount = credential.user;
    //   this.updateUserData();
    // }).catch(error => console.log(error));
  }

  twitterLogin() {
    // const provider = new firebase.auth.TwitterAuthProvider();
    // return this.afAuth.auth.signInWithPopup(provider).then((credential) => {
    //   this.currentAccount = credential.user;
    //   this.updateUserData();
    // }).catch(error => console.log(error));
  }

  anonymousLogin() {
    // return this.afAuth.auth.signInAnonymously().then((user) => {
    //   this.currentAccount = user;
    //   this.updateUserData();
    // }).catch(error => console.log(error));
  }

  emailLogin(email: string, password: string) {
    // return this.afAuth.auth.signInWithEmailAndPassword(email, password).then((user) => {
    //   this.currentAccount = user;
    //   this.updateUserData();
    // });
  }

  /**
   *  邮箱注册
   * */
  emailSignUp(email: string, password: string) {
    // return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((user) => {
    //   this.currentAccount = user;
    //   this.updateUserData();
    // }).catch(error => console.log(error));
  }

  resetPassword(email: string) {
    // const fbAuth = firebase.auth();
    // return fbAuth.sendPasswordResetEmail(email).then(() => {
    //   console.log('密码已发到你的邮箱中');
    // }).catch(error => console.log('密码重置出错', error));
  }

  /**
   *  退出登录
   * */
  signOut() {
    // return this.afAuth.auth.signOut().then(() => {
    //   this.currentAccount = null;
    // }).catch(error => console.log(error));
  }

  private updateUserData() {
    // const path = `users/${this.currentUserId}`;
    // this.userRef = this.db.object(path);
    // const data = {
    //   email: this.currentAccount.email,
    //   name: this.currentAccount.displayName
    // };
    //
    // this.userRef.update(data).catch(error => console.log('更新用户数据：', error));
  }

}
