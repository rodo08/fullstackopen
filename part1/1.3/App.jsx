const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <h1>{course}</h1>
      <ul>
        <li>
          <h2>{part1.name}</h2>
          number of exercises: {part1.exercises}
        </li>
        <li>
          <h2>{part2.name}</h2>
          number of exercises: {part2.exercises}
        </li>
        <li>
          <h2>{part3.name}</h2>
          number of exercises: {part3.exercises}
        </li>
      </ul>
    </div>
  );
};

export default App;
