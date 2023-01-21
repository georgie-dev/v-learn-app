import React from 'react';

const Header = ({title }) => (
  <div className=" mb-10">
    <p className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-400">
      {title}
    </p>
  </div>
);

export default Header;