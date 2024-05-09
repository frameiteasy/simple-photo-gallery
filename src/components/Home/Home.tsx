import { useEffect, useState } from "react";
import { GalleryViewer } from "../GalleryViewer/GalleryViewer";
import { useDataLoader } from '../../data/useDataLoader';

export const Home = () => {
    console.log('Home');

    const [fetchedData, setFetchedData] = useState<Photo[]>([]);
    const { fetchPhotos } = useDataLoader();
    const [loading, setLoading] = useState<boolean>(true);

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

    return (
        <div id="home_gallery_viewer">
            <GalleryViewer photos={fetchedData} index={0} />
        </div>
    )
}