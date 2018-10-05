import { Component, OnInit, Input } from '@angular/core';
import { PollyService } from '../polly.service';
import { PollyDemoComponent } from '../polly-demo/polly-demo.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public columns: string[];
  @Input() posts = [];
  constructor(private _pollyService: PollyService, private _pollyDemo: PollyDemoComponent) { }

  ngOnInit() {
  //   this._pollyService.getData()
  //     .subscribe(data => this.posts = data);
  this.columns = this._pollyService.getColumns();
  }
}
