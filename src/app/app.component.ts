import {  Component, OnInit, Input, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { ItunesService } from './iTunesService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
  trigger('searchAnimation', [
    transition('void => *', [
      style({opacity: 0, transform: 'translateY(100%)'}),
      animate('1.4s ease-in')
    ]),

  ]),

  trigger('sideAnimation', [
    transition('void => *', [
      style({opacity: 0, transform: 'translateX(-100%)'}),
    animate('1.4s ease-in')
    ]),

  ]),
  trigger('midAnimation', [
    transition('void => *', [
      style({opacity: 0, transform: 'translateX(-100%)'}),
      animate('1.4s ease-in')
    ]),

  ]),

  trigger('logoAnimation', [
    transition('void => *', [
      style({opacity: 0, transform: 'translateY(-100%)'}),
      animate('1.4s ease-in')
      ]),
    transition('* => void', [
      animate('1.4s ease-out', style({transform: 'translateY(100%)'}))
    ])
  ])

    ]
})
export class AppComponent {
  logoItunes = true;
  title = 'app';
  artists;
  artistName:string = '';
  newArray = [];

  constructor(private http: Http,
              private itunesService: ItunesService,){ }

  onNameKeyUp(event:any) {
    this.artistName = event.target.value;
  }

  getItunes(){
    this.itunesService.getUser(this.artistName).subscribe(data => {
      if (data.success === false) {
        if (data.errcode) {
          console.log(data.errcode)
        }
      } else {
        this.newArray = [];
        this.artists = data.results;
        let m = this.artists;
        for (var _i = 0; _i < m.length; _i++) {
          if (_i == 0){
            this.newArray.push({
              results:  m[_i],
              display: true
                });
          } else {
              this.newArray.push({
                results:  m[_i],
                display: false
                  });console.log(this.newArray)
                }
       }
      }
    });
  };

  displayAlbum(artist, newArray){
    for(var i=0; i<newArray.length; i++){
      if (newArray[i].display == true){
        newArray[i].display = false;
      }
    }

    if(artist.display == false){
    artist.display = true;
  }
    console.log(artist)
    console.log(newArray)
  }

  logoOff(){
    if (this.logoItunes == true){
      this.logoItunes = false;
    }
  }
}
