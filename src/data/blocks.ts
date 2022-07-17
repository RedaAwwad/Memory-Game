const { v4: uuid } = require('uuid');

console.log(uuid);

export default [
  {
    id: uuid(),
    containerClasses: "",
    elements: [
      {
        name: "img",
        src: "",
        class: ""
      }
    ]
  }
]