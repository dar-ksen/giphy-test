import React, { useEffect } from "react";
import './message-item.scss';
import classNames from "classnames";

type Props = {
  id: string | number;
  status: 'error' | 'success' | 'warning';
  message: string;
  onMessageDelete: (id: string | number) => void
}


const MessageItem:React.FC<Props> = ({id, status, message, onMessageDelete}) => {

  useEffect(() => {
    const handler = setTimeout(() => {
      onMessageDelete(id);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [id, onMessageDelete]);

  const classes:string = classNames("toast message-item fade show", status);

  const onCLick = () => onMessageDelete(id);
  
  return (
    <div className={classes} role="alert" aria-live="assertive" aria-atomic="true">
      <div className="message-item__header toast-header">
        <strong className="me-auto">{status}</strong>
        <button onClick={onCLick} type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Закрыть"></button>
      </div>
      <div className="toast-body">
        {message}
      </div>
    </div>
  )
}

export default MessageItem;