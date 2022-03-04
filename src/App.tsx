import { useState } from 'react'
import './App.scss'
import { Items, ItemsProps } from './components/Items'
function App() {
  const [items, setItems] = useState<ItemsProps[]>([
    {
      where: '04 mar 2022 às 16:46',
      ip: '127.0.0.1',
      local: 'Mage | RJ | BR'
    },
    {
      where: '04 mar 2022 às 16:46',
      ip: '127.0.0.1',
      local: 'Mage | RJ | BR'
    },
    {
      where: '04 mar 2022 às 16:46',
      ip: '127.0.0.1',
      local: 'Mage | RJ | BR'
    },
    {
      where: '04 mar 2022 às 16:46',
      ip: '127.0.0.1',
      local: 'Mage | RJ | BR'
    },
  ])
  return (
    <div className="App">
      <div className="card">
        <h3>Histórico de login</h3>
        <table>
          <thead>
            <tr>
              <th>Quando</th>
              <th>IP</th>
              <th>Local</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => <Items
              where={item.where}
              ip={item.ip}
              local={item.local}
            />)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
