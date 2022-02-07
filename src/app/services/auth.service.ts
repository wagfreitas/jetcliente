import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) { }

  // get current user data from firebase
  getUserData() {
    return this.afAuth.currentUser;
  }

  // get passenger by id
  getUser(id) {
    return this.db.object('passengers/' + id);
  }

  // login by email and password
  login(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  resetPassword(email) {
    return this.afAuth.sendPasswordResetEmail(email);
  }

  logout() {
    return this.afAuth.signOut();
  }

  // register new account
  register(email, password, name, phoneNumber, ddd) {
    return Observable.create(observer => {
      this.afAuth.createUserWithEmailAndPassword(email, password).then((authData) => {

        let userInfo: any = {
          uid: authData.user.uid,
          name: name,
          phoneNumber: phoneNumber,
          ddd:ddd,
          isPhoneVerified: false,
          email: email,
          createdAt: Date.now()
        };
        this.updateUserProfile(userInfo);
        observer.next();
      }).catch((error: any) => {
        if (error) {
          observer.error(error);
        }
      });
    });
  }

  // update user display name and photo
  updateUserProfile(user) {
    console.log(user);
    let name = user.name ? user.name : user.email;
    let photoUrl = user.photoURL ? user.photoURL : 'DEFAULT_AVATAR';

    this.getUserData().then(user =>
      user.updateProfile({
        displayName: name,
        photoURL: photoUrl
      })
    );

    // create or update passenger
    this.db.object('passengers/' + user.uid).update({
      name: name,
      photoURL: photoUrl,
      email: user.email,
      ddd: user.ddd, 
      nascimento: user.nascimento ? user.nascimento : '', 
      endereco: user.endereco ? user.endereco : '', 
      bairro: user.bairro ? user.bairro : '', 
      cidade: user.cidade ? user.cidade : '',
      estado: user.estado ? user.estado : '', 
      cep: user.cep ? user.cep : '', 
      phoneNumber: user.phoneNumber ? user.phoneNumber : '',
      isPhoneVerified: user.isPhoneVerified,
      createdAt: Date.now()
    })
  }

  // create new user if not exist
  createUserIfNotExist(user) {
    this.getUser(user.uid).valueChanges().pipe(take(1)).subscribe((snapshot: any) => {
      if (snapshot === null) {
        this.updateUserProfile(user);
      }
    });
  }

  // update card setting
  updateCardSetting(number, exp, cvv, token, uid) {
    this.db.object('passengers/' + uid + '/card').update({
      number: number,
      exp: exp,
      cvv: cvv,
      token: token
    })
  }

  // get card setting
  getCardSetting(uid) {
    return this.db.object('passengers/' + uid + '/card');
  }

}
