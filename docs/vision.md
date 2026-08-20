# Lost & Found — Project Vision

> **Source of Truth**
>
> This document defines the product vision, UX direction, visual language, frontend architecture boundaries, functional requirements, animation philosophy, privacy principles, and future backend integration strategy for the Lost & Found platform.
>
> Any AI coding agent working on this project **must read this document before making changes**.
>
> The agent implements the decisions in this document. It does not independently redefine the product architecture, technology stack, visual identity, or folder structure unless explicitly instructed to do so.

---

# 1. Product Vision

The goal is to build a **modern, production-quality Lost & Found platform** that connects people with their lost belongings through reporting, discovery, matching, verification, claims, location awareness, and notifications.

This should **not** look or feel like a generic college management system.

The product should feel like:

> **A modern SaaS/product platform for recovering things that matter.**

The emotional identity of the product is:

> **Reunite what matters.**

The platform should communicate:

- trust
- clarity
- security
- connection
- intelligence
- community
- reliability
- recovery

The interface must balance a futuristic/premium visual identity with practical usability.

---

# 2. Core Problem

People lose belongings.

Other people find belongings.

The difficult part is connecting the two sides reliably.

The platform exists to provide a structured flow:

```text
Lost / Found
      ↓
Report
      ↓
Discover
      ↓
Match
      ↓
Verify
      ↓
Claim
      ↓
Recover
```

The website should visually communicate this journey rather than presenting disconnected features.

---

# 3. Core Functional Requirements

The product must eventually support:

- Lost-item reporting
- Found-item reporting
- Centralized item database
- Search
- Filtering
- Sorting
- Item categories
- Item details
- Location information
- Map visualization
- Potential matching
- Match confidence
- Claims
- Ownership verification
- Proof submission
- Verification workflows
- Notifications
- Status tracking
- User accounts
- User profiles
- Staff roles
- Administrator roles
- Role-based access control
- Staff verification
- Admin management
- Analytics
- Audit logs
- Spam/dispute handling
- Secure media storage
- Responsive mobile experience

The frontend should be designed around these requirements even when the first implementation uses mock data.

---

# 4. Product Architecture

The intended overall architecture is:

```text
React + Vite Frontend
        ↓
REST API
        ↓
Node.js + Express Backend
        ↓
MongoDB
```

External services:

```text
Cloudinary
Map Provider
Email/Notification Provider
Socket.IO (later, where useful)
AI/Matching Services (later)
```

The frontend must remain independent from backend implementation details.

---

# 5. Technology Stack

## Frontend

Primary technologies:

- React
- Vite
- Tailwind CSS
- React Router
- GSAP
- GSAP ScrollTrigger
- Lenis
- Lucide React

Potentially:

- Framer Motion only where it provides a clear advantage

### Animation rule

GSAP is the **primary animation system**.

Do not unnecessarily introduce multiple animation systems.

Use:

- GSAP for major animations
- ScrollTrigger for scroll-driven experiences
- Lenis for smooth scrolling
- CSS transitions for simple micro-interactions

---

# 6. Visual Identity

The visual direction is:

> **Dark, premium, futuristic, human, trustworthy, and highly polished.**

The design should feel closer to a modern SaaS/product experience than an academic portal.

## Visual characteristics

- Deep black/navy backgrounds
- Layered dark surfaces
- Electric violet/indigo as the primary brand accent
- Subtle cyan/blue accents
- Green for successful/verified states
- Amber for pending states
- Red/warm tones for lost/error/rejected states
- Soft gradients
- Controlled glow
- Large typography
- Strong hierarchy
- Generous whitespace
- Subtle glass effects
- Soft borders
- Refined shadows
- Consistent rounded geometry

Avoid excessive glassmorphism.

Glass should be used selectively for elevated elements rather than making every component translucent.

---

# 7. Design Philosophy

The design must prioritize:

### 01 — Hierarchy

Users should immediately understand:

```text
What is this?
What can I do?
What should I do next?
```

### 02 — Clarity

Visual beauty must never reduce usability.

### 03 — Consistency

