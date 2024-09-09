document.addEventListener('DOMContentLoaded', function () {
    const redRange = document.getElementById('redRange');
    const greenRange = document.getElementById('greenRange');
    const blueRange = document.getElementById('blueRange');

    const redInput = document.getElementById('redInput');
    const greenInput = document.getElementById('greenInput');
    const blueInput = document.getElementById('blueInput');

    const colorPicker = document.getElementById('colorPicker');
    const colorBox = document.getElementById('colorBox');

    function updateColor() {
        const r = parseInt(redRange.value);
        const g = parseInt(greenRange.value);
        const b = parseInt(blueRange.value);

        const rgb = `rgb(${r}, ${g}, ${b})`;
        const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;

        colorBox.style.backgroundColor = rgb;
        colorBox.textContent = hex;

        // Sincronizar los inputs numéricos con los rangos
        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;

        // Sincronizar el color picker
        colorPicker.value = hex;
    }

    function updateFromInput() {
        const r = parseInt(redInput.value);
        const g = parseInt(greenInput.value);
        const b = parseInt(blueInput.value);

        // Sincronizar los rangos con los inputs numéricos
        redRange.value = r;
        greenRange.value = g;
        blueRange.value = b;

        updateColor();
    }

    function updateFromColorPicker() {
        const hex = colorPicker.value;

        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);

        // Actualizar los rangos y los inputs numéricos
        redRange.value = r;
        greenRange.value = g;
        blueRange.value = b;

        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;

        updateColor();
    }

    redRange.addEventListener('input', updateColor);
    greenRange.addEventListener('input', updateColor);
    blueRange.addEventListener('input', updateColor);

    redInput.addEventListener('input', updateFromInput);
    greenInput.addEventListener('input', updateFromInput);
    blueInput.addEventListener('input', updateFromInput);

    colorPicker.addEventListener('input', updateFromColorPicker);

    updateColor();  // Inicializar el color al cargar la página
});