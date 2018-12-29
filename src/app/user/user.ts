export class User {

    private _photoURL: string;

    constructor(
        private _emailAddress: string,
        private _displayName: string
    ) {}

    get photoURL(): string {
        return this._photoURL;
    }

    set photoURL(photoURL: string) {
        this._photoURL = photoURL;
    }

    get emailAddress(): string {
        return this._emailAddress;
    }

    set emailAddress(emailAddress: string) {
        this._emailAddress = emailAddress;
    }

    get displayName(): string {
        return this._displayName;
    }
    
    set displayName(displayName: string) {
        this._displayName = displayName;
    }
}