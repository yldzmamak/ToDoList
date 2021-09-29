import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  data: any = {};
  key: any = {};

  constructor(private http: HttpClient) {}

  use(lang: string): Promise<{}> {
    return new Promise<{}>((resolve) => {
      const langPath = `../../../assets/i18n/${lang}.json`;

      this.http.get<any>(langPath).subscribe(
        (translation) => {
          Object.keys(translation).forEach((key) => {
            translation[key] = translation[key];
          });
          this.data = Object.assign({}, translation || {});
          resolve(this.data);
        },
        (_error) => {
          this.data = {};
          resolve(this.data);
        },
      );
    });
  }

  getLanguage() {
    let language = localStorage.getItem('language');
    return language ? language : 'en';
  }
}
