const Navigation = (props) => {
  const navButton = ["Home", "Recipes", "Article", "Contact", "Purchase"];
  const nav = navButton.map((button) => {
    return <li>{button}</li>;
  });
  return (
    <div class="navigation">
      <h1>FASHION</h1>
      <div>{nav}</div>
    </div>
  );
};

export default Navigation;
