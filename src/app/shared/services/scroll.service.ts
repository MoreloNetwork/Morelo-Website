import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(private router: Router) {
  }

  // Scroll element smoothly to the middle-ish of viewport
  scroll(id) {
    this.router.navigate(['/'], { fragment: id });
  }
}
