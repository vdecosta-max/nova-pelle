/**
 * Nove Pelle Design System
 * Brand tokens extracted from Salesforce LWC components
 */

export const novaPelleTheme = {
  colors: {
    // Primary brand colors
    forest: {
      primary: '#2D5638',    // Primary brand color
      dark: '#234428',       // Hover state
      darker: '#1c3820',     // Active state
    },
    terracotta: {
      primary: '#C96E4A',    // Eco badge, sustainability emphasis
    },
    // Neutral palette
    cream: {
      light: '#f5f0e8',      // Background, tags
      medium: '#f2ede6',     // Card backgrounds
      dark: '#ede8df',       // Gradients
    },
    beige: {
      light: '#e9f5ee',      // Material tag background
      dark: '#e2dcd2',       // Placeholder gradients
    },
    // Text colors
    text: {
      primary: '#1a1a1a',    // Headings, product names
      secondary: '#7a5c2e',  // Color tags
    },
    // Stock status colors
    stock: {
      in: {
        bg: 'rgba(212, 237, 218, 0.92)',
        text: '#155724',
      },
      low: {
        bg: 'rgba(255, 243, 205, 0.92)',
        text: '#856404',
      },
      out: {
        bg: 'rgba(248, 215, 218, 0.92)',
        text: '#721c24',
      },
    },
  },

  typography: {
    productName: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#1a1a1a',
    },
    price: {
      fontSize: '1.2rem',
      fontWeight: '700',
      color: '#2D5638',
    },
    badge: {
      fontSize: '0.68rem',
      fontWeight: '600',
      letterSpacing: '0.06em',
      textTransform: 'uppercase' as const,
    },
    ecoLabel: {
      large: '1.15rem',
      small: '0.48rem',
    },
  },

  spacing: {
    cardPadding: '1rem',
    gap: {
      small: '0.4rem',
      medium: '0.75rem',
    },
  },

  borderRadius: {
    card: '14px',
    badge: '999px',     // Pill shape
    button: '2px',
    circle: '50%',
  },

  effects: {
    cardShadow: {
      default: '0 2px 10px rgba(0, 0, 0, 0.07), 0 0 0 1px rgba(0, 0, 0, 0.04)',
      hover: '0 12px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.05)',
    },
    transition: {
      default: '0.22s ease',
      fast: '0.15s ease',
      image: '0.3s ease',
    },
    hover: {
      lift: 'translateY(-5px)',
      scale: 'scale(1.04)',
    },
  },
} as const;

// Tailwind CSS custom configuration for Nove Pelle theme
export const tailwindConfig = {
  theme: {
    extend: {
      colors: {
        'forest': novaPelleTheme.colors.forest.primary,
        'forest-dark': novaPelleTheme.colors.forest.dark,
        'terracotta': novaPelleTheme.colors.terracotta.primary,
        'cream': novaPelleTheme.colors.cream.medium,
        'cream-light': novaPelleTheme.colors.cream.light,
      },
      borderRadius: {
        'card': novaPelleTheme.borderRadius.card,
      },
      boxShadow: {
        'card': novaPelleTheme.effects.cardShadow.default,
        'card-hover': novaPelleTheme.effects.cardShadow.hover,
      },
    },
  },
};
