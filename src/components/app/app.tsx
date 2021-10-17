import React, {useState} from 'react';
import Header from '../header';
import GiphyService from '../../service/giphy-service';
import './app.scss';
import Container from '../container';
import PictureList from '../picture-list';

const guphyService = new GiphyService();


const  App:React.FC = () => {

  const [pictures, setPictures] = useState<IPicture[]>([]);  
  const [tags, setTags] = useState<string[]>([]);  
  const [tag, setTag] = useState<string>('');
  const [isGroup, setIsGroup] = useState<boolean>(false);
  const [isLoaiding, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');


  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const idRegExp = /[^a-z, ]/gi;
    setTag(event.target.value.replace(idRegExp, ''));
  }

  const onClearHandler = () => {
    setTags([]);
    setPictures([]);
    setTag('');
  }

  const onGroupHandler = () => {
    setIsGroup(!isGroup);
  }

  const onPictureHandler = (tag: string) => {
    setTag(tag);
  }

  const onSearchHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setLoading(true);
    guphyService
      .getRandomePicture(tag)
      .then((responce) => {
        if (responce.data.length === 0) {
          setMessage('По данному запросу ничего не найдено');
          setLoading(false);
        } else {
          const picture:IPicture  = {
            tag: tag,
            id: responce.data.id,
            url: responce.data.image_url,
            width: responce.data.image_width,
            height: responce.data.image_height,
            alt: 
              responce.data.caption !== ""
                ? responce.data.caption
                : `giphy pictures on tag ${tag}`,
          };

          setPictures([...pictures, picture]);
          setLoading(false);
          if (!tags.includes(tag)) {
            setTags([...tags, tag]);
          }
        }       
      }
    )

    const test = ['test', 'seller'].map((str) => guphyService.getRandomePicture(str))
    console.log(test);
    

    Promise.all(test).then((result) => {
      console.log(result );
    })
  }


  return (
    <>
      <Header>
        <div className="input-group">
          <input
            onChange={onChange}
            name="tag"
            value={tag}
            type="text"
            className="form-control"
            placeholder="Введите тег"
          />
          <button className="btn btn-success" disabled={isLoaiding} onClick={onSearchHandler}>
            {isLoaiding ? 'Загрузка...' : 'Загрузить'}
          </button>
          <button className="btn btn-danger" onClick={onClearHandler}>Очистить</button>
          <button className="btn btn-primary" onClick={onGroupHandler}>
            {isGroup ? 'Разгрупировать' : 'Группировать'}
          </button>
        </div>
      </Header>
      <Container className="py-5">
        <PictureList pictures={pictures} isGroup={isGroup} tags={tags} onPictureHandler={onPictureHandler}/>
      </Container>
    </>
  );
}

export default App;
