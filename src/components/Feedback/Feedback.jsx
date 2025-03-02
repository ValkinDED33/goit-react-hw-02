import css from "./Feedback.module.css";

const Feedback = ({ feedback, total, positive }) => (
  <div className={css.feedback}>
    <p>Good: {feedback.good}</p>
    <p>Neutral: {feedback.neutral}</p>
    <p>Bad: {feedback.bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positive}%</p>
  </div>
);

export default Feedback;
