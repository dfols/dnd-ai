import "@styles/globals.css";

export const metadata = {
  title: "DND Character Creator",
  description: "Create DND characters with the help of AI",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};
export default RootLayout;
