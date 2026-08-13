# Dhvani Dave — Portfolio

Personal portfolio for **Dhvani Dave**, a Software Engineer and M.S. Computer Science student at the University at Buffalo.

Built to showcase professional experience, selected software and AI projects, education, technical skills, and certificates in a polished interactive experience.

## Highlights

- Responsive Next.js portfolio with a fixed navigation and scroll-aware active links
- Project and education cards with glass-inspired interactions
- Detailed experience, coursework, technical skills, awards, and contact sections
- Downloadable resume and direct GitHub, LinkedIn, email, and phone links
- Gemini-powered portfolio assistant that answers questions using portfolio content

## Tech Stack

- Next.js 16
- React 19 and TypeScript
- CSS and Framer Motion
- Gemini API for the portfolio assistant
- Vercel for deployment

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

To enable the portfolio assistant, add a `.env.local` file in the project root:

```env
GEMINI_API_KEY=your_gemini_api_key
```

Keep this file private. It is ignored by Git and must also be configured in your deployment provider.

## Production Build

```bash
npm run build
npm start
```

## Deployment

The project is ready to deploy on Vercel. Add `GEMINI_API_KEY` to the Vercel environment variables for Production, Preview, and Development so the portfolio assistant works after deployment.

## Contact

- GitHub: [@dhvani7014](https://github.com/dhvani7014)
- LinkedIn: [dhvanidave7014](https://linkedin.com/in/dhvanidave7014)
- Email: dhvanidave7014@gmail.com
