import React, {ReactNode, Dispatch, SetStateAction, useState} from "react";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import './ViewerArrowsWrapper.css'; 

export interface WrapperProps  { 
    onArrowClick: (newId: number) => void;
    children: ReactNode
 }

export const ViewerArrowsWrapper = (props: WrapperProps) => {
    const { children, onArrowClick } = props;

    return (
        <div id="viewer_arrows_wrapper">
            <HiArrowCircleLeft id="gallery_viewer_left" onClick={() => {onArrowClick(-1)}}/>
            <div id="viewer_arrows_wrapper_content">
                {children}
            </div>
            <HiArrowCircleRight id="gallery_viewer_right" onClick={() => onArrowClick(1)}/>
        </div>
    )
}