/**
 * Application Routing Architecture
 * Defines public, authenticated user, staff, and admin route path constants.
 */

export const ROUTE_PATHS = {
  // Public Routes
  PUBLIC: {
    HOME: '/',
    BROWSE: '/browse',
    ITEM_DETAILS: '/item/:id',
    REPORT: '/report',
    HOW_IT_WORKS: '/how-it-works',
    ABOUT: '/about',
    LOGIN: '/login',
    REGISTER: '/register',
  },

  // Authenticated User Dashboard Routes
  USER: {
    DASHBOARD: '/dashboard',
    REPORTS: '/dashboard/reports',
    CLAIMS: '/dashboard/claims',
    NOTIFICATIONS: '/dashboard/notifications',
    PROFILE: '/dashboard/profile',
  },

  // Staff Operations Dashboard Routes
  STAFF: {
    DASHBOARD: '/staff',
    REPORTS: '/staff/reports',
    CLAIMS: '/staff/claims',
    MATCHES: '/staff/matches',
    VERIFICATION: '/staff/verification',
  },

  // Admin Dashboard Routes
  ADMIN: {
    DASHBOARD: '/admin',
    USERS: '/admin/users',
    ITEMS: '/admin/items',
    REPORTS: '/admin/reports',
    CLAIMS: '/admin/claims',
    ANALYTICS: '/admin/analytics',
    AUDIT_LOGS: '/admin/audit-logs',
    SETTINGS: '/admin/settings',
  },
} as const;
