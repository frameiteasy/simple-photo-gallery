import { useEffect, useState } from 'react';
import { useAppContext } from '../../AppContext';
import { PhotoTile } from '../PhotoTile/PhotoTile';
import { PopupWindow } from '../PopupWindow/PopupWindow';
import './Gallery.css';
import { GalleryViewer } from '../GalleryViewer/GalleryViewer';
import { useParams } from 'react-router';
import { useDataLoader } from '../../data/useDataLoader';
import { ViewerArrowsWrapper } from '../ViewerArrowsWrapper/ViewerArrowsWrapper';

/*
  List of photos from the specific album
  Click on photo open view slider
  Close slider and you are back here
*/

export const Gallery = () => {
  const { context } = useAppContext();
  // const { openSliderView } = useGallery();
  // const { getPhotos} = useGallery();
  const _albumid: string | undefined = context.getAlbumId();

  const photos: Photo[] | undefined = context.getPhotos(_albumid);
  const [visibility, setVisibility] = useState(false);
  const [currentPhotoId, setCurentPhotoId] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [fetchedData, setFetchedData] = useState<Photo[]>([]);
  const { fetchPhotos } = useDataLoader();

  const { fphotos } = useParams();
  console.log('photos', fphotos);

  const changeCurrentPhotoId = (newId: number): void => {
    setCurentPhotoId(newId);
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchPhotos('photos02');
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

  const photoTiles = fetchedData?.map((item, index) => {
    return (
      <PhotoTile 
        id={index}
        key={index}
        title={item.title}
        description={item.description}
        file={item.file}
        openSliderView={setVisibility}
        // setCurrentPhotoId={setCurentPhotoId}
        setCurrentPhotoId={changeCurrentPhotoId}
      />
    )
  });

/*
      <PopupWindow isVisible={visibility} setVisibility={setVisibility}>
        <GalleryViewer photos={fetchedData} index={currentPhotoId}/>
      </PopupWindow>
*/

  return (
    <div id="gallery">
      {photoTiles}

      <PopupWindow isVisible={visibility} setVisibility={setVisibility}>
          <GalleryViewer photos={fetchedData} index={currentPhotoId}/>
      </PopupWindow>
    </div>
  );
};
