# 📁 Wei-Hsien (Rachel) Wang – Data Science & GenAI Portfolio

### Welcome to my portfolio!

I'm a Master of Science in Business Analytics student at the Rady School of Management, UC San Diego (graduating Dec 2025), with a strong foundation in machine learning, NLP, data engineering, and cloud technologies. I have hands-on experience in building end-to-end machine learning systems, scalable data pipelines, and AI-driven applications. My projects span various domains including recruitment, task management, and personalized recommendations, showcasing my ability to deliver impactful solutions using cutting-edge technologies.

---

## My Expertise

From October 2023 to March 2024, I conducted [research on data-driven digital transformation](https://github.com/rsm-wew068/research-paper.git), developing the PAD (Prediction And Decision) methodology to bridge machine learning predictions with business strategy implementation. Using RFM analysis and supervised learning algorithms, I built logistic and linear regression models achieving 85.2% accuracy and R² of 0.713, processing 54,000+ transaction records. I presented findings at the 2024 International Conference on Big Data and Enterprise Resource Management, demonstrating automated marketing strategies and ROI improvement through targeted customer segmentation.

From September to December 2023, I worked as a Finance Intern at Virbac in Taipei, where I used SQL to extract and clean financial data, enabling accurate reporting across Asian branches. I also developed Tableau dashboards that allowed senior leadership to visualize financial KPIs more efficiently, enhancing both ad hoc report accuracy and speed. Additionally, I regularly used Excel and PivotTables to validate figures and streamline financial reporting processes.

Earlier, from September 2022 to January 2023, I served as a Teaching Assistant at Soochow University, where I led sentiment analysis and text mining in R on visitor reviews for the National Museum of History, uncovering key themes during its renovation. I applied TF-IDF to prioritize feedback, contributing to a 10% improvement in museum services, and supported students in data analysis while fostering an inclusive learning environment.

Prior to that, I interned as a Data Analyst at Growth Strategy in Taipei from June to August 2022. There, I performed competitive and sentiment analysis on online reviews to support an emerging skincare brand's market strategy. Using Python and R, I identified customer pain points and refined STP targeting, delivering insights that guided ad targeting and increased customer acquisition by 15% in Q3.

## 🧠 AI Agents

### 🚀 [Capstone Project: AI-driven Custom Solutions for Financial Services Institutions](https://github.com/rsm-wew068/graph-ai-task-manager.git)
Developed a production-grade AI task agent using LangGraph, GraphRAG, OpenAI embeddings. Parsed Enron emails into normalized structured data (PostgreSQL), extracted task entities (including owner, sender, due date, priority identification, spam detection, and confidence scoring) with RAG (GPT-4 using semantic retrieval (FAISS)), and stored relationships in a bi-directional Neo4j task graph. Built a GraphRAG-based Q&A chatbot with full graph traversal and fallback scoring. Enabled explainable answers via 3-layered output: subgraph, response, and RAGAS score. Implemented LangSmith debugging and tracing and pause/resume logic for human-in-the-loop validation. Delivered Neo4j Aurora dashboard with AI-powered task management insights.
Team Lead: Wei-Hsien (Rachel) Wang (stakeholder communications, weekly task assignments, team management, prompt engineering, backend and frontend UI design)
Team Members: Wenxin Xu (task extraction), Yijiang Qian (owner/collaborators extraction), Shu Zhao (doc creation)
Team Advisor: Kathleen Maley
Sponsored by: Praxis Solutions

### 🌍 [Deep Learning and GenAI for Business](https://github.com/rsm-wew068/ai-recruitment-hub.git)
Built a full-stack AI Recruitment System to automate the hiring lifecycle from resume parsing to offer letter generation. Integrated LLaMA and Gemini APIs for summarizing candidate fit, generating interview emails, and drafting contracts. Delivered a Shiny for Python UI with visual analytics, Calendly-based scheduling, and PDF generation, containerized via Docker for deployment.
Authored by Ryosuke Aoguchi, Nicole Ou, Wei-Hsien (Rachel) Wang.

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

### [📊 Tableau Public Profile](https://public.tableau.com/app/profile/rachel.wang2435/vizzes)
Interactive dashboards tracking financial KPIs, segmentation insights, and product trends.

---

## 🔗 Profiles

- 🤗 [Hugging Face](https://huggingface.co/rsm-wew068)
- 🧮 [Tableau Public](https://public.tableau.com/app/profile/rachel.wang2435/vizzes)

---

## Certificate
AWS Certified Cloud Practitioner, Introducing Generative AI with AWS, Microsoft Certified: Azure Fundamentals, SAS Cortex Participant, IBM Deep Learning Essentials