import BulletGraph from "./BulletGraph";

const Bullet = () => {
  const widthOfBullet = 1300;
  const impactData = [
    {
      title: "8711200770410_Knorr Stock Pot 8s Chicken 4x224g",
      scaleMin: 0,
      scaleMax: 100,
      forecastImpacts: {
        originalForecast: {
          impactValue: -187454,
          baseValue: 264597.91,
        },
        newForecast: {
          impactValue: 0,
          baseValue: 264610,
        },
      },
    },
    {
      title: "8711200770496_Knorr Stock Pot 4s Rich Beef 8x112g TT",
      scaleMin: 0,
      scaleMax: 100,
      forecastImpacts: {
        originalForecast: {
          impactValue: 185624,
          baseValue: 96937.06999999999,
        },
        newForecast: {
          impactValue: 0,
          baseValue: 96930,
        },
      },
    },
    {
      title: "8717644321157_SURE FM AP RO ORIGINAL DRY 50ml UKI",
      scaleMin: 0,
      scaleMax: 100,
      forecastImpacts: {
        originalForecast: {
          impactValue: -185066,
          baseValue: 196650.80000000002,
        },
        newForecast: {
          impactValue: 0,
          baseValue: 196601,
        },
      },
    },
    {
      title: "8720181218446_Dove Bar Cream 6 x 90g",
      scaleMin: 0,
      scaleMax: 100,
      forecastImpacts: {
        originalForecast: {
          impactValue: 188610,
          baseValue: 42087.94,
        },
        newForecast: {
          impactValue: 0,
          baseValue: 42112,
        },
      },
    },
    {
      title: "8720181335228_SFW AP200ML BRGHT BQET B 5S IE+UK SC",
      scaleMin: 0,
      scaleMax: 100,
      forecastImpacts: {
        originalForecast: {
          impactValue: -186729,
          baseValue: 226239.21,
        },
        newForecast: {
          impactValue: 0,
          baseValue: 226161,
        },
      },
    },
    
   
    

  ];

  const ofData = impactData?.map((d: any) => {
    return {
      name: d.title,
      value:
        d.forecastImpacts.originalForecast.impactValue +
        d.forecastImpacts.originalForecast.baseValue,
    };
  });

  const ofDataMin = Math.min.apply(
    null,
    ofData.map(function (item: any) {
      return item.value;
    })
  );

  const ofDataMax = Math.max.apply(
    null,
    ofData.map(function (item: any) {
      return item.value;
    })
  );

  const nfData = impactData?.map((d: any) => {
    return {
      name: d.title,
      value:
        d.forecastImpacts.newForecast.impactValue +
        d.forecastImpacts.newForecast.baseValue,
    };
  });

  const nfDataMin = Math.min.apply(
    null,
    nfData.map(function (item: any) {
      return item.value;
    })
  );

  const nfDataMax = Math.max.apply(
    null,
    nfData.map(function (item: any) {
      return item.value;
    })
  );

  let scaleMin = Math.min(ofDataMin, nfDataMin);
  scaleMin = scaleMin > 0 ? 0 : scaleMin;
  let scaleMax = Math.max(Math.abs(ofDataMax), Math.abs(nfDataMax));
  scaleMax = scaleMax + scaleMax / 10;

  const addedConstantWidth = 200;
  console.log(impactData);

  return (
    <div style={{ marginTop: "5px", overflowX: "scroll" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start",
        }}>
        <div className="dot"><span className="dotorg"></span> Original Forecast</div>
        <div className="dot"><span className="dotnew"></span> New Forecast</div>
        <div className="dot"><span className="dotcan"></span> Cannibalisation</div>
        <div className="dot"><span className="dothal"></span> Halo</div>
      </div>
      <div style={{ marginTop: "20px" }}>
        {impactData?.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                marginTop: "10px",
                display: "flex",
                alignItems: "center",
              }}>
              <div style={{ minWidth: 188 }}>
                <p
                  style={{
                    color: "#000",
                    paddingRight: 8,
                  }}>
                  {item.title}
                </p>
              </div>

              <div>
                {item.forecastImpacts.newForecast && (
                  <BulletGraph
                    scaleMin={scaleMin}
                    scaleMax={scaleMax}
                    impact={item.forecastImpacts.newForecast.impactValue}
                    base={item.forecastImpacts.newForecast.baseValue}
                    baseColor={"#7d7d7d"}
                    width={widthOfBullet - addedConstantWidth}
                  />
                )}

                {item.forecastImpacts.originalForecast && (
                  <BulletGraph
                    scaleMin={scaleMin}
                    scaleMax={scaleMax}
                    impact={item.forecastImpacts.originalForecast.impactValue}
                    base={item.forecastImpacts.originalForecast.baseValue}
                    width={widthOfBullet - addedConstantWidth}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bullet;
