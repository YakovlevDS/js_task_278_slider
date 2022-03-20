const prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'),
    slides = document.querySelectorAll('.slide'),
    dots = document.querySelectorAll('.dot');

let ind = 0; // текущий активный слайд
const l = slides.length - 1;
// Удаляем у всех слайдов active и добавляем его n-му слайду
const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
};
// Удаляем у всех dots active и добавляем его n-му dot

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
};

//Обертка(декоратор) Передаем в две функции index и вызываем их

const prepareCurrentSlide = (i) => {
    activeSlide(i);
    activeDot(i);
};
// управление кнопкой след слайд при нажатии добавляем индекс слайда и при равном поседнему обнудяем
const nextSlide = () => {
    ind = ind === l ? 0 : ind + 1;
    prepareCurrentSlide(ind);

};
// управление кнопкой прред слайд при нажатии убавляем индекс слайда и при равном поседнему обнудяем

const prevSlide = () => {
    ind = !ind ? l : ind - 1;
    prepareCurrentSlide(ind);
};

// управление слайдером при клике на опред dots
dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        ind = indexDot;
        prepareCurrentSlide(ind);
    });
});
// прослушиваем клики на кнопки вперед и назад
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
// автопрокрутка слайдера
setInterval(nextSlide, 8000);