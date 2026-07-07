import React from 'react'

const StudentTable = () => {
    // const userName1 = "John Doe";
    // const userName2 = "Jane Smith";

    const students = [
        { id: 1, name: "John Doe", age: 20, grade: "A" },
        { id: 2, name: "Jane Smith", age: 22, grade: "B" },
        { id: 3, name: "Michael Johnson", age: 19, grade: "A" },
        { id: 4, name: "Emily Davis", age: 21, grade: "C" },
    ];
    return (
        <div>
            <h1>bummy data </h1>

            <table className="min-w-full bg-white border border-gray-300 border-2">
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Grade
                        </th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            1
                        </th>
                        <th>
                            John Doe
                        </th>
                        <th>
                            21
                        </th>
                        <th>
                            A
                        </th>
                    </tr>
                    <tr>
                        <th>
                            1
                        </th>
                        <th>
                            John Doe
                        </th>
                        <th>
                            21
                        </th>
                        <th>
                            A
                        </th>
                    </tr>
                </tbody>
            </table>

            <h1>
                Table using Map Function
            </h1>
            <table className="min-w-full bg-white border border-gray-300 border-2">
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Grade
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(({ id, name, age, grade }) => (
                            <tr key={id}>
                                <th>
                                    {id}
                                </th>
                                <th>
                                    {name}
                                </th>
                                <th>
                                    {age}
                                </th>
                                <th>
                                    {grade}
                                </th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default StudentTable