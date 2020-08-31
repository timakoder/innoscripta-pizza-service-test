import React, { useCallback, useState } from 'react';
import {
  useModal,
  useModalActions,
  MessageProps,
  LoginProps,
  AddToCartProps,
  ModalState
} from '../models/modal';

const LoginContent: React.FC<LoginProps> = (props) =>
<p>LOGIN</p>

const MessageContent: React.FC<MessageProps> = ({
  title,
  message,
  isError
}) => <div>
  <h1>{title}</h1>
  {
    message && <p>{message}</p>
  }
</div>

const AddToCart: React.FC<AddToCartProps> = ({
  item
}) => {
  const [submitting, setSubmitting] = useState(false);

  const { close } = useModalActions();

  const onYesClick = useCallback(async () => {
    if (submitting) {
      return;
    }
    setSubmitting(true);
    console.log(`Added to cart: ${item.name}`);
    close();
  }, []);


  return <div>
    <h1>Add to cart {item.name} ?</h1>
    <button onClick={onYesClick}>YES</button>
    <button onClick={close}>NO</button>
  </div>
};

const getContentBaseOnState = (state: ModalState): React.ReactNode => {
  if (state.login) {
    return <LoginContent {...state.login}/>
  }

  if (state.addToCart) {
    return <AddToCart {...state.addToCart}/>
  }

  if (state.message) {
    return <MessageContent {...state.message}/>
  }
  
  return null;
}

const Modal: React.FC = () => {
  const modalState = useModal();
  const { close } = useModalActions();

  const content = getContentBaseOnState(modalState);

  if (!content) {
    return null;
  }

  return <div>
    <button onClick={close}>X</button>
    {content}
  </div>
}

export default Modal;