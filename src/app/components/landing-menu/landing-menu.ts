import { Component } from '@angular/core';
import { PageTitle } from '../page-title/page-title';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-menu',
  imports: [ PageTitle ],
  templateUrl: './landing-menu.html',
  styleUrl: './landing-menu.css',
})
export class LandingMenu {
  constructor(private router: Router){}
  searchDogs(searchQuery:string){
    this.router.navigate(['/search'],
      {queryParams: {q: searchQuery}}
    )
  }

}
