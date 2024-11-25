---

# Portfolio

This repository contains the source code for my personal portfolio website, built with **Next.js**, **React**, **Tailwind CSS**, and deployed to **GitHub Pages**.

## Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Modern UI/UX**: Eye-catching animations and intuitive navigation.
- **Tailwind CSS**: Styled using Tailwind CSS for rapid and clean design implementation.
- **GitHub Pages Deployment**: Hosted on GitHub Pages under the `/portfolio` subpath.

---

## Demo

**Live URL**: [https://username.github.io/portfolio](https://username.github.io/portfolio)

---

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/)
- **Frontend Library**: [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: [GitHub Pages](https://pages.github.com/)

---

## Prerequisites

Before running or building the project, ensure you have the following installed:

- **Node.js** (v16 or later)
- **npm** or **yarn**

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/username/portfolio.git
cd portfolio
```

### Install Dependencies

```bash
npm install
```

---

## Development

### Run Locally

To start the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Build and Deployment

### Build the Project

To build the project for production:

```bash
npm run build
```

The build output will be located in the `.next` directory.

### Deploy to GitHub Pages

This portfolio uses `gh-pages` for deployment. Run the following command to deploy:

```bash
npm run deploy
```

**Note**: Ensure that the `basePath` and `assetPrefix` are configured correctly in `next.config.js` for GitHub Pages.

---

## File Structure

```plaintext
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx  # Layout component
│   │   └── page.tsx    # Main page component
│   ├── components/     # Reusable components
│   ├── styles/         # Tailwind CSS and global styles
│   │   └── globals.css
├── public/             # Static assets (e.g., images, favicon)
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json        # Project dependencies and scripts
```

---

## Environment Variables

If your portfolio uses environment variables, create a `.env.local` file in the root directory:

```plaintext
NEXT_PUBLIC_BASE_PATH=/portfolio
```

---

## Known Issues

1. **CSS Not Loading After Deployment**:

   - Ensure `basePath` and `assetPrefix` in `next.config.js` are set to `/portfolio` for production builds.
   - Confirm GitHub Pages is configured to serve the repository from the correct branch.

2. **Blank Page After Build**:
   - Verify that assets are being referenced with the `basePath` prefix in production.

---

## Contributions

Feel free to fork this repository and make your own enhancements. Pull requests are welcome!

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

---
