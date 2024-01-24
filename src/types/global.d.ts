export {};

declare global {
  type Photo = {
    title: string;
    date: string;
    description: string;
    url_mini: string;
    url_big: string;
  };

  type Album = {
    title: string;
    date: string;
    description: string;
    photos?: Photo[];
  };
}
