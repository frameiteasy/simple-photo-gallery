export {};

declare global {
  type Photo = {
    title: string;
    date: string;
    description: string;
    file: string;
    url_mini?: string;
    url_big?: string;
  };

  type Album = {
    id: number,
    title: string;
    date: string;
    description: string;
    cover?: string;
    photos: string;
  };
}
