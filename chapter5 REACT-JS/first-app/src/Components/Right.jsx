const Right = () => {
  return (
    <div class="right">
      <h1 class="right-header">Summary</h1>
      <div class="summary-list">
        <div class="box">
          <div class="box-left">
            <img src="assets/images/icon-reaction.svg" alt="" />
            <p>Reaction</p>
          </div>
          <div class="box-right">
            <span>80</span>
            <p>/ 100</p>
          </div>
        </div>
        <div class="box">
          <div class="box-left">
            <img src="assets/images/icon-memory.svg" alt="" />
            <p>Memmory</p>
          </div>
          <div class="box-right">
            <span>92</span>
            <p>/ 100</p>
          </div>
        </div>
        <div class="box">
          <div class="box-left">
            <img src="assets/images/icon-verbal.svg" alt="" />
            <p>Verbal</p>
          </div>
          <div class="box-right">
            <span>61</span>
            <p>/ 100</p>
          </div>
        </div>
        <div class="box">
          <div class="box-left">
            <img src="assets/images/icon-visual.svg" alt="" />
            <p>Visual</p>
          </div>
          <div class="box-right">
            <span>72</span>
            <p>/ 100</p>
          </div>
        </div>
      </div>
      <button>Continue</button>
    </div>
  );
};

export default Right;
