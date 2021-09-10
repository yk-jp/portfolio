import { useEffect } from 'react';
import M from 'materialize-css';

const jqueryController = () => {

  const sideBarDispatch = () => {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  }

  useEffect(() => {
    sideBarDispatch();
  }, []);
}

export default jqueryController;