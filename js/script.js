console.log('Its working')

let theme = localStorage.getItem('theme')/* save selected theme*/

if(theme == null){/* for first viste, theme is defualt*/
	setTheme('light')
}else{/* past theme from the local storge*/
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function() {
		let mode = this.dataset.mode
		console.log('Option clicked', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
    if(mode == 'light'){
    	document.getElementById('theme-style').href = './css/default.css'
    }
    if(mode == 'green'){
    	document.getElementById('theme-style').href = './css/green.css'
    }
    if(mode == 'pink'){
    	document.getElementById('theme-style').href = './css/pink.css'
    }
    localStorage.setItem('theme', mode)
}