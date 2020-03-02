import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-tags-input';

  constructor() {
  }

  ngOnInit(): void {
    $(function () {
      $('#tags_2').tagsInput({
        width: 'auto',
        onChange: function (elem, elem_tags) {
          console.log(elem);
        }
      });
    });
  }
}
