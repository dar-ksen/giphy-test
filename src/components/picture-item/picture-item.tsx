import React from "react";
import './picture-item.scss';

type Props = {
  pictures: IPicture[];
  onPictureHandler: (tag: string) => void;
}

const PictureItem:React.FC<Props> = ({pictures, onPictureHandler}) => {
  const renderedPictures = () => {
    return pictures.map(({tag, url, alt, width, height}) => {
      return (
        <img onClick={()=> onPictureHandler(tag)} src={url} alt={alt} width={width} height={height}/>
      )
    })
  }
  return(
    <div className="col-sm-3 mb-3">
      <div className="picture-item">
        {renderedPictures()}
      </div>
    </div>
  )
}

export default PictureItem;