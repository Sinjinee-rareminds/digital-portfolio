# Digital Portfolio Platform

A comprehensive React-based platform for creating and displaying student portfolios in two unique formats: a modern portfolio view and a traditional passport-style presentation.

## 🚀 Features

### Portfolio Mode
- **4 Unique Layouts**: Modern, Classic, Creative, and Minimal designs
- **Customizable Themes**: Color customization with preset themes and custom color picker
- **Smooth Animations**: Multiple animation options (fade, slide, bounce, float)
- **Profile Image Upload**: Drag & drop image upload functionality
- **Responsive Design**: Optimized for both desktop and mobile devices

### Passport Mode
- **Traditional Passport UI**: Authentic passport-style design with flip navigation
- **9 Information Pages**: 
  - Cover page with company logo
  - Personal information with verification status
  - Education details
  - Technical skills assessment
  - Languages proficiency
  - Projects showcase
  - Certifications
  - Hobbies and interests
  - Areas of expertise
- **Interactive Navigation**: Touch/swipe support for mobile, keyboard navigation for desktop
- **Verification Stamps**: Visual verification indicators throughout

## 🛠 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Database**: Supabase integration
- **File Upload**: React Dropzone
- **Color Picker**: React Color
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd digital-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🗄 Database Schema

The application expects a Supabase table with the following structure:

```sql
create table public.students (
  id uuid not null default gen_random_uuid (),
  "universityId" uuid not null,
  profile jsonb null default '{}'::jsonb,
  "createdAt" timestamp with time zone null default now(),
  "updatedAt" timestamp with time zone null default now(),
  email text not null,
  name character varying(150) null,
  age integer null,
  date_of_birth date null,
  contact_number character varying(20) null,
  alternate_number character varying(20) null,
  district_name character varying(100) null,
  university character varying(150) null,
  branch_field character varying(150) null,
  college_school_name character varying(150) null,
  registration_number character varying(100) null,
  github_link text null,
  linkedin_link text null,
  twitter_link text null,
  facebook_link text null,
  instagram_link text null,
  portfolio_link text null,
  other_social_links jsonb null default '[]'::jsonb,
  approval_status character varying(20) null default 'pending'::character varying,
  created_at timestamp without time zone null default now(),
  updated_at timestamp without time zone null default now(),
  embedding public.vector null,
  constraint students_pkey primary key (id)
);
```

## 🎨 Customization

### Portfolio Layouts

1. **Modern Layout**: Gradient-based design with cards and smooth animations
2. **Classic Layout**: Traditional resume-style with timeline elements
3. **Creative Layout**: Bold, colorful design with unique animations and floating elements
4. **Minimal Layout**: Clean, typography-focused design with subtle interactions

### Color Themes

- **Preset Themes**: Ocean Blue, Forest Green, Sunset Orange, Purple Dream, Rose Pink, Slate Gray
- **Custom Colors**: Primary, Secondary, and Accent color customization
- **Real-time Preview**: Changes apply instantly across the portfolio

### Animation Options

- **Fade In**: Smooth opacity transitions
- **Slide In**: Elements slide from bottom
- **Bounce In**: Bouncy entrance effects
- **Float**: Gentle floating animations
- **None**: Disable animations for performance

## 📱 Navigation

### Portfolio Mode
- **Desktop**: Mouse interactions, scroll navigation
- **Mobile**: Touch-friendly interface with responsive design

### Passport Mode
- **Desktop**: Click navigation, keyboard arrows (← →), spacebar for next page
- **Mobile**: Swipe gestures for page navigation
- **Universal**: Page indicator dots for direct navigation

## 🔧 Configuration

### Mock Data
The application includes comprehensive mock data for demonstration. In production, replace the mock data in `src/utils/supabase.ts` with actual Supabase queries.

### Profile Image Upload
Configure Supabase storage bucket named `profile-images` for image uploads.

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

The application is configured for deployment on various platforms:

### Vercel/Netlify
```bash
npm run build
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Supabase** for the backend infrastructure
- **Tailwind CSS** for the utility-first styling
- **Framer Motion** for smooth animations
- **Lucide React** for beautiful icons
- **RareMins Technology** for the verification system

## 📞 Support

For support, email support@digitalportfolio.com or create an issue in the repository.

---

**Built with ❤️ for showcasing student achievements and skills in a professional, engaging manner.**