import { Component, OnInit } from '@angular/core';
import { PollyService } from '../polly.service';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public columns: string[];
  public posts = [];
  constructor(private _pollyService: PollyService) { }

  ngOnInit() {
    this._pollyService.getData()
      .subscribe(data => this.posts = data);
    this.columns = this._pollyService.getColumns();
  }


}
