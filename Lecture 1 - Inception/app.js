// Manipulate the HTML DOM using plain Javscript (without React)
// const heading1 = document.createElement('h1');
// heading1.innerText = "Namaste javascript";

// const root = document.getElementById('root');
// root.append(heading1);

// Manipulate the HTML DOM using React LIBRARY
//We are able to access "React" and "ReactDom" using the included CDN libraries because they have set them as global variables
const heading1 = React.createElement('h1', {
  id: 'title',
  className: 'title',
  style: {
    color: 'yellow'
  }
}, "Namaste");

const heading2 = React.createElement('h1', {
  id: 'title2',
  className: 'title',
  style: {
    color: 'pink'
  }
}, "React");

const container = React.createElement('div', {
  id: 'container',
  className: 'container'
}, [heading1, heading2]);

//Create React root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);