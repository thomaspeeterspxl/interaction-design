window.addEventListener('DOMContentLoaded', () => {
    const circle1 = document.getElementById('circle1');
    const circle3 = document.getElementById('circle3');
    const circle6 = document.getElementById('circle6');
    const slider = document.getElementById('slider');

    slider.addEventListener('input', () => {
        const value = parseInt(slider.value);
        const dividedValue = Math.floor(value / 4);
        updateCircleColor(circle1, value);
        updateCircleColor(circle3, value);
        updateCircleColor(circle6, value);
        updateCircleSize(circle6, value);
        updatePercentage(circle5, dividedValue);
    });



    function updateCircleColor(circle, value) {
        if (value === 0 ){
            circle.style.backgroundColor = 'black';
        }
        else if (value > 0 && value <= 200) {
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
    const initialValue = parseInt(slider.value);
    const initialDividedValue = Math.floor(initialValue / 4);
    updateCircleColor(circle1, initialValue);
    updateCircleColor(circle3, initialValue);
    updateCircleColor(circle6, initialValue);
    updateCircleSize(circle6, initialValue);
    updatePercentage(circle5, initialDividedValue);
});

function toggleVolume() {
    var volumeSection = document.querySelector('.volume');
    volumeSection.classList.toggle('hide');
}
