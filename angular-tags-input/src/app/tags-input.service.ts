import { Injectable } from '@angular/core';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class TagsInputService {
  // Documentation https://github.com/edgarsoarespt/jQuery-Tags-Input

  constructor() { }

  setControl(idElement) {
    $('#' + idElement).tagsInput({
      width: 'auto',
      defaultText: '',
    });
  }

  setValue(idElement, tags) {
    $('#' + idElement).importTags(tags);
  }
}
