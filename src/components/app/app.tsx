import React, {useState} from 'react';
import Header from '../header';
import GiphyService from '../../service/giphy-service';
import './app.scss';
import Container from '../container';
import PictureList from '../picture-list';
import MessageList from '../message-list';

const guphyService = new GiphyService();


const  App:React.FC = () => {

  const [pictures, setPictures] = useState<IItem[]>([]);  
  const [tags, setTags] = useState<string[]>([]);  
  const [tag, setTag] = useState<string>('');
  const [isGroup, setIsGroup] = useState<boolean>(false);
  const [isLoaiding, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<IMessage[]>([]);


  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const idRegExp = /[^a-z, ]/gi;
    setTag(event.target.value.replace(idRegExp, ''));
  }

  const onClearHandler = () => {
    setTags([]);
    setPictures([]);
    setTag('');
    createMessage('succses', `Очищено`);
  }

  const onGroupHandler = () => {
    setIsGroup(!isGroup);
  }

  const onPictureHandler = (tag: string) => {
    setTag(tag);
  }

  const onMessageDelete = (id:string|number) => {
    const idx = messages.findIndex((message) => message.id === id);
    setMessages(() => [
        ...messages.slice(0, idx),
        ...messages.slice(idx + 1)
    ]);
  }

  const createMessage = (statys:'error' | 'succses' | 'warning', message:string) => {
    if (message !== '') {
      const id = new Date().getUTCMilliseconds();
      setMessages((prev) => [...prev, {id, statys, message}]);
    }
  }

  const onSearchHandler = () => {
    if (tag === '') {
      createMessage('warning', `Заполните поле 'тег'`);
      return;
    }

    setLoading(true);
    const tagArray: string[] =  tag.split(',').map(el => el.trim());
    const requests = tagArray.map((str) => guphyService.getRandomePicture(str));
    let pictureItem:IItem = {
      tag,
      id: '',
      pictures: []
    };

    Promise.all(requests).then((result) => {
      result.forEach((tag, index) => {
        if (tag.data.length === 0) {
          createMessage('error', `По тэгу ${tagArray[index]} ничего не найдено`);
        } else {
          const picture:IPicture  = {
            id: tag.data.key,
            tag: tagArray[index],
            url: tag.data.image_url,
            width: tag.data.image_width,
            height: tag.data.image_height,
            alt: tag.data.title,
          };
          pictureItem.id += tag.data.id;
          pictureItem.pictures.push(picture);
        }
      })
      
      if (pictureItem.pictures.length !==0) {
        if (!tags.includes(tag)) {
          setTags([...tags, tag])
        }
        setPictures([...pictures, pictureItem]);
      }
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
      createMessage('error', `Произошла ошибка`);
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
          <button className="btn btn-danger" disabled={pictures.length === 0} onClick={onClearHandler}>Очистить</button>
          <button className="btn btn-primary" disabled={pictures.length === 0} onClick={onGroupHandler}>
            {isGroup ? 'Разгрупировать' : 'Группировать'}
          </button>
        </div>
      </Header>
      <Container className="py-5">
        <PictureList pictures={pictures} isGroup={isGroup} tags={tags} onPictureHandler={onPictureHandler}/>
      </Container>
      <MessageList messages={messages} onMessageDelete={onMessageDelete}/>
    </>
  );
}

export default App;
