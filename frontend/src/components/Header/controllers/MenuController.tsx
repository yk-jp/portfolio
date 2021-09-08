import { useEffect } from 'react';
import M from 'materialize-css';

const MenuController = () => {

  const DOMContentLoadedDispatch = () => {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  }

  useEffect(() => {

    DOMContentLoadedDispatch();

  }, []);
}

export default MenuController;