import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

const lastConversations = require('../../../mock-api/last-conversations.json');

@Component({
  selector: 'qs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent {
  public user = { name: 'Michael' };
  public lastConversations = lastConversations;

  constructor() { }
}
