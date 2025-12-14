function Modal({ title, description, close }) {
  return (
    <div className="modal" onClick={close}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close" onClick={close}>×</button>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Modal;
