import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsService } from '../albums.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];
  newAlbum: any = { title: '', userId: 1 };
  isSubmitting: boolean = false;

  constructor(
    private albumsService: AlbumsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe(data => {
      this.albums = data;
    });
  }

  deleteAlbum(event: Event, albumId: number): void {
    event.stopPropagation();

    const userConfirmed = confirm(`Are you sure you want to delete this album with ID: ${albumId}?`);

    if (userConfirmed) {
      this.albumsService.deleteAlbum(albumId).subscribe(() => {    
        this.albums = this.albums.filter(album => album.id !== albumId);
      });
    } else {
      console.log('Album deletion cancelled');
      alert('Album deletion cancelled');
    }
  }

  goToDetailPage(albumId: number): void {
    this.router.navigate(['/albums', albumId]);  
  }

  goBack(): void {
    this.router.navigate(['']);  
  }

  onSubmit(): void {
    if (this.isSubmitting) {
      return; 
    }
    this.isSubmitting = true;

    const albumData = {
      title: this.newAlbum.title,
      userId: this.newAlbum.userId
    };

    this.albumsService.createAlbum(albumData).subscribe(newAlbum => {
      this.albums.unshift(newAlbum);
      this.newAlbum = { title: '', userId: 1 };  
      this.isSubmitting = false;
      setTimeout(() => {
        alert('The new album was created successfully!');
      });
    });
  }
}
