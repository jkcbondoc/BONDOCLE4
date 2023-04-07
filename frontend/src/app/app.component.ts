import { Component } from '@angular/core';
import { AuthServiceService } from './service/auth.service';
import { TokenStorageService } from './service/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  isLoggedIn = false;

  constructor(private tokenStorageService: TokenStorageService, private authService: AuthServiceService) {
    
  }

  ngOnInit() {
    if (this.tokenStorageService.getToken() && this.isLoggedIn == false) {
      this.isLoggedIn = true;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
