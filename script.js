const add = () => {
  a = document.querySelector("#input1").value;
  aI = Number(a);
  b = document.querySelector("#input2").value;
  bI = Number(b);
  c = aI + bI;
  d = document.querySelector("#output").value = c;
  return d;
};

const sub = () => {
  a = document.querySelector("#input1").value;
  aI = Number(a);
  b = document.querySelector("#input2").value;
  bI = Number(b);
  c = aI - bI;
  d = document.querySelector("#output").value = c;
  return d;
};

const mul = () => {
    a = document.querySelector("#input1").value;
    aI = Number(a);
    b = document.querySelector("#input2").value;
    bI = Number(b);
    c = aI * bI;
    d = document.querySelector("#output").value = c;
    return d;
  };

  const div = () => {
    a = document.querySelector("#input1").value;
    aI = Number(a);
    b = document.querySelector("#input2").value;
    bI = Number(b);
    c = aI / bI;
    d = document.querySelector("#output").value = c;
    return d;
  };
  
  
