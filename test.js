const principalSlider = document.getElementById('principal');
const rateSlider = document.getElementById('rate');
const yearsSlider = document.getElementById('years');

principalSlider.oninput = () => document.getElementById('principalValue').innerText = principalSlider.value;
rateSlider.oninput = () => document.getElementById('rateValue').innerText = rateSlider.value;
yearsSlider.oninput = () => document.getElementById('yearsValue').innerText = yearsSlider.value;

function calculateCredit() {
    const principal = parseFloat(principalSlider.value);
    const rate = parseFloat(rateSlider.value) / 100 / 12;
    const years = parseInt(yearsSlider.value);
    const payments = years * 12;

    const x = Math.pow(1 + rate, payments);
    const monthly = (principal * x * rate) / (x - 1);

    document.getElementById('result').innerText = `💸 Paiement mensuel: €${monthly.toFixed(2)}`;
}