Buttons, cards, inputs, modals, typography, spacing, shadows, and states should follow a coherent system.

### 04 — Breathing room

Do not cram content simply because there is available screen space.

### 05 — Purposeful motion

Animation should communicate:

- hierarchy
- relationships
- state
- progress
- interaction
- continuity

Never animate something merely because it can be animated.

---

# 8. Typography

Use a modern display typeface for major headings combined with a highly readable UI/body typeface.

Typography hierarchy should clearly distinguish:

```text
Display
H1
H2
H3
Body
Supporting text
Labels
Metadata
```

Hero typography should be bold and visually dominant.

Do not use excessive font sizes for ordinary UI elements.

---

# 9. Spacing System

Use a consistent spacing system based around an 8px rhythm.

Avoid arbitrary spacing values unless there is a strong design reason.

Components should feel related because their spacing follows the same visual system.

---

# 10. Component Geometry

Use a consistent radius system for:

- buttons
- cards
- inputs
- dialogs
- dropdowns
- panels
- image containers

Do not randomly assign different border radii to every component.

---

# 11. Elevation

Use layered surfaces rather than heavy shadows.

Conceptually:

```text
Background
    ↓
Surface
    ↓
Elevated Surface
    ↓
Overlay / Modal
```

Each layer should be visually distinguishable without becoming noisy.

---

# 12. Status System

Status colors must have semantic meaning.

Recommended semantic mapping:

```text
Lost       → warm/red
Found      → blue
Matched    → violet
Verified   → green
Pending    → amber
Rejected   → red
Recovered  → green
```

Do not use status colors purely for decoration.

---

# 13. Signature Visual Concept — Connection

The product's signature visual metaphor is **connection**.

A lost item exists as a node.

People, locations, reports, dates, categories, and potential matches form relationships around it.

The interface can use subtle visual connections such as:

```text
                 LOST
                  ●
                 / \
                /   \
               ●     ●
           LOCATION  DATE
                \   /
                 \ /
                  ●
                MATCH
                  │
                  ▼
               VERIFY
                  │
                  ▼
               RETURNED
```

This concept can appear through:

- SVG paths
- animated connection lines
- subtle orbital elements
- node animations
- progressive path drawing
- map relationships
- matching interfaces

This should become a recognizable visual characteristic of the product.

---

# 14. Homepage

The homepage should immediately communicate the product's purpose.

## Hero

Primary message should communicate:

> **Reuniting what matters.**

Possible supporting message:

> An intelligent Lost & Found platform that connects people, matches items, and brings everything back where it belongs.

The hero should include a prominent search experience.

Example:

```text
Search for lost or found items...
                         [ Search ]
```

Quick categories may include:

- Phones
- Wallets
- Backpacks
- Watches
- Laptops
- Earbuds

The hero should feel like a real product rather than a marketing-only landing page.

---

# 15. Homepage Storytelling

The homepage should tell one continuous story:

```text
PROBLEM
   ↓
REPORT
   ↓
MATCH
   ↓
VERIFY
   ↓
RECOVER
```

Possible sections:

### Lost something?

Report it.

### Found something?

Help someone get it back.

### Let the system connect the dots.

Matching.

### Before anything changes hands.

Verification.

### Back where it belongs.

Recovery.

Use GSAP and ScrollTrigger to make the experience feel connected.

Avoid creating many unrelated feature sections.

---

# 16. Homepage Animation

The signature animation can show an item moving through:

```text
Lost
 ↓
Reported
 ↓
Potential Match
 ↓
Verified
 ↓
Recovered
```

Connection paths should progressively draw themselves as the user scrolls.

Possible techniques:

- SVG path drawing
- opacity transitions
- scale transitions
- node activation
- timeline sequencing
- ScrollTrigger pinning

The animation must remain performant and accessible.

---

# 17. Browse Page

The Browse page should feel like a sophisticated discovery/search system.

Structure:

```text
Browse Lost & Found

[ Search items... ]

[ All ] [ Lost ] [ Found ]

Category ▼
Location ▼
Date ▼
Sort ▼

Item Grid
```

Cards should display:

