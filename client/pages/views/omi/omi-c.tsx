import { define, WeElement, render } from 'omi'

define('my-counter', class extends WeElement {
  data = {
    count: 1,
  }

  static css = `
    span{
        color: red;
    }`

  sub = () => {
    this.data.count--
    // this.update()
  }

  add = () => {
    this.data.count++
    // this.update()
  }

  render() {
    return (
      <div>
        <button onClick={this.sub}>-</button>
        <span>{this.data.count}</span>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
})

render(<my-counter />, 'body')

const A = () => {
  return <my-counter />
}

export default A
