# UberMusic

UberMusic is a web application designed to enhance the music experience for Uber, taxi, and ride-sharing passengers. Using Spotify APIs, UberMusic allows passengers to seamlessly interact with the car’s playlist, giving them the ability to view, select, and control the music being played directly from their own devices.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Features

- **Spotify Integration**: Access the car’s current playlist and control playback using Spotify APIs.
- **User-Friendly Interface**: A responsive and intuitive design for passengers to easily navigate and select songs.
- **Real-Time Updates**: Synchronizes the playlist in real-time between the passenger’s device and the car’s audio system.
- **Secure Access**: Ensures only authorized passengers can control the music during the ride.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/ubermusic.git
   ```

2. Navigate to the project directory:
   ```bash
   cd ubermusic
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up Spotify API keys:
   - Create a `.env` file in the root directory.
   - Add your Spotify Client ID and Secret:
     ```
     SPOTIFY_CLIENT_ID=your-client-id
     SPOTIFY_CLIENT_SECRET=your-client-secret
     ```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Contributing

Contributions are welcome! If you’d like to contribute to this project:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- [Spotify](https://developer.spotify.com/) for their APIs.
- [Angular](https://angular.io/) for making front-end development efficient and enjoyable.
- Inspiration from ride-sharing services and their focus on enhancing user experience.

