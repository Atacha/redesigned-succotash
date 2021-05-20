import styles from '../assets/styles/components/Test.module.scss';

interface IProps {
  text: String;
}

const Test: React.FC<IProps> = ({ text }) => {
  return <div className={styles.test}>{text}</div>;
};

export default Test;
