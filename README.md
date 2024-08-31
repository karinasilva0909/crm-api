# CRM-API

## Description

This is the backend of the CRM project, developed in Node.js with TypeScript. The purpose of this project is to provide RESTful APIs and real-time functionalities for a CRM system aimed at an adult audience.

In this first stage, we implemented a synchronous chat that receives messages via RESTful API and transmits them in real-time to the frontend using Socket.IO.

## Requirements

- Node.js (version 14 or higher)
- Yarn (package manager)
- SQLite (database)

## Installation

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/usuario/crm-api.git
cd crm-api

### 2. Install Dependencies

yarn install

### 3. Database Configuration

This project uses SQLite as the database. The database will be generated automatically when the server is started for the first time.

### 4. Run the Project

yarn start

