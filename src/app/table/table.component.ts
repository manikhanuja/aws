import { Component, OnInit } from '@angular/core';
import { PollyService } from '../polly.service';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  // characters: Observable<any[]>;
  columns: string[];
  constructor(private _pollyService: PollyService) { }

  ngOnInit() {
    this.columns = this._pollyService.getColumns();
    // this.characters = this._pollyService.getCharacters();
    console.log(this.columns);
  }

}
