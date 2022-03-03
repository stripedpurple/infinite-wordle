import './style.css'
import Alpine from 'alpinejs'
// import grid from './components/grid'
import site from './components/site'

window.Alpine = Alpine
 
// Alpine.data('grid', grid)
Alpine.data('site', site)

Alpine.start()