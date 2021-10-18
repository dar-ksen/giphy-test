import React from "react";
import PictureItem from "../picture-item";

type Props = {
  pictures: IItem[];
  isGroup: boolean;
  tags: string[];
  onPictureHandler: (tag: string) => void;
}

const PictureList:React.FC<Props>  = ({pictures, isGroup, tags, onPictureHandler}) => {

  const renderedPictures = (currentPictures:IItem[]) => {
    return currentPictures.map((picture:IItem) => {
      const {id, ...pictureProps} = picture;
      return <PictureItem key={picture.id} onPictureHandler = {onPictureHandler} {...pictureProps}/>
    })
  }

  const renderGroupPictures = () => {
    return tags.map((tag:string) => {
      const tagPictures: IItem[]  = pictures.filter((picture) => picture.tag === tag );
      
      return (
        <div className="row col-12 mb-3">
          <div className="col-12 mb-3">
            {tag}
          </div>
          {renderedPictures(tagPictures)}                    
        </div>
      )
    })
  }

  if (isGroup) {
    return (
      <div className="row">
        {renderGroupPictures()}
      </div>
    )
  }


  return(
    <div className="row">{renderedPictures(pictures)}</div>
  )
}

export default PictureList;