import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BigCardComponent } from '../../component/big-card/big-card.component';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink, BigCardComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  @Input()
  photoCoverContent: string = '';
  @Input()
  titleContent: string = '';
  @Input()
  descriptionContent: string = '';

  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));

    this.setValuesToContent(this.id);
  }

  setValuesToContent(id: string | null) {
    const result = dataFake.filter((article) => article.id == id)[0];

    this.photoCoverContent = result.photoCover;
    this.titleContent = result.title;
    this.descriptionContent = result.description;
  }
}
