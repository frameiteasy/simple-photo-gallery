export {};

declare global {
  type Album = {
    title: string;
    date: string;
    description: string;
  };

  type Photo = {
    title: string;
    date: string;
    description: string;
    url_mini: string;
    url_big: string;
  };
}