- image
- item name
- lost/found status
- location
- date
- category
- relevant metadata

Hover behavior may include:

- slight image scale
- card elevation
- subtle glow
- metadata transition

Do not over-animate cards.

---

# 18. Item Details

The item detail page is one of the most important pages.

Recommended structure:

```text
┌──────────────────────┐
│                      │
│       ITEM IMAGE     │
│                      │
└──────────────────────┘

Item name

Status

Location

Date

Description

[ This is my item ]

Ownership verification information
```

The page should clearly communicate:

- what the item is
- whether it is lost/found
- where it was reported
- when it was reported
- relevant description
- available actions
- verification requirements

Potential future section:

```text
Similar / Potentially Matching Items
```

---

# 19. Dashboard

The dashboard should answer:

> **What is happening with my stuff?**

Example:

```text
Welcome back 👋

Reports
Claims
Matches
Recovered
```

Then:

### Potential Matches

```text
iPhone 14 Pro
Lost near Library

92% Match

[ View Match ]
```

### Recent Activity

Examples:

```text
Your report was viewed
Potential match found
Claim submitted
Staff requested verification
Claim approved
```

The dashboard should feel alive without becoming visually overwhelming.

---

# 20. Staff Dashboard

Staff interfaces should feel operational and efficient.

Important areas:

- verification queue
- pending reports
- claims
- potential matches
- handovers
- flagged reports

Example:

```text
Verification Queue

iPhone 14 Pro
Potential Match: 92%

[ Review ]
[ Request Proof ]
```

Staff should be able to quickly identify what requires action.

---

# 21. Admin Dashboard

The admin dashboard should feel like a serious SaaS administration system.

Include:

- platform statistics
- reports analytics
- claims analytics
- recovery statistics
- categories
- user management
- reports management
- claims management
- audit activity
- spam/dispute handling

Possible analytics:

```text
Reports
Claims
Matches
Recovered Items
```

Use charts where they genuinely improve understanding.

Avoid decorative charts with no purpose.

---

# 22. Authentication Pages

Routes:

```text
/login
/register
```

Authentication pages should remain consistent with the main visual identity.

They should be simple, focused, and trustworthy.

Do not overload authentication screens with unnecessary animations.

---

# 23. Public Routes

Initial public route structure:

```text
/
├── Home
├── Browse
├── Lost & Found
├── How It Works
├── About
├── Login
└── Register
```

---

# 24. Authenticated Routes

```text
/dashboard
/dashboard/reports
/dashboard/claims
/dashboard/notifications
/dashboard/profile
```

---

# 25. Staff Routes

```text
/staff
/staff/reports
/staff/claims
/staff/matches
/staff/verification
```

---

# 26. Admin Routes

```text
/admin
/admin/users
/admin/items
/admin/reports
/admin/claims
/admin/analytics
/admin/audit-logs
```

Routes may evolve later, but architectural separation must remain clear.

---

# 27. Mock Data Strategy

The first frontend phase must use realistic mock data.

Do not build empty screens.

Example mock items:

```text
iPhone
Wallet
Student ID
Backpack
Earbuds
Watch
Laptop Charger
Keys
Water Bottle
Notebook
```

Mock data should support:

- search
- filtering
- sorting
- item details
- statuses
- claims
- notifications
- dashboard statistics
- maps

The UI should feel like a functioning product before the backend exists.

---

# 28. API-Ready Frontend

Do not place random API calls directly inside UI components.

Create a service layer.

Suggested structure:

```text
src/
├── services/
│   ├── api.js
│   ├── auth.service.js
│   ├── item.service.js
│   ├── claim.service.js
│   ├── notification.service.js
│   └── location.service.js
```

Initially:

```text
Component
   ↓
Service
   ↓
Mock data
```

Later:

```text
Component
   ↓
Service
   ↓
REST API
   ↓
Express
```

The UI should not need to be rebuilt when mock services are replaced by real APIs.

---

# 29. Map / Location System

Location view is a core feature.

It must be considered from the beginning.

The eventual architecture:

