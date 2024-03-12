
import { useGalleryViewer } from './useGalleryViewer';

type GalleryViewerProps = {
    photos: Array<Photo>;
    index: number;
  };

export const GalleryViewer = (props: GalleryViewerProps) => {
    const { openGallery } = useGalleryViewer();
    console.log('GalleryViewer')

    return (
        <div className="gallery_viewer" onClick={() => openGallery(props.photos, props.index)}>
            Gallery Viewer
        </div>
    )
}