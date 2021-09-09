import { useEffect } from 'react';
import M from 'materialize-css';

const ToolTipsController = () => {

  const DOMContentLoadedDispatch = () => {
    const elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems);
  }

  useEffect(() => {

    DOMContentLoadedDispatch();

  }, []);
}

export default ToolTipsController;