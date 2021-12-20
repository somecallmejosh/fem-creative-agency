// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import '@hotwired/turbo-rails'
import 'controllers'

document.addEventListener('alpine:init', () => {
  console.log('Alpine is ready!')
  Alpine.data('ui', () => ({
    menuOpen: false,
    activeMenuItem: '',
    activeProject: 1,
    projects: [
      {
        id: 1,
        title: 'Brand naming & guidelines',
        projectName: 'Lean Product Roadmap',
        projectDescription: '2019 Project',
        mobileImg:
          'https://res.cloudinary.com/dwjulenau/image/upload/v1639924499/Micro%20Craft%20Creative/mobile/image-slide-1.jpg',
        tabletImg:
          'https://res.cloudinary.com/dwjulenau/image/upload/v1639924502/Micro%20Craft%20Creative/tablet/image-slide-1.jpg',
        desktopImg:
          'https://res.cloudinary.com/dwjulenau/image/upload/v1639924502/Micro%20Craft%20Creative/desktop/image-slide-1.jpg',
      },
      {
        id: 2,
        title: 'Brand identity & merchandise',
        projectName: 'New Majest Hotel',
        projectDescription: '2018 Project',
        mobileImg:
          'https://res.cloudinary.com/dwjulenau/image/upload/v1639924501/Micro%20Craft%20Creative/mobile/image-slide-2.jpg',
        tabletImg:
          'https://res.cloudinary.com/dwjulenau/image/upload/v1639924502/Micro%20Craft%20Creative/tablet/image-slide-2.jpg',
        desktopImg:
          'https://res.cloudinary.com/dwjulenau/image/upload/v1639924501/Micro%20Craft%20Creative/desktop/image-slide-2.jpg',
      },
      {
        id: 3,
        title: 'Brand identity & web design',
        projectName: 'Crypot Dashboard',
        projectDescription: '2016 Project',
        mobileImg:
          'https://res.cloudinary.com/dwjulenau/image/upload/v1639924499/Micro%20Craft%20Creative/mobile/image-slide-3.jpg',
        tabletImg:
          'https://res.cloudinary.com/dwjulenau/image/upload/v1639924502/Micro%20Craft%20Creative/tablet/image-slide-3.jpg',
        desktopImg:
          'https://res.cloudinary.com/dwjulenau/image/upload/v1639924501/Micro%20Craft%20Creative/desktop/image-slide-3.jpg',
      },
    ],
    projectsLength() {
      return this.projects.length
    },
    menuToggle() {
      this.menuOpen = !this.menuOpen
    },
    previousProject() {
      this.activeProject = this.activeProject - 1
      if (this.activeProject < 1) {
        this.activeProject = this.projectsLength()
      }
    },
    nextProject() {
      this.activeProject = this.activeProject + 1
      if (this.activeProject > this.projectsLength()) {
        this.activeProject = 1
      }
    },
  }))
})
