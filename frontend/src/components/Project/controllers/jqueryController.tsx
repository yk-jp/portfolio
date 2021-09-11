import { useEffect } from 'react';
import M from 'materialize-css';

const jqueryController = () => {

  const modalDispatch = () => {
    const elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);
  }

  useEffect(() => {
    modalDispatch();
  }, []);
}

export default jqueryController;