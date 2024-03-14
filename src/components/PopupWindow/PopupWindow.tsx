import React, {ReactNode, Dispatch, SetStateAction} from "react";
import './PopupWindow.css'; 

export interface PopupProps  { 
    children: ReactNode
    isVisible: boolean
    setVisibility: Dispatch<SetStateAction<boolean>>
 }

export const PopupWindow = (props: PopupProps) => {
    console.log('popup window');
    const {isVisible, children, setVisibility} = props;
    return ( isVisible ? 
        (
            <div id="popup">
                <span onClick={() => setVisibility(false)}>&times;</span>
                <div id="popup_content">
                    {children}
                </div>
        </div>
        ) : (<div></div>)
    )
}