```text
Item / Report
      ↓
Location data
      ↓
Backend
      ↓
Frontend
      ↓
Map
```

An item may eventually contain:

```js
location: {
  name,
  latitude,
  longitude
}
```

The map can display:

- lost-item markers
- found-item markers
- approximate locations
- location clusters
- selected item
- item popup
- item detail navigation

Example interaction:

```text
● Found

Black Wallet
Found near Library

[ View Item ]
```

---

# 30. Map Technology

Initial recommendation:

```text
React
+
React Leaflet
+
OpenStreetMap
```

This is sufficient for the initial product.

A different map provider such as Mapbox or Google Maps may be evaluated later if the product requires additional visual customization or capabilities.

Do not add a map provider during the initial frontend foundation unless specifically instructed.

---

# 31. Location Privacy

Exact locations must not automatically become public.

Sensitive reports may contain precise locations internally.

Public users should generally see an approximate location.

Example:

```text
Internal:
Library — Floor 2 — exact coordinates

Public:
Library
```

Potential location privacy levels:

```text
Exact
Approximate
Area only
Hidden
```

The backend will ultimately control what location information each role can access.

This is a security and privacy requirement, not merely a UI decision.

---

# 32. Cloudinary

Cloudinary is the planned media storage system.

Do not store image binaries directly in MongoDB.

MongoDB should store metadata such as:

```text
cloudinary URL
public ID
media type
metadata
```

Cloudinary will eventually handle:

- item photos
- found-item photos
- ownership proof
- profile images
- image transformations
- optimization
- deletion
- controlled access where appropriate

Cloudinary integration belongs to the backend phase.

Do not configure it during the initial frontend phase.

---

# 33. MongoDB

MongoDB will store structured application data.

Expected collections/entities include:

```text
Users
Items
Reports
Claims
Notifications
Audit Logs
```

Potential location fields should be designed so future geospatial queries are possible.

The exact database schema will be defined during the backend architecture phase.

---

# 34. Authentication and RBAC

The eventual system must support role-based access.

Conceptually:

```text
User
Staff
Admin
```

Permissions must be enforced by the backend.

The frontend may hide or show UI based on role, but:

> **Frontend permissions are not security.**

The backend must always enforce authorization.

---

# 35. Matching System

Matching should initially be implemented without requiring AI.

Start with deterministic/rule-based matching.

Potential factors:

```text
Category
Description
Color
Brand
Location
Date
Attributes
```

This can produce a confidence score.

Example:

```text
Potential Match

92%
```

Later, more advanced matching may be introduced.

---

# 36. AI Matching — Future

AI is an enhancement layer, not a foundation requirement.

Possible future capabilities:

### Natural-language matching

User:

> I lost a black backpack near the library yesterday.

System extracts:

```text
Object: Backpack
Color: Black
Location: Library
Date: Yesterday
```

### Image similarity

User uploads an image.

The system can compare visual characteristics with found-item images.

### Semantic matching

Descriptions with different wording can still be identified as potentially related.

AI should only be introduced after the conventional matching system is stable.

---

# 37. Notifications

Notifications should eventually support:

- potential match
- claim updates
- verification requests
- claim approval
- claim rejection
- report updates
- staff requests
- recovery confirmation

Initial implementation can use normal API polling/fetching.

---

# 38. Socket.IO

Socket.IO is **not required for the map**.

Socket.IO is a future real-time communication layer.

Potential uses:

```text
New potential match
       ↓
Server
       ↓
Socket.IO
       ↓
User
       ↓
Instant notification
```

Other possible uses:

- live staff queue updates
- real-time claim status
- real-time administrative updates

Do not introduce Socket.IO simply because the application contains a map.

It should only be introduced when real-time behavior provides meaningful value.

---

# 39. AI and Real-Time Development Order

Recommended progression:

```text
1. Normal search/filtering
        ↓
2. Rule-based matching
        ↓
3. Notifications
        ↓
4. Real-time updates with Socket.IO
        ↓
5. AI-assisted matching
        ↓
6. Image similarity
```

Do not prematurely introduce advanced technologies.

---

# 40. Mobile-First Usability

