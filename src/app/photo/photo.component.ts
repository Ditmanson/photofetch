import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css',
})
export class PhotoComponent implements OnInit {
  url = '';

  constructor(private fetchService: FetchService) {
    this.fetch();
  }
  fetch() {
    this.fetchService.fetch().subscribe((response) => {
      console.log(response.urls.regular);
      this.url = response.urls.regular;
    });
  }
  ngOnInit(): void {}
}
