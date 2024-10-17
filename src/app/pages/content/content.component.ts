import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BigCardComponent } from "../../component/big-card/big-card.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink, BigCardComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  @Input()
  photoCoverContent: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlxAW62lZHkm4lez12lEDzIrhBDjjzCeBxnw&s';
  @Input()
  titleContent: string = 'Roteamento Angular';
  @Input()
  descriptionContent: string = 'Angular Route transforma sua aplicação em uma Single Page Application, que tem várias visualizações adicionando roteamento.';


  constructor (private route:ActivatedRoute){
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
    )
  }

  
}
