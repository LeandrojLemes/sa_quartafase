
const meutexto = "leandro_teste_base64";
const meubase64 = btoa(meutexto);

console.log("Base64:", meubase64);
console.log("Decodificado:", atob(meubase64));