The platform must work extremely well on mobile.

A person who loses an item may immediately access the platform from their phone.

Mobile must support:

- searching
- reporting
- browsing
- viewing items
- submitting claims
- notifications
- map access
- profile
- status tracking

Suggested mobile navigation:

```text
Home
Browse
Report
Activity
Profile
```

A prominent:

```text
+ Report
```

action may be used where appropriate.

---

# 41. Responsive Design

Design for:

```text
Mobile
Tablet
Desktop
Large Desktop
```

Do not simply shrink the desktop UI.

Layouts should adapt intentionally.

Tables may become cards.

Sidebars may become drawers.

Large grids may become lists.

Complex admin interfaces should remain usable on smaller screens.

---

# 42. Accessibility

Accessibility is a product requirement.

Include:

- semantic HTML
- keyboard navigation
- visible focus states
- sufficient contrast
- accessible form labels
- meaningful button text
- alt text
- reduced-motion support
- accessible dialogs
- accessible dropdowns
- screen-reader-friendly status information

Animations must respect:

```text
prefers-reduced-motion
```

---

# 43. Animation System

Animation categories:

### Micro

Buttons, toggles, cards, inputs.

### Standard

Page/component entrance.

### Large

Hero and major storytelling sections.

### Scroll

ScrollTrigger-driven narrative experiences.

Animation should have hierarchy.

Not every element should move.

---

# 44. Animation Rules

Prefer:

```text
opacity
transform
scale
translate
clip-path
SVG stroke animation
```

Avoid expensive layout-triggering animation whenever possible.

Animations must not make the interface feel slow.

Interactive controls should remain responsive.

---

# 45. Magnetic Interactions

Magnetic buttons may be used sparingly for major CTAs.

They must:

- remain subtle
- not interfere with clicking
- not affect accessibility
- not be used everywhere

---

# 46. Cursor Effects

A subtle cursor interaction may be used on desktop.

Do not create a giant distracting custom cursor.

Mobile devices should not depend on cursor effects.

---

# 47. Page Transitions

Use subtle transitions between related experiences.

Examples:

```text
Browse → Item
Dashboard → Claim
Report → Confirmation
```

Transitions should communicate continuity.

Never delay navigation just to show an animation.

---

# 48. Image Handling

Images should be optimized.

Use:

- responsive sizing
- lazy loading where appropriate
- proper aspect ratios
- placeholders/skeletons
- optimized Cloudinary transformations later

Avoid layout shifts caused by unknown image dimensions.

---

# 49. Loading States

Never leave the user staring at a blank screen.

Use:

- skeleton loaders
- progress indicators
- meaningful loading states

Loading UI should visually match the design system.

---

# 50. Empty States

Empty states should be intentional.

Example:

```text
No potential matches yet.

We'll let you know when something
looks like it could be your item.
```

Avoid generic:

> No data found.

---

# 51. Error States

Errors should explain:

1. What happened
2. What the user can do
3. Whether retrying is possible

Example:

```text
We couldn't load these reports.

[ Try Again ]
```

---

# 52. Forms

Forms should be:

- clear
- segmented logically
- validated
- accessible
- visually calm

Reporting a lost/found item should not feel like filling out a government form.

Progressive disclosure may be used for complex information.

---

# 53. Report Flow

Eventually:

```text
Choose:
Lost / Found
        ↓
Item information
        ↓
Images
        ↓
Location
        ↓
Date/time
        ↓
Description
        ↓
Review
        ↓
Submit
```

The flow should feel guided.

---

# 54. Claim Flow

Potential structure:

```text
View item
    ↓
This is my item
    ↓
Ownership questions
    ↓
Proof where required
    ↓
Submit claim
    ↓
Staff verification
    ↓
Decision
    ↓
Recovery
```

Do not expose sensitive ownership information publicly.

---

# 55. Verification

Verification is one of the most important trust mechanisms.

The UI should clearly communicate:

```text
Why verification is required
What information is needed
Who can see the information
What happens after submission
```

Verification data must be treated as sensitive.

---

# 56. Security Principles

Security must be designed into the product.

