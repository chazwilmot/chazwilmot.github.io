# Personal Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This website is designed to showcase your professional experience, skills, and projects.

## Features

- Responsive design that works on all devices
- Modern and clean UI
- Smooth scrolling navigation
- Contact form
- Mobile-friendly navigation
- Portfolio grid layout
- Skills showcase
- Resume/CV section

## Getting Started

1. Clone this repository:
```bash
git clone https://github.com/yourusername/your-repo-name.git
```

2. Customize the content:
   - Edit `index.html` to update your personal information
   - Modify `assets/css/styles.css` to change colors and styling
   - Update `assets/js/main.js` to add custom functionality

## Customization

### Colors
The color scheme can be easily modified in the `:root` section of `styles.css`. The current color variables are:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --text-color: #1f2937;
    --light-text: #6b7280;
    --background: #ffffff;
    --section-bg: #f3f4f6;
    --border-color: #e5e7eb;
}
```

### Content
Update the following sections in `index.html`:
- Hero section with your name and title
- About section with your bio
- Skills section with your expertise
- Resume section with your experience and education
- Portfolio section with your projects
- Contact information

## Deployment to GitHub Pages

1. Push your changes to GitHub:
```bash
git add .
git commit -m "Update portfolio content"
git push
```

2. Go to your repository settings on GitHub
3. Navigate to the "Pages" section
4. Select the main branch as the source
5. Your site will be published at `https://yourusername.github.io/your-repo-name/`

## Adding Projects

To add a new project to the portfolio:

1. Add a new project card in the portfolio section of `index.html`:
```html
<div class="portfolio-item">
    <img src="assets/images/project-image.jpg" alt="Project Name">
    <h3>Project Name</h3>
    <p>Project description</p>
    <a href="#" class="btn primary">View Project</a>
</div>
```

2. Add the project image to the `assets/images` directory

## Contact Form

The contact form is currently set up to log submissions to the console. To make it functional:

1. Set up a server-side script to handle form submissions
2. Update the form action in `index.html`
3. Modify the form submission handler in `main.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Font Awesome for icons
- Google Fonts for typography
- Modern CSS techniques and best practices 