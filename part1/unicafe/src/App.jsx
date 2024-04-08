import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Statistics = (props) => {
  if (props.good + props.neutral + props.bad == 0) {
    return <p>No Feedback given</p>;
  } else {
    return (
      <div>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine
          text="all"
          value={props.good + props.neutral + props.bad}
        />
        <StatisticLine
          text="average"
          value={
            (props.good + props.bad * -1) /
            (props.good + props.bad + props.neutral)
          }
        />
        <StatisticLine
          text="positive"
          value={
            (props.good / (props.good + props.bad + props.neutral)) * 100 + " %"
          }
        />
      </div>
    );
  }
};

const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  );
};

const StatisticLine = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td style={{ width: "60px" }}>{props.text}</td>
          <td>{props.value}</td>
        </tr>
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <h1>statistics</h1>
      <div>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
      <Hello name="Daniel" />
    </div>
  );
};

export default App;
