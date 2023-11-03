import Right from "../Components/Right";
const Left = () => {
  return (
    <div class="left">
      <h1 class="left-header">Your Result</h1>
      <div class="result">
        <h1>76</h1>
        <p>of 100</p>
      </div>
      <div class="content">
        <h1>Great</h1>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>

      <Right />
    </div>
  );
};

export default Left;
