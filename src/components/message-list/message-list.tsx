import React from "react";
import MessageItem from "../message-item";
import './message-list.scss';

type Props = {
  messages: IMessage[];
  onMessageDelete: (id: string | number) => void
}

const MessageList:React.FC<Props> = ({messages, onMessageDelete}) => {

  const renderedMessages = () => messages.map((message) => {
    return <MessageItem onMessageDelete={onMessageDelete} key={message.id} {...message}/>
  })


  return (
    <div className="toast-container message-list">
      {renderedMessages()}      
    </div>
  )
}

export default MessageList;