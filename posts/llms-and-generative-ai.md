---
title: "LLMs & Generative AI"
date: "March 2026"
excerpt: "A mid-level walkthrough of how large language models actually work — from tokenisation and transformers to RAG, alignment, and where they fit inside real software systems."
tags: ["LLMs", "AI", "Machine Learning"]
---

## What Is a Large Language Model?

TODO — cover what defines an LLM (scale of parameters, training data), how they differ from earlier ML models, and why "predicting the next token" produces something that feels like reasoning.

## The Transformer Architecture

TODO — explain the attention mechanism at a conceptual level, why transformers replaced RNNs, and what "self-attention" actually means without getting lost in the maths.

## Tokenisation

TODO — cover how raw text is broken into tokens, why the choice of tokeniser matters, and the practical implications (token limits, non-English text, code vs prose).

## Pre-training: Learning from the Internet

TODO — describe next-token prediction as the pre-training objective, the role of data scale and diversity, and what a model actually "knows" after pre-training.

## Fine-tuning and RLHF

TODO — explain supervised fine-tuning, reinforcement learning from human feedback, and why these steps are what turn a raw language model into something like ChatGPT.

## Embeddings and Vector Representations

TODO — cover how text becomes a point in high-dimensional space, why semantically similar phrases cluster together, and where embeddings show up in practice (search, RAG, classification).

## Prompt Engineering

TODO — introduce zero-shot, few-shot, and chain-of-thought prompting. Explain why prompt structure meaningfully changes outputs and what that implies about how models process instructions.

## Retrieval-Augmented Generation (RAG)

TODO — explain the problem RAG solves (stale knowledge, hallucination on specific facts), how a vector store fits in, and the basic retrieval-then-generate pipeline.

## Context Windows and Their Limits

TODO — cover what the context window is, why length matters for reasoning quality, and practical strategies like chunking, summarisation, and sliding windows.

## Hallucination — Why LLMs Make Things Up

TODO — explain why hallucination is a fundamental property of probabilistic text generation, not a bug to be fixed, and cover mitigation strategies (grounding, RAG, confidence signalling).

## Inference: From Prompt to Token

TODO — walk through what happens at inference time — sampling strategies, temperature, top-p, and how these parameters trade off creativity vs determinism.

## Open Source vs Proprietary Models

TODO — compare the tradeoffs: cost, capability, control, privacy, and deployment complexity. Cover the main open-weight families (Llama, Mistral) vs API providers (OpenAI, Anthropic, Google).

## Cost, Latency, and the Trade-offs of Scale

TODO — discuss the practical economics of running LLMs: API token pricing, self-hosting costs, quantisation, and when a smaller model is the right call.

## AI Safety, Alignment, and Guardrails

TODO — introduce alignment as a problem (getting models to do what you intend), cover Constitutional AI and RLHF as approaches, and touch on output filtering and red-teaming.

## Where LLMs Fit Inside a Real Software System

TODO — cover orchestration patterns (LangChain, function calling, tool use), the agent loop, and how to think about LLMs as a probabilistic component in an otherwise deterministic system.
