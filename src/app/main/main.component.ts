import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

const lastConversations = require('../../../mock-api/last-conversations.json');
const convGroupMenu = require('../../../mock-api/conv-group-menu.json');

const convDateMenu = [
  {
    value: 'today',
    viewValue: 'Today'
  }, {
    value: 'yesterday',
    viewValue: 'Yesterday'
  }, {
    value: 'month ago',
    viewValue: 'Month ago'
  }
];

interface IConvGroupItem {
  value: string;
  name: string;
  count: number
}

@Component({
  selector: 'qs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent {
  public user = { name: 'Michael' };
  public lastConversations = lastConversations;
  public convGroupMenu: IConvGroupItem[] = convGroupMenu;
  public selectedConvGroupValue = 'closed';

  constructor() { }

  public selectConvDateMenuItem(value: string) {
    console.log('value -> ', value);
  }
}
