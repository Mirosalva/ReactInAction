

## React 事件处理
### 向事件处理程序传递参数
- 下面两种方式是等价的，分别通过 arrow functions 和 Function.prototype.bind 来为事件处理函数传递参数。
其中合成事件 e 在第一行是显示传递，第二种方式则是隐式传递事件；
> <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
> <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>

### 受控组件






