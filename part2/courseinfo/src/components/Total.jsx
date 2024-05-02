const Total = ({ parts }) => {
  const exercisesSum = parts.reduce((total, part) => total + part.exercises, 0);
  return (
    <p>
      <b>total of {exercisesSum} exercises</b>
    </p>
  );
};

export default Total;
