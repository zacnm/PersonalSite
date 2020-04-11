import { PostCategory } from 'src/app/enums';

export class Post {
    title: string;
    date: Date;
    imageUrl: string;
    body: string;
    category: PostCategory
}