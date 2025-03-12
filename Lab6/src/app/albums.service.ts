import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
//Using the external JSONPlaceholder API to render albums
export class AlbumsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';
  private albumsCache: any[] = [];

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<any[]> {
    if (this.albumsCache.length > 0) {
      return of(this.albumsCache);  
    } else {
      return this.http.get<any[]>(this.apiUrl).pipe(
        map(albums => {
          this.albumsCache = albums;  
          return albums;
        })
      );
    }
  }

  updateAlbum(album: any): Observable<any> {
    const index = this.albumsCache.findIndex(a => a.id === album.id);
    if (index !== -1) {
      this.albumsCache[index] = album;  
      return of(album);  
    }
    return of(null);  
  }

  deleteAlbum(albumId: number): Observable<void> {
    const index = this.albumsCache.findIndex(a => a.id === albumId);
    if (index !== -1) {
      this.albumsCache.splice(index, 1);  
      return of(undefined);  
    }
    return of(undefined);  
  }

  // getPhotosByAlbumId(albumId: number): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/photos?albumId=${albumId}`);
  // }

  getPhotosByAlbumId(albumId: number): Observable<any[]> {
    return this.http.get<any[]>('photos.json')  
      .pipe(
        map(data => data.filter(photo => photo.albumId === albumId))  
      );
  }

  createAlbum(newAlbum: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, newAlbum).pipe(
      map(album => {
        return {
          ...album,
          id: this.albumsCache.length + 1
        };
      })
    );
  }
}


//Using local JSON to render albums, just in case external API isn't working
/*
export class AlbumsService {
  private apiUrl = 'albums.json';
  private albums: any[] = [];

  constructor(private http: HttpClient) { }

  loadAlbums(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(data => {
        this.albums = data;  
        return this.albums;
      })
    );
  }

  getAlbums(): Observable<any[]> {
    if (this.albums.length > 0) {
      return of(this.albums);  
    }
    return this.loadAlbums();  
  }

  updateAlbum(album: any): Observable<any> {
    const index = this.albums.findIndex(a => a.id === album.id);
    if (index !== -1) {
      this.albums[index] = album;  
      return of(album);  
    }
    return of(null);  
  }

  deleteAlbum(albumId: number): Observable<void> {
    const index = this.albums.findIndex(a => a.id === albumId);
    if (index !== -1) {
      this.albums.splice(index, 1);  
      return of(undefined);  
    }
    return of(undefined);  
  }

  getPhotosByAlbumId(albumId: number): Observable<any[]> {
    return this.http.get<any[]>('photos.json')  
      .pipe(
        map(data => data.filter(photo => photo.albumId === albumId))  
      );
  }

  createAlbum(newAlbum: any): Observable<any> {
    const createdAlbum = {
      ...newAlbum,
      id: this.albums.length + 1  
    };
    return of(createdAlbum); 
  }
}
*/