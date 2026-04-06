# TypeScript Conversion & Rebranding Setup Instructions

## Step 1: Install Dependencies

Open your terminal in the `client` folder and run:

```bash
cd client
npm install
```

This will install all the TypeScript dependencies and shadcn/ui packages.

## Step 2: Create Required Directories

Create these directories in the `client/src` folder:
- `src/lib`
- `src/components/ui`
- `src/types`

## Step 3: What Has Been Done

✅ Updated package.json with TypeScript and shadcn/ui dependencies
✅ Created tsconfig.json and tsconfig.node.json
✅ Updated components.json for shadcn/ui
✅ Updated Tailwind config with shadcn theme
✅ Updated index.css with CSS variables
✅ Cleaned all personal information from README and package.json
✅ Changed GitHub references to srijantrpth

## Step 4: What's Next

After running `npm install`, the following files will be created automatically:

### TypeScript Utility and UI Components (to be created next):
- src/lib/utils.ts
- src/components/ui/button.tsx
- src/components/ui/input.tsx
- src/components/ui/label.tsx
- src/components/ui/card.tsx
- src/components/ui/textarea.tsx

### Type Definitions (to be created):
- src/types/index.ts (User, Listing, Firebase config types)

### Components to Convert (from .jsx to .tsx):
- All existing components in src/components/
- All pages in src/pages/
- src/App.jsx → src/App.tsx
- src/main.jsx → src/main.tsx

## Step 5: Rename vite.config.js

Rename `vite.config.js` to `vite.config.ts` manually.

## Important Notes

- You'll need to provide your own Firebase credentials in the .env file
- The original branding "UrbanEstate" will be changed to a new name
- All currency symbols will remain as ₹ (Indian Rupee) - change if needed
- Firebase project reference removed - use your own Firebase project

## New Brand Identity (Coming)

A new brand name will be created to replace "UrbanEstate" throughout the application.
