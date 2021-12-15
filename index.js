function scoreIdade(idade, sexo) {
  if (sexo == "Masculino") {
    if (idade >= 30 && idade <= 34) {
      score = -1;
    } else if (idade >= 35 && idade <= 39) {
      score = 0;
    } else if (idade >= 40 && idade <= 44) {
      score = 1;
    } else if (idade >= 45 && idade <= 49) {
      score = 2;
    } else if (idade >= 50 && idade <= 54) {
      score = 3;
    } else if (idade >= 55 && idade <= 59) {
      score = 4;
    } else if (idade >= 60 && idade <= 64) {
      score = 5;
    } else if (idade >= 65 && idade <= 69) {
      score = 6;
    } else if (idade >= 70 && idade <= 74) {
      score = 7;
    }
  } else if (sexo == "Feminino") {
    if (idade >= 30 && idade <= 34) {
      score = -9;
    } else if (idade >= 35 && idade <= 39) {
      score = -4;
    } else if (idade >= 40 && idade <= 44) {
      score = 0;
    } else if (idade >= 45 && idade <= 49) {
      score = 3;
    } else if (idade >= 50 && idade <= 54) {
      score = 6;
    } else if (idade >= 55 && idade <= 59) {
      score = 7;
    } else if (idade >= 60 && idade <= 74) {
      score = 8;
    }
  }
  return score;
}

function scoreDiabetes(temDiabetes, sexo) {
  if (sexo == "Masculino") {
    if (temDiabetes == "Sim") {
      score = 2;
    } else {
      score = 0;
    }
  } else if (sexo == "Feminino") {
    if (temDiabetes == "Sim") {
      score = 4;
    } else {
      score = 0;
    }
  }
  return score;
}

function scoreFumante(ehFumante) {
  if (ehFumante == "Sim") {
    score = 2;
  } else {
    score = 0;
  }
  return score;
}

function scoreColesterol(colesterol, sexo) {
  if (sexo == "Masculino") {
    if (colesterol == 160) {
      score = -3;
    } else if (colesterol == 199) {
      score = 0;
    } else if (colesterol == 239) {
      score = 1;
    } else if (colesterol == 279) {
      score = 2;
    } else if (colesterol == 280) {
      score = 3;
    }
  } else {
    if (colesterol == 160) {
      score = -2;
    } else if (colesterol == 199) {
      score = 0;
    } else if (colesterol == 239) {
      score = 1;
    } else if (colesterol == 279) {
      score = 1;
    } else if (colesterol == 280) {
      score = 3;
    }
  }
  return score;
}

function scoreHdl(hdl, sexo) {
  if (sexo == "Masculino") {
    if (hdl == 35) {
      score = 2;
    } else if (hdl == 44) {
      score = 1;
    } else if (hdl == 49) {
      score = 0;
    } else if (hdl == 59) {
      score = 0;
    } else if (hdl == 60) {
      score = -1;
    }
  } else {
    if (hdl == 35) {
      score = 5;
    } else if (hdl == 44) {
      score = 2;
    } else if (hdl == 49) {
      score = 1;
    } else if (hdl == 59) {
      score = 0;
    } else if (hdl == 60) {
      score = -3;
    }
  }
  return score;
}

function scorePas(pas, sexo) {
  if (sexo == "Masculino") {
    if (pas == 120) {
      score = 0;
    } else if (pas == 129) {
      score = 0;
    } else if (pas == 139) {
      score = 1;
    } else if (pas == 159) {
      score = 2;
    } else if (pas == 160) {
      score = 3;
    }
  } else {
    if (pas == 120) {
      score = -3;
    } else if (pas == 129) {
      score = 0;
    } else if (pas == 139) {
      score = 0;
    } else if (pas == 159) {
      score = 2;
    } else if (pas == 160) {
      score = 3;
    }
  }
  return score;
}

function scorePad(pad, sexo) {
  if (sexo == "Masculino") {
    if (pad == 80) {
      score = 0;
    } else if (pad == 84) {
      score = 0;
    } else if (pad == 89) {
      score = 1;
    } else if (pad == 99) {
      score = 2;
    } else if (pad == 100) {
      score = 3;
    }
  } else {
    if (pas == 120) {
      score = -3;
    } else if (pas == 129) {
      score = 0;
    } else if (pas == 139) {
      score = 0;
    } else if (pas == 159) {
      score = 2;
    } else if (pas == 160) {
      score = 3;
    }
  }
  return score;
}

