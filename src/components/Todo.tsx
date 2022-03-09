import { useState } from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props: { uid: number, title: string, onDelete: Function}) {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function onDeleteInit() {
    setModalIsOpen(true);
  }

  function onCancelDelete() {
    setModalIsOpen(false);
  }

  function onDeleteConfirm() {
    props.onDelete(props.uid);
    setModalIsOpen(false);
  }

  return ( 
    <div className='card'>
      <h2>{props.title} {props.uid}</h2>
      <div className='actions'>
        <button className='btn' onClick={onDeleteInit}>Delete</button>
      </div>
      { modalIsOpen ? <Modal onCancel={onCancelDelete} onConfirm={onDeleteConfirm} todoTitle={props.title}></Modal> : null }
      { modalIsOpen ? <Backdrop onClick={onCancelDelete}></Backdrop> : null }
    </div>
  );
}

export default Todo;