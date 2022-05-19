interface UserInfo {
  user: string;
  name: string;
}
class LibraryUser {
  public name: string;

  public user: string;

  constructor(options: UserInfo) {
    this.user = options.user;
    this.name = options.name;
  }

  getConfig() {
    return {
      myName: this.name,
      myUser: this.user,
    };
  }
}

export default LibraryUser;
