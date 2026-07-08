# Kampala Take Away - Premium Restaurant Website

A modern, professional restaurant website for **Kampala Take Away** featuring authentic Ugandan cuisine in Germany.

## 📋 Website Features

### Core Sections
- **Hero Section** - Eye-catching introduction with call-to-action
- **About Section** - Restaurant story and key features
- **Featured Dishes** - Showcase of popular items
- **Full Menu** - Individual food cards organized by category:
  - 🥘 Mixed Platters (Vegetarian, Chicken, Goat, Beef, Zebra)
  - 🌯 Kampala Specials (Kifeefee Roleks, Ostrich Burger)
  - 🥟 Street Food (Sumbusa, Fried Cassava, Matooke, Yams, etc.)
  - 🥤 Soft Drinks
  - 🍺 Alcoholic Drinks
  - 🍸 Cocktails
- **Gallery** - Photo showcase
- **Customer Reviews** - Testimonials section
- **Catering Services** - Corporate event and catering information
- **Contact Section** - Multiple contact options and contact form
- **Online Booking** - Table reservation system
- **Footer** - Social links and quick navigation

### Key Features

✅ **Premium Design**
- Dark Green (#1B5E20) and Gold (#D4AF37) color scheme inspired by Uganda
- Warm wood textures and cream backgrounds
- Professional restaurant aesthetic

✅ **Food-Focused Presentation**
- Each menu item displayed as an individual card
- Large image placeholder for each dish
- Detailed descriptions and ingredients
- Dietary labels (Vegetarian, Vegan, Chicken, Meat, Premium)
- Price display and easy ordering

✅ **Multiple Ordering Options**
- WhatsApp integration for direct ordering
- Contact form for inquiries
- Online table booking
- Email contact (kampalatakeaway@yahoo.com)

✅ **Responsive Design**
- Fully mobile-optimized
- Smooth animations and transitions
- Touch-friendly buttons and navigation

✅ **Modern UX**
- Smooth scrolling navigation
- Lazy loading and animations on scroll
- Hover effects on cards and buttons
- Hamburger menu for mobile

## 📂 Project Structure

```
kampala-take-away/
├── index.html                 # Main website file
├── assets/
│   ├── css/
│   │   ├── styles.css        # Main styles
│   │   └── menu.css          # Menu-specific styles
│   ├── js/
│   │   └── script.js         # Interactive features
│   └── images/               # Image folder (placeholder)
└── README.md                 # This file
```

## 🎨 Color Scheme

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Dark | #1B5E20 | Headers, text, accents |
| Primary Green | #2D8659 | Hover states, gradients |
| Gold | #D4AF37 | Buttons, highlights, premium feel |
| White | #FFFFFF | Background, cards |
| Cream | #F5F1E6 | Soft background sections |

## 📞 Contact Information

- **Email**: kampalatakeaway@yahoo.com
- **WhatsApp**: +49 (0) 123 456 789 (Update with actual number)
- **Address**: Kampala Take Away, Your Street 123, Your City, Country (Update with actual address)
- **Opening Hours**: 
  - Mon - Thu: 11:00 - 22:00
  - Fri - Sat: 11:00 - 23:00
  - Sun: 12:00 - 21:00

## 🔧 Customization Guide

### 1. Update Contact Information
Edit these sections in `index.html`:
- Phone number (search for +49 123 456 789)
- Address (search for "Your Street 123")
- Email (already updated to kampalatakeaway@yahoo.com)
- WhatsApp link (https://wa.me/49123456789)

### 2. Add Food Images
Replace placeholder divs with actual images:
```html
<div class="menu-image">
    <img src="assets/images/dish-name.jpg" alt="Dish Name">
</div>
```

### 3. Update Prices
Modify prices in each menu card (currently €X.XX format)

### 4. Add New Menu Items
Duplicate a menu card and update:
- Image
- Title
- Description
- Badges (dietary labels)
- Price
- WhatsApp order link

### 5. Social Media Links
Update in footer section:
- Facebook
- Instagram
- WhatsApp

### 6. Google Maps Integration
Replace the map placeholder with embed code:
```html
<iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="300"></iframe>
```

## 🚀 Deployment

### Using GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select main branch as source
5. Website will be live at: `https://yourusername.github.io/repository-name`

### Using Web Hosting
1. Upload files via FTP
2. Ensure `index.html` is in the root directory
3. Visit your domain

### Using Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Automatic deployments on push

## 📱 Mobile Optimization

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance
- Alt text for images

## 🔐 Future Enhancements

- [ ] Add real food images
- [ ] Implement online payment system
- [ ] Add restaurant reviews from Google/TripAdvisor
- [ ] Live order tracking
- [ ] Loyalty program
- [ ] Menu PDF download
- [ ] Video tours of restaurant
- [ ] Staff profiles
- [ ] Blog/News section
- [ ] Multi-language support

## 📊 SEO Optimization

The website includes:
- Meta descriptions
- Semantic HTML
- Mobile-first design
- Fast loading
- Accessibility compliance

For better SEO:
- Add structured data (Schema.org)
- Submit to Google Search Console
- Create local business listing
- Optimize images

## 🐛 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This website template is created for Kampala Take Away.

## 👨‍💼 Support

For modifications or issues, please contact the development team.

---

**Created**: July 2024  
**Version**: 1.0  
**Status**: Production Ready
