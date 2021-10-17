import React from "react";
import './picture-item.scss';

type Props = {
  tag: string;
  url: string;
  width: string | number;
  height: string | number;
  alt: string;
  onPictureHandler: (tag: string) => void;
}

const PictureItem:React.FC<Props> = ({tag, url, width, height, alt, onPictureHandler}) => {
  const onClick = () => onPictureHandler(tag);
  return(
    <div className="col-sm-3 mb-3">
      <div className="picture-item">
        <img onClick={onClick} src={url} alt={alt} width={width} height={height}/>
      </div>
    </div>
  )
}

export default PictureItem;