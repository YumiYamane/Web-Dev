import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  album: any;
  tempTitle: string = '';

  constructor(
    private route: ActivatedRoute,  
    private albumsService: AlbumsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const albumId = +this.route.snapshot.paramMap.get('id')!;

    this.albumsService.getAlbums().subscribe((albums) => {
      this.album = albums.find((album) => album.id === albumId);
      this.tempTitle = this.album.title;
    });
  }

  onTitleChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.tempTitle = input.value;  
  }

  saveAlbum(): void {
    if (!this.tempTitle.trim()) {
      alert('Album title cannot be empty!');
      return;  
    }

    this.album.title = this.tempTitle;

    this.albumsService.updateAlbum(this.album).subscribe(
      (updatedAlbum) => {
        console.log('Album updated successfully', updatedAlbum);
        alert('Album updated successfully');
      },
      (error) => {
        console.error('Error updating album', error);
        alert('Error updating album');
      }
    );
  }

  goBack(): void {
    this.location.back(); 
  }  
}
