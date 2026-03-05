---
title: "LLMs & Generative AI"
date: "March 2026"
excerpt: "A high-level walkthrough of how large language models work — from tokenisation and transformers to training and inference."
tags: ["LLMs", "AI", "Machine Learning"]
---

## **Introduction to LLMs and Generative AI**

LLMs work by predicting the next most probable **token** in a sequence. While the initial learning phase (**training**) involves processing vast amounts of data in parallel using the **Transformer architecture**, the actual text generation you see is fundamentally **sequential**. The process begins with the model processing your input, selecting the highest probability token, and outputting it. This newly selected token is then immediately fed back into the model, extending the context. The model then processes the full, updated sequence to predict the next token, and this loop repeats, token-by-token, until the sequence is complete. The resulting output is a string of tokens, each generated based on a statistical prediction of what should follow all the preceding tokens in the conversation.
## **The Transformer — What It Is and How It Works (High Level)**

Before the invention of the **transformer**, datasets used to train LLMs were processed **sequentially**, which was slow and computationally expensive. The transformer, which was invented in **2017** by a team working for **Google**, allowed for data to be processed in **parallel** rather than sequentially. Transformers use a **self-attention mechanism** that weights the importance of different words in a text simultaneously, allowing for better understanding of context, and significantly faster processing times. This breakthrough in processing speed significantly reduced model training times and facilitated the Large Language Models we have today.

## **Tokenisation**

**Tokenisation** is a fundamental step in data processing. It involves breaking input text into "tokens" or chunks, such as words, characters, or subwords, that a machine can understand.
Because machine learning models cannot process text directly, these tokens are mapped to unique **numerical IDs** from a predefined vocabulary. For example, the string "Hello World!" might be split into four tokens: "Hello", " ", "World", and "!". These are then converted into IDs like 432, 4, 6141, and 45. When the model generates a response, this process is reversed: the predicted numerical IDs are mapped back into human-readable text.

## **Pre-training**

Before an LLM is able to generate text, it first has to know how language works. This process is known as **pre-training**, which is extremely computationally intensive. This process first begins with gathering as much high quality data  (text in this situation) as possible. The dataset created ideally contains highly diverse data that contains a wide variety of information.

Following this, the data collected must be converted into numbers, which is done through **tokenisation**, as explained above. Once the text is tokenised, the neural network learns to predict the next token based on the context it has. Initially, the model will make random, terrible, predictions, but as training progresses, it learns to assign probabilities to next tokens. Once the “correct” token is identified, the model goes through a process called **backpropagation**, which tunes its billions of parameters to reinforce the correct prediction and reduce the likelihood of incorrect predictions. With large datasets, this process is repeated billions of times.

## **Post Training: Fine-tuning and RLHF**

After **pre-training**, while the model is able to make “correct” predictions, it is still unrefined. To make them useful and reliable, they go through **post-training**, which is where they are **fine-tuned** on specialised datasets.

Specialised datasets are created, which contain structured examples of how the model should respond in different situations. During post-training, **reinforcement learning from human feedback (RLHF)** takes place as well. Workers flag unhelpful or problematic predictions, which makes the AI more likely to give answers users would prefer. 

## **Inference**

**Inference** is the process of how the model generates new text. Inference can be performed at any stage, and usually is, as it is used to evaluate how well the model has learned. When given an input sequence of tokens, the model assigns probabilities to all possible text tokens from its alphabet, based on the patterns it has learned during training. Now you may think the model would always pick the most likely token/ the token with the highest probability of being the “correct” next token. This is not true, as the model chooses based on the **probability distribution**. This is similar to flipping a biased coin or a weighted dice, despite a specific outcome being likely, sometimes the unlikely pick will be chosen. This process is why the same input from the user doesn’t result in the same output. Additionally, this probabilistic choice can be adjusted for specific purposes. For example, when dealing with code or math, the most “correct” answer is favoured heavily, with no variation wanted. However, when trying to write creative texts, sometimes less “correct” selections are favourable. 

## **To End Off**

When writing the title for this blog post I acknowledged that it is an impossibly large topic to cover, especially in a short form post like this. I did my best to give a high level overview of the functionality of LLMs and generative AI and what it means. 

**Key points to remember:**

- **Generative AI** is the broad field, **LLMs (Large Language Models)** are a subset that specialise in text
- The **Transformer model** (Google, 2017) enables parallel processing and speeds up training using a **self-attention mechanism**.
- **Tokenisation** converts text into numerical IDs ("tokens") for machine processing.
- **Training is two-step:**
	- **Pre-training:** Learns language structure by predicting the next token from massive datasets (involves backpropagation).
	- **Post-training (Fine-tuning & RLHF):** Refines the model using specialized data and **Reinforcement Learning with Human Feedback (RLHF)** to align with user preferences.
- LLMs predict the next token **probabilistically** during **Inference** (generation), assigning probabilities to potential next words.
