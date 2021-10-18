import React from "react";
import PictureItem from "../picture-item";

type Props = {
  pictures: IItem[];
  onPictureHandler: (tag: string) => void;
}

const PictureList:React.FC<Props>  = ({pictures, onPictureHandler}) => {
  
  const renderedPictures = (currentPictures:IItem[]) => {
    return currentPictures.map((picture:IItem) => {
      const {id, ...pictureProps} = picture;
      return <PictureItem key={picture.id} onPictureHandler = {onPictureHandler} {...pictureProps}/>
    })
  }

  return(
    <div className="row mb-3">
      {renderedPictures(pictures)}
    </div>
  )
}

export default PictureList;