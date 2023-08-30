import Header from "../components/Header";

const Default = ({ children }) => {
  return(
    <>
      <Header />
        {children}
      <footer></footer>
    </>
  );
}

export default Default;