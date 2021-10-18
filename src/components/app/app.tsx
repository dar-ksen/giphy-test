import React, {useEffect, useState, useCallback} from 'react';
import Header from '../header';
import GiphyService from '../../service/giphy-service';
import './app.scss';
import Container from '../container';
import PictureSwitch from '../picture-switch';
import MessageList from '../message-list';
import { getRandomTag } from '../../utils';

const guphyService = new GiphyService();


const  App:React.FC = () => {

  const [pictures, setPictures] = useState<IItem[]>([]);  
  const [search, setSearch] = useState<string>('');
  const [isGroup, setIsGroup] = useState<boolean>(false);
  const [isLoaiding, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<IMessage[]>([]);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const idRegExp = /[^a-z, ]/gi;
    setSearch(event.target.value.replace(idRegExp, ''));
  }

  const onClearHandler = () => {
    setPictures([]);
    setSearch('');
    createMessage('succses', `Очищено`);
  }

  const onGroupHandler = () => {
    setIsGroup(!isGroup);
  }

  const onPictureHandler = (tag: string) => {
    setSearch(tag);
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

  const sendRequest = useCallback((request:string) => {
      setLoading(true);
      const tagArray: string[] =  request.split(',').map(el => el.trim());
      const requests = tagArray.map((str) => guphyService.getRandomePicture(str));
      let pictureItem:IItem = {
        tag: request,
        id: '',
        pictures: []
      };

      Promise.all(requests).then((result) => {
        result.forEach((tag, index) => {
          if (tag.data.length === 0) {
            createMessage('error', `По тэгу ${tagArray[index]} ничего не найдено`);
          } else {
            const picture:IPicture  = {
              id: tag.data.id,
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
          setPictures((prev) => [...prev, pictureItem]);
        }
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        createMessage('error', `Произошла http ошибка статус - ${error.status}`);
      })
    }, []
  )

  const onSearchHandler = () => {
    if (search === '') {
      createMessage('warning', `Заполните поле 'тег'`);
      return;
    }
    sendRequest(search)
  }

  useEffect(() => {
    if (search === 'delay') {
      const interval = setInterval(() => {
        const search = getRandomTag();
        sendRequest(search);
      }, 5000);
      return () => clearInterval(interval);
    }

  }, [search, sendRequest])


  return (
    <>
      <Header>
        <div className="input-group">
          <input
            onChange={onSearchChange}
            name="tag"
            value={search}
            type="text"
            className="form-control"
            placeholder="Введите тег"
          />
          <button className="btn btn-success" disabled={isLoaiding} onClick={onSearchHandler}>
            {isLoaiding ? 'Загрузка...' : 'Загрузить'}
          </button>
          <button className="btn btn-danger" disabled={pictures.length === 0} onClick={onClearHandler}>Очистить</button>
          <button className="btn btn-primary" onClick={onGroupHandler}>
            {isGroup ? 'Разгрупировать' : 'Группировать'}
          </button>
        </div>
      </Header>
      <Container className="py-5">
        <PictureSwitch pictures={pictures} isGroup={isGroup} onPictureHandler={onPictureHandler}/>
      </Container>
      <MessageList messages={messages} onMessageDelete={onMessageDelete}/>
    </>
  );
}

export default App;
