class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    get password() {
      return this._password.replace(/./g, "*");
    }
  
    set password(newPassword) {
      if (newPassword.length < 8 || !/\d/.test(newPassword) || !/[A-Z]/.test(newPassword)) {
        console.error("Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
      } else {
        this._password = newPassword;
      }
    }
  }

  
  const user1 = new User("mithun", "password123");
console.log(user1.password); // outputs "***********"

user1.password = "shortpw";
console.log(user1.password); // outputs "***********" and logs "Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter."

user1.password = "LongEnoughButNoNumbersOrUppercaseLetters";
console.log(user1.password); // outputs "***********" and logs "Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter."

user1.password = "GoodPassword123";
console.log(user1.password); // outputs "***********"