Eventually include:

- secure authentication
- password hashing
- authorization
- RBAC
- input validation
- request validation
- rate limiting
- secure file handling
- upload restrictions
- protected ownership proof
- audit logs
- secure cookies/token strategy
- CORS configuration
- environment variables
- server-side authorization
- abuse prevention
- spam protection

Never trust client-provided role information.

---

# 57. Auditability

Important administrative actions should eventually be auditable.

Examples:

```text
Report created
Report edited
Claim submitted
Claim approved
Claim rejected
User role changed
Item status changed
Report removed
```

Audit records should eventually contain appropriate metadata such as:

```text
actor
action
target
timestamp
```

---

# 58. Frontend Architecture

The frontend should be organized around maintainability.

Prefer a feature/component-oriented structure.

Conceptually:

```text
src/
├── assets/
├── components/
├── features/
├── layouts/
├── pages/
├── services/
├── hooks/
├── lib/
├── data/
├── routes/
├── animations/
└── styles/
```

Exact structure may evolve if there is a strong reason.

Do not create an enormous number of meaningless folders.

---

# 59. Component Philosophy

Build reusable components.

Examples:

```text
Button
Input
Modal
Badge
Card
SearchBar
Filter
ItemCard
StatusBadge
Navbar
Sidebar
Map
NotificationItem
```

Feature-specific components should remain close to their feature when appropriate.

Avoid creating giant components containing entire pages.

---

# 60. React Rules

Avoid:

- giant monolithic components
- duplicated UI
- random API calls inside components
- hardcoded production data
- excessive prop drilling
- unnecessary global state
- inline styling everywhere

Prefer:

- reusable components
- clear responsibilities
- service abstraction
- predictable state
- semantic naming
- composable layouts

---

# 61. State Management

Do not introduce a large state-management library unless the application genuinely requires it.

Start with:

- React state
- context where appropriate
- URL state for filters/search
- service layer for server communication

Evaluate more advanced state management later based on actual complexity.

---

# 62. Routing

React Router should provide clear route boundaries.

Protected routes should eventually be separated from public routes.

Role-based route access should eventually be enforced in coordination with backend authorization.

---

# 63. Design Reference

Visual reference images supplied with the project should be treated as **design references**, not as optional inspiration.

They define intended:

- visual hierarchy
- proportions
- spacing relationships
- component density
- typography relationships
- surface treatment
- visual mood
- interaction patterns

If the reference conflicts with this document, **this document takes priority**.

Do not blindly copy individual visual elements if they harm usability or accessibility.

---

# 64. What AI Coding Agents Must NOT Do

Do not:

- replace React with another framework
- replace Vite without approval
- replace Tailwind without approval
- introduce Firebase
- introduce Supabase
- introduce an unrelated database
- move media storage into MongoDB
- introduce random UI libraries
- introduce multiple animation systems unnecessarily
- redesign the product without approval
- create giant monolithic files
- put all logic into one component
- create random folder structures
- remove existing architecture because a different approach seems easier
- implement backend functionality during frontend-only phases
- add unnecessary dependencies
- hardcode secrets
- expose environment variables
- invent undocumented features

If an architectural change appears necessary, explain it before making it.

---

# 65. Development Phases

The project will be developed incrementally.

## Phase 0 — Planning

- product vision
- design direction
- architecture
- roadmap
- visual references

## Phase 1 — Frontend Foundation

- Vite
- React
- Tailwind
- base styles
- design tokens
- routing foundation
- component foundation
- animation foundation

## Phase 2 — Frontend Pages

- homepage
- browse
- item details
- authentication
- dashboard
- report flow
- claims
- notifications
- map interface
- staff UI
- admin UI

## Phase 3 — Animation & Polish

- GSAP
- ScrollTrigger
- Lenis
- transitions
- micro-interactions
- responsive refinement
- accessibility

## Phase 4 — Frontend Testing

- UI testing
- responsive testing
- route testing
- interaction testing
- cleanup
- performance improvements

## Phase 5 — Backend Architecture

- Express
- API structure
- service architecture
- MongoDB schema
- validation
- error handling

