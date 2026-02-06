import { Component, OnInit } from '@angular/core';
import { ActivatedRoute /*, RouterModule */, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DogSearchService } from '../../services/dog-search-service';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-search',
  imports: [CommonModule /*, RouterModule */, RouterLink],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search implements OnInit {
  dogImages: string[] = []
  errorMessage = '';
  breed = '';


  //Coletando a rota atual numa variável route
  constructor(private route: ActivatedRoute, private dogSearchService: DogSearchService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    //Para executar sempre que houver alteração na query de busca
    this.route.queryParams.subscribe(params => {
      this.errorMessage = ``
      this.dogImages = []
      const query = params['q'];
      if (!query) {
        this.errorMessage = "Empty input"
        return
      }
      this.breed = query.replace(' ', '/')

      // Teste com observer
      // this.dogSearchService.searchByBreed(this.breed.toLowerCase()).subscribe({
      //   next: response => {
      //     this.dogImages = response.message;

      //     // Para ele atualizar o html, por ser uma versão zoneless ele precisa desse gatilho a mais
      //     this.cdr.detectChanges();
      //   },
      //   error: () => {
      //     this.errorMessage = "Cannot find breed/API error"
      //     this.cdr.detectChanges();
      //   }
      // })

      this.dogSearchService.searchByBreed(this.breed.toLowerCase())
        .then(data => {
          console.log(data)
          if (data.status != 'success'){
            this.errorMessage = 'Cannot find breed/API error'
            this.cdr.detectChanges();
          }else{
            this.dogImages = data.message
            console.log(this.dogImages)
            this.cdr.detectChanges();
          }
        })
        .catch(error => {
          this.errorMessage = 'Cannot find breed/API error'
        })
    })
  }
}
