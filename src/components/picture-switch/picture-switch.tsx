import React, { Fragment } from "react";
import PictureList from "../picture-list"

type Props = {
  pictures: IItem[];
  isGroup: boolean;
  onPictureHandler: (tag: string) => void;
}

const PictureSwitch:React.FC<Props>  = ({pictures, isGroup, onPictureHandler}) => {
  
  const renderGroup = () => {    
    const tags = Array.from(new Set(pictures.map((picture) => picture.tag)));

    return (
      tags.map((tag:string) => {
        const tagPictures: IItem[]  = pictures.filter((picture) => picture.tag === tag );
        
        return (
          <Fragment key={tag}>
            <h2>{tag}</h2>
            <PictureList pictures={tagPictures} onPictureHandler={onPictureHandler} />                
          </Fragment>
        )
      })
    )
    
  }

  if (pictures.length === 0) {
    return (
      <>
        <h2>Здесь будут выводиться результаты поиска.</h2>
        <p>Чтобы их получить, введите тег для поиска и нажмите кнопку загрузить.</p>
      </>
    )
  }
 
  if (isGroup) {
    return (
      <>
        {renderGroup()}
      </>
    );
  }


  return <PictureList pictures={pictures} onPictureHandler={onPictureHandler} />
}

export default PictureSwitch;