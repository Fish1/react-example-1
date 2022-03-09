import { MouseEventHandler } from "react";

function Modal(props: {onCancel: MouseEventHandler, onConfirm: MouseEventHandler, todoTitle: string}) {
  return (
    <div className='modal'>
      <p>Are you sure you want to delete the "{props.todoTitle}" card?</p>
      <button className='btn btn--alt' onClick={props.onCancel}>Cancel</button>
      <button className='btn' onClick={props.onConfirm}>Confirm</button>
    </div>
  );
}

export default Modal;