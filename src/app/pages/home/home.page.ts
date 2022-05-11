import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  data: any;


datastart: any = [];
startPoint = 20;
  constructor(public httpService: HttpService) { }

  ngOnInit() {
    this.httpService.get('https://api.giphy.com/v1/gifs/trending?key=qLZ3Y4GFQqJPd2OLuVHhxRMzbhhxSKEs').then(resp =>{
      this.data = resp.data;
      this.datastart = this.data.slice(0, 20);
    });
  }

  loadData(event){
    this.startPoint = this.startPoint + 10;
    this.datastart = this.datastart.concat(this.data.slice(this.startPoint - 10, this.startPoint));
    event.target.complete();
  }

}
