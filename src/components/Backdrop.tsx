import { MouseEventHandler } from "react";

function Backdrop(props: {onClick: MouseEventHandler}) {
  return (
    <div className='backdrop' onClick={props.onClick}></div>
  );
}

export default Backdrop;