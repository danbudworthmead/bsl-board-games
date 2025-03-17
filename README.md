# BSL Board Game Sign Library

This project provides an interactive **British Sign Language (BSL) dictionary** for common board game terms, with a focus on *Zombicide: Black Plague*.

## Live Demo

You can access the live version of the project [here](https://bsl-board-games.web.app/).

## Features

- Search for board game terms and see their corresponding BSL signs.
- Supports subwords (e.g., "Walker" links to "Zombie" and "Walk").
- Videos are embedded directly for easy viewing.
- Fully responsive and mobile-friendly.
- Dark mode for better accessibility.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Firebase CLI if deploying to Firebase.

### Installation

1. Clone the repository:

   `git clone https://github.com/danbudworthmead/bsl-board-games.git`

2. Navigate into the project folder:

   `cd bsl-board-game-signs`

3. Install dependencies:

   `npm install`

4. Start the development server:

   `npm start`

   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Deployment

This project is deployed on Firebase Hosting. To deploy:

1. Build the app:

   `npm run build`

2. Deploy to Firebase:

   `firebase deploy`

Ensure you have Firebase CLI installed and configured.

## Contributing

We welcome contributions! If you'd like to add more signs or improve the project:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-new-sign`
3. Commit your changes: `git commit -m "Added new sign"`
4. Push the branch: `git push origin feature-new-sign`
5. Open a Pull Request.

All contributions are reviewed before merging.

## License

This project is open-source under the MIT License.
