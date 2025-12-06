# Design Guidelines — Nexus Task Suite

Branding palette
Primary gradient: #6c5ce7 → #00cec9
Accent: #fdcb6e
Background dark: #0b0b10
Light text: #eaeaf2

Typography
System stack recommended:
Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial
Base font-size: 16px
Headlines: 32–48px depending on context

Spacing and layout
Max content width: 1200px with 18px side padding
Use 8px spacing scale for gaps and margins
Cards: border-radius 12px, subtle backdrop blur, soft shadow

UI patterns
Header: fixed top with glass effect and small shadow
Sidebar: collapsible, width 250px (compact 80px)
Footer: fixed bottom, social links and quick nav
Modals: centered glass panel, 480px width on desktop
Toast: bottom-right, 3s auto-dismiss

Interactions & motion
Use short motion durations (200–420ms)
Prefer transform/opacity transitions rather than layout changes
Parallax: small transforms (translate up to 30px) hooked to pointer
Magnetic buttons: slight translate + scale on hover
Cursor: decorative trail only (non-essential)

Accessibility
All controls must be reachable by keyboard
Contrast ratio maintained for body text on background
Forms must include labels (or aria-label)
ARIA attributes for modals and dynamic elements

Assets
Use compressed web formats
Images: WebP preferred, fall back to JPEG/PNG
Audio: MP3/AAC
Video: MP4 (H.264)

Responsive rules
Mobile breakpoint: 768px
Tablet breakpoint: 1024px
On mobile, sidebar becomes off-canvas; header compresses
Use touch-friendly hit areas (min 44x44px)

Developer notes
Keep CSS variables centralized
Use small utility classes for repeated patterns
Encapsulate page-level styles in per-page CSS files to avoid bleed
