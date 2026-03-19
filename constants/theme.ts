import { Platform } from 'react-native';

export const theme = {
  // Primary Colors — Dark Blue professional
  primary: '#1A3C6E',
  primaryLight: '#2D5DA8',
  primaryDark: '#0F2447',

  // Accent / CTA — Orange
  accent: '#F97316',
  accentLight: '#FDBA74',
  accentDark: '#C2410C',

  // Backgrounds (Light Mode)
  background: '#F4F6FA',
  backgroundSecondary: '#E9EDF5',
  surface: '#FFFFFF',
  surfaceElevated: '#F0F4FB',

  // Text
  textPrimary: '#111827',
  textSecondary: '#4B5563',
  textMuted: '#9CA3AF',
  textOnPrimary: '#FFFFFF',
  textOnAccent: '#FFFFFF',

  // Status
  success: '#059669',
  successLight: '#D1FAE5',
  warning: '#D97706',
  warningLight: '#FEF3C7',
  error: '#DC2626',
  errorLight: '#FEE2E2',
  info: '#1A3C6E',
  infoLight: '#DBEAFE',

  // Borders
  border: '#D1D9E8',
  borderLight: '#E9EDF5',

  // Trip Status Colors
  statusAvailable: '#1A3C6E',
  statusAccepted: '#F97316',
  statusInProgress: '#7C3AED',
  statusCompleted: '#059669',
  statusCancelled: '#DC2626',

  // Radius
  radiusSmall: 8,
  radiusMedium: 12,
  radiusLarge: 16,
  radiusXL: 20,
  radiusFull: 9999,

  // Shadows (clean light mode)
  shadow: Platform.select({
    ios: {
      shadowColor: '#1A3C6E',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 6,
    },
    android: { elevation: 3 },
    default: {
      shadowColor: '#1A3C6E',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 6,
    },
  }),
  shadowElevated: Platform.select({
    ios: {
      shadowColor: '#1A3C6E',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.12,
      shadowRadius: 12,
    },
    android: { elevation: 6 },
    default: {
      shadowColor: '#1A3C6E',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.12,
      shadowRadius: 12,
    },
  }),
  shadowModal: Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.15,
      shadowRadius: 16,
    },
    android: { elevation: 10 },
    default: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.15,
      shadowRadius: 16,
    },
  }),
};

// Typography Scale
export const typography = {
  heroData: { fontSize: 48, fontWeight: '700' as const, color: theme.accent },
  heroLabel: { fontSize: 11, fontWeight: '600' as const, color: theme.textSecondary, textTransform: 'uppercase' as const, letterSpacing: 1 },
  title: { fontSize: 24, fontWeight: '700' as const, color: theme.textPrimary },
  subtitle: { fontSize: 18, fontWeight: '600' as const, color: theme.textPrimary },
  cardTitle: { fontSize: 16, fontWeight: '600' as const, color: theme.textPrimary },
  cardValue: { fontSize: 24, fontWeight: '700' as const, color: theme.primary },
  body: { fontSize: 15, fontWeight: '400' as const, color: theme.textPrimary },
  bodyBold: { fontSize: 15, fontWeight: '600' as const, color: theme.textPrimary },
  caption: { fontSize: 13, fontWeight: '400' as const, color: theme.textSecondary },
  captionBold: { fontSize: 13, fontWeight: '600' as const, color: theme.textSecondary },
  sectionHeader: { fontSize: 16, fontWeight: '700' as const, color: theme.textPrimary },
  smallLabel: { fontSize: 11, fontWeight: '600' as const, color: theme.textMuted },
  price: { fontSize: 18, fontWeight: '700' as const, color: theme.accent },
  bigPrice: { fontSize: 32, fontWeight: '700' as const, color: theme.accent },
};
