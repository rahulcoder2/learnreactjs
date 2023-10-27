const customReactRender = (ReactElement, rootReact) => {
  // version 1

  /*
    const domElement = document.createElement(ReactElement.type)
    domElement.innerHTML = ReactElement.children
    domElement.setAttribute('href', ReactElement.props.href)
    domElement.setAttribute('target', ReactElement.props.target)
    rootReact.appendChild(domElement)

    */

  // version 2

  const domElement = document.createElement(ReactElement.type);
  domElement.innerHTML = ReactElement.children;

  Object.keys(ReactElement.props).forEach((prop) => {
    domElement.setAttribute(prop, ReactElement.props[prop]);
  });

  rootReact.appendChild(domElement)
};

const customReactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_black",
  },
  children: "click me to vist google",
};

const rootReact = document.getElementById("root");

customReactRender(customReactElement, rootReact);
