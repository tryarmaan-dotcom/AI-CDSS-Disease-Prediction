function predictDisease() {
  const checked = document.querySelectorAll('input[type="checkbox"]:checked');
  const symptoms = Array.from(checked).map(item => item.value);

  let disease = "";
  let advice = "";

  if (symptoms.length === 0) {
    document.getElementById("result").innerHTML =
      "Please select at least one symptom.";
    return;
  }

  if (symptoms.includes("fever") && symptoms.includes("cough") && symptoms.includes("fatigue")) {
    disease = "Possible Respiratory Infection / Flu";
    advice = "Rest, drink fluids, monitor temperature, and consult a doctor if symptoms worsen.";
  } else if (symptoms.includes("chest pain") || symptoms.includes("breathlessness")) {
    disease = "Possible Cardiac or Respiratory Risk";
    advice = "This may require urgent medical attention. Please consult a healthcare professional.";
  } else if (symptoms.includes("thirst") && symptoms.includes("urination")) {
    disease = "Possible Diabetes-related Symptoms";
    advice = "Blood sugar testing and medical consultation are recommended.";
  } else if (symptoms.includes("stomach pain") && symptoms.includes("vomiting")) {
    disease = "Possible Gastrointestinal Infection";
    advice = "Stay hydrated and consult a doctor if vomiting continues.";
  } else if (symptoms.includes("headache") && symptoms.includes("fatigue")) {
    disease = "Possible Stress, Migraine, or Viral Weakness";
    advice = "Take rest, stay hydrated, and seek medical help if pain is severe.";
  } else {
    disease = "General Health Issue";
    advice = "Symptoms are not enough for a clear prediction. Please consult a doctor for proper diagnosis.";
  }

  document.getElementById("result").innerHTML =
    `<h3>${disease}</h3><p>${advice}</p><p><small>Disclaimer: This is only an educational CDSS project and not medical advice.</small></p>`;
}
