
import { useEffect, useState } from 'react';
import { AlbumTile } from '../AlbumTile/AlbumTile';
import './Albums.css';
import { useDataLoader } from '../../data/useDataLoader';

/* TODO
    create an app context:
      - array of albums
      - arry of photos
    read a list of albums from the server and save in the context
*/

type AlbumsProps = {
  albums: Album[];
};

export const Albums = (props: AlbumsProps) => {
  const { albums } = props;

  const [fetchedData, setFetchedData] = useState<Album[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { fetchAlbums } = useDataLoader();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchAlbums();
        setFetchedData(data);
      } catch(error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }

  console.log('fetched albums', fetchedData);

  const albumTiles = (fetchedData).map((item, index) => {
    return (
      <AlbumTile 
        id={item.id}
        key={item.id}
        title={item.title}
        description={item.description}
        cover={item.cover}/>
    )
  })

  return (
    <div id="albums_collection">
      {albumTiles}
    </div>
  );
};

