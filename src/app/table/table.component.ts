import { Component, OnInit, Input } from '@angular/core';
import { PollyService } from '../polly.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public columns: string[];
  @Input() posts = [];
  constructor(private _pollyService: PollyService) { }

  ngOnInit() {
  // get the table headers.
  this.columns = this._pollyService.getColumns();
  }
}
