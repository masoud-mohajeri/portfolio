import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {
  size: Subscription;
  slideOpts: any = {
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 2,
      },
      790: {
        slidesPerView: 1,
      },
    },
    loop: true,
    freeMode: false,
    pager: false,
    scrollbar: false,
    pagination: false,
  };

  constructor() {}
  ngOnInit() {}
}
