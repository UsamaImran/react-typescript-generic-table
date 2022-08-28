import Table from './components/table/Table'

const testColumns = ['Name', 'Age', 'City', 'Address']
const testRows = [
    { name: 'usama', age: '24', city: 'grw', address: 'grw' },
    { name: 'usama', age: '24', city: 'grw', address: 'grw' },
    { name: 'usama', age: '24', city: 'grw', address: 'grw' },
    { name: 'usama', age: '24', city: 'grw', address: 'grw' },
    { name: 'usama', age: '24', city: 'grw', address: 'grw' },
]
function App() {
    return (
        <div className="bg-red-100 h-screen">
            <Table
                className="w-full text-center"
                columns={testColumns}
                rows={testRows}
                renderColumns={(item) => <p> {item}</p>}
                renderRow={(item) => <p>{item}</p>}
            />
        </div>
    )
}

export default App
