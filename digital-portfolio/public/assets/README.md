# Assets Directory

This directory contains static assets for the Digital Portfolio application.

## Structure

```
assets/
├── logos/          # Company logos, brand assets, icons
├── images/         # General images, photos, illustrations
└── README.md       # This file
```

## Usage

### Logos
Place company logos, brand assets, and icon files in the `logos/` directory.
- Recommended formats: SVG, PNG (with transparency)
- Naming convention: `logo-[name].[ext]` (e.g., `logo-rareminds.svg`)

### Images
Place general images, photos, and illustrations in the `images/` directory.
- Recommended formats: JPG, PNG, WebP, SVG
- Naming convention: descriptive names (e.g., `hero-background.jpg`, `profile-default.png`)

## Accessing Assets

In your React components, reference assets using:

```jsx
// For logos
<img src="/assets/logos/logo-rareminds.svg" alt="Rareminds Logo" />

// For images
<img src="/assets/images/hero-background.jpg" alt="Hero Background" />
```

## Best Practices

1. **Optimize images** before adding them to reduce file size
2. **Use SVG** for logos and icons when possible for scalability
3. **Provide alt text** for accessibility
4. **Use descriptive filenames** for easy identification
5. **Consider responsive images** for different screen sizes
