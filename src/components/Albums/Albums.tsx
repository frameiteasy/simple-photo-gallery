import { AlbumTile } from '../AlbumTile/AlbumTile';
import './Albums.css';
import { useAlbums } from './useAlbums';

export const Albums = () => {
  const { openGallery } = useAlbums();
  return (
    <div id="albums_collection">
      <AlbumTile
        title="Album 1"
        description="This is album 1"
        openGallery={openGallery}
      />
      <AlbumTile
        title="Album 2"
        description="This is album 2"
        openGallery={openGallery}
      />
      <AlbumTile
        title="Album 3"
        description="This is album 3"
        openGallery={openGallery}
      />
      <AlbumTile
        title="Album 4"
        description="This is album 4"
        openGallery={openGallery}
      />
      <AlbumTile
        title="Album 5"
        description="This is album 5"
        openGallery={openGallery}
      />
      <AlbumTile
        title="Album 6"
        description="This is album 6"
        openGallery={openGallery}
      />
      <AlbumTile
        title="Album 7"
        description="This is album 7 and many more words just to see how album tile looks like"
        openGallery={openGallery}
      />
      <AlbumTile title="Album 8" openGallery={openGallery} />
    </div>
  );
};
