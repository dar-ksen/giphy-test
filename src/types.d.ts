interface IPicture {
  tag: string;
  id: string;
  url: string;
  width: string | number;
  height: string | number;
  alt: string;
}

interface IItem {
  tag: string;
  id: string;
  pictures: IPicture[];
}

interface IMessage {
  id: string | number;
  status: 'error' | 'success' | 'warning';
  message: string;
}
