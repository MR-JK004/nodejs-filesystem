# Node.js Filesystem API

## Overview

This project provides a simple API to interact with the filesystem. It allows you to create text files with the current timestamp as their content and retrieve all text files from a specific folder.

## Table of Contents

- [Node.js Filesystem API]
  - [Overview]
  - [Table of Contents]
  - [Features]
  - [Requirements]
  - [Installation]
  - [Usage]
    - [API Endpoints]
    - [Create a Text File]
    - [Retrieve All Text Files]
  - [Deployment]
  - [Testing]
  - [Contributing]
  - [License]

## Features

- **Create a Text File:** Create a text file with the current timestamp as its content.
- **Retrieve All Text Files:** Retrieve all text files from a specific folder.

## Requirements

- Node.js (v20.15.1 or later)
- npm (v6.14.4 or later)
- Express.js

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/username/nodejs-filesystem.git
   cd nodejs-filesystem
   ```

2. Install the dependencies:

   ```
   npm install
   ```

## Usage

### API Endpoints

1. **Create a Text File**
   - **URL:** `/create-file`
   - **Method:** POST
   - **Description:** Creates a text file with the current timestamp as its content.

2. **Retrieve All Text Files**
   - **URL:** `/files`
   - **Method:** GET
   - **Description:** Retrieves all text files from the specified folder.

### Create a Text File

Send a POST request to the `/create-file` endpoint to create a text file with the current timestamp as its content.

#### Example (using `curl`):

```
curl -X POST https://your-render-app-name.onrender.com/create-file
```

### Retrieve All Text Files

Send a GET request to the `/files` endpoint to retrieve all text files from the specified folder.

#### Example (using `curl`):

```
curl https://your-render-app-name.onrender.com/files
```

## Deployment

To deploy your application on Render:

1. Commit your changes to your GitHub repository.
2. Log in to [Render](https://render.com/).
3. Create a new web service and connect your GitHub repository.
4. Ensure your `package.json` file specifies the correct entry point (`index.js`).
5. Trigger a deployment.

### Example `package.json`

```
{
  "name": "nodejs-filesystem",
  "version": "1.0.0",
  "description": "A simple filesystem API",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.17.1",
    "fs": "0.0.1-security",
    "path": "^0.12.7"
  }
}
```

## Testing

You can test the API endpoints using Postman or any other API testing tool.

### Postman

1. **Create a Text File:**
   - **Method:** POST
   - **URL:** `https://your-render-app-name.onrender.com/create-file`

2. **Retrieve All Text Files:**
   - **Method:** GET
   - **URL:** `https://your-render-app-name.onrender.com/files`

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
