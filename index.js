document.addEventListener('DOMContentLoaded', () => {
    
    const calculateCaloriesButton = document.getElementById('calculateCalories');
    calculateCaloriesButton.addEventListener('click', () => {
        const weight = parseFloat(document.getElementById('weight').value);
        const duration = parseInt(document.getElementById('duration').value);
        const style = document.getElementById('style').value;

        if (!weight || !duration || !style) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        const MET_VALUES = {
            crol: 8.3,
            espalda: 6.0,
            pecho: 10.3,
            mariposa: 13.8
        };

        const met = MET_VALUES[style];
        const caloriesBurned = ((met * 3.5 * weight) / 200) * duration;

        const resultElement = document.getElementById('caloriesResult');
        resultElement.innerText = `Has quemado aproximadamente ${caloriesBurned.toFixed(2)} calorías nadando estilo ${style}.`;
    });
});
