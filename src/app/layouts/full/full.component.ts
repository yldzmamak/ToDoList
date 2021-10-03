import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss'],
})
export class FullComponent implements OnInit {
  constructor(public router: Router, private translate: TranslateService) {}

  ngOnInit() {}

  changeLanguage(languageCode: string) {
    localStorage.setItem('language', languageCode);
    this.translate.use(languageCode);
  }
}
