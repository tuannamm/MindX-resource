import "./App.css";
import Navigation from "./components/Navigation";
import Slider from "./components/Slider";
import Search from "./components/Search";
import News from "./components/News";

function App() {
  return (
    <div className="page">
      <div className="template">
        {/* HEADER */}
        <Navigation />
        <div className="slider">
          <Slider />
        </div>

        {/* BODY */}
        <div className="body">
          <div className="search">
            <Search />
          </div>

          <div className="content">
            <div className="menu_left">
              <News />
              <News />
              <News />
              <News />
            </div>

            <div className="table-content_right">
              <div className="categories"></div>

              <div className="social-media"></div>

              <div className="tags"></div>
            </div>
          </div>

          <div className="pagination"></div>
        </div>

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
    </div>
  );
}

export default App;
