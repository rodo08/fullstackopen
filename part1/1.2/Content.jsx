import Part from "./Part";

const Content = ({
  partName1,
  partName2,
  partName3,
  numberOfExcercises1,
  numberOfExcercises2,
  numberOfExcercises3,
}) => {
  return (
    <>
      <Part partName={partName1} numberOfExcercises={numberOfExcercises1} />
      <Part partName={partName2} numberOfExcercises={numberOfExcercises2} />
      <Part partName={partName3} numberOfExcercises={numberOfExcercises3} />
    </>
  );
};

export default Content;
