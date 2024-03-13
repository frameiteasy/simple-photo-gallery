import React, {ReactNode, Dispatch, SetStateAction} from "react";
import './PopupWindow.css'; 

export interface PopupProps  { 
    children: ReactNode
    isVisible: boolean
 }

export const PopupWindow = (props: PopupProps) => {
    console.log('popup window');
    const {isVisible, children} = props;
    return ( isVisible ? 
        (
            <div id="popup">
                <div id="popup_content">
                    {children}
                </div>
            <button>Close</button>
        </div>
        ) : (<div></div>)
    )
}