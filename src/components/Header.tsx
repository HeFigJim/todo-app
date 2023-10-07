type TitleProps = { title: string };

const Header = ({ title }: TitleProps) => {
  return (
    <header className="text-center">
      <h1 className="text-3xl text-white">{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Default Title",
};

export default Header;
