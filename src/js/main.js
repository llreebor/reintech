// ===================================== [START] Global Site Scripts =====================================
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

// Cookie msg
function toggleCookieMsg() {
	const msg = document.getElementById('cookie')
	const closeBtn = document.getElementById('close-cookie')

	closeBtn.addEventListener('click', () => {
		msg.classList.add('hidden')
	})

	setTimeout(() => {
		msg.classList.toggle('hidden')
	}, 500)
}
toggleCookieMsg()

// ====================================== [END] Global Site Scripts ======================================

// ================================ [START] Home & Developer Page Scripts ================================
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
const slideToggle = (target, duration = 300) => {
	if (window.getComputedStyle(target).display === 'none') {
		return slideDown(target, duration)
	} else {
		return slideUp(target, duration)
	}
}

// Hero Animations
function showMoreDetials(className) {
	const btn = document.getElementById(className)

	const rightSide = document.querySelector('.right-side-blocks')

	const block1 = document.getElementById('hero-box-2')
	const block2 = document.getElementById('hero-box-4')

	if (btn) {
		btn.addEventListener('click', (e) => {
			// Remove "active" class from all elements with class "hero-box"
			document.querySelectorAll('.hero-box').forEach((ele) => {
				if (ele.id !== className) {
					ele.classList.remove('active')
				}
			})

			if (
				(btn === block1 && !block1.classList.contains('active')) ||
				(btn === block2 && !block2.classList.contains('active'))
			) {
				rightSide.classList.add('active')
				console.log('da')
			} else {
				rightSide.classList.remove('active')
			}

			btn.classList.toggle('active')
		})
	}
}

// Inits
if (
	document.getElementById('home-page') ||
	document.getElementById('developer-page')
) {
	// Hero Animations
	showMoreDetials('hero-box-1')
	showMoreDetials('hero-box-2')
	showMoreDetials('hero-box-3')
	showMoreDetials('hero-box-4')
	showMoreDetials('tab-hero-box-1')
	showMoreDetials('tab-hero-box-2')
	showMoreDetials('tab-hero-box-3')
	showMoreDetials('tab-hero-box-4')
	showMoreDetials('mob-hero-box-1')
	showMoreDetials('mob-hero-box-2')
	showMoreDetials('mob-hero-box-3')
	showMoreDetials('mob-hero-box-4')

	// Accordion
	accordion()

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
				slidesPerView: 3.2,
			},
			1800: {
				slidesPerView: 3.6,
				spaceBetween: 70,
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
			1800: {
				slidesPerView: 3.8,
			},
		},
	})

	// Profiles slider
	const profilesTestimonials = new Swiper('#profiles-slider', {
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},
		spaceBetween: 60,
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			600: {
				slidesPerView: 1.4,
			},
			992: {
				slidesPerView: 2.2,
			},
			1800: {
				slidesPerView: 3.1,
			},
		},
	})
}
// ================================= [END] Home & Developer Page Scripts =================================

// ===================================== [START] Price Page Scripts =====================================
// Price Page
function toggleRadioInputs() {
	const inputs = document.querySelectorAll('.radio-input')
	const blocks = document.querySelectorAll('.radio-input-block')
	blocks[0].classList.add('active')
	inputs.forEach((input, i) => {
		input.addEventListener('change', () => {
			blocks.forEach((block) => block.classList.remove('active'))
			if (input.checked) {
				console.log(input.value)
				blocks[i].classList.add('active')
			}
		})
	})
}

// Increase & Decrease Team Size
function toggleTeamSizeNumber() {
	const result = document.getElementById('team-size')
	const increaseBtn = document.getElementById('team-size-increase')
	const decreaseBtn = document.getElementById('team-size-decrease')

	let initialValue = 2

	increaseBtn.addEventListener('click', () => {
		result.textContent = ++initialValue
	})
	decreaseBtn.addEventListener('click', () => {
		// result.textContent = --initialValue
		if (initialValue > 2) {
			result.textContent = --initialValue
		}
	})
}

// Inits
if (document.getElementById('price-page')) {
	toggleRadioInputs()
	toggleTeamSizeNumber()
}
// ====================================== [END] Price Page Scripts ======================================
