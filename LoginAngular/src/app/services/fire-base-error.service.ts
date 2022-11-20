import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnum } from "../../../utils/fireBase-error";

@Injectable({
  providedIn: 'root'
})
export class FireBaseErrorService {

  constructor() { }

  codeError(code: string) {
    switch(code) {
      case FirebaseCodeErrorEnum.EmailAlreadyInUse:
        return 'The user already exists'

      case FirebaseCodeErrorEnum.WeakPassword:
        return 'The password is too weak'

      case FirebaseCodeErrorEnum.InvalidEmail:
        return 'Invalid mail'

      case FirebaseCodeErrorEnum.WrongPassword:
        return 'Incorrect password'

      case FirebaseCodeErrorEnum.UserNotFound:
        return 'The user does not succeed'

      case FirebaseCodeErrorEnum.EmailNotVerified:
        return 'The email has not been verified'

      case FirebaseCodeErrorEnum.AccountExistsWithDifferentCredential:
        return 'There is already an account with the same email, but on a different credential'

      
      default:
        return 'Unknown error';
    }
  }
}
