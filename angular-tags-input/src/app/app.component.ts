import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { TagsInputService } from './tags-input.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private tagsInput: TagsInputService
  ) {
  }

  ngOnInit(): void {
    this.tagsInput.setControl('tag01');
    this.tagsInput.setValue('tag01', 'honda,fiat');
  }

  onChangeValue() {
    this.tagsInput.setValue('tag01', 'renault,bmw,mercedes benz');
  }
}
