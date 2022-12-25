import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'de', 'cz']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  useLanguage(language: string): void {
    console.log(language);
    this.translate.use(language);
  }

}
