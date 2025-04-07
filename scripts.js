// Список калькуляторов
const calculators = [
    {
        title: "Центры отверстий",
        description: "Расчет центров и угла между отверстиями",
        icon: "📐",
        link: "calculators/2line2.html"
    },
    {
        title: "Угол по точкам", 
        description: "Расчет угла между двумя точками",
        icon: "📏", 
        link: "calculators/angle.html"
    },
    {
        title: "Угол между отрезками",
        description: "Расчет угла между двумя отрезками",
        icon: "🔍",
        link: "calculators/pointDot.html"
    },
    {
        title: "Окружность по точкам (метод 1)",
        description: "Расчет окружности по трем точкам",
        icon: "⭕",
        link: "calculators/circle.html"
    },
    {
        title: "Окружность по точкам (метод 2)", 
        description: "Альтернативный метод расчета",
        icon: "🔵",
        link: "calculators/Pointcircle.html"
    }
];

// Загрузка карточек калькуляторов
function loadCalculatorCards() {
    const grid = document.querySelector('.calculators-grid');
    
    calculators.forEach(calc => {
        const card = document.createElement('div');
        card.className = 'calculator-card';
        card.innerHTML = `
            <div class="card-icon">${calc.icon}</div>
            <h3>${calc.title}</h3>
            <p>${calc.description}</p>
            <button class="open-btn">Открыть</button>
        `;
        
        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('open-btn')) {
                window.location.href = calc.link;
            }
        });
        
        grid.appendChild(card);
    });
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    loadCalculatorCards();
});
