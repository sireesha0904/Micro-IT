import { FaMoneyBillWave, FaExchangeAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header style={styles.header}>
      <FaMoneyBillWave size={28} color="#fff" />
      <h1 style={styles.title}>Currency Converter</h1>
      <FaExchangeAlt size={24} color="#fff" />
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#0077b6",
    color: "white",
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    borderRadius: "0 0 12px 12px",
  },
  title: {
    margin: 0,
    fontSize: "1.8rem",
    fontWeight: "bold",
  },
};

export default Header;
