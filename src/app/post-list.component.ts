import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService, Post } from './post.service';

@Component({
    selector: 'app-post-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
    posts: Post[] = [];
    showNewPostForm = false; // Variable to control form visibility

    constructor(private postService: PostService) {}

    ngOnInit() {
        this.loadPosts();
    }

    loadPosts() {
        this.postService.getPosts().subscribe(posts => this.posts = posts);
    }

    addPost(title: string, content: string) {
        const newPost: Post = { id: 0, title, content };
        this.postService.createPost(newPost).subscribe(() => {
            this.loadPosts();
            this.showNewPostForm = false; // Hide the form after adding the post
        });
    }

    cancelNewPost() {
        this.showNewPostForm = false; // Hide the form without adding a post
    }

    deletePost(id: number) {
        this.postService.deletePost(id).subscribe(() => this.loadPosts());
    }

    editPost(id: number) {
        const postToEdit = this.posts.find(post => post.id === id);
        if (postToEdit) {
            const updatedTitle = prompt('Edit Title:', postToEdit.title);
            const updatedContent = prompt('Edit Content:', postToEdit.content);
            if (updatedTitle !== null && updatedContent !== null) {
                postToEdit.title = updatedTitle;
                postToEdit.content = updatedContent;
                this.postService.updatePost(postToEdit).subscribe(() => this.loadPosts());
            }
        }
    }
}
