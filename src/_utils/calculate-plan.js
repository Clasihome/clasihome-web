const CalculatePlan = (UF, properties, users) => {
  let tasaProperties = 0.2;
  let resultProperties = 0;
  let tasaUsuarios = 0.8;
  let resultUsuarios = 0;

  for (let i = 1; i <= properties; i++) {
    if (i > 300) {
      tasaProperties = tasaProperties + 1 / 330;
      resultProperties = UF * tasaProperties;
    } else if (i > 80) {
      tasaProperties = tasaProperties + 1 / 215;
      resultProperties = UF * tasaProperties;
    } else if (i > 20) {
      tasaProperties = tasaProperties + 1 / 60;
      resultProperties = UF * tasaProperties;
    } else {
      resultProperties = UF * tasaProperties;
    }
  }

  for (let i = 1; i <= users; i++) {
    if (i === 1) {
      tasaUsuarios = 0.8;
      resultUsuarios = UF * tasaUsuarios;
    } else if (i === 2) {
      tasaUsuarios = tasaUsuarios + 0.41;
      resultUsuarios = UF * tasaUsuarios;
    } else if (i < 31) {
      tasaUsuarios = tasaUsuarios + 1 / 13.6;
      resultProperties = UF * tasaProperties;
    } else {
      tasaUsuarios = tasaUsuarios + 1 / 22;
      resultUsuarios = UF * tasaUsuarios;
    }
  }

  return (resultUsuarios + resultProperties) / UF;
};

export default CalculatePlan;
