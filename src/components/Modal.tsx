import classes from './Modal.module.css'

function Modal({children}) {
  return (
    <>
      <div className="" />

      <dialog open className={classes.backdrop}>
        {children}
      </dialog>
    </>
  )
}

export default Modal;