function calculaScore(
  sexo,
  idade,
  temDiabetes,
  ehFumante,
  colesterol,
  hdl,
  pas,
  pad
) {
  score = 0;
  score += scoreIdade(idade, sexo);
  score += scoreDiabetes(temDiabetes, sexo);
  score += scoreFumante(ehFumante, sexo);
  score += scoreColesterol(colesterol, sexo);
  score += scoreHdl(hdl, sexo);
  score += scorePas(pas, sexo);
  score += scorePad(pad, sexo);
  return score;
}

function calculaRisco(score, sexo) {
  porcentagem = 0;
  mensagem = "erro";
  if (sexo == "Masculino") {
    if (score < -1) {
      porcentagem = 2;
    } else if (score == 0 || score == 1) {
      porcentagem = 3;
    } else if (score == 2) {
      porcentagem = 4;
    } else if (score == 3) {
      porcentagem = 5;
    } else if (score == 4) {
      porcentagem = 7;
    } else if (score == 5) {
      porcentagem = 8;
    } else if (score == 6) {
      porcentagem = 10;
    } else if (score == 7) {
      porcentagem = 13;
    } else if (score == 8) {
      porcentagem = 16;
    } else if (score == 9) {
      porcentagem = 20;
    } else if (score == 10) {
      porcentagem = 25;
    } else if (score == 11) {
      porcentagem = 31;
    } else if (score == 12) {
      porcentagem = 37;
    } else if (score == 13) {
      porcentagem = 45;
    } else if (score >= 14) {
      porcentagem = 53;
    }
  } else if (sexo == "Feminino") {
    if (score < -2) {
      porcentagem = 1;
    } else if (score == -1 || score == 0 || score == 1) {
      porcentagem = 2;
    } else if (score == 2 || score == 3) {
      porcentagem = 3;
    } else if (score == 4 || score == 5) {
      porcentagem = 4;
    } else if (score == 6) {
      porcentagem = 5;
    } else if (score == 7) {
      porcentagem = 6;
    } else if (score == 8) {
      porcentagem = 7;
    } else if (score == 9) {
      porcentagem = 8;
    } else if (score == 10) {
      porcentagem = 10;
    } else if (score == 11) {
      porcentagem = 11;
    } else if (score == 12) {
      porcentagem = 13;
    } else if (score == 13) {
      porcentagem = 15;
    } else if (score == 14) {
      porcentagem = 18;
    } else if (score == 15) {
      porcentagem = 20;
    } else if (score == 16) {
      porcentagem = 24;
    } else if (score >= 17) {
      porcentagem = 27;
    }
  }

  if (porcentagem < 10) {
    document.getElementById("textoteste").style.color = "green";
    mensagem = "Voce esta com baixo risco de doenca cardiovascular!";
  } else if (porcentagem >= 10 && porcentagem < 20) {
    document.getElementById("textoteste").style.color = "blue";
    mensagem = "Voce esta com moderado risco de doenca cardiovascular!";
  } else if (porcentagem >= 20 && porcentagem < 30) {
    document.getElementById("textoteste").style.color = "#ffbe00";
    mensagem = "Voce esta com alto risco de doenca cardiovascular!";
  } else if (porcentagem >= 30) {
    document.getElementById("textoteste").style.color = "red";
    mensagem = "Voce esta com muito alto risco de doenca cardiovascular!";
  }

  let risco = [porcentagem, mensagem];
  return risco;
}

function calcular() {
  let sexo = document.getElementById("formularioSexo");
  let idade = document.getElementById("formularioIdade");
  let ehFumante = document.getElementById("formularioFumante");
  let temDiabetes = document.getElementById("formularioDiabete");
  let texto = document.getElementById("textoteste");

  colesterol = document.querySelector(
    'input[name="colesterolTotal"]:checked'
  ).value;
  hdl = document.querySelector('input[name="HDL"]:checked').value;
  pas = document.querySelector('input[name="PAS"]:checked').value;
  pad = document.querySelector('input[name="PAD"]:checked').value;

  let score = calculaScore(
    sexo.value,
    idade.value,
    temDiabetes.value,
    ehFumante.value,
    colesterol,
    hdl,
    pas,
    pad
  );
  let risco = calculaRisco(score, sexo.value);

  texto.innerHTML = "Risco de infarto: " + risco[0] + "%" + "<br>" + risco[1];
}
