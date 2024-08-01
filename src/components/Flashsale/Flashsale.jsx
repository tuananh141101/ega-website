import "./Flashsale.scss";

const Flashsale = () => {
  return (
    <>
      <div className="flashSale d-flex align-items-center justify-content-center flex-column">
        <p>Kết thúc sau</p>
        <div className="countdownTime">
          <div className="countdownTime_wrapper d-flex align-items-center">
            <div className="hours">07</div>:<div className="minutes">52</div>:
            <div className="seconds">38</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flashsale;
