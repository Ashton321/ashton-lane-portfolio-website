---
title: "Databases"
date: "March 2026"
excerpt: "A breakdown of what databases are, how they work, and when to use relational vs NoSQL — including the role of the DBMS and cloud storage."
tags: ["Databases", "SQL", "NoSQL"]
---

## **What is Data?**

The word **data** refers to raw, unorganised facts and figures, such as videos, images, text, numbers, symbols etc, that can be processed and analysed to extract meaningful information. There are two ways data can appear. It can appear in **raw form**, which is unorganised, or **processed form**, meaning it is organised and meaningful.

## **What is a Database?**

A **database** is a structured collection of data that is designed to store data efficiently, allowing for quick addition, retrieval and manipulation. Its purpose is to serve as a centralised repository that allows data to be accessed, managed and updated by many users or applications.

## **Why are Databases Important?**

Databases, more specifically high performing databases, are essential for any system. They are important because they **scale efficiently** (can handle massive amounts of data), they ensure **data integrity** (using rules and constraints built in) and they **protect data** (with secure access controls).

## **Database Components**

Databases can be broken up into 5 main components that work together to store and organise data effectively.

- **Data:** The information stored in the database
- **Schema:** The structure that the database follows, defining how data is organised (tables, fields, data types, and relationships)
- **DBMS:** The software that manages the database operations
- **Queries:** The instructions used to retrieve and manipulate data
- **Users:** The people who use and interact with the database

## **DBMS vs Database**

A common misconception is that the database and the **DBMS** are the same thing. This is incorrect, and they both have very different jobs. To explain this well, I will use an analogy about a library.

The **Database** is like the library itself. It is the actual collection of files, tables, and raw data sitting on the server's hard drive (storage). In the case of the library, you can think of it as the books and bookshelves in the library.

The **DBMS** is the software, or in our case the librarian. It is the brain that sits outside in front of the data, and is what you talk to if you want to get access to the stored data. In our example, if you wanted to borrow or return a book, you wouldn't go and talk (query) to the library itself, but rather the librarian at the front desk.

## **Types of Databases**

### Relational Databases

**Relational Databases** are the most widely used type of database currently. They store data in tables, with columns representing attributes of the records, and rows representing the records. In these databases, all pieces of information have a relationship with every other piece of information. This relies on every data value having a unique identity (**primary key**) in the form of a record. Every row of data in a relational database is linked with another row using a **Foreign Key**. You can see this in the diagram below.

![Database Diagram](/project-shots/Database%20Diagram.png)

Examples of popular relational databases are: **MySQL**, **PostgreSQL**, **Oracle Database**.

### NoSQL Databases (Non-Relational)

**NoSQL databases** are a broad category of databases that includes any database where SQL is not the primary data access language. Data in NoSQL databases don't have to conform to a pre-defined schema, so these types of databases are great for organisations that are aiming to store unstructured or semi-structured data.

## **When to Use Which Database?**

Choosing which database type to use depends on what you are trying to achieve or build. Choosing the right database is like choosing the right vehicle for a trip. You wouldn't take a Ferrari to pick up furniture, and you wouldn't take a tractor to race around a track.

| Database Type | Best For | Real-World Example |
| --- | --- | --- |
| **Relational (SQL)** | Records that need to be 100% accurate, consistent, and structured | Banking: Ensuring your balance is exactly right every time you tap your card. |
| **Non-relational (NoSQL)** | Rapidly changing data or massive, "messy" information that doesn't fit in a neat table. | Social Media: Storing a mix of text, videos, likes, and comments on a Facebook feed. |

## **What is a "Cloud" Database?**

In previous years, when a company would want a database, they had to buy a physical server, or a big computer, and keep it in a locked, air conditioned room in their office. These days, most databases live in **The Cloud**.

When we say a database lives in the cloud, we mean it is stored on high powered servers owned by big providers like **Amazon (AWS)**, **Microsoft (Azure)**, or **Google Cloud**. Rather than buying the hardware yourself, you rent the space and the processing power over the internet.

This is the standard in 2026 for a few reasons:

- **Scalability:** If your app goes viral overnight, a cloud database can expand its capacity in seconds.
- **Safety:** Your data is automatically backed up across multiple locations. If one server has an outage, your data is still online.
- **Cost:** You only pay for what you use, rather than spending heaps on a physical server that might sit half empty.

## **To End**

To summarise, databases are the engines that keep the online world organised. They take raw, scattered data and transform it into structured, searchable information through a combination of hardware (the storage), software (the **DBMS**), and logic (the **Schema**). Whether a system uses a rigid **Relational** structure for accuracy or a flexible **NoSQL** approach for scale, the goal stays the same: to ensure that data is stored safely, retrieved instantly, and managed efficiently. In today's age where storage is defined by the Cloud, these systems are no longer just electric filing cabinets, they are high speed hubs that allow every app, website, and business to function.