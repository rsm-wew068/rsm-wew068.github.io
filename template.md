*This is a submission for the [New Year, New You Portfolio Challenge Presented by Google AI](https://dev.to/challenges/new-year-new-you-google-ai-2025-12-31)*

## About Me
Hi everyone! I'm **Wei-Hsien (Rachel) Wang**, an AI Engineer and **MS in Business Analytics graduate** from UC San Diego. I specialize in building **neuro-symbolic AI systems**, **MLOps pipelines**, and **scalable data infrastructure**.

For this challenge, I wanted to showcase my work not just as a static list of projects, but as an **interactive, AI-powered experience**. My goal was to build a portfolio that "talks back"—allowing recruiters and visitors to chat with an AI agent that knows my resume inside and out!

## Portfolio
{% embed https://portfolio-site-554933605441.us-central1.run.app %}

## How I Built It
My portfolio is a modern, responsive web application served by **FastAPI** and powered by **Google's Gemini 3 Flash Preview** model.

### 🛠️ Tech Stack
*   **Frontend**: HTML5, CSS3, JavaScript (Vanilla for maximum performance & control)
*   **Backend**: Python (FastAPI)
*   **AI Model**: **Gemini 3 Flash Preview** (via Google AI Studio)
*   **Infrastructure**: Docker, **Google Cloud Run**, **Google Cloud Build**
*   **Deployment**: Automated CI/CD pipeline triggered by GitHub pushes

### 🤖 The "Chat with Me" Agent
The highlight of the portfolio is the floating chat widget. Instead of a standard contact form, I integrated a RAG-lite system:
1.  **Context Loading**: The backend reads the live `index.html` content directly, ensuring the AI always has the most up-to-date view of my experience.
2.  **Gemini 3 Flash**: I used the `gemini-3-flash-preview` model for its incredible speed and large context window. It acts as my "digital twin," answering questions like *"What experience does Rachel have with GraphRAG?"* or *"Tell me about her work at Praxis Solutions."*
3.  **System Prompting**: I designed a custom system persona that instructs Gemini to be professional, enthusiastic, and strictly grounded in my resume facts.

### ☁️ Cloud Architecture at a Glance
I utilized **Google Cloud Build** to set up a continuous deployment pipeline. Every time I push code to GitHub:
1.  Cloud Build detects the change.
2.  It builds a new Docker container.
3.  It pushes the image to **Artifact Registry**.
4.  It automatically deploys the new revision to **Cloud Run**.

This automation allows me to iterate rapidly—updating my resume text in the code automatically updates the AI's knowledge base!

## What I'm Most Proud Of
I'm particularly proud of two things:

1.  **The "Live Resume" Integration**: By configuring the AI to read my `index.html` file as its source of truth, I eliminated the need to maintain a separate knowledge base. If I update my job title on the website, the chatbot knows about it instantly.
2.  **The Smooth UX**: The integration of the chat widget feels native and premium. Using **Gemini 1.5 Flash** (and now **Gemini 3**) ensures the responses are near-instant, making the conversation feel natural rather than robotic.

Building this portfolio challenged me to combine my frontend design skills with my backend engineering expertise, resulting in a project that truly represents who I am as an AI Engineer.

<!-- Cover image for the post -->
![Portfolio Preview](https://github.com/rsm-wew068/rsm-wew068.github.io/assets/images/portfolio-preview.png)

Thanks for checking out my submission! 👋