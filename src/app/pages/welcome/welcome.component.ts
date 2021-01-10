import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../api.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
  user: any;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getUser$().subscribe(res => (this.user = res));
  }
}
