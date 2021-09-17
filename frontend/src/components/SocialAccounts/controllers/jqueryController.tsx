import { useEffect } from 'react';
import M from 'materialize-css';

const jqueryController = () => {

  const tooltippedDispatch = () => {
    const elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems);
  }

  useEffect(() => {

    tooltippedDispatch();

  }, []);
}

export default jqueryController;