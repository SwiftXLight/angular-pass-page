import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password: string = '';
  passwordStrength: 'empty-pass' | 'short' | 'weak' | 'medium' | 'strong' = 'empty-pass';
  minPasswordLength: number = 8;
  showPassword: boolean = false;

  checkPasswordStrength(): void {
    const hasLetters = this.password.match(/[a-zA-Z]/) !== null;
    const hasDigits = this.password.match(/[0-9]/) !== null;
    const hasSymbols = this.password.match(/[!@#$%^&*]/) !== null;

    if (hasLetters && hasDigits && hasSymbols) {
      this.passwordStrength = 'strong';
    } else if ((this.password.length < this.minPasswordLength) && (this.password.length > 0)) {
      this.passwordStrength = 'short';
    } else if ((hasLetters && hasDigits) || (hasDigits && hasSymbols) || (hasLetters && hasSymbols)) {
      this.passwordStrength = 'medium';
    } else if (this.password.length === 0) {
      this.passwordStrength = 'empty-pass';
    } else {
      this.passwordStrength = 'weak';
    }
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
