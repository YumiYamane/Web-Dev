import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsService } from '../albums.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent implements OnInit {
  albumId: number | null = null;
  photos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.albumId = +this.route.snapshot.paramMap.get('id')!;  

    if (this.albumId !== null) {
      this.albumsService.getPhotosByAlbumId(this.albumId).subscribe((photos) => {
        this.photos = photos;
      });
    }
  }

  goBack(): void {
    this.location.back(); 
  }  
}
