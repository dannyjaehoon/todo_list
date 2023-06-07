export const getId = () => {
  let idValue = localStorage.getItem("id");
  if (idValue === null) {
    localStorage.setItem("id", 1);
    idValue = 1;
  } else {
    localStorage.setItem("id", ++idValue);
  }

  return idValue;
};
