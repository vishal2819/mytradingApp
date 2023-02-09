import React from "react";
const Card = (prop) => {
  const date = new Date().toLocaleDateString();
  const { bank, buy, target, stoploss } = prop;
  return (
    <div
      class="card col-xl-4 col-lg-4 col-md-6 col-sm-12 shadow p-3 mb-5 bg-body-tertiary rounded "
      style={{ width: "22rem", margin: "10px" }}
    >
      <div className="top object-fit-cover">
        <div className="flex space-around">
          <div className="logo flex">
            <div>
              <lord-icon
                src="https://cdn.lordicon.com/oegrrprk.json"
                trigger="hover"
                style={{ width: "40px", height: "40px" }}
              ></lord-icon>
            </div>
            <div>
              <span style={{ color: "#00000" }}>BullShit</span>
              <span style={{ color: "#F9F54B" }}>India</span>
            </div>
          </div>
          <div style={{ color: "#fff", fontWeight: "800" }}>{date}</div>
        </div>

        <div style={{textAlign:"center",fontSize:"30px",color:"#ffff"}}>{bank}</div>
        <p style={{ color: "#fff", fontWeight: "400", textAlign: "center" }}>
          Buy
        </p>
      </div>
      <div class="card-body">
        <table >
        <tbody>
          <tr style={{background:"#fffff"}}>
            <td style={{padding:"1rem",fontWeight:"600"}}>Buy At</td>
            <td style={{padding:"1rem",fontWeight:"600"}}>{buy}</td>
          </tr>
          <tr>
            <td style={{padding:"1rem",fontWeight:"600"}}>Today's Target</td>
            <td style={{padding:"1rem",fontWeight:"600"}}>{target}</td>
          </tr>
          <tr>
            <td style={{padding:"1rem",fontWeight:"600"}}>Stop Loss</td>
            <td style={{padding:"1rem",fontWeight:"600"}}>{stoploss}</td>
          </tr>
        </tbody>
        </table>
      </div>
    </div>
  );
};

export default Card;
