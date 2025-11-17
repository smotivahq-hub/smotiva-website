export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
        colors: {
        // Primary Blues (for backgrounds, main elements)
        'primary-dark': '#1E3A8A', // Deep Blue
        'secondary-dark': '#1F2937', // Dark Slate (used in footers/sections)

        // Accent Teals/Cyans (for CTAs, highlights)
        'accent-teal': '#00C4CC', // Vibrant Teal (main CTA/highlight color)
        'accent-cyan': '#38BDF8', // Bright Cyan
        'accent-light': '#75D0F8', // Light Cyan

        // Neutrals
        'neutral-dark': '#101318', // Near Black (for dark text)
        'neutral-gray': '#9CA3AF', // Medium Gray (for secondary text/borders)
        'neutral-light': '#E5E7EB', // Off-White/Light Gray (for light backgrounds)
      },

      fontFamily: {
        // Gilroy for headings and primary attention-grabbing text
        'heading': ['Gilroy', 'sans-serif'],
        // DM Sans for body text, paragraphs, and general readability
        'body': ['DM Sans', 'sans-serif'],
        // You can also define specific weights if needed, e.g., 'dm-sans'
        'dm-sans': ['DM Sans', 'sans-serif'], 
      },
    },
  },    
  plugins: [],  
}
