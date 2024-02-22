window.addEventListener('DOMContentLoaded', () => {
    const circle1 = document.getElementById('circle1');
    const circle3 = document.getElementById('circle3');
    const circle6 = document.getElementById('circle6');
    const slider = document.getElementById('slider');
    const line1 = document.getElementById('line-1');
    const line2 = document.getElementById('line-2');
    const line3 = document.getElementById('line-3');

    slider.addEventListener('input', () => {
        const value = parseInt(slider.value);
        const dividedValue = Math.floor(value / 4);
        updateCircleColor(circle1, value);
        updateCircleColor(circle3, value);
        updateCircleColor(circle6, value);
        updateCircleSize(circle6, value);
        updatePercentage(circle5, dividedValue);
        updateLineVisibility(line1, line2, line3, value);
    });

    function updateCircleColor(circle, value) {
        if (value === 0) {
            circle.style.backgroundColor = 'black';
        } else if (value > 0 && value <= 200) {
            circle.style.backgroundColor = 'seagreen';
        } else if (value >= 201 && value <= 320) {
            circle.style.backgroundColor = 'orange';
        } else if (value >= 321 && value <= 400) {
            circle.style.backgroundColor = 'indianred';
        }
    }

    function updateCircleSize(circle, value) {
        circle.style.width = value + 'px';
        circle.style.height = value + 'px';
    }

    function updatePercentage(circle, value) {
        const p = circle.querySelector('p');
        p.textContent = value + '%';
    }

    function updateLineVisibility(line1, line2, line3, value) {
        if (value === 0) {
            line1.style.display = 'none';
            line2.style.display = 'none';
            line3.style.display = 'none';
        } else if (value > 0 && value <= 200) {
            line1.style.display = 'block';
            line2.style.display = 'none';
            line3.style.display = 'none';
        } else if (value >= 201 && value <= 320) {
            line1.style.display = 'block';
            line2.style.display = 'none';
            line3.style.display = 'block';
        } else if (value >= 321 && value <= 400) {
            line1.style.display = 'block';
            line2.style.display = 'block';
            line3.style.display = 'block';
        }
    }

    const initialValue = parseInt(slider.value);
    const initialDividedValue = Math.floor(initialValue / 4);
    updateCircleColor(circle1, initialValue);
    updateCircleColor(circle3, initialValue);
    updateCircleColor(circle6, initialValue);
    updateCircleSize(circle6, initialValue);
    updatePercentage(circle5, initialDividedValue);
    updateLineVisibility(line1, line2, line3, initialValue);
});

function toggleVolume() {
    var volumeSection = document.querySelector('.volume');
    volumeSection.classList.toggle('hide');
}
