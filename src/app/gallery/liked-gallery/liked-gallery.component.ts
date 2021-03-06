import { Component, OnInit } from '@angular/core';
import {ImageGalleryService} from '../../shared/image-gallery.service';
import {ImageServiceTokens} from '../../shared/service-token.enum';

@Component({
  selector: 'app-liked-gallery',
  templateUrl: './liked-gallery.component.html',
  styleUrls: ['./liked-gallery.component.css']
})
export class LikedGalleryComponent implements OnInit {
  public imageServiceTokens = ImageServiceTokens;

  constructor() { }

  ngOnInit() {
  }

}
