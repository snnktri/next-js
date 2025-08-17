import React from "react";
import Sidebar from "../../component/network/Sidebar";


interface LayoutProps {
  children: React.ReactNode;
}

const NetworkLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
   <div className="flex flex-col lg:flex-row bg-white gap-4">
  {/* Sidebar: Hidden on small screens, visible on large screens */}
  <aside className="hidden lg:block sticky top-24 z-50 w-[280px] xl:w-[350px] h-fit space-y-4">
    <Sidebar />
  </aside>

  {/* Main content: Full width on small screens */}
  <main className="flex-1 space-y-4">
    {children}
  </main>
</div>
  );
};

export default NetworkLayout;
