// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

const dicctionary = {
	e: 'enter',
	i: 'imes',
	a: 'ai',
	o: 'ober',
	u: 'ufat',
}

const inputText = document.getElementById('input-text')
const showText = document.getElementById('show-text')

function encryptText() {
	const textArray = String(inputText.value).trim().split('')
	const encryptedTextArray = textArray.map((letter) => {
		const encryptedLetter = dicctionary[letter]
		return encryptedLetter ? encryptedLetter : letter
	})
	clearHtml(showText)
	createTextPHTML(encryptedTextArray.join(''), showText)
	CreateButtonCopy(showText)
}

function decryptText() {
	let text = String(inputText.value).trim()
	text = text.replace(/enter/g, 'e')
	text = text.replace(/imes/g, 'i')
	text = text.replace(/ai/g, 'a')
	text = text.replace(/ober/g, 'o')
	text = text.replace(/ufat/g, 'u')
	clearHtml(showText)
	createTextPHTML(text, showText)
	CreateButtonCopy(showText)
}

function CreateButtonCopy(box) {
	const btnCopy = document.createElement('button')
	btnCopy.innerText = 'Copiar'
	btnCopy.classList.add('btn__secondary', 'btn__copy')
	btnCopy.onclick = copyToClipBoard
	box.appendChild(btnCopy)
}

function createTextPHTML(text, boxHTML) {
	const p = document.createElement('p')
	p.id = 'text-encrypted'
	p.innerText = text
	p.style.display = 'block'
	boxHTML.appendChild(p)
}

function clearHtml(element) {
	element.innerHTML = ''
}

function copyToClipBoard() {
	const text = document.getElementById('text-encrypted')
	const range = document.createRange()
	range.selectNode(text)
	window.getSelection().removeAllRanges()
	window.getSelection().addRange(range)
	document.execCommand('copy')
	window.getSelection().removeAllRanges()
	alert('Texto copiado')
}
