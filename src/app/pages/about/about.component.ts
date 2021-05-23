import { Component, OnInit } from '@angular/core';
import { AboutServiceService } from '../../services/about-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public aboutServ: AboutServiceService) {
    this.aboutServ.getAboutInfo();
  }

  ngOnInit(): void {
  }

}
