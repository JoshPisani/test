import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user: any;

  constructor(private api: ApiService) {
    this.user = { displayName: '' };
  }

  ngOnInit() {
    this.api.getUser$().subscribe(res => this.setUser(res));
  }

  setUser(resp) {
    this.user = resp;
    if (this.user.currentGameId) {
      //loadGame()
    }
  }
  
  newGame() {
    this.api.newGame$().subscribe(res => this.newGameResp(res));
  }

  newGameResp(resp) {
    debugger;
  }
}
