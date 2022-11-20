export enum FirebaseCodeErrorEnum {
    EmailAlreadyInUse = 'auth/email-already-in-use',
    WeakPassword = 'auth/weak-password',
    InvalidEmail = 'auth/invalid-email',
    WrongPassword = 'auth/wrong-password',
    UserNotFound = 'auth/user-not-found',
    EmailNotVerified = 'auth/invalid-email-verified',
    AccountExistsWithDifferentCredential = 'auth/account-exists-with-different-credential'
}