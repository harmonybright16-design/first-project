const data = {
    fun: [
        "Пограй 15 хвилин в игру",
        "Послухай музыку",
        "Погуляй",
        "Подивись TikTok — тільки п'ять хвилин!",
        "Спробуй медитацию"
    ],
    watch: [
        "Подивись серіал Надприродне",
        "Подивись серіал Бруклін 99",
        "Подивись серіал Друзі",
        "Подивись серіал Теорія великого вибуху"
    ],
    challenge: [
        "Віджимання 20 разів",
        "Пробіжи 5 км",
        "Скажи комусь щось приємне",
        "Прочитай 10 сторінок книги"
    ],
    funny: [
        "Усміхнися рандомному предмету",
        "Постав таймер на 7 секунд і нічого не роби",
        "Похвали своє відображення в дзеркалі,
        "Похвали холодильник"
    ]
};

const category = document.getElementById("category");
const result = document.getElementById("result");
const button = document.getElementById("generate");

button.addEventListener("click", () => {
    const cat = category.value;
    const list = data[cat];
    const random = list[Math.floor(Math.random() * list.length)];

    result.textContent = random;
    result.classList.remove("hidden");

    // fade-in эффект
    setTimeout(() => {
        result.classList.add("show");
    }, 10);
});
