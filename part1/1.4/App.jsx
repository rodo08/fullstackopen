const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <h1>{course}</h1>
      <ul>
        {parts.map((index) => (
          <li key={parts[index]}>
            <h2>{index.name}</h2>
            <p>Number of excercises: {index.exercises}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
