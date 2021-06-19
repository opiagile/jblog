export interface IPost {
  id?: number;
  title?: string;
  body?: string;
  author?: string;
}

export class Post implements IPost {
  constructor(public id?: number, public title?: string, public body?: string, public author?: string) {}
}

export function getPostIdentifier(post: IPost): number | undefined {
  return post.id;
}
