const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
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
    ],
  };

  return (
    <div>
      <h1>{course.name}</h1>
      <ul>
        {course.parts.map((part) => (
          <li key={part.name}>
            <h2>{part.name}</h2>
            <p>Number of excercises: {part.exercises}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
