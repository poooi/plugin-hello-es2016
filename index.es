const { _, $, $$, React, FontAwesome } = window

const displayName = (
  <span>
    <FontAwesome name="gift" /> Hello World
  </span>
)

class HelloWorldPlugin extends React.Component {
  render() {
    return (
      <div>Hello World</div>
    )
  }
}

const HelloWorld = {
  name: 'hello-world',
  priority: 100,
  displayName,
  description: 'Hello World ES2016',
  author: 'Magica',
  link: 'https://github.com/magicae',
  version: '0.0.1',
  reactClass: HelloWorldPlugin
}

export default HelloWorld

