import React, { useState } from 'react';
import CreateContextToggle from './index';

const ToggleProvider = (props) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return <CreateContextToggle.Provider value={{ ...props, sidebarToggle, setSidebarToggle }}>{props.children}</CreateContextToggle.Provider>;
};
export default ToggleProvider;
