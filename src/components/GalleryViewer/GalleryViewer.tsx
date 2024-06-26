import { useState } from 'react';
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import './GalleryViewer.css';
import { useDataLoader } from '../../data/useDataLoader';

type GalleryViewerProps = {
    photos: Array<Photo>;
    index: number;
  };

export const GalleryViewer = (props: GalleryViewerProps) => {
    const { photos, index } = props;
    const { getBigPhoto } = useDataLoader();
    const [ curIndex, setCurIndex ] = useState(index);

    const photosNumber = photos.length;

    console.log('photos number', curIndex, photos, photosNumber);

    const slideStyle = {
        width: "100%",
        height: "100%",
        background: `url(${getBigPhoto(photos[curIndex].file)}) no-repeat center center / cover` ,
        borderRadius: "10px",
        backgroudPosition: "center",
        backgroundSize: "cover"
    }

    return ( 
        <div id="gallery_viewer">

            <div className="gallery_viewer_arrow">
                <div>
                    <HiArrowCircleLeft id="gallery_viewer_left" onClick={() => {setCurIndex(Math.abs(curIndex-1) % photosNumber)}}/>
                </div>  
            </div>
            
            <div style={slideStyle} />

            <div className="gallery_viewer_arrow">
                <div>
                    <HiArrowCircleRight id="gallery_viewer_right" onClick={() => setCurIndex((curIndex+1) % photosNumber)}/>
                </div>
            </div> 
        </div>

        // <div id="gallery_viewer">
        //     <div id="gallery_viewer_content" style={slideStyle} />
        // </div>
    )
}