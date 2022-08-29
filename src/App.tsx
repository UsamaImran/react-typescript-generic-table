import Table from './components/table/Table'

const testColumns = ['Name', 'Age', 'City', 'Address']
const testRows = [
    { name: 'usama', age: '24', city: 'grw', address: 'grw' },
    { name: 'usama1', age: '25', city: 'grw', address: 'grw' },
    { name: 'usama2', age: '26', city: 'grw', address: 'grw' },
    { name: 'usama3', age: '27', city: 'grw', address: 'grw' },
    { name: 'usama4', age: '28', city: 'grw', address: 'grw' },
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
