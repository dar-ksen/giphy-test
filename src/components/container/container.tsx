import React from "react";
import classNames from "classnames";

type Props = {
  className?: string;
}

const Container:React.FC<Props> = ({children, className}) => {

  const classes:string = classNames("container", className);

  return (
    <div className={classes}> 
      {children}
    </div>
  )
}

export default Container;