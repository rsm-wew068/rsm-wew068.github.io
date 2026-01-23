# 🌐 Wei-Hsien (Rachel) Wang - Portfolio Website

[![Portfolio Status](https://img.shields.io/badge/Portfolio-Live-brightgreen)](https://portfolio-site-554933605441.us-central1.run.app)
[![Cloud Run](https://img.shields.io/badge/Hosted%20on-Google%20Cloud%20Run-4285F4?logo=google-cloud&logoColor=white)](https://cloud.google.com/run)

**Data Scientist | Data Science & GenAI Specialist | MS Business Analytics @ UC San Diego**

---

## 🚀 Live Portfolio
**Visit my interactive AI-powered portfolio:** [https://portfolio-site-554933605441.us-central1.run.app](https://portfolio-site-554933605441.us-central1.run.app)

## 👩‍💼 About Me
I'm currently a Master of Science in Business Analytics student at UC San Diego (graduating Dec 2025). I specialize in machine learning, NLP, data engineering, and generative AI technologies, with hands-on experience building end-to-end ML systems and scalable data pipelines.

## 🎯 Expertise
- **AI/ML Engineering**: Production-grade AI systems, LangGraph, GraphRAG
- **Generative AI**: GPT-4, LLaMA, Gemini APIs, RAG implementations
- **Data Engineering**: PostgreSQL, Neo4j, Snowflake, AWS EMR, PySpark
- **Machine Learning**: XGBoost, Neural Networks, NLP, Computer Vision
- **Cloud Technologies**: AWS, Azure, Docker, SageMaker

## 🏆 Featured Projects

### 🚀 AI-Driven Task Management System (Capstone)
**Technologies**: LangGraph, GraphRAG, GPT-4, PostgreSQL, Neo4j, FAISS  
Production-grade AI agent processing Enron emails with human-in-the-loop validation and explainable GraphRAG answers.  
[🔗 Repository](https://github.com/rsm-wew068/graph-ai-task-manager.git)

### 🌍 AI Recruitment Hub
**Technologies**: LLaMA, Gemini APIs, Python Shiny, Docker  
Full-stack system automating hiring lifecycle from resume parsing to offer generation.  
[🔗 Repository](https://github.com/rsm-wew068/ai-recruitment-hub.git)

---

## 🧪 Applied Modeling Projects

### 📂 [Customer Analytics](https://github.com/rsm-wew068/mgta495-customer-analytics.git)  
A suite of business analytics cases covering predictive modeling, A/B testing, and profit optimization across various real-world customer scenarios:
Authored by Ryosuke Aoguchi, Wei-Hsien (Rachel) Wang, Jaqueline Vallejo, Qiyong Zhang.

- **Tuango: Targeting Mobile App Messages** – Predicted buyer response using logistic regression and estimated order size via linear regression; focused on profitability of message targeting.
- **TZ Gaming: Optimal Mobile Ad Targeting** – Applied logistic regression with decile and ROME analysis to optimize ad click-through; compared targeting strategies using confusion matrix and profit metrics.
- **Intuit: QuickBooks Upgrade Prediction** – Modeled upgrade likelihood using logistic regression and neural nets; designed targeting plans for high-profit segments.
- **Creative Gaming: Propensity-to-Buy & Uplift Modeling** – Predicted buyer propensity and estimated incremental ad impact using uplift models (XGBoost, RF, NN); emphasized A/B testing and treatment effect estimation.
- **Pentathlon: Next Product to Buy** – Recommended next likely product using logit, XGBoost, RF, NN, and linear regression; focused on profit-maximizing personalized targeting.
- **S-Mobile: Customer Churn** – Identified churn risk and key drivers using logistic regression and XGBoost; informed retention and CLV strategy.
- **FiTech: Customer Adoption and Value** – Forecasted adoption, usage frequency, and long-term value of new financial products using logistic regression, RF, XGBoost, and neural networks.


### 🎼 [Machine Learning for Music](https://github.com/rsm-wew068/music-generation.git)
Completed a full progression through modern music AI, starting with audio signal processing and advancing to symbolic and generative modeling. Covered MIDI classification, audio feature extraction, Markov chains, REMI tokenization, and diffusion models for audio generation. A major midterm assignment involved composer classification, sequence prediction, and genre tagging using CNNs and XGBoost.

- **Final Project**: 

Task 1: Unconditioned Symbolic Generation
- Use the MAESTRO 2018 dataset for high-quality MIDI piano performances.
- Separate harmony and melody generation to maintain musical structure.
* Chord generation: Train a 2nd-order Markov Chain to generate plausible chord progressions.
* Melody generation: Train an LSTM-based RNN to predict the next note in an 8-note melody sequence.
* Train both models from scratch using the MAESTRO data.
* Evaluate based on temporal and harmonic alignment, melodic continuity, and structural coherence.
* Merge sequences into playable MIDI files using pretty_midi.

Task 2: Conditioned Symbolic Generation
- Use the Nottingham folk music corpus (in ABC format) for multi-instrument music (melody, chords, bass).
- Learn using REMI tokenization and a Transformer decoder.
* Data augmentation: Transpose sequences ±1 and ±2 semitones to expand the training set ~5×.
* REMI tokenization interleaves melody, chord, and bass lines into structured tokens.
* Training:
    - Stage 1 (Baseline): The Transformer is trained on a 2k-sample subset for 10 epochs.
    - Stage 2 (Fine-Tuning): The model is fine-tuned on the full dataset with a validation split, learning rate scheduler, and gradient clipping over 30 epochs.
* Structured generation:
- Final music is generated in three sections: intro, climax (pitch-shifted +5, thinned), and resolution (pitch-shifted −4), forming a musical arc.
* Expressive decoding:
    - Trained MLP regressors predict note duration, MIDI velocity, articulation, and tempo.
* Evaluation:
- Qualitative music playback and validation loss monitoring were used for evaluation.
- The model’s ability to generate coherent multi-instrumental music was assessed by enforcing structured phrases and expressive performance.
* Output:
- Generated symbolic sequences are rendered into expressive MIDI and WAV files using music21 and fluidsynth.

### 🎆 [Analyzing Unstructured Data](https://github.com/rsm-wew068/mgta415-unstructured-data.git)
A complete exploration of NLP and deep learning for unstructured data, covering traditional text classification, word embeddings, language modeling, and prototype-based image learning. Coursework includes:
- **Homework 1**: Sentiment classification using TF-IDF and logistic regression on the Financial Phrase Bank
- **Homework 2**: Word2Vec vs. GloVe embeddings and n-gram language models with smoothing
- **Homework 3**: Phrase mining and domain-specific embeddings using AutoPhrase on CS papers
- **Data Challenge**: Multi-class restaurant classification using TF-IDF, n-grams, and ensemble tuning (~81% F1)
- **Final Project**: Image classification via data prototyping on MNIST, EMNIST, and KMNIST using random sampling, K-Means clustering, and KNN. Evaluated trade-offs in dataset size vs. performance and benchmarked against CNNs with Lipschitz regularization. Authored by Ryosuke Aoguchi, Nicole Ou, Wei-Hsien (Rachel) Wang.

### 🍽️ [Web Mining & Recommender Systems](https://github.com/rsm-wew068/mgta461-web-mining.git)  
Applied machine learning course focused on recommendation systems and text mining.  
- **Collaborative Filtering**: Jaccard similarity, SVD, user/item bias models  
- **Content-Based Filtering**: TF-IDF, cosine similarity, nutrition/time filters  
- **Text Classification**: Steam reviews + TF-IDF, Word2Vec, logistic regression  
- **Final Project**: Multi-label recipe classification & recommendation system using XGBoost, SVD, and content-based filtering  
- Demonstrated 79% accuracy on multi-cuisine prediction and built an interactive engine for user preference queries
- Authored by Darren Trieu, Wei-Hsien (Rachel) Wang, Akshay Ghosh, Mathew Luo

---

## 📊 Data & Cloud Engineering Projects

### 🔁 [Scalable Analytics](https://github.com/rsm-wew068/mgta466-scalable-analytics.git)  
A comprehensive series of cloud-based analytics assignments covering PySpark, AWS EMR, and SageMaker. Projects include large-scale text processing, airline delay analysis, and salary prediction using XGBoost. Emphasizes performance benchmarking, distributed computing, cloud ML deployment, and end-to-end scalability. Designed for production-level data engineering and ML workflows using real-world datasets.

### 📦 [SQL & ETL](https://github.com/rsm-wew068/mgta464-sql-etl.git)  
Designed and implemented advanced SQL and ETL workflows across PostgreSQL and Snowflake. Integrated supplier, invoice, and weather datasets from CSV, XML, and Postgres sources. Applied recursive CTEs, fuzzy matching, and window functions to build a cloud-based materialized view for analyzing PO variance and supplier performance. Demonstrates full-stack data engineering and business intelligence pipeline design.
- **Final Project**: Automated ingestion of multi-format datasets (CSV, XML, PostgreSQL, and Marketplace APIs) into Snowflake using Python to compute PO amounts, invoice discrepancies, and joined purchasing and weather data into materialized views; enabled analytics on invoice vs. quoted price under varied temperature conditions. Authored by Yangqi Huang, Wei-Hsien (Rachel) Wang, Zewei Chen, Guoxuan Li.

---

## 📊 Portfolio Features
- **Interactive navigation** with smooth animations
- **Responsive layout** optimized for all devices
- **Project showcases** with detailed technical descriptions
- **Professional timeline** with current position highlighting
- **Tech stack visualization** and achievement highlights

## 🛠️ Portfolio Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Design**: Inter font, CSS Grid/Flexbox, CSS animations
- **Hosting**: GitHub Pages
- **Development**: Python HTTP server for local testing

---

## 📱 Connect With Me
- **Email**: [wew068@ucsd.edu](mailto:wew068@ucsd.edu)
- **LinkedIn**: [wei-hsien-wang-b21922230](https://linkedin.com/in/wei-hsien-wang-b21922230)
- **GitHub**: [@rsm-wew068](https://github.com/rsm-wew068)
- **Hugging Face**: [rsm-wew068](https://huggingface.co/rsm-wew068)
- **Tableau**: [Rachel Wang](https://public.tableau.com/app/profile/rachel.wang2435/vizzes)

---

**📄 License**: MIT License  
**⭐ Star this repo** if you find my portfolio inspiring!

*Last updated: August 2025*