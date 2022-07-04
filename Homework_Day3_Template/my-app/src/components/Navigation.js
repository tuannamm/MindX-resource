const Navigation = () => {
  //
  const navButton = ["Home", "Recipes", "Article", "Contact", "Purchase"];
  const nav = navButton.map((button) => {
    return <li>{button}</li>;
  });

  // render
  return (
    <div class="navigation">
      <h1>FASHION</h1>
      <div className="nav_header">{nav}</div>
    </div>
  );
};

export default Navigation;
