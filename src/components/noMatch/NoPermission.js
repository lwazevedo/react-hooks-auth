import React from 'react';
import { useLocation } from "react-router-dom";

const NoPermission = () => {
  const location = useLocation();
  return (
    <div>
      <h3>
        No permission for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default NoPermission;