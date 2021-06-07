import styles from "./Card.module.css";

const Card = (props) => {
  return <div className={styles.main_container}>{props.children}</div>;
};

export default Card;
