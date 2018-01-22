import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
// import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';
import {Account} from "./account.model";

@Injectable()
export class AuthService {

  currentAccount: Account = null; // 当前登录的用户
  currentAccountSubject: BehaviorSubject<Account> = new BehaviorSubject<Account>(null);

  get authenticated() {
    return this.currentAccount !== null;
  }

  // 当前用户
  // get currentAccount() {
  //   return this.authenticated ? this.currentAccount : null;
  // }

  get currentUserObservable() {
    return this.currentAccountSubject.asObservable;
    // return this.afAuth.currentAccount;
  }

  // 当前登录用户id
  get currentUserId(): string {
    return this.authenticated ? this.currentAccount.id : '';
  }

  // 用户账号
  get currentAccountDisplayName(): string {
    if (!this.currentAccount) {
      return '未知账户';
    } else {
      return this.currentAccount.fullname +'[' + this.currentAccount.username + ']';
    }
  }


  constructor(private http: HttpClient) {

  }

  login(username:string,password:string): boolean{
    return false;
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
