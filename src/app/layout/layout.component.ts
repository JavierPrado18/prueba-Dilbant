import { Component, inject } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [MaterialModule, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  router = inject(Router);
  currentIndex = 0;
  ngOnInit() {
    this.updatecurrentIndex();
  }

  onTabChange(event: any) {
    switch (event.index) {
      case 0:
        this.router.navigate(['/pages']);
        break;
      case 1:
        this.router.navigate(['/pages/menu']);
        break;
      case 2:
        this.router.navigate(['/pages/about']);
        break;
    }
  }
  updatecurrentIndex() {
    const currentRoute = this.router.url;

    if (currentRoute.startsWith('/pages/menu')) {
      this.currentIndex = 1;
    } else if (currentRoute.startsWith('/pages/about')) {
      this.currentIndex = 2;
    } else {
      this.currentIndex = 0;
    }
  }
}
