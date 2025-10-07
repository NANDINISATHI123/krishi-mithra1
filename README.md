# Krishi Mitra – AI-Powered Organic Farming Companion

Krishi Mitra is a full-stack, AI-powered Progressive Web App (PWA) designed to assist small-scale and tribal farmers with organic farming practices. It combines modern technology with community wisdom, offering multilingual support, full offline capabilities, AI crop diagnosis, and much more.

This project is built as a hackathon-ready, deployable application with a focus on user experience, accessibility, and real-world utility for farmers in low-connectivity areas.

## ✨ Features

- **AI Crop Diagnosis**: Upload a photo of a crop to get an instant diagnosis, treatment recommendations, and an explanation.
- **Multilingual Support**: Fully translated interface in English and Telugu, including Text-to-Speech for audio instructions.
- **Persistent Cloud Data**: All user data is securely stored in a Supabase backend, ensuring it's available across all devices.
- **PWA with Offline Access**: As a PWA, the core application shell works without an internet connection after the first visit.
- **Role-Based Dashboards**: Separate, secure dashboards for regular users (Employees) and an Administrator, powered by Supabase Auth.
- **Admin Content Management**: The admin can add, edit, and delete tutorials and supplier information directly from their dashboard.
- **Seasonal Advisory Calendar**: Month-by-month organic farming tasks that can be marked as complete.
- **Community Feed**: A space for farmers to share knowledge, ask questions, and upload photos.
- **Success Tracker**: Log the outcomes of applied treatments to build a personal history of what works.
- **Resource Directories**: Access to video tutorials and a directory of a local organic suppliers.
- **Feedback System**: Users can submit feedback directly to the admin.
- **Light & Dark Mode**: A theme toggle for user comfort, with the preference saved locally.

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Backend**: Supabase (Auth, Database, Storage)
- **Styling**: Tailwind CSS
- **AI Service**: Google Gemini API
- **PWA**: Implemented with a custom Service Worker and a Web App Manifest.
- **Speech**: Native Web Speech API for voice recognition and synthesis.

## 🚀 Getting Started

This project consists of a Vite-based frontend and a Supabase backend. Follow these steps to get everything running.

### 1. Set Up the Supabase Backend

1.  **Create a Supabase Project**:
    *   Go to [supabase.com](https://supabase.com) and create a new project.
    *   Save your **Project URL** and **anon public key**.

2.  **Run the Database Schema Script**:
    *   In your Supabase project dashboard, find the **SQL Editor**.
    *   Open the `supabase/schema.sql` file (if provided) or manually create tables.
    *   Paste the schema script and run it. This will create all necessary tables and security policies.

3.  **Update Frontend with Supabase Keys**:
    *   Open the `src/lib/supabaseClient.ts` file.
    *   Replace the placeholder `supabaseUrl` and `supabaseAnonKey` with your actual keys.

### 2. Run the Frontend Locally

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Create Environment File**:
    *   Create a file named `.env.local` in the root of your project.
    *   Add your Google Gemini API key to this file:
    ```
    VITE_API_KEY=YOUR_GEMINI_API_KEY_HERE
    ```
3.  **Run the Development Server**:
    ```bash
    npm run dev
    ```
4.  Open your browser and navigate to the local address provided (e.g., `http://localhost:5173`).

## ☁️ Deployment to Netlify

1.  **Push to a Git Repository**: Push the project to GitHub, GitLab, or Bitbucket.
2.  **Import to Netlify**: On Netlify, import the project from your Git provider.
3.  **Deployment Settings**: Configure the build settings as follows:
    -   **Build command**: `npm run build`
    -   **Publish directory**: `dist`
4.  **Environment Variables**:
    *   Go to **Site settings** > **Build & deploy** > **Environment**.
    *   Add your environment variables:
        - `VITE_API_KEY`: Your Google Gemini API Key.
5.  Click **"Deploy site"**. Netlify will build your project and deploy the `dist` folder.
