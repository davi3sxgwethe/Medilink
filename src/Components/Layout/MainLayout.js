// Components/MainLayout.js
import Sidebar from '../Sidebar/Sidebar';

const MainLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar/>
      <div style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
