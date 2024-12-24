import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    import { Observable } from 'rxjs';

    export interface Post {
        id: number;
        title: string;
        content: string;
    }

    @Injectable({
        providedIn: 'root'
    })
    export class PostService {
        private apiUrl = 'http://localhost:3000/posts';

        constructor(private http: HttpClient) {}

        getPosts(): Observable<Post[]> {
            return this.http.get<Post[]>(this.apiUrl);
        }

        createPost(post: Post): Observable<Post> {
            return this.http.post<Post>(this.apiUrl, post);
        }

        updatePost(post: Post): Observable<Post> {
            return this.http.put<Post>(`${this.apiUrl}/${post.id}`, post);
        }

        deletePost(id: number): Observable<void> {
            return this.http.delete<void>(`${this.apiUrl}/${id}`);
        }
    }
