export interface IComments {
  text: string;
  like: string | "nil" | "like" | "dislike";
  id: string;
}

export interface ICardDetails {
  name?: string;
  role?: string;
  title?: string;
  comment?: string;
  save?: boolean;
  flag?: boolean;
  img?: string[];
  open: boolean;
  id: string;
  like: string | "nil" | "like" | "dislike";
  comments: IComments[];
}
