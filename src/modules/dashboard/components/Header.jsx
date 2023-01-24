import React from 'react';

const Header = ({category, title }) => (
  <div className=" mb-6 p-4">
    <p className="text-lg text-gray-400 font-display">{category}</p>
    <p className="text-3xl font-display font-extrabold tracking-tight text-slate-900 dark:text-slate-400">
      {title}
    </p>
  </div>
);

export default Header;