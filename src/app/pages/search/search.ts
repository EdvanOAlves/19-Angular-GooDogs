import { Component, OnInit } from '@angular/core';
import { ActivatedRoute/*, RouterModule */ } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DogSearchService } from '../../services/dog-search-service';

@Component({
  selector: 'app-search',
  imports: [CommonModule/*, RouterModule */],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search implements OnInit{
  dogImages: string[] = []
  errorMessage= '';
  breed = '';


  //Coletando a rota atual numa variável route
  constructor(private route: ActivatedRoute, private dogSearchService: DogSearchService){}

  ngOnInit(){
    //Para executar sempre que houver alteração na query de busca
    this.route.queryParams.subscribe(params => {
      this.errorMessage = ``
      this.dogImages = []
      const query = params['q'];
      if (!query){
        this.errorMessage = "Empty input"
        return
      }
      this.breed = query.replace(' ', '/')
      this.dogSearchService.searchByBreed(this.breed.toLowerCase()).subscribe({
        next: response => {
          this.dogImages = response.message;
        },
        error: () => this.errorMessage = "Cannot find breed/API error"
      })
    })
    
  }
}
