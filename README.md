# 🧠 Prepwise – AI Mock Interview Platform

**Prepwise** is an AI-powered web platform designed to simulate real-world job interviews using voice-based agents and provide personalized feedback using large language models. This project was developed as part of my internship at **Clevero Technology Pvt. Ltd.**

---

## 🚀 Features

- 🔐 **Authentication**: Email/password login via Firebase Authentication.
- 🎤 **Voice Interviews**: Real-time interactive interviews using Vapi AI.
- 🧠 **AI Feedback**: Intelligent feedback generated using Google Gemini (LLM).
- 📊 **User Dashboard**: Track past interviews, feedback history, and transcripts.
- 📱 **Responsive UI**: Fully mobile-friendly with Tailwind CSS + shadcn/ui components.
- ✅ **Schema Validation**: Using Zod for strict type-safe form validation.

---

## 🛠️ Tech Stack

| Category           | Technologies Used                             |
|--------------------|-----------------------------------------------|
| Frontend           | Next.js, Tailwind CSS, shadcn/ui              |
| Backend/API        | Next.js API Routes, Vapi AI, Google Gemini    |
| Auth & Storage     | Firebase Auth, Firebase Firestore             |
| Validation         | Zod                                           |
| Version Control    | Git + GitHub                                  |
| Collaboration      | Figma, Slack, Google Meet                     |

---

## 📁 Project Structure

```bash
.
├── app
│   ├── (auth)
│   │   ├── layout.tsx
│   │   ├── sign-in
│   │   │   └── page.tsx
│   │   └── sign-up
│   │       └── page.tsx
│   ├── (root)
│   │   ├── interview
│   │   │   ├── [id]
│   │   │   │   ├── feedback
│   │   │   │   │   └── page.tsx
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── api
│   │   └── vapi
│   │       └── generate
│   │           └── route.ts
│   ├── favicon.ico
│   ├── globals.css
│   └── layout.tsx
├── components
│   ├── Agent.tsx
│   ├── AuthForm.tsx
│   ├── DisplayTechIcons.tsx
│   ├── FormField.tsx
│   ├── InterviewCard.tsx
│   └── ui
│       ├── button.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── label.tsx
│       └── sonner.tsx
├── components.json
├── constants
│   └── index.ts
├── eslint.config.mjs
├── firebase
│   ├── admin.ts
│   └── client.ts
├── lib
│   ├── actions
│   │   ├── auth.action.ts
│   │   └── general.action.ts
│   ├── utils.ts
│   └── vapi.sdk.ts
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── ai-avatar.png
│   ├── calendar.svg
│   ├── covers
│   │   ├── adobe.png
│   │   ├── amazon.png
│   │   ├── facebook.png
│   │   ├── hostinger.png
│   │   ├── pinterest.png
│   │   ├── quora.png
│   │   ├── reddit.png
│   │   ├── skype.png
│   │   ├── spotify.png
│   │   ├── telegram.png
│   │   ├── tiktok.png
│   │   └── yahoo.png
│   ├── file.svg
│   ├── globe.svg
│   ├── logo.svg
│   ├── pattern.png
│   ├── profile.svg
│   ├── react.svg
│   ├── robot.png
│   ├── star.svg
│   ├── tailwind.svg
│   ├── tech.svg
│   ├── upload.svg
│   ├── user-avatar.jpeg
│   └── window.svg
├── README.md
├── tsconfig.json
├── types
│   ├── index.d.ts
│   └── vapi.d.ts
└── utils
    └── signOutUser.ts
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/prepwise.git
cd prepwise
```
### 2. Install Dependencies
```bash
npm install
```

### 3. Add Environment Variables
Create a .env.local file and include the following:
```bash
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=

GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

### 4. Run the App
```bash
npm install
```

## 💡 Highlights
- Modular & maintainable full-stack architecture.
- Real-time voice interviews powered by Vapi AI.
- Gemini LLM for detailed interview feedback.
- Intuitive user experience across all screen sizes.
- Clean codebase using modern tools like Zod, shadcn/ui.
