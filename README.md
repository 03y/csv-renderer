# csv-renderer
This project can render a CSV file into a nice html table. Sample CSV files are provided in this repo.

![screenshot](screenshot.png?raw=true "Screenshot")

## Usage
Project can be downloaded as a zip and opened manually, or you can run one of these scripts on bash/powershell.
### Unix-like (Linux/MacOS/BSD)
```
git clone https://github.com/03y/csv-renderer.git
xdg-open csv-renderer
```
### Windows
```
git clone https://github.com/03y/csv-renderer.git
Start-Process "csv-renderer/index.html"
```

## Testing
There are cypress test runs included, which ensure that the project is working. To run these follow the instructions below. You will need to have nodejs and npm installed.
```
npm install cypress
npm install cypress-file-upload
npx cypress run -r spec # for terminal
npx cypress open # for gui
```
