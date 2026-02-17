# Elias's Portfolio

A personal portfolio website built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com).
Designed to showcase projects with detailed build logs and galleries.

## 🚀 Tech Stack

- **Framework**: Astro
- **Styling**: Tailwind CSS v4
- **Content**: Markdown & Astro Content Collections

## 📝 How to Add a New Project

Adding a new project is as simple as creating a folder and a markdown file.

1.  **Create a Project Folder**:
    Navigate to `src/content/projects/` and create a new folder for your project (e.g., `my-new-project`).

2.  **Add `index.md`**:
    Inside your new folder, create an `index.md` file with the following frontmatter:

    ```markdown
    ---
    title: "My New Project"
    description: "A brief description of what this project is about."
    date: 2023-10-27
    tags: ["Tag1", "Tag2"]
    heroImage: "./hero.jpg"
    featured: true # Optional: Set to true to display on the home page
    ---

    Your project content goes here...
    ```

3.  **Add Images**:
    Place your `hero.jpg` and any other images directly in the project folder. You can reference them in your markdown like this: `![Alt text](./image.jpg)`.

## 🛠️ How to Run Locally

1.  **Install dependencies**:
    ```sh
    npm install
    ```

2.  **Start the development server**:
    ```sh
    npm run dev
    ```

3.  **Build for production**:
    ```sh
    npm run build
    ```
