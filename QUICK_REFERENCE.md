# ⚡ PropFinder - Quick Reference Card

## 🚀 Quick Start (3 Steps)

### 1️⃣ Convert Files
```powershell
.\convert-to-typescript.ps1
```

### 2️⃣ Install
```bash
cd client
npm install
```

### 3️⃣ Run
```bash
npm run dev
```

## 📁 Files to Create

Copy code from **TYPESCRIPT_MIGRATION_GUIDE.md** for these files:

```
client/src/
├── lib/
│   └── utils.ts                    # CN utility
├── types/
│   └── index.ts                    # All TypeScript types
└── components/ui/
    ├── button.tsx                  # shadcn Button
    ├── input.tsx                   # shadcn Input
    ├── label.tsx                   # shadcn Label
    ├── card.tsx                    # shadcn Card
    └── textarea.tsx                # shadcn Textarea
```

## 🔍 Find & Replace (VS Code: Ctrl+Shift+H)

| Find | Replace | Mode |
|------|---------|------|
| `\.jsx(['"])` | `$1` | Regex ✓ |
| `UrbanEstate` | `PropFinder` | Case ✓ |
| `Urban` (Header only) | `Prop` | Case ✓ |
| `Estate` (Header only) | `Finder` | Case ✓ |

## 🔐 Environment Setup

**client/.env**
```env
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_id
VITE_FIREBASE_APP_ID=your_app_id
```

**root/.env**
```env
MONGO=mongodb+srv://...
JWT_SECRET=your_secret_key
```

## 📝 Key Changes Made

✅ Removed all author info (Abhishek Singh)
✅ Changed GitHub to srijantrpth  
✅ Rebranded to PropFinder
✅ Added TypeScript config
✅ Added shadcn/ui components
✅ Updated Tailwind with modern theme
✅ Created comprehensive guides

## 🎯 Update These Files

After running script, update:

1. **client/index.html**
   - Change title to "PropFinder"

2. **client/src/components/Header.tsx**
   - Replace "Urban" with "Prop"
   - Replace "Estate" with "Finder"

3. **client/src/firebase.ts**
   - Use env variables
   - Add FirebaseConfig type

4. **All form components**
   - Import shadcn components
   - Replace inputs with shadcn Input
   - Replace buttons with shadcn Button

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| **START_HERE.md** | Main overview |
| **TYPESCRIPT_MIGRATION_GUIDE.md** | All TS code to copy |
| **COMPLETE_CHECKLIST.md** | Detailed task list |
| **SETUP_INSTRUCTIONS.md** | Setup steps |
| **convert-to-typescript.ps1** | Auto conversion script |

## ⚠️ Important

- ❌ Don't commit `.env` files
- ✅ Use your own Firebase project
- ✅ Test after each major change
- ✅ Check TypeScript errors: `npm run build`

## 🎨 shadcn/ui Components Usage

```typescript
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

<Button variant="default">Click Me</Button>
<Input type="email" placeholder="Email" />
<Card>Content here</Card>
```

## 🔧 Useful Commands

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run lint         # Check code quality
npm run preview      # Preview production build
```

## 📞 Need Help?

1. Check **COMPLETE_CHECKLIST.md** for detailed steps
2. Check **TYPESCRIPT_MIGRATION_GUIDE.md** for code
3. Check console errors and fix TypeScript issues
4. Make sure all imports don't have `.jsx` extensions

## ✅ Completion Checklist

- [ ] Run conversion script
- [ ] Install dependencies
- [ ] Create 7 TypeScript files
- [ ] Find & Replace (4 operations)
- [ ] Update index.html title
- [ ] Update Header component
- [ ] Setup .env files
- [ ] Update firebase.ts
- [ ] Test `npm run dev`
- [ ] Fix TypeScript errors
- [ ] Update forms with shadcn
- [ ] Build `npm run build`
- [ ] Deploy 🚀

---

**🎉 That's it! You're ready to transform your project to PropFinder!**

Read **START_HERE.md** for complete details.
