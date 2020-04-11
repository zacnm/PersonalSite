import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/models';

@Injectable()
export class BlogService {
    constructor(private httpClient: HttpClient) {}

    getPosts(): Post[] {
        var post1 = new Post();
        post1.title = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
        post1.date = new Date(2020, 1, 12);
        post1.body = 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        post1.imageUrl = 'https://i.imgur.com/E93rIy4.jpeg';

        var post2 = new Post();
        post2.title = 'Enim nulla aliquet porttitor lacus luctus accumsan tortor'
        post2.date = new Date(2020, 3, 7);
        post2.body = 'Sagittis eu volutpat odio facilisis mauris sit amet massa. Et leo duis ut diam quam nulla porttitor. Ac feugiat sed lectus vestibulum. Diam quis enim lobortis scelerisque fermentum dui faucibus. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.'
        post2.imageUrl = 'https://i.imgur.com/nKxhAqo.jpg';

        return [ post1, post2 ];
    }
}