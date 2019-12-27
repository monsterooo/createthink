import React from 'react';
import './splitShap.scss';

function SplitShap({ children }) {
  return (
    <div className="position-relative">
      <div className="split-shap overflow-hidden text-white">
        {children}
      </div>
    </div>
  )
}

export default SplitShap;
