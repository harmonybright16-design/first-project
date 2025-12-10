const data = {
    eat: [
        "Замовити піцу",
        "Зробити бутерброд",
        "З'їсти яблуко",
        "Приготувати омлет",
        "Замовити шаурму"
    ],
    fun: [
        "Пограти 15 хвилин у гру",
        "Послухати музику",
        "Погуляти",
        "Прокрутити TikTok - тільки 5 хвилин!",
        "Спробувати медитацію"
    ],
    watch: [
        "Подивись серіал Друзі",
        "Увімкнути випадковий ролик на YouTube",
        "Подивись серіал Теорія великого вибуху",
        "Переглянути улюблений фільм",
        "Подивись серіал Бруклін 99"
    ],
    challenge: [
        "Віджитися 20 разів",
        "Пробігти 5 км",
        "Прибрати свою кімнату",
        "Сказати комусь щось приємне",
        "Зробити 20 присідань"
    ],
    funny: [
        "Усміхнися рандомному предмету",
        "Поговори з рандомним предметом",
        "Постав таймер на 7 секунд і нічого не роби",
        "Похвали своє відображення",
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
