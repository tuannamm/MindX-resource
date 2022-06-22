import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="template">
      {/* HEADER */}
      <Navigation />
      <div className="slider"></div>
      {/* BODY */}
      <div className="search"></div>

      <div className="content">
        <div className="table-content_left"></div>

        <div className="table-content_right">
          <div className="categories"></div>

          <div className="social-media"></div>

          <div className="tags"></div>
        </div>
      </div>

      <div className="pagination"></div>

      {/* FOOTER */}
      <div className="footer">
        <div></div>

        <div className="image_footer"></div>

        <div></div>

        <div className="nav_footer"></div>

        <div className="icon_footer"></div>

        <div></div>
      </div>
    </div>
  );
}

export default App;
