function Slider(slider) {
    if (!(slider instanceof Element)) {
        throw new Error('No slider passed in');
    }

    // select the elements needed for the slider.
    this.slides = slider.querySelector('.slides');
    this.slider = slider;
    const prevButton = slider.querySelector('.goToPrev');
    const nextButton = slider.querySelector('.goToNext');


    // When slider is created - run start slider function
    this.startSlider();
    this.applyClasses();

    // Event listeners
    prevButton.addEventListener('click', () => this.move('back'));
    nextButton.addEventListener('click', () => this.move());
}
Slider.prototype.startSlider = function () {
    this.current = this.slider.querySelector('.current') || this.slides.firstElementChild;
    this.prev = this.current.previousElementSiblin || this.slides.lastElementChild;
    this.next = this.current.nextElementSibling;
}
Slider.prototype.applyClasses = function () {
    this.current.classList.add('current');
    this.prev.classList.add('prev');
    this.next.classList.add('next');
}
Slider.prototype.move = function (direction) {
    // first strip all classes off the current slides
    const classesToRemove = ['prev', 'current', 'next'];
    this.prev.classList.remove(...classesToRemove);
    this.current.classList.remove(...classesToRemove);
    this.next.classList.remove(...classesToRemove);
    if (direction === 'back') {
        // Make an array of new values and destructure them over into prev, current and next variables
        [this.prev, this.current, this.next] = [
            // get prev slide, if there is none get the slide from the entire slide for wrapping
            this.prev.previousElementSibling || this.slides.lastElementChild,
            this.prev,
            this.current,
        ];
    } else {
        [this.prev, this.current, this.next] = [
            this.current,
            this.next,
            // get the next slide, or if it's at the end, loop around and grab the first slide
            this.next.nextElementSibling || this.slides.firstElementChild,
        ];
    }
    this.applyClasses();
}
const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));

console.log(mySlider, dogSlider);

window.dogSlider = dogSlider

window.addEventListener('keyup', function(e){
    if(e.key === 'ArrowRight')
    dogSlider.move()
})

window.addEventListener('keyup', function(e){
    if(e.key === 'ArrowLeft')
    dogSlider.move('back')
})
