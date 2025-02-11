# mediapay

## Setup

### Prerequisites

Before you begin, ensure you have the following installed:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/) (optional, for local development without Docker)
- [npm](https://www.npmjs.com/get-npm) or [Yarn](https://yarnpkg.com/getting-started/install)

### Installation

### 1. **Clone the repository**:

```bash
    git clone https://github.com/amishK342/mediapay.git
    cd mediapay
```

### 2. **Build and Run with Docker**

```bash
    docker compose up --build
```

### 3. **Access the Application**

- **Frontend (React)**: Available at http://localhost:5173
- **Backend (Node.js/Express)**: Available at http://localhost:5000.

## Storybook

### 1. **Navigate to the frontend directory**:

```bash
    cd frontend
```

### 2. **Run Storybook**

```bash
   npm run storybook
```

### 3. **Access the Storybook**

Open http://localhost:6006 in your browser.
