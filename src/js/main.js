// Mobile Menu Burger
function burgerMenu() {
	const menu = document.querySelector('#mobile-menu')
	const burger = document.querySelector('#burger')
	const body = document.querySelector('body')
	const closeBtn = document.querySelector('#close-menu')
	const overlay = document.querySelector('#overlay')

	burger.addEventListener('click', () => {
		overlay.classList.toggle('active')
		menu.classList.toggle('-left-full')
		menu.classList.toggle('left-0')
		body.classList.toggle('overflow-hidden')
	})

	closeBtn.addEventListener('click', () => {
		overlay.classList.toggle('active')
		menu.classList.toggle('-left-full')
		menu.classList.toggle('left-0')
		body.classList.toggle('overflow-hidden')
	})

	overlay.addEventListener('click', () => {
		overlay.classList.toggle('active')
		menu.classList.toggle('-left-full')
		menu.classList.toggle('left-0')
		body.classList.toggle('overflow-hidden')
	})

	// Вот тут мы ставим брейкпоинт навбара
	window.addEventListener('resize', () => {
		if (window.innerWidth > 991.98) {
			overlay.classList.remove('active')
			menu.classList.add('-left-full')
			menu.classList.remove('left-0')
			burger.classList.remove('active')
			body.classList.remove('overflow-hidden')
		}
	})
}
burgerMenu()

// Accodrion
function accordion() {
	const items = document.querySelectorAll('.accordion-item')
	const triggers = document.querySelectorAll('.accordion-trigger')
	const contents = document.querySelectorAll('.accordion-content')

	triggers.forEach((trigger, idx) => {
		if (items[0].classList.contains('active')) {
			slideDown(contents[0])
		}
		trigger.addEventListener('click', () => {
			const parent = trigger.parentNode

			if (!parent.classList.contains('active')) {
				// If you want only one to be open at a time, and others to close - UNCOMMENT the code below.
				// Если нужно что бы открывался ТОЛЬКО один, а остальные закрывались - РАСКОММЕНТИРУЙ код ниже

				// items.forEach((item, i) => {
				// 	if (i !== idx && item.classList.contains('active')) {
				// 		slideUp(contents[i])
				// 		item.classList.remove('active')
				// 	}
				// })

				// Open the current accordion item
				// Открыть текущий пункт аккордеона
				parent.classList.add('active')
				slideDown(contents[idx])
			} else {
				// Close the current accordion item
				// Закрыть текущий пункт аккордеона
				parent.classList.remove('active')
				slideUp(contents[idx])
			}
		})
	})
}
accordion()

// Animation Mobile Submenu
/* SLIDE UP */
let slideUp = (target, duration = 300) => {
	target.style.transitionProperty = 'height, margin, padding'
	target.style.transitionDuration = duration + 'ms'
	target.style.boxSizing = 'border-box'
	target.style.height = target.offsetHeight + 'px'
	target.offsetHeight
	target.style.overflow = 'hidden'
	target.style.height = 0
	target.style.paddingTop = 0
	target.style.paddingBottom = 0
	target.style.marginTop = 0
	target.style.marginBottom = 0
	target.style.border = 'none'

	window.setTimeout(() => {
		target.style.display = 'none'
		target.style.removeProperty('height')
		target.style.removeProperty('padding-top')
		target.style.removeProperty('padding-bottom')
		target.style.removeProperty('margin-top')
		target.style.removeProperty('margin-bottom')
		target.style.removeProperty('overflow')
		target.style.removeProperty('transition-duration')
		target.style.removeProperty('transition-property')
		target.style.removeProperty('border')
	}, duration)
}
/* SLIDE DOWN */
let slideDown = (target, duration = 300) => {
	target.style.removeProperty('display')
	let display = window.getComputedStyle(target).display
	if (display === 'none') display = 'grid'
	target.style.display = display
	let height = target.offsetHeight
	target.style.overflow = 'hidden'
	target.style.height = 0
	target.style.paddingTop = 0
	target.style.paddingBottom = 0
	target.style.marginTop = 0
	target.style.marginBottom = 0
	target.offsetHeight
	target.style.boxSizing = 'border-box'
	target.style.transitionProperty = 'height, margin, padding'
	target.style.transitionDuration = duration + 'ms'
	target.style.height = height + 'px'
	target.style.border = 'none'

	target.style.removeProperty('padding-top')
	target.style.removeProperty('padding-bottom')
	target.style.removeProperty('margin-top')
	target.style.removeProperty('margin-bottom')
	target.style.removeProperty('border')

	window.setTimeout(() => {
		target.style.removeProperty('height')
		target.style.removeProperty('overflow')
		target.style.removeProperty('transition-duration')
		target.style.removeProperty('transition-property')
		target.style.removeProperty('border')
	}, duration)
}
/* TOOGLE */
const slideToggle = (target, duration = 300) => {
	if (window.getComputedStyle(target).display === 'none') {
		return slideDown(target, duration)
	} else {
		return slideUp(target, duration)
	}
}

// Testimonials slider
const swiperTestimonials = new Swiper('#testimonials-slider', {
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},
	spaceBetween: 50,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
	},
})

// Talents slider
const swiperTalents = new Swiper('#talents-slider', {
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},
	loop: true,
	inverse: true,
	spaceBetween: 20,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 2.5,
		},
		1200: {
			slidesPerView: 2.8,
		},
	},
})

// Hero
const btn = document.getElementById('hero-box-1')
btn.addEventListener('click', () => {
	btn.classList.toggle('active')
})