## Phase 6 — Authentication & RBAC

- registration
- login
- sessions/tokens
- roles
- permissions

## Phase 7 — MongoDB & APIs

- users
- items
- reports
- claims
- notifications
- audit logs
- location data

## Phase 8 — Cloudinary

- image upload
- transformations
- secure media
- ownership proof
- deletion

## Phase 9 — Matching & Notifications

- rule-based matching
- confidence scores
- notifications
- claim workflow

## Phase 10 — Staff & Admin

- verification
- moderation
- analytics
- user management
- audit interface

## Phase 11 — Security Hardening

- validation
- rate limiting
- authorization
- upload security
- abuse prevention
- auditability

## Phase 12 — Deployment

- frontend deployment
- backend deployment
- database configuration
- Cloudinary configuration
- environment variables
- production testing
- monitoring

---

# 66. Phase Isolation Rule

An AI coding agent must work **only on the currently requested phase**.

Do not implement future phases automatically.

For example:

During frontend development:

```text
YES:
React
Tailwind
Mock data
GSAP
Map UI
Frontend services
```

```text
NO:
Express
MongoDB
Cloudinary
Authentication backend
Socket.IO
AI matching
```

unless explicitly requested.

This prevents uncontrolled project expansion.

---

# 67. Backend Replacement Principle

Mock implementations should be replaceable.

The desired transition is:

```text
UI
 ↓
Service
 ↓
Mock implementation
```

becoming:

```text
UI
 ↓
Service
 ↓
REST API
 ↓
Backend
```

The UI should not require major restructuring during this transition.

---

# 68. Map Development Principle

During the frontend phase, the map can use:

- mock coordinates
- mock locations
- mock markers
- mock item data

The map component should be designed so that real API location data can later replace the mock data.

Do not build real-time tracking.

Do not introduce Socket.IO for map rendering.

---

# 69. Portfolio Quality

The final result should be something that can confidently be presented as a serious portfolio project.

It should demonstrate:

- frontend engineering
- backend architecture
- REST API design
- database design
- authentication
- authorization
- media handling
- geospatial/location functionality
- real-time communication where appropriate
- matching logic
- security
- responsive UI
- animation
- product thinking

The goal is not simply to demonstrate that technologies were used.

The goal is to demonstrate that they were used **for meaningful reasons**.

---

# 70. Product Personality

The platform should feel:

```text
Modern
Trustworthy
Human
Intelligent
Calm
Premium
Helpful
Connected
```

Avoid making it feel:

```text
Corporate
Generic
Academic
Over-engineered
Gamified
Noisy
```

---

# 71. The Core Principle

The product is fundamentally about a journey:

```text
Someone loses something.
        ↓
Someone reports it.
        ↓
The platform connects information.
        ↓
A potential match appears.
        ↓
Ownership is verified.
        ↓
The item is returned.
```

Every major design decision should support this journey.

The interface should make that journey feel **clear, trustworthy, and memorable**.

---

# 72. Final Rule

The project hierarchy is:

```text
USER / PRODUCT OWNER
        ↓
PROJECT VISION
        ↓
ARCHITECTURE
        ↓
PHASE REQUIREMENTS
        ↓
AI CODING AGENT
```

Not:

```text
USER
  ↓
AI AGENT
  ↓
Whatever the AI decides
```

AI agents are implementation tools.

They do not own the product vision.

They do not independently redefine the architecture.

They do not introduce technologies simply because they are familiar with them.

They implement the approved system.

---

# Current Scope

The immediate scope is:

```text
FRONTEND ONLY
```

Build the foundation and polished product experience using:

```text
React
Vite
Tailwind CSS
GSAP
ScrollTrigger
Lenis
Lucide React
React Router
Mock Data
```

Include the architecture necessary to support the future:

```text
MongoDB
Express
Cloudinary
Authentication
RBAC
Maps
Matching
Notifications
Socket.IO
AI
```

but **do not implement those backend systems until their designated phases**.

The first objective is to create a frontend that already feels like a finished, premium product.

> **Build the experience first. Connect the intelligence later.**