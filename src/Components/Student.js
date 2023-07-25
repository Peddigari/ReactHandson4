import React,{useState}from 'react'

function Student() {
    const [Data]=useState([
        {
            Name:"john",
            Age:26,
            Course:"MERN",
            Batch:"October",
            Change:"Edit"
        },
        {
            Name:"Doe",
            Age:25,
            Course:"MERN",
            Batch:"November",
            Change:"Edit"
        },
        {
            Name:"Biden",
            Age:26,
            Course:"MERN",
            Batch:"September",
            Change:"Edit"
        },
        {
            Name:"Barar",
            Age:22,
            Course:"MERN",
            Batch:"September",
            Change:"Edit"
        },{
            Name:"Christ",
            Age:23,
            Course:"MERN",
            Batch:"October",
            Change:"Edit"
        },
        {
            Name:"Elent",
            Age:24,
            Course:"MERN",
            Batch:"November",
            Change:"Edit"
        },
        {
            Name:"Harshita Sharma",
            Age:24,
            Course:"MERN",
            Batch:"October",
            Change:"Edit"
        }

    ])
    return (
        <div>
            <div className="innerHeader">
            <div className="studheader">Students Details</div>
            <button className="addStudent">Add new student</button>
            </div>
            <div className="tableContainer">
            <table cellPadding="15px" cellSpacing="50px">
               <thead> <tr>
                    <td>Name</td>
                    <td style={{textAlign:"right"}}>Age</td>
                    <td style={{textAlign:"right"}}>Course</td>
                    <td style={{textAlign:"right"}}>Batch</td>
                    <td style={{textAlign:"right"}}>Change</td>
                </tr></thead>
                <tbody>
                {Data.map((item,index)=>{
                    return(
                        <tr key={index} style={{borderBottom:"1px solid #ccc"}}>
                            <td>{item.Name}</td>
                            <td style={{textAlign:"right"}}>{item.Age}</td>
                            <td style={{textAlign:"right"}}>{item.Course}</td>
                            <td style={{textAlign:"right"}}>{item.Batch}</td>
                            <td style={{textAlign:"right"}}><a href='/Student' className="editText">{item.Change}</a></td>
                        </tr>
                    )

                })}
            </tbody>
            </table>
            </div>

        </div>
    )
}

export default Student;