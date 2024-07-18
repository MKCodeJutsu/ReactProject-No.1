import React from 'react';
import "./MainContent.css"

const MainContent = ({pageName, designer, date}) => {
  return (
    <div>
      <main>
      {pageName} 
      <br />
      Deigned By {designer} in {date} 
    </main>
    </div>
  );
}

export default MainContent